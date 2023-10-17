"use client";
import React, { useState } from "react";

import logoWithName from "../../../../public/assists/logo_Asset-1-1.png";
import logo from "../../../../public/assists/logo.png";

import { Layout, Menu } from "antd";
import Image from "next/image";
import { sidebarItems } from "./SitebarItems";
import Link from "next/link";

const { Sider } = Layout;

interface ISiteBar {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  role: any;
}

const DashboardSiteBar = ({ collapsed, setCollapsed, role }: ISiteBar) => {
  // const role = USER_ROLE.SUPER_ADMIN;

  return (
    <Sider
      style={{
        background: "white",
        borderRight: "1px solid #c8cbf2",
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="demo-logo-vertical " />

      {/* add logo */}
      <div className="my-[23px] w-full flex items-center justify-center">
        {collapsed ? (
          <Link href={"/"}>
            <Image
              alt="Logo"
              src={logo}
              width={50}
              height={50}
              className="w-[30px]"
            />
          </Link>
        ) : (
          <Link href={"/"}>
            <Image alt="Logo" src={logoWithName} width={100} height={100} />
          </Link>
        )}
      </div>

      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default DashboardSiteBar;
