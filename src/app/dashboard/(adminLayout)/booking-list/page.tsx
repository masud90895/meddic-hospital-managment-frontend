"use client";

import { EditOutlined, ReloadOutlined } from "@ant-design/icons";

import { Button, Col, Input, Row, Select, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormInput from "@/components/Forms/FormInput";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import {
  useGetBookingQuery,
  useUpdateBookingMutation,
} from "@/Redux/features/bookingApi/bookingApi";
import { useGetSlotQuery } from "@/Redux/features/slotApi/slotApi";
import { useGetServicesQuery } from "@/Redux/features/serviceApi/serviceApi";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import UMTable from "@/components/ui/UMTable";
import ModalForm from "@/components/modal/ModalForm";

const BookingList = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [appointmentStatus, setAppointmentStatus] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["firstName"] = firstName;
  query["appointmentStatus"] = appointmentStatus;

  // get data
  const { data, isLoading } = useGetBookingQuery(undefined);

  const { data: slotData, isLoading: slotLoading } = useGetSlotQuery("");

  const { data: serviceData, isLoading: serviceLoading } =
    useGetServicesQuery("");

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  const [updateBooking, { isLoading: deleteLoading }] =
    useUpdateBookingMutation();

  const handleEdit = async (updated: any) => {
    const dateString = updated?.appointmentDate?.$d ?? updated?.appointmentDate;

    const dateObject = new Date(dateString);

    // Get ISO string
    const isoString = dateObject?.toISOString();

    const editedData = {
      serviceId: updated?.service.serviceId,
      firstName: updated?.profile.firstName,
      contactNumber: updated?.profile.contactNumber,
      appointmentDate: isoString,
      appointmentStatus: updated?.appointmentStatus,
      slotId: updated?.slot.slotId,
    };

    console.log(editedData, "editedData");

    const id = updated.appointmentId;

    try {
      const res = await updateBooking({ id, data: editedData }).unwrap();

      if (res) {
        message.success("Booking updated successfully");
        setIsEditModalOpen(false);
      }
    } catch (error: any) {
      console.log(error, "booking errror");
      console.error(error?.data);
      message.error(error?.data?.message);
      // message.error("Slot May be booked");
    }
  };

  const columns = [
    {
      title: "Full Name",
      dataIndex: "profile",
      render: (profile: any) => `${profile.firstName} ${profile.lastName}`,
      //   sorter: true,
    },
    {
      title: "Contact No",
      dataIndex: "profile",
      render: (profile: any) => `${profile.contactNumber ?? "-"}`,
      //   sorter: true,
    },
    {
      title: "Appointment Date",
      dataIndex: "appointmentDate",
      render: (text: any) => {
        const date = new Date(text);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-based
        const day = date.getDate().toString().padStart(2, "0");
        return `${day}-${month}-${year}`;
      },
      //   sorter: true,
    },
    {
      title: "Time Slot",
      dataIndex: "slot",
      render: (slot: any) => `${slot.slotTime}`,
    },
    {
      title: "Service",
      dataIndex: "service",
      render: (service: any) => `${service.serviceName}`,
      //   sorter: true,
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      //   sorter: true,
    },
    {
      title: "Status",
      dataIndex: "appointmentStatus",
      //   sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
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
          </>
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
    setFirstName("");
    setAppointmentStatus("");
  };

  const status = [
    { label: "Pending", value: "pending" },
    { label: "Approved", value: "approved" },
    { label: "Rejected", value: "rejected" },
  ];

  const statusOnChange = (value: string) => {
    setAppointmentStatus(value);
    console.log(value);
  };

  return (
    <div className="container rounded bg-white mt-1 mb-5 p-4">
      <UMBreadCrumb
        items={[
          {
            label: "dashboard",
            link: "/dashboard",
          },
          {
            label: "booking-list",
            link: "/dashboard/booking/booking-list",
          },
        ]}
      />

      <ActionBar title="Booking List">
        <div className="flex gap-3">
          <Input
            type="text"
            size="large"
            placeholder="Search with Name"
            style={{
              width: "100%",
            }}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <Select
            showSearch
            size="large"
            placeholder="Select Status"
            optionFilterProp="children"
            onChange={statusOnChange}
            // onSearch={onSearch}
            // filterOption={filterOption}
            options={status}
          />
        </div>
      </ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={data?.data}
        pageSize={size}
        // totalPages="meta?.total"
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />

      {isEditModalOpen && editData && (
        <ModalForm
          open={isEditModalOpen}
          setOpen={setIsEditModalOpen}
          title="Blog"
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
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  margin: "5px 0px",
                }}
              >
                Booking information
              </p>

              <Row gutter={{ xs: 24, xl: 24, lg: 24, md: 24 }}>
                <Col span={8} style={{ margin: "10px 0" }}>
                  <div style={{ margin: "10px 0px" }}>
                    <FormInput
                      size="large"
                      name="profile.firstName"
                      label="Full Name"
                    />
                  </div>
                </Col>
                <Col span={8} style={{ margin: "10px 0" }}>
                  <div style={{ margin: "10px 0px" }}>
                    <FormInput
                      size="large"
                      name="profile.contactNumber"
                      label="Contact No"
                    />
                  </div>
                </Col>
                <Col span={8} style={{ margin: "10px 0" }}>
                  <div style={{ margin: "10px 0px" }}>
                    <FormSelectField
                      name="service.serviceId"
                      label="Service Name"
                      options={serviceData?.map((c: any) => ({
                        label: c.serviceName,
                        value: c.serviceId,
                      }))}
                    />
                  </div>
                </Col>
              </Row>
              <Row gutter={{ xs: 24, xl: 12, lg: 12, md: 24 }}>
                <Col span={8} style={{ margin: "10px 0" }}>
                  <div style={{ margin: "10px 0px" }}>
                    <FormDatePicker
                      name="appointmentDate"
                      label="Appointment Date"
                    />
                  </div>
                </Col>
                <Col span={8} style={{ margin: "10px 0" }}>
                  <div style={{ margin: "10px 0px" }}>
                    <FormSelectField
                      name="appointmentStatus"
                      label="Booking Status"
                      options={status.map((c: any) => ({
                        label: c.label,
                        value: c.value,
                      }))}
                    />
                  </div>
                </Col>
                <Col span={8} style={{ margin: "10px 0" }}>
                  <div style={{ margin: "10px 0px" }}>
                    <FormSelectField
                      name="slot.slotId"
                      label="Booking Slot"
                      options={slotData?.data?.map((c: any) => ({
                        label: c.slotTime,
                        value: c.slotId,
                      }))}
                    />
                  </div>
                </Col>
              </Row>
            </div>

            <Button htmlType="submit">submit</Button>
          </Form>
        </ModalForm>
      )}
    </div>
  );
};

export default BookingList;
