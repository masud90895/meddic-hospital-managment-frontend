"use client";
import { Layout, message } from "antd";
import DashboardSiteBar from "@/components/dashboard/DashboardSiteBar/DashboardSiteBar";
import DashboardContents from "@/components/dashboard/DashboardContent/DashboardContent";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  getUserInfo,
  isLoggedIn,
  removeUserInfo,
} from "@/services/auth.service";
import { tokenKey } from "@/helpers/token/tokenKey";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  const router = useRouter();

  const user = getUserInfo() as any;

  const handleLogOut = () => {
    removeUserInfo(tokenKey);
    message.success("Logout Successfully");
    router.push("/login");
  };

  const userLoggedIn = isLoggedIn();

  if (!userLoggedIn) {
    router.push("/login");
    return message.error("You are not Authorize user.please login");
  }

  return (
    <Layout hasSider>
      <DashboardSiteBar collapsed={collapsed} setCollapsed={setCollapsed} role={user?.role} />
      <DashboardContents
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        user={user}
        handleLogOut={handleLogOut}
      >
        {children}
      </DashboardContents>
    </Layout>
  );
}
