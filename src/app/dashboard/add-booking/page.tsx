"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

import { Button, Col, Row, message } from "antd";

const AddBooking = () => {
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

  const slot = [
    { label: "10.00-10.20 AM", value: "1" },
    { label: "10.20-10.40 AM", value: "2" },
    { label: "10.40-11.00 AM", value: "3" },
  ];

  const service = [
    { label: "Medicine", value: "Medicine" },
    { label: "Dentist", value: "Dentist" },
    { label: "Neurology", value: "Neurology" },
  ];

  const doctor = [
    { label: "Salim Al Sazu", value: "Medicine" },
    { label: "Shafin", value: "Dentist" },
    { label: "Md. Mahfuz", value: "Neurology" },
  ];

  return (
    <div className="container rounded bg-white mt-1 mb-5 p-4">
      <UMBreadCrumb
        items={[
          { label: "dashboard", link: `/dashboard` },
          { label: "add-booking", link: `/dashboard/add-booking` },
        ]}
      />
      <h1 className="mt-5 text-lg text-black/70 font-bold">Create Booking</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 12, lg: 8, md: 24 }}>
          <Col span={12} style={{ margin: "15px 0" }}>
            <div style={{ margin: "10px 0px" }}>
              <FormDatePicker
                name="booking.Date"
                label="Appointment Date"
                size="large"
              />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                name="booking.service"
                label="Service"
                options={service}
                size="large"
              />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                name="booking.Doctor"
                label="Doctor"
                options={doctor}
                size="large"
              />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                name="booking.slot"
                label="Time Slot"
                options={slot}
                size="large"
              />
            </div>
          </Col>
          <Col span={12} style={{ margin: "15px 0" }}>
            <div style={{ margin: "10px 0px" }}>
              <FormInput
                name="booing.name"
                label="User name"
                size="large"
                placeholder="Enter your user name"
              />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormInput
                name="booing.email"
                label="Email"
                size="large"
                placeholder="Enter your Email"
              />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormInput
                name="booing.mobile"
                label="Mobile No"
                size="large"
                placeholder="Enter your Mobile no."
              />
            </div>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Create Booking
        </Button>
      </Form>
    </div>
  );
};

export default AddBooking;
