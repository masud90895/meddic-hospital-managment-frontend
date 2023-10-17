"use client";
import { Layout } from "antd";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import { Dispatch, SetStateAction } from "react";

const { Content } = Layout;

type IContent = {
  children: React.ReactNode;
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
  user: any;
  handleLogOut: any;
};

const DashboardContents = ({
  children,
  collapsed,
  setCollapsed,
  user,
  handleLogOut,
}: IContent) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <DashboardHeader
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        user={user}
        handleLogOut={handleLogOut}
      />

      <div
        style={{
          padding: "10px",
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default DashboardContents;
