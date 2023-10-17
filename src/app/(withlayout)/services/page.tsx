"use client";
import { useGetServicesQuery } from "@/Redux/features/serviceApi/serviceApi";
import Skeleton from "@/components/Loader/Skeleton";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import React from "react";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import ServiceCard from "@/components/Services/ServiceCard";
import { IServiceTypes } from "@/types/Service";

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const ServicesPage = () => {
  const [search, setSearch] = React.useState("");

  const { data, isLoading } = useGetServicesQuery(search);

  if (isLoading) {
    return (
      <div className="common grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-[100px] h-screen ">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }

  return (
    <div className="common">
      <div className="my-5 flex items-center justify-between ">
        <UMBreadCrumb items={[{ label: `Services`, link: `/services` }]} />

        <Search
          placeholder="Search Services"
          enterButton="Search"
          size="large"
          style={{ width: 400 }}
          suffix={suffix}
          onSearch={(e) => setSearch(e)}
          type="primary"
        />
      </div>

      <div className="w-full text-center">
        <p className="text-[30px] font-bold">You may also like</p>

        <p className="text-xs">
          There are many variations of passages of Lorem Ipsum available, <br />{" "}
          but the majority have suffered alteration in some form,
        </p>
      </div>

      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-[100px]">
        {/* card */}

        {data?.map((service: IServiceTypes) => (
          <ServiceCard key={service?.serviceId} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
