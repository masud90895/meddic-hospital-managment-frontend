"use client";
import { Layout } from "antd";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

const { Content } = Layout;

const DashboardContents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <DashboardHeader />

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
