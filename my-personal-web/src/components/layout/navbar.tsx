"use client"; // Karena menggunakan hooks
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navItems } from "@/types/nav-items";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-primary w-full h-20 flex flex-row justify-between px-5 items-center ">
      <ul className="flex gap-x-10 justify-center items-center h-full">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`py-2 ${
                pathname === item.path
                  ? "text-secondary font-bold"
                  : "text-white hover:text-gray-300 "
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className={`${
          pathname === "/contact"
            ? " border-x-white border-solid font-bold"
            : ""
        } bg-secondary px-6 py-2 rounded-lg active:opacity-50 hover:opacity-80 `}
      >
        <Link
          href="/contact"
          className={`py-2 ${
            pathname === "/contact"
              ? "text-white"
              : "text-white hover:text-gray-300 "
          }`}
        >
          Contact me
        </Link>
      </button>
    </nav>
  );
};
