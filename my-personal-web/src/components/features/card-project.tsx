import React from "react";
import Image from "next/image";
import { TProjectItems } from "@/types/project-items";

type TCardProjectProps = {
  TProjectItems: TProjectItems;
};

export const CardProject: React.FC<TCardProjectProps> = ({ TProjectItems }) => {
  return (
    <div className="items-center w-[80%] p-3 bg-primary rounded-md gap-y-4 flex flex-col">
      <h1 className="text-2xl font-bold text-center">{TProjectItems.name}</h1>
      <div className="flex flex-col gap-y-5 min-w-60">
        <div className="w-full h-48 flex justify-center bg-white rounded-md">
          <div className="flex justify-center items-center w-[50%] m-auto b-2 bg-secondary bg-white">
            <Image
              src={`${TProjectItems.image}`}
              alt="profile"
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="w-full h-1/2">
          <p>{TProjectItems.description}</p>
        </div>
      </div>
    </div>
  );
};
