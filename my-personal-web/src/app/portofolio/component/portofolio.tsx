import React from "react";
import { CardProject } from "@/components/features/card-project";
import { projectItems, TProjectItems } from "../../../types/project-items";

export const Portofolio = () => {
  return (
    <div className="flex flex-col w-full items-center gap-y-5 py-5">
      <div className="text-center w-1/5">
        <h1 className="text-3xl font-bold text-secondary">My Project</h1>
      </div>
      <div className="w-full grid grid-cols-3 m-auto px-3 justify-items-center gap-y-4">
        {projectItems.map((item: TProjectItems) => (
          <CardProject TProjectItems={item} />
        ))}
      </div>
    </div>
  );
};
