"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "/public//assists/logo_Asset-1-1.png";
import Link from "next/link";
import { INavbarType } from "@/types/NavbarType";
import NavbarMenu from "./NavbarMenu";
// import { PhoneTwoTone } from "@ant-design/icons";
import { AppstoreOutlined } from "@ant-design/icons";
import { Drawer, message } from "antd";
import {
  getUserInfo,
  isLoggedIn,
  removeUserInfo,
} from "@/services/auth.service";
import { tokenKey } from "@/helpers/token/tokenKey";
import { useRouter } from "next/navigation";
import AddToCard from "../AddToCard/AddToCard";
import { noImage } from "@/helpers/noImage/noImage";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const router = useRouter();

  const [userLogged, setUserLogged] = useState(false);

  const userLoggedIn = isLoggedIn();
  const user = getUserInfo() as any;

  useEffect(() => {
    if (userLoggedIn && user) {
      setUserLogged(true);
    } else {
      setUserLogged(false);
    }
  }, [userLoggedIn, user]);

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
        // {
        //   name: "Services Details",
        //   link: "/services-details",
        // },
      ],
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
  ];

  const handleLogOut = () => {
    removeUserInfo(tokenKey);
    setUserLogged(false);
    message.success("Logout Successfully");
    router.push("/login");
  };

  return (
    <div className="py-[16px] border-b-2 borderColor common flex gap-3 items-center justify-between w-full sticky top-0 bg-bgColor z-20">
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
        {/* <div className="hidden md:flex items-center gap-2 cursor-pointer ">
          <PhoneTwoTone className="text-primary" />
          <p>Emergency Call</p>
        </div> */}

        {/* apointment */}
        <Link
          href={"#appointment"}
          style={{
            boxShadow: " 3px 3px 3px 0px rgba(109,40,217)",
          }}
          className=" hidden md:block appointmentButton"
        >
          Appointment{" "}
        </Link>
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
            // style={{
            //   display: "flex",
            //   justifyContent: "space-between",
            //   flexDirection: "column",
            // }}
          >
            <div className="flex flex-col items-center ">
              {NavbarData?.map((nav: INavbarType, i: number) => (
                <Link
                  href={nav?.link}
                  key={i}
                  className="text-[20px] my-[10px] text-black"
                >
                  {nav.name}
                </Link>
              ))}
            </div>
          </Drawer>
        </>

        {/* user */}

        {userLogged ? (
          <div className="flex items-center justify-center ">
            <div className=" relative inline-block text-left dropdown">
              <span className="rounded-md shadow-sm">
                <button
                  className="inline-flex justify-center w-full  text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out  rounded-md hover:text-gray-500 "
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="true"
                  aria-controls="headlessui-menu-items-117"
                >
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src={noImage}
                    alt=""
                    width={100}
                    height={100}
                  />
                </button>
              </span>
              <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                <div
                  className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none z-50"
                  aria-labelledby="headlessui-menu-button-1"
                  id="headlessui-menu-items-117"
                  role="menu"
                >
                  {/* <div className="px-4 py-3">
                    <p className="text-sm leading-5">Signed in as</p>
                    <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                      {user?.email}
                    </p>
                  </div> */}
                  <div className="py-1">
                    <Link
                      href="/dashboard"
                      className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-300 hover:text-black rounded "
                      role="menuitem"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href={`/dashboard/profile`}
                      className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-300 hover:text-black rounded "
                      role="menuitem"
                    >
                      Profile Settings
                    </Link>

                    {/* user add t o card */}

                    <button
                      onClick={() => setIsCardOpen(true)}
                      className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-300 hover:text-black rounded "
                      role="menuitem"
                    >
                      My Cart
                    </button>
                  </div>
                  <div className="py-1">
                    <button
                      onClick={handleLogOut}
                      className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-red-500 hover:text-white rounded"
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Link href={"/login"}>
            <div className="relative inline-flex  group">
              <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <p
                title="Login"
                className="relative inline-flex items-center justify-center px-4 py-2 text-lg  text-white transition-all duration-200 bg-gray-700 font-pj rounded-xl "
                role="button"
              >
                Login
              </p>
            </div>
          </Link>
        )}

        {/* // test */}

        {/* // end */}

        {/* card */}

        {userLogged && <AddToCard setOpen={setIsCardOpen} open={isCardOpen} />}
      </div>
    </div>
  );
};

export default Navbar;
