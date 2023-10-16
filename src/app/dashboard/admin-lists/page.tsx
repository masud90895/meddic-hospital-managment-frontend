"use client";

import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

import { Button, Input } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import UMTable from "@/components/ui/UMTable";
import { useGetAllUsersQuery } from "@/Redux/features/userApi/userApi";

const AdminLists = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // get data
  const { data, isLoading } = useGetAllUsersQuery(searchTerm);

  console.log("🚀 ~ file: page.tsx:29 ~ AdminLists ~ data:", data);

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  const deleteHandler = async (id: string) => {
    //   message.loading("Deleting.....");
    //   try {
    //     //   console.log(data);
    //     const res = await deleteCourse(id);
    //     if (res) {
    //       message.success("Course Deleted successfully");
    //     }
    //   } catch (err: any) {
    //     //   console.error(err.message);
    //     message.error(err.message);
    //   }
  };

  // const dataSource = [
  //   {
  //     email: "masudhossainmbs129@gmail.com",
  //     firstName: "masud",
  //     lastName: "Rana",
  //     role: "ADMIN",
  //     contactNumber: "01714486218",
  //     address: "Dhaka",
  //     bloodGroup: "O+",
  //   },
  // ];

  const columns = [
    {
      title: "Full Name",
      dataIndex: "profile",
      render: function (data: Record<string, string>) {
        const fullName = `${data?.firstName} ${data?.lastName}`;
        return <>{fullName}</>;
      },
      //   sorter: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      //   sorter: true,
    },
    {
      title: "Address",
      dataIndex: "profile",
      render: function (data: Record<string, string>) {
        return <>{data?.address ?? "-"}</>;
      },
    },
    {
      title: "Contact No",
      dataIndex: "profile",
      render: function (data: Record<string, string>) {
        return <>{data?.contactNumber ?? "-"}</>;
      },
      //   sorter: true,
    },
    {
      title: "Blood Group",
      dataIndex: "profile",
      render: function (data: Record<string, string>) {
        return <>{data?.bloodGroup ?? "-"}</>;
      },
      //   sorter: true,
    },
    {
      title: "Role",
      dataIndex: "profile",
      render: function (data: Record<string, string>) {
        return <>{data?.role ?? "-"}</>;
      },
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      //   sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Button
              style={{
                margin: "0px 5px",
              }}
              onClick={() => console.log(data)}
              type="primary"
            >
              <EditOutlined />
            </Button>
            <Button
              onClick={() => deleteHandler(data?.id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  //   console.log(dataSource);

  return (
    <div className="container rounded bg-white mt-1 mb-5 p-4">
      <UMBreadCrumb
        items={[
          {
            label: "dashboard",
            link: "/dashboard",
          },
          {
            label: "admin-Lists",
            link: "/dashboard/admin-lists",
          },
        ]}
      />

      <div className="mt-5">
        <ActionBar title="Admin Lists">
          <Input
            type="text"
            size="large"
            placeholder="Search by name, email, role..."
            style={{
              width: "30%",
            }}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <div>
            <Link href="/dashboard/add-admin">
              <Button type="primary">Create</Button>
            </Link>
            {(!!sortBy || !!sortOrder || !!searchTerm) && (
              <Button
                onClick={resetFilters}
                type="primary"
                style={{ margin: "0px 5px" }}
              >
                <ReloadOutlined />
              </Button>
            )}
          </div>
        </ActionBar>
      </div>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={data}
        pageSize={size}
        // totalPages="meta?.total"
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default AdminLists;
