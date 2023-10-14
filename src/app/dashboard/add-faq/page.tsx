"use client";
import { useState } from "react";

import { Button, Col, Row, message } from "antd";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import Form from "@/components/Forms/Form";
import UploadImage from "@/components/ui/UploadImage";
import FormTextArea from "@/components/Forms/FormTextArea";
import FormInput from "@/components/Forms/FormInput";

const AddFaqPage = () => {
  const adminOnSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    message.loading("Creating...");
    try {
      // const res = await addFacultyWithFormData(formData);
      // if (!!res) {
      //   message.success("Faculty created successfully!");
      // }
    } catch (err: any) {
      // console.error(err.message);
    }
  };

  const base = "super-admin";
  return (
    <div className="container rounded bg-white mt-1 mb-5 p-4">
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/dashboard` },
          { label: "add-faq", link: `/dashboard/add-faq` },
        ]}
      />
      <div className="mt-3">
        <div className="mb-3">
          <h1 className="text-lg text-black/70 font-bold">Create New FAQ</h1>
        </div>
        <Form submitHandler={adminOnSubmit}>
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
              FAQ information
            </p>
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
              <Col span={24} style={{ margin: "10px 0" }}>
                <FormInput
                  name="faqTitle"
                  label="FAQ Title"
                  placeholder="FAQ Title"
                  size="large"
                  type="text"
                />
              </Col>
              <Col span={24} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="faqDescription"
                  label="FAQ Description"
                  rows={8}
                  placeholder="Enter FAQ Description"
                />
              </Col>{" "}
            </Row>
          </div>

          <Button htmlType="submit">submit</Button>
        </Form>
        <br />
        <br />

        <br />
      </div>
    </div>
  );
};

export default AddFaqPage;
