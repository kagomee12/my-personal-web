"use client";

import { navItems } from "@/types/nav-items";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaGithub, FaInstagram, FaPhone } from "react-icons/fa";

export const Footbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-primary h-max flex flex-col w-full justify-center items-center py-6 text-gray-400">
      <div>
        <ul className="flex gap-x-6 text-sm ">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`py-2 ${
                  pathname === item.path
                    ? "text-secondary font-bold underline underline-offset-2"
                    : "text-white hover:text-gray-300 hover:underline underline-offset-2"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="flex gap-5 flex-row text-lg my-6 ">
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
      </div>
      <div className="flex gap-5 items-center mb-10">
        <div className="flex gap-1 items-center">
          <CiMail size="1.8em" />
          <span>
            <a href="kalfitrah@gmail.com">kalfitrah@gmail.com</a>
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <FaPhone size="1.5em" />
          <span>0882-8775-6996</span>
        </div>
      </div>
      <div className=" border-t border-white pt-2">
        <span className="text-gray-500 text-[12px]">
          Designed by Kiagus Alfitrah Muhammad Akbar Fullstack Developer
        </span>
      </div>
    </div>
  );
};
