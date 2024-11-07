import Image from "next/image";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const CardProfil = () => {
  return (
    <>
      <div className="container flex flex-col  w-[100%] h-screen flex-1 ">
        <div className="flex-col flex justify-between align-center md:flex-row gap-5 my-auto mx-auto" >
          <div className="flex flex-col w-3/4 gap-y-4">
            <div>
              <p>Hi, I am</p>
              <p>Kiagus Alfitrah Muhammad Akbar.</p>
            </div>
            <div>
              <h1 className="text-secondary text-4xl font-bold weight-bold ">
                Full Stack Developer
              </h1>
            </div>
            <div className="flex gap-5 flex-row text-lg my-6">
              <a href="">
                <CiLinkedin size="1.5em" />
              </a>
              <a href="">
                <FaInstagram size="1.5em" />
              </a>
              <a href="">
                <FaGithub size="1.5em" />
              </a>
            </div>
            <div className="flex gap-5 mb-20">
              <button
                className=" bg-secondary text-white font-bold px-6 py-2 rounded-lg hover:opacity-80 active:opacity-50"
                type="button"
              >
                hire me
              </button>
              <button className=" text-white font-bold px-6 py-2 rounded-lg hover:opacity-80 active:opacity-50 border-2 border-solid">
                Download CV
              </button>
            </div>
            <div className="flex w-[70%]">
              <div className="border-r-2 border-solid ps-2 w-1/3 text-md">
                <p className="text-secondary ">1+</p>
                <p className="font-bold ">Experiences</p>
              </div>
              <div className="border-r-2 border-solid ps-2 w-1/3 text-md">
                <p className="text-secondary">4+</p>
                <p className="font-bold ">Project Done</p>
              </div>
              <div className="ps-2 w-1/3 text-md">
                <p className="text-secondary">4+</p>
                <p className="font-bold ">Happy Client</p>
              </div>
            </div>
          </div>
          <div className="flex md:w-1/4 gap-4 align-center flex-col justify-center">
          <div className="w-[100%]">
            <Image
              src="/hutao.jpeg"
              alt="Next.js Logo"
              width={400}
              height={400}
              style={{ borderRadius: "20%" }}
              
            />
            <p className="text-center font-bold text-lg">
              Kiagus Alfitrah Muhammad Akbar
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
