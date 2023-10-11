import Image from "next/image";
import React from "react";
import Logo from "/public//assists/logo_Asset-1-1.png";
import Link from "next/link";
import { INavbarType } from "@/types/NavbarType";
import NavbarMenu from "./NavbarMenu";
import { PhoneTwoTone } from "@ant-design/icons";
import { Button } from "antd";

const Navbar = () => {
  const NavbarData: INavbarType[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
      isSubMenu: true,
      subMenu: [
        {
          name: "Services",
          link: "/services",
        },
        {
          name: "Services Details",
          link: "/services-details",
        },
      ],
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="py-[16px] border-b-2 borderColor common flex gap-3 items-center justify-between">
      {/* logo */}
      <Link
        style={{
          padding: "12px 0",
        }}
        href={"/"}
        className="w-full"
      >
        <Image src={Logo} alt="" width={130} height={284} />
      </Link>
      {/* NavData */}
      <div className="flex gap-5 w-full justify-between px-[50px]">
        {NavbarData?.map((nav: INavbarType, i: number) => (
          <NavbarMenu key={i} navbarData={nav} />
        ))}
      </div>

      {/* appoinment */}

      <div className="flex gap-5 items-center w-full">
        {/* emergengy call */}
        <div className="flex items-center gap-2">
          <PhoneTwoTone className="text-primary" />
          <p>Emergency Call</p>
        </div>

        {/* apointment */}
        <button className="bg-primary text-white  px-[20px] py-[10px] rounded-xl font-inter shadow-2xl shadow-bgColor scale-100 hover:scale-110 ease-in duration-100">
          Apointment{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
