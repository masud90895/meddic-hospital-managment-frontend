"use client";
import { useState } from "react";

import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { useRegistrationMutation } from "@/Redux/features/auth/authApi";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import UploadImage from "@/components/ui/UploadImage";
import SpecializationFormField from "@/components/Forms/SpecializationFormField";
import Form from "@/components/Forms/Form";
import LoadingButton from "@/components/button/LoadingButton";

const AddUserPage = () => {
  const [isRoleIsDoctor, setIsRoleIsDoctor] = useState(false);

  const [registration, { isLoading, error }] = useRegistrationMutation();
  const router = useRouter();

  const handleCreateUserSubmit = async (values: any) => {
    const userData = {
      firstName: values.firstName,
      lastName: values.lastName,
      role: values.role,
      email: values.email,
      password: values.password,
      profileImage: values.file,
    };

    try {
      const res: any = await registration(userData);
      console.log(res?.data);
      // @ts-ignore
      if (res?.data?.success) {
        message.success("Successfully Created User");
      }
    } catch (error: any) {
      console.error(error?.data?.message);
      message.error(error?.data?.message);
    }
  };
  return (
    <div className="container rounded bg-white mt-1 mb-5 p-4">
      <UMBreadCrumb
        items={[
          { label: `Dashboard`, link: `/dashboard` },
          { label: "User List", link: `/dashboard/add-user` },
        ]}
      />
      <div className="mt-3">
        <div className="mb-3">
          <h1 className="text-lg text-black/70 font-bold">Create New User</h1>
        </div>
        <Form submitHandler={handleCreateUserSubmit}>
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
                  placeholder="Enter Email"
                  required
                />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormInput
                  type="password"
                  name="password"
                  label="Password"
                  size="large"
                  placeholder="Enter Password"
                  required
                />
              </Col>{" "}
              {/* <Col span={12} style={{ margin: "10px 0" }}>
                <FormSelectField
                  setIsRoleIsDoctor={setIsRoleIsDoctor}
                  name="role"
                  label="User Role"
                  options={roles}
                  size="large"
                  placeholder="Select User Role"
                />
              </Col> */}
              {isRoleIsDoctor && (
                <Col span={12} style={{ margin: "10px 0" }}>
                  <SpecializationFormField
                    name="specialization"
                    label="Specialization"
                  />
                </Col>
              )}
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
                <UploadImage key="file" name="file" />
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
          {/* Other information  */}
          {/* {isRoleIsDoctor && (
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
          )} */}

          {isLoading ? (
            <LoadingButton />
          ) : (
            <Button htmlType="submit">submit</Button>
          )}
        </Form>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default AddUserPage;
