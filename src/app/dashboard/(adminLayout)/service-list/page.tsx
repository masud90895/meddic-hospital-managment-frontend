"use client";

import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

import { Button, Col, Input, Row, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import UMTable from "@/components/ui/UMTable";
import {
  useDeleteServiceMutation,
  useGetServicesQuery,
  useUpdateServiceMutation,
} from "@/Redux/features/serviceApi/serviceApi";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import ModalForm from "@/components/modal/ModalForm";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UploadImage from "@/components/ui/UploadImage";
import FormSelectField from "@/components/Forms/FormSelectField";
import Image from "next/image";
const { confirm } = Modal;

const ServiceList = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isLoading } = useGetServicesQuery(searchTerm);

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  // handle edit

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  const [updateService, { isLoading: updateLoading }] =
    useUpdateServiceMutation();

  const handleEdit = async (data: any) => {
    if (!data?.categoryId) {
      return message.error("Please Select Category");
    } else if (!data?.serviceImage) {
      return message.error("Please Upload Image");
    }

    const serviceData = {
      ...data,
      servicePrice: Number(data?.servicePrice),
    };

    const id = data?.serviceId;
    try {
      const res = await updateService({ id, body: serviceData }).unwrap();

      if (res.success) {
        message.success("category updated successfully");
        setIsEditModalOpen(false);
      }
    } catch (error: any) {
      console.error(error?.data?.message);
      message.error(error?.data?.message);
    }
  };

  // handle edit end

  // delete
  const [deleteService] = useDeleteServiceMutation();

  const deleteHandler = async (id: string) => {
    confirm({
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content: "Please confirm your action!",
      async onOk() {
        try {
          const res: any = await deleteService(id);
          if (res?.success) {
            message.success("service Deleted successfully");
          }
        } catch (err: any) {
          console.error(err.data?.message);
          message.error(err.data?.message);
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  // delete end

  const columns = [
    {
      title: "Service Image",
      render: function (data: any) {
        return (
          <Image
            src={data?.serviceImage}
            width={50}
            height={50}
            alt=""
            className="rounded-xl"
          />
        );
      },
      //   sorter: true,
    },
    {
      title: "Service Name",
      dataIndex: "serviceName",
      //   sorter: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      //   sorter: true,
    },
    {
      title: "location",
      dataIndex: "location",
      //   sorter: true,
    },
    {
      title: "ServicePrice",
      dataIndex: "servicePrice",
      sorter: true,
    },
    {
      title: "Category",
      // dataIndex: "category.categoryName",
      render: function (data: any) {
        return <p>{data?.category.categoryName}</p>;
      },
      //   sorter: true,
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <div
            style={{
              width: "100px",
              display: "flex",
              justifyContent: "space-between",
              gap: "5px",
            }}
          >
            <Button
              style={{
                margin: "0px 5px",
              }}
              onClick={() => {
                setIsEditModalOpen(true);
                setEditData(data);
              }}
              type="primary"
            >
              <EditOutlined />
            </Button>
            <Button
              onClick={() => deleteHandler(data?.serviceId)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </div>
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
    <>
      <div className="container rounded bg-white mt-1 mb-5 p-4">
        <UMBreadCrumb
          items={[
            {
              label: "dashboard",
              link: "/dashboard",
            },
            {
              label: "service-list",
              link: "/service/service-list",
            },
          ]}
        />

        <ActionBar title="service List">
          <Input
            type="text"
            size="large"
            placeholder="Search..."
            style={{
              width: "20%",
            }}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <div>
            <Link href="/dashboard/add-service">
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

      {isEditModalOpen && editData && (
        <ModalForm
          open={isEditModalOpen}
          setOpen={setIsEditModalOpen}
          title="FAQ"
          isLoading={updateLoading}
        >
          <Form submitHandler={handleEdit} defaultValues={editData}>
            <div
              style={{
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
                padding: "15px",
                marginBottom: "10px",
              }}
            >
              <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                <Col span={24} style={{ margin: "10px 0" }}>
                  <UploadImage
                    key="file"
                    name="serviceImage"
                    updateImage={editData?.serviceImage}
                  />
                </Col>
                <Col span={12} style={{ margin: "10px 0" }}>
                  <div style={{ margin: "10px 0px" }}>
                    <FormInput
                      name="serviceName"
                      label="Service Name"
                      size="large"
                      placeholder="Enter Service Name"
                      required
                    />
                  </div>
                  <div style={{ margin: "10px 0px" }}>
                    <FormInput
                      name="description"
                      label="Description"
                      size="large"
                      placeholder="Enter Service Description"
                      required
                    />
                  </div>
                </Col>
                <Col span={12} style={{ margin: "10px 0" }}>
                  <div style={{ margin: "10px 0px" }}>
                    <FormInput
                      name="location"
                      label="Location"
                      size="large"
                      placeholder="Enter Location"
                      required
                    />
                  </div>
                  <div style={{ margin: "10px 0px" }}>
                    <FormInput
                      name="servicePrice"
                      label="Price"
                      size="large"
                      placeholder="Enter Service Price"
                      type="number"
                      required
                    />
                  </div>
                </Col>
                <Col span={12} style={{ margin: "10px 0" }}>
                  <FormSelectField
                    name="categoryId"
                    label="Category"
                    size="large"
                    placeholder="Enter Category"
                    options={data?.map((el: any) => ({
                      label: el?.categoryName,
                      value: el?.categoryId,
                    }))}
                  />
                </Col>
              </Row>
            </div>

            <div className="flex gap-5">
              <Button
                htmlType="submit"
                type="primary"
                loading={updateLoading}
                disabled={updateLoading}
              >
                Update Service
              </Button>

              <Button
                onClick={() => setIsEditModalOpen(false)}
                htmlType="button"
                type="primary"
                danger
              >
                Cancel
              </Button>
            </div>
          </Form>
        </ModalForm>
      )}
    </>
  );
};

export default ServiceList;
