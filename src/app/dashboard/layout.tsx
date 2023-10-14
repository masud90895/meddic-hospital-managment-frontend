"use client";
import type { Metadata } from "next";
import { Layout } from "antd";
import DashboardSiteBar from "@/components/dashboard/DashboardSiteBar/DashboardSiteBar";
import DashboardContents from "@/components/dashboard/DashboardContent/DashboardContent";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout hasSider>
      <DashboardSiteBar collapsed={collapsed} setCollapsed={setCollapsed} />
      <DashboardContents collapsed={collapsed} setCollapsed={setCollapsed}>
        {children}
      </DashboardContents>
    </Layout>
  );
}
