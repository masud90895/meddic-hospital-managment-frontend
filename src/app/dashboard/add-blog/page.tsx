"use client";
import { useState } from "react";

import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import Form from "@/components/Forms/Form";
import UploadImage from "@/components/ui/UploadImage";
import FormTextArea from "@/components/Forms/FormTextArea";
import { useCreateBlogMutation } from "@/Redux/features/blogApi/blogApi";
import FormInput from "@/components/Forms/FormInput";

const AddBlogPage = () => {
  const [createBlog, { isLoading, isError }] = useCreateBlogMutation();
  // submit
  const router = useRouter();
  const blogOnSubmit = async (data: any) => {
    if (!data.blogImage) {
      return message.error("Please upload blog image");
    }
    message.loading("Creating new blog");
    const bloData = {
      blogTitle: data.blogTitle,
      blogDescription: data.blogDescription,
      blogImage: data.blogImage,
    };
    try {
      const res = await createBlog(bloData);
      console.log(res);
      // @ts-ignore
      if (res?.data && !isError) {
        message.success("Blog created successfully");
      }
    } catch (err: any) {
      console.error(err?.data?.message);
      message.error("something went wrong");
    }
  };
  const base = "super-admin";
  return (
    <div className="bg-white  p-5 rounded-2xl shadow-lg">
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/dashboard` },
          { label: "add-blog", link: `/dashboard/add-blog` },
        ]}
      />
      <div className="mt-3">
        <div className="mb-3">
          <h1 className="text-lg text-black/70 font-bold">Create New Blog</h1>
        </div>
        <Form submitHandler={blogOnSubmit}>
          {/* faculty information */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}
            >
              Blog information
            </p>
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
              <Col span={3} style={{ margin: "10px 0" }}>
                <p className="pb-2">Blog Image</p>
                <UploadImage name="blogImage" />
              </Col>{" "}
              <Col span={24} style={{ margin: "10px 0" }}>
                {/* <FormTextArea name="blogTitle" label="Blog Title" rows={4} /> */}
                <FormInput
                  name="blogTitle"
                  label="Blog Title"
                  placeholder="Enter Blog Title"
                  size="large"
                  required
                />
              </Col>
              <Col span={24} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="blogDescription"
                  label="Blog Description"
                  placeholder="Enter Blog Description"
                  rows={8}
                  required
                />
              </Col>{" "}
            </Row>
          </div>

          <Button htmlType="submit" loading={isLoading} disabled={isLoading}>
            submit
          </Button>
        </Form>
        <br />
        <br />

        <br />
      </div>
    </div>
  );
};

export default AddBlogPage;
