import type { MenuProps } from "antd";
import {
  UsergroupAddOutlined,
  TableOutlined,
  AppstoreOutlined,
  UserOutlined,
  UsergroupDeleteOutlined,
  BookOutlined,
  PlusSquareOutlined,
  UserSwitchOutlined,
  UserAddOutlined,
  CustomerServiceOutlined,
  CloudServerOutlined,
  FolderAddOutlined,
  DiffOutlined,
  FileAddOutlined,
  FileSearchOutlined,
  SecurityScanOutlined,
  BoldOutlined,
  OrderedListOutlined,
  AlignLeftOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "@/constant/role";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <UsergroupAddOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/${role}`}>Account Profile</Link>,
          icon: <UserOutlined />,
          key: `/dashboard/${role}/profile`,
        },
        {
          label: (
            <Link href={`/dashboard/${role}/change-password`}>
              Change Password
            </Link>
          ),
          icon: <UsergroupDeleteOutlined />,
          key: `/dashboard/${role}/change-password`,
        },
      ],
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: (
        <Link href={`/dashboard/${role}/booking-list`}>My Booking List</Link>
      ),
      icon: <BookOutlined />,
      key: `/dashboard/${role}/booking-list`,
    },
    {
      label: <Link href={`/dashboard/${role}/reviews`}>My Reviews</Link>,
      icon: <PlusSquareOutlined />,
      key: `/dashboard/${role}/reviews`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "User management",
      key: "user-management",
      icon: <UserSwitchOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/add-user`}>Add user</Link>,
          key: `/dashboard/add-user`,
          icon: <UserAddOutlined />,
        },
        {
          label: <Link href={`/dashboard/user-list`}>User List</Link>,
          key: `dashboard/dashboard/user-list`,
          icon: <UsergroupAddOutlined />,
        },
      ],
    },
    {
      label: "service management",
      key: "service-management",
      icon: <CustomerServiceOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/add-service`}>Add Service</Link>,
          key: `/dashboard/add-service`,
          icon: <FolderAddOutlined />,
        },
        {
          label: <Link href={`/dashboard/service-list`}>Service List</Link>,
          key: `/dashboard/service-list`,
          icon: <CloudServerOutlined />,
        },
      ],
    },
    {
      label: "booking management",
      key: "booking-management",
      icon: <DiffOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/add-booking`}>Add Booking</Link>,
          key: `/dashboard/add-service`,
          icon: <FileAddOutlined />,
        },
        {
          label: <Link href={`/dashboard/booking-list`}>Booking List</Link>,
          key: `/dashboard/booking-list`,
          icon: <FileSearchOutlined />,
        },
      ],
    },
    {
      label: "Content Management",
      key: "content-management",
      icon: <SecurityScanOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/add-blog`}>Add Blog</Link>,
          key: `/dashboard/add-blog`,
          icon: <BoldOutlined />,
        },
        {
          label: <Link href={`/dashboard/blog-list`}>Blog List</Link>,
          key: `/dashboard/blog-list`,
          icon: <OrderedListOutlined />,
        },
        {
          label: <Link href={`/dashboard/add-faq`}>Add FAQ</Link>,
          key: `/dashboard/add-faq`,
          icon: <BookOutlined />,
        },
        {
          label: <Link href={`/dashboard/faq-list`}>FAQ List</Link>,
          key: `/dashboard/faq-list`,
          icon: <AlignLeftOutlined />,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...adminSidebarItems,
    {
      label: "Admin-Management",
      key: "admin-management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/add-admin`}>add Admin</Link>,
          icon: <PlusCircleOutlined />,
          key: `/dashboard/add-admin`,
        },
        {
          label: <Link href={`/dashboard/admin-list`}>Admin List </Link>,
          icon: <TableOutlined />,
          key: `/dashboard/admin-list`,
        },
      ],
    },
  ];

  const doctorSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/dashboard/booking-list`}>Booking Lists</Link>,
      icon: <TableOutlined />,
      key: `/dashboard/booking-list`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.DOCTOR) return doctorSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
