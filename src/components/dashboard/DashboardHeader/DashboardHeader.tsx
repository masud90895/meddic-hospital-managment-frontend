/* eslint-disable @next/next/no-img-element */
"use client";
import React, { Dispatch, SetStateAction } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme, Dropdown, message } from "antd";
import Link from "next/link";
import { noImage } from "@/helpers/noImage/noImage";

const { Header } = Layout;

type IHeader = {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
  user: any;
  handleLogOut: any;
};

const DashboardHeader = ({
  collapsed,
  setCollapsed,
  user,
  handleLogOut,
}: IHeader) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      key: "1",
      label: <Link href={"/"}>Home Page</Link>,
    },
    {
      key: "2",
      label: <button onClick={handleLogOut}>Logout</button>,
    },
  ];

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <div className="mx-auto ">
        <div className="flex items-center sm:justify-between sm:gap-4">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />

          <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
            <div className="flex gap-4">
              <a
                href="#"
                className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
              >
                <span className="sr-only">Notifications</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </a>
            </div>

            <Dropdown menu={{ items }} placement="topLeft" arrow>
              <button
                type="button"
                className="group flex shrink-0 items-center rounded-lg transition mx-[10px]"
              >
                <span className="sr-only">Menu</span>
                <img
                  alt="Man"
                  src={noImage}
                  className="h-10 w-10 rounded-full object-cover"
                />

                <p className="ms-2 hidden text-left text-xs sm:block">
                  <span className="text-gray-500">{user?.email} </span>
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Dropdown>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default DashboardHeader;
