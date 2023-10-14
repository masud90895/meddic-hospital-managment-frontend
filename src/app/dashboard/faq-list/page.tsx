"use client";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button, Input } from "antd";
import { useState } from "react";
import UMTable from "@/components/ui/UMTable";
import { DeleteOutlined } from "@ant-design/icons";

const FaqList = ({ searchParams }: Record<string, any>) => {
  //   console.log(searchParams);

  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  //   console.log(myCourseStudents);

  const columns = [
    {
      title: "FAQ Name",
      render: function (data: any) {
        return <p className="font-inter ">{data?.faqTitle}</p>;
      },
    },
    {
      title: "FAQ Description",
      render: function (data: any) {
        return <p className="font-inter ">{data?.faqDescription}</p>;
      },
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <Button type="primary" danger>
            <DeleteOutlined />
          </Button>
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

  // fake data
  const isLoading = false;

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "faq-list",
            link: "/faq-list",
          },
        ]}
      />

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={[
          {
            id: "1",
            faqTitle: "This Is Faq Title",
            faqDescription: "This Is Faq Description",
          },
          {
            id: "2",
            faqTitle: "This Is Faq Title",
            faqDescription: "This Is Faq Description",
          },
        ]}
        pageSize={size}
        totalPages={10}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default FaqList;
