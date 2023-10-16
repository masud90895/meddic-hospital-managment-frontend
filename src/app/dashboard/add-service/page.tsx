"use client";

import { useAddServiceMutation } from "@/Redux/features/serviceApi/serviceApi";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";

// import FormMultiSelectField from "@/components/Forms/FormMultiSelectField";
// import { SelectOptions } from "@/components/Forms/FormSelectField";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";

import { Button, Col, Row, message } from "antd";

const AddService = () => {
  const [addService, { isLoading }] = useAddServiceMutation();

  const onSubmit = async (data: any) => {
    try {
      const res: any = await addService(data);
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
  const base = "admin";
  return (
    <div className="container rounded bg-white mt-1 mb-5 p-4">
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "add-service", link: `/${base}/add-service` },
        ]}
      />
      <h1 className="text-lg text-black/70 font-bold">Create Service</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={24} style={{ margin: "10px 0" }}>
            <UploadImage key="file" name="file" />
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
        </Row>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
          disabled={isLoading}
        >
          Create Service
        </Button>
      </Form>
    </div>
  );
};

export default AddService;
