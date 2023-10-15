"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";

// import FormMultiSelectField from "@/components/Forms/FormMultiSelectField";
// import { SelectOptions } from "@/components/Forms/FormSelectField";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";

import { Button, Col, Row, message } from "antd";

const AddService = () => {
  // const { data, isLoading } = useCoursesQuery({ limit: 10, page: 1 });

  // const courses = data?.courses;
  // const coursesOptions = courses?.map((course) => {
  //   return {
  //     label: course?.title,
  //     value: course?.id,
  //   };
  // });

  const onSubmit = async (data: any) => {
    // data.credits = parseInt(data?.credits);
    // const coursePreRequisitesOptions = data?.coursePreRequisites?.map(
    //   (id: string) => {
    //     return {
    //       courseId: id,
    //     };
    //   }
    // );
    // data.coursePreRequisites = coursePreRequisitesOptions;
    // message.loading("Creating.....");
    // try {
    //   const res = await addCourse(data).unwrap();
    //   if (res?.id) {
    //     message.success("Course created successfully");
    //   }
    // } catch (err: any) {
    //   console.error(err.message);
    //   message.error(err.message);
    // }
  };
  const base = "admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "course", link: `/${base}/course` },
        ]}
      />
      <h1 className="text-lg text-black/70 font-bold">Create Service</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={24} style={{ margin: "10px 0" }}>
            <UploadImage name="file" />
          </Col>
          <Col span={12} style={{ margin: "10px 0" }}>
            <div style={{ margin: "10px 0px" }}>
              <FormInput
                name="title"
                label="Service Name"
                size="large"
                placeholder="Enter Service Name"
              />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormInput name="code" label="Description" size="large" placeholder="Enter Service Description" />
            </div>
          </Col>
          <Col span={12} style={{ margin: "10px 0" }}>
            <div style={{ margin: "10px 0px" }}>
              <FormInput name="title" label="Location" size="large" placeholder="Enter Location" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormInput name="code" label="Price" size="large" placeholder="Enter Service Price" />
            </div>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Create Service
        </Button>
      </Form>
    </div>
  );
};

export default AddService;
