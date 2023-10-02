import { GraphQLClient } from "graphql-request";

import {
  createProjectMutation,
  createUserMutation,
  deleteProjectMutation,
  updateProjectMutation,
  getProjectByIdQuery,
  getProjectsOfUserQuery,
  getUserQuery,
  getAllProjectQuery,
  getProjectsByCategory,
} from "@/graphql";
import { ProjectForm } from "@/types/models";
import { isEitherNullOrUndefined } from "@/utils/utilFunctions";

const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || ""
  : "http://127.0.0.1:4000/graphql";
const apiKey = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || ""
  : "letmein";
const serverUrl = isProduction
  ? process.env.NEXT_PUBLIC_SERVER_URL
  : "http://localhost:3000";

const client = new GraphQLClient(apiUrl);

export const fetchToken = async () => {
  try {
    const response = await fetch(`${serverUrl}/api/auth/token`);
    return response.json();
  } catch (err) {
    throw err;
  }
};

export const uploadImage = async (imagePath: string) => {
  try {
    const response = await fetch(`${serverUrl}/api/upload`, {
      method: "POST",
      body: JSON.stringify({
        path: imagePath,
      }),
    });
    return response.json();
  } catch (err) {
    throw err;
  }
};

const makeGraphQLRequest = async (query: string, variables = {}) => {
  try {
    console.log("Request going in graphql is ", query);
    const response = await client.request(query, variables);
    console.log("Response coming form make graphql request is ", response);
    return response;
  } catch (err) {
    console.error("Error coming is ", err);
  }
};

export const fetchAllProjects = (
  category?: string | null,
  endcursor?: string | null
) => {
  try {
    client.setHeader("x-api-key", apiKey);

    return makeGraphQLRequest(
      isEitherNullOrUndefined(category)
        ? getAllProjectQuery
        : getProjectsByCategory,
      { category, endcursor }
    );
  } catch (e) {
    console.error("Error in fetch all projects is", e);
  }
};

export const createNewProject = async (
  form: ProjectForm,
  creatorId: string,
  token: string
) => {
  const imageUrl = await uploadImage(form.image);

  if (imageUrl.url) {
    client.setHeader("Authorization", `Bearer ${token}`);

    const variables = {
      input: {
        ...form,
        image: imageUrl.url,
        createdBy: {
          link: creatorId,
        },
      },
    };

    return makeGraphQLRequest(createProjectMutation, variables);
  }
};

export const updateProject = async (
  form: ProjectForm,
  projectId: string,
  token: string
) => {
  function isBase64DataURL(value: string) {
    const base64Regex = /^data:image\/[a-z]+;base64,/;
    return base64Regex.test(value);
  }

  try {

    let updatedForm = { ...form };

    const isUploadingNewImage = isBase64DataURL(form.image);

    if (isUploadingNewImage) {
      const imageUrl = await uploadImage(form.image);

      if (imageUrl.url) {
        updatedForm = { ...updatedForm, image: imageUrl.url };
      }
    }

    client.setHeader("Authorization", `Bearer ${token}`);

    const variables = {
      id: projectId,
      input: updatedForm,
    };

    return makeGraphQLRequest(updateProjectMutation, variables);
  } catch (e) {
    console.error("Error coming in updating project is",e);
  }
};

export const deleteProject = (id: string, token: string) => {
  client.setHeader("Authorization", `Bearer ${token}`);
  return makeGraphQLRequest(deleteProjectMutation, { id });
};

export const getProjectDetails = (id: string) => {
  client.setHeader("x-api-key", apiKey);
  return makeGraphQLRequest(getProjectByIdQuery, { id });
};

export const createUser = (name: string, email: string, avatarUrl: string) => {
  client.setHeader("x-api-key", apiKey);

  const variables = {
    input: {
      name: name,
      email: email,
      avatarUrl: avatarUrl,
    },
  };

  return makeGraphQLRequest(createUserMutation, variables);
};

export const getUserProjects = (id: string, last?: number) => {
  client.setHeader("x-api-key", apiKey);
  return makeGraphQLRequest(getProjectsOfUserQuery, { id, last });
};

export const getUser = (email: string) => {
  client.setHeader("x-api-key", apiKey);
  return makeGraphQLRequest(getUserQuery, { email });
};
