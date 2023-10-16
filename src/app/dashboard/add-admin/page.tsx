"use client";

import { useRegistrationMutation } from "@/Redux/features/auth/authApi";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import { Button, Col, Row, message } from "antd";

const AddAdminPage = () => {
  const roles = [
    {
      label: "ADMIN",
      value: "ADMIN",
    },

    {
      label: "SUPER_ADMIN",
      value: "SUPER_ADMIN",
    },
  ];

  const [registration, { isLoading }] = useRegistrationMutation();

  const adminOnSubmit = async (data: any) => {
    if (!data?.role) {
      return message.error("Please Select role");
    } else if (!data?.profileImage) {
      return message.error("Please Upload Image");
    }

    try {
      const res: any = await registration(data);
      console.log("🚀 ~ file: page.tsx:39 ~ adminOnSubmit ~ res:", res);
      if (res?.data?.success) {
        message.success(`${data?.role} created successfully!`);
      }
    } catch (err: any) {
      console.error(err?.data?.message);
      message.error(err?.data?.message);
    }
  };

  const base = "super-admin";
  return (
    <div className="container rounded bg-white mt-1 mb-5 p-4">
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/dashboard` },
          { label: "add-admin", link: `/dashboard/add-admin` },
        ]}
      />
      <div className="mt-3">
        <div className="mb-3">
          <h1 className="text-lg text-black/70 font-bold">Create New ADMIN</h1>
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
              Profile information
            </p>
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormInput
                  name="email"
                  label="Email"
                  type="email"
                  size="large"
                  placeholder="Enter email"
                  required
                />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormInput
                  type="password"
                  name="password"
                  label="Password"
                  size="large"
                  placeholder="Enter password"
                  required
                />
              </Col>{" "}
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormSelectField
                  name="role"
                  label="User Role"
                  options={roles}
                  size="large"
                  placeholder="Select Role"
                  required
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
              <Col span={24} style={{ margin: "10px 0" }}>
                <label htmlFor="image">Profile Image</label>
                <UploadImage name="profileImage" key="file" />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormInput
                  name="firstName"
                  label="First Name"
                  size="large"
                  placeholder="Enter First Name"
                  required
                />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormInput
                  name="lastName"
                  label="Last Name."
                  size="large"
                  placeholder="Enter Last Name"
                  required
                />
              </Col>{" "}
            </Row>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            disabled={isLoading}
          >
            submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddAdminPage;
