"use client";
import { useState } from "react";

import { Button, Col, Row, message } from "antd";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import UploadImage from "@/components/ui/UploadImage";
import SpecializationFormField from "@/components/Forms/SpecializationFormField";

const AddUserPage = () => {
  const roles = [
    {
      label: "user",
      value: "user",
    },

    {
      label: "doctor",
      value: "doctor",
    },
  ];

  const [isRoleIsDoctor, setIsRoleIsDoctor] = useState(false);

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
          { label: "add-user", link: `/dashboard/add-user` },
        ]}
      />
      <div className="mt-3">
        <div className="mb-3">
          <h1 className="text-lg text-black/70 font-bold">Create New User</h1>
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
              User information
            </p>
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormInput
                  name="email"
                  label="Email"
                  type="email"
                  size="large"
                  placeholder="Enter  email"
                />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormInput
                  type="password"
                  name="password"
                  label="Password"
                  size="large"
                  placeholder="Enter password"
                />
              </Col>{" "}
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormSelectField
                  setIsRoleIsDoctor={setIsRoleIsDoctor}
                  name="role"
                  label="User Role"
                  options={roles}
                  size="large"
                  placeholder="Select Role"
                />
              </Col>
            </Row>
          </div>
          {/* basic information  */}
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
              Basic information
            </p>
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormInput
                  name="name.firstName"
                  label="First name"
                  size="large"
                  placeholder="Enter first name"
                />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormInput
                  name="name.lastName"
                  label="Last Name."
                  size="large"
                  placeholder="Enter last name"
                />
              </Col>{" "}
              <Col span={12} style={{ margin: "10px 0" }}>
                <label htmlFor="image">Profile Image</label>
                <UploadImage name="file" />
              </Col>
            </Row>
          </div>
          {/* Other information  */}
          {isRoleIsDoctor && (
            <div
              style={{
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
                padding: "15px",
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  margin: "5px 0px",
                }}
              >
                Other information
              </p>
              <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                <Col span={12} style={{ margin: "10px 0" }}>
                  <SpecializationFormField
                    name="specialization"
                    label="Specialization"
                  />
                </Col>
              </Row>
            </div>
          )}
          <Button htmlType="submit">submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default AddUserPage;
