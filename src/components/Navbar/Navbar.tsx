"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "/public//assists/logo_Asset-1-1.png";
import Link from "next/link";
import { INavbarType } from "@/types/NavbarType";
import NavbarMenu from "./NavbarMenu";
import { PhoneTwoTone } from "@ant-design/icons";
import { AppstoreOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
    <div className="py-[16px] border-b-2 borderColor common flex gap-3 items-center justify-between w-full">
      {/* logo */}
      <Link href={"/"} className="md:w-full">
        <Image
          src={Logo}
          alt=""
          width={130}
          height={284}
          className="md:w-[130px] md:h-[54px] w-[100px] h-[51px]"
        />
      </Link>
      {/* NavData */}
      <div className="md:flex hidden gap-5 w-full justify-between px-[50px]">
        {NavbarData?.map((nav: INavbarType, i: number) => (
          <NavbarMenu key={i} navbarData={nav} />
        ))}
      </div>

      {/* appoinment */}

      <div className="flex gap-5 items-center w-full justify-end  ">
        {/* emergengy call */}
        <div className="flex items-center gap-2 cursor-pointer">
          <PhoneTwoTone className="text-primary" />
          <p>Emergency Call</p>
        </div>

        {/* apointment */}
        <button
          style={{
            boxShadow: " 3px 3px 3px 0px rgba(109,40,217)",
          }}
          className=" hidden md:block appointmentButton"
        >
          Apointment{" "}
        </button>
        {/* button and drower */}
        <>
          <button
            onClick={showDrawer}
            className="block md:hidden text-[32px] border rounded-lg "
          >
            <AppstoreOutlined />
          </button>

          <Drawer
            title="Menu"
            placement="right"
            onClose={onClose}
            open={open}
            className="text-[20px] text-center"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            {NavbarData?.map((nav: INavbarType, i: number) => (
              <p key={i} className="text-[20px] my-[20px]">
                {nav.name}
              </p>
            ))}
          </Drawer>
        </>
      </div>
    </div>
  );
};

export default Navbar;
