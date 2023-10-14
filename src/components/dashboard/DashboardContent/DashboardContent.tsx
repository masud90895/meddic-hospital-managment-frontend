"use client";
import { Layout } from "antd";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import { Dispatch, SetStateAction } from "react";

const { Content } = Layout;

type IContent = {
  children: React.ReactNode;
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
};

const DashboardContents = ({ children, collapsed, setCollapsed }: IContent) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <DashboardHeader collapsed={collapsed} setCollapsed={setCollapsed} />

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
