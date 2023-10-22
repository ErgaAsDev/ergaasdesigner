import Image from "next/image";
import cultigoLogo from "../images/Logo.png";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="flex md:gap-7 md:ml-[7vw] items-center justify-between md:justify-start">
        <Image src={cultigoLogo} className="ml-5 mt-5 self-center" alt="logo" />
        <ul className="hidden md:flex md:text-lg md:gap-10 md:pt-3 ml-8">
          <li className="mt-2 ml-5">
            <a href="" className="hover:text-[#5ED600]">
              Programs
            </a>
          </li>
          <li className="mt-2 ml-5">
            <a href="" className="hover:text-[#5ED600]">
              Events
            </a>
          </li>
          <li className="mt-2 ml-5">
            <a href="" className="hover:text-[#5ED600]">
              Journal
            </a>
          </li>
        </ul>
        <div className="hidden md:inline-block text-lg mt-2 md:ml-[20vw] lg:ml-[42vw] pt-3">
          <a href="#">
            <span>EN</span>
          </a>
          <span> | </span>
          <a href="#">
            <span>ID</span>
          </a>
        </div>
        <div className="md:hidden mr-5 pt-4" onClick={() => setOpen(!isOpen)}>
          <Hamburger rounded size={30} color="#5ED600" />
        </div>
      </div>
      {isOpen && (
        <ul className="flex flex-col items-center md:hidden">
          <li className="mt-3 ml-5">
            <a href="" className="hover:text-[#5ED600]">
              Programs
            </a>
          </li>
          <li className="mt-2 ml-5">
            <a href="" className="hover:text-[#5ED600]">
              Events
            </a>
          </li>
          <li className="mt-2 ml-5">
            <a href="" className="hover:text-[#5ED600]">
              Journal
            </a>
          </li>
        </ul>
      )}
      <hr className="mt-3 md:hidden" />
    </>
  );
};

export default Navbar;
