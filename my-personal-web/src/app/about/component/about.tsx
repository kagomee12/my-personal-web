import React from "react";
import Image from "next/image";
import { BsDownload } from "react-icons/bs";
import { skillItems } from "@/types/skill-items";

export const About = () => {
  return (
    <div className="py-8 gap-y-8 flex flex-col w-[90%] m-auto">
      <div>
        <h1 className="text-3xl font-bold h-full text-center">About Me</h1>
        <h3 className="text-center text-gray-400 text-sm">
          Fullstack Developer{" "}
        </h3>
      </div>
      <div className="flex flex-row gap-x-7">
        <div className="w-1/3 justify-center items-center flex">
          <Image src="/hutao.jpeg" alt="profile" width={400} height={400} />
        </div>
        <div className="w-2/3 flex flex-col gap-y-6">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            dolore perferendis in, fugit neque ratione delectus accusantium
            tempora optio, eum at. Vero natus alias quos temporibus ratione illo
            expedita veniam! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Odit ex natus ipsum porro doloribus molestias quae, vitae
            placeat exercitationem earum ipsam dolore dolores quo omnis
            recusandae reiciendis quos, facere autem. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Dignissimos vitae sit voluptas
            aliquid, voluptatibus, culpa cumque fuga minima quos, facilis nisi
            recusandae nihil vel quam ex. Porro debitis quis aut. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Velit tenetur maxime
            suscipit, aliquid dolore expedita quaerat neque architecto quae eius
            beatae porro tempore quos, corrupti voluptas obcaecati totam error
            inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis voluptatum ipsam sint doloribus. Officia voluptate enim
            nobis, vero corporis voluptates similique accusantium ab
            exercitationem voluptatum totam voluptatibus officiis adipisci quod.
          </p>
          <button className="bg-secondary text-white font-bold px-6 py-2 rounded-lg hover:opacity-80 active:opacity-50 flex flex-row gap-x-2 items-center w-max">
            <BsDownload />
            Download CV
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 bg-gray-900 items-center rounded-lg justify-center py-5">
        {skillItems.map((item) => (
          <Image
            src={item.icon}
            alt={item.name}
            width={100}
            height={100}
            style={{ objectFit: "contain", margin: "auto" }}
            key={item.name}
          />
        ))}
      </div>
    </div>
  );
};
