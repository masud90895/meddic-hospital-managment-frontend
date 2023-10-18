"use client";

import { useCreateSlotMutation } from "@/Redux/features/slotApi/slotApi";
import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";

// import FormMultiSelectField from "@/components/Forms/FormMultiSelectField";
// import { SelectOptions } from "@/components/Forms/FormSelectField";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

import { Button, Col, Row, message } from "antd";

const AddSlot = () => {
  const [createSlot, { isLoading, isError }] = useCreateSlotMutation();
  // submit

  const slotOnSubmit = async (data: any) => {
    message.loading("Creating new Slot");

    const SlotData = {
      slotTime: data.slotTime,
    };
    console.log(SlotData);
    try {
      const res = await createSlot(SlotData);

      // @ts-ignore
      if (res?.data && !isError) {
        message.success("Slot created successfully");
        // router.push("/dashboard/booking/booking-list");
      }
    } catch (err: any) {
      console.error(err?.data?.message);
      message.error("something went wrong");
    }
  };

  return (
    <div className="container rounded bg-white mt-1 mb-5 p-4">
      <UMBreadCrumb
        items={[
          { label: "dashboard", link: `/dashboard` },
          { label: "add-slot", link: `/dashboard/add-slot` },
        ]}
      />
      <h1 className="mt-10 font-semibold text-[18px]">Create Slot</h1>
      <Form submitHandler={slotOnSubmit}>
        <Row gutter={{ xs: 24, xl: 12, lg: 8, md: 24 }}>
          <Col span={12} style={{ margin: "15px 0" }}>
            {/* <div style={{ margin: "10px 0px" }}>
              <FormDatePicker name="booking.Date" label="Appointment Date" />
            </div> */}
            <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                name="booking.slot"
                label="Time Slot"
                options={[]}
              />
            </div>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Create Slots
        </Button>
      </Form>
    </div>
  );
};

export default AddSlot;
