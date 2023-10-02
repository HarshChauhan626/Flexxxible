import Modal from "@/components/common/Modal";
import ProjectForm from "@/components/project/ProjectForm";
import { ProjectInterface } from "@/types/models";
import { redirect } from "next/navigation";
import { getProjectDetails } from "../../../../lib/actions";
import { getCurrentUser } from "../../../../lib/session";


const EditProject = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getCurrentUser();

  if (!session?.user) redirect("/")

  const result = await getProjectDetails(id) as { project?: ProjectInterface };
  
  if (!result?.project) return (
    <p className="no-result-text">Failed to fetch project info</p>
  )

  return (
    <Modal>
      <h3 className="modal-head-text">Edit Project</h3>

      <ProjectForm type="edit" session={session} project={result?.project} />
    </Modal>
  );
};

export default EditProject;