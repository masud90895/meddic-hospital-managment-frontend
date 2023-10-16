"use client";

import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

import { Button, Col, Row, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import UMTable from "@/components/ui/UMTable";

import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import ModalForm from "@/components/modal/ModalForm";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import Form from "@/components/Forms/Form";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} from "@/Redux/features/categoryApi/categoryApi";

const { confirm } = Modal;

const CategoriesLists = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  // get data
  const { data, isLoading } = useGetCategoryQuery(undefined);

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  // handle edit

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  const [updateCategory, { isLoading: deleteLoading }] =
    useUpdateCategoryMutation();

  const handleEdit = async (data: any) => {
    const editData = {
      categoryName: data.categoryName,
      description: data.description,
    };

    const id = data?.categoryId;
    try {
      const res = await updateCategory({ id, body: editData }).unwrap();

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
  const [deleteCategory] = useDeleteCategoryMutation();

  const deleteHandler = async (id: string) => {
    confirm({
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content: "Please confirm your action!",
      async onOk() {
        try {
          const res: any = await deleteCategory(id);
          if (res?.success) {
            message.success("Category Deleted successfully");
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
      title: "Name",
      dataIndex: "categoryName",
      //   sorter: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      //   sorter: true,
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
              onClick={() => deleteHandler(data?.categoryId)}
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
              label: "category-Lists",
              link: "/dashboard/category-lists",
            },
          ]}
        />

        <div className="mt-5">
          <ActionBar title="category Lists">
            <div>
              <Link href="/dashboard/add-category">
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

      {/* edit */}

      {isEditModalOpen && editData && (
        <ModalForm
          open={isEditModalOpen}
          setOpen={setIsEditModalOpen}
          title="FAQ"
          isLoading={deleteLoading}
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
                  <FormInput
                    name="categoryName"
                    label="Category Name"
                    placeholder="Category Name"
                    size="large"
                    type="text"
                    required
                  />
                </Col>
                <Col span={24} style={{ margin: "10px 0" }}>
                  <FormTextArea
                    name="description"
                    label="Category Description"
                    rows={8}
                    placeholder="Enter Category Description"
                    required
                  />
                </Col>{" "}
              </Row>
            </div>

            <div className="flex gap-5">
              <Button
                htmlType="submit"
                type="primary"
                loading={deleteLoading}
                disabled={deleteLoading}
              >
                Update Category
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

export default CategoriesLists;
