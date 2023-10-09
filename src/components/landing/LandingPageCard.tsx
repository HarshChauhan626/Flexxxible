import React from "react";

const LandingPageCard = () => {
  return (
    <div className="bg-[#f8f7f4] col-span-1 p-4 shadow rounded-xl">
      <div className="mx-4 my-10 flex flex-row justify-start">
        <div className="rounded-full bg-yellow-300 p-3 text-center">
          Looking for work?
        </div>
      </div>
      <div className="text-5xl mx-4">Find your next opportunity</div>
      <div className="mx-4 mt-6">
        Browse new design jobs or boost your portfolio to get discovered.
      </div>
      <div className="flex flex-col my-4 mx-4 gap-2 lg:flex-row lg:gap-6">
        <div className="bg-black px-5 py-4 my-2 flex items-center rounded-full justify-center text-white">
          Find work
        </div>
        <div className="bg-white px-5 py-4 my-2 flex items-center rounded-full justify-center">
          Get discovered?
        </div>
      </div>
    </div>
  );
};

export default LandingPageCard;
