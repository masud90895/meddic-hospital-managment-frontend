import React from "react";
import Image from "next/image";
import { Button, Modal } from "antd";
import Link from "next/link";

type BookAppointmentData = {
  _id: number;
  day: string;
  time: string;
};

const HealthCare = () => {
  const bookAppointmentData: BookAppointmentData[] = [
    {
      _id: 1,
      day: "Mon-Wed",
      time: "8:00am - 5:00pm",
    },
    {
      _id: 2,
      day: "Thu-Fri",
      time: "9:00am - 6:00pm",
    },
    {
      _id: 3,
      day: "Sat-Sun",
      time: "9:00am - 3:00pm",
    },
    {
      _id: 4,
      day: "Mon-Wed",
      time: "8:00am - 5:00pm",
    },
  ];

  const handleInfo = () => {
    Modal.info({
      title: "This feature is under development",
      content: (
        <div>
          <p>Sorry for this problem </p>
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://askproject.net/meddic/wp-content/uploads/sites/156/2023/10/young-multiracial-doctor-sitting-at-reception-and-GCCHF87.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen common w-full mb-[150px] flex justify-end items-center border-2 border-borderColor"
    >
      <div className="bg-primary rounded-xl md:p-[60px] p-[20px] font-inter text-white md:w-[720px] md:h-[780px]">
        <p className="md:text-[18px] font-semibold pb-[16px]">WORKING HOURS</p>
        <p className="md:text-[45px] text-[25px] font-sans">
          Healthcare at Its Finest
        </p>

        <p className="text-[14px] my-[12px]">
          I am currently a senior at the University of Southern California
          pursuing a dual degree in business administration and public policy,
          management, and planning ...
        </p>

        {/* book */}
        <div className="py-[50px] flex flex-col gap-2">
          {bookAppointmentData.map((data) => (
            <div
              key={data?._id}
              className="flex w-full font-semibold justify-between md:text-[19px] text-[14px] border-b-2 border-borderColor "
            >
              <p className=" font-semibold pb-[16px] w-[30%]">{data?.day}</p>
              <p className=" font-sans w-[40%]">{data?.time}</p>
              {/* book now button */}
              {/* <button className="bg-black rounded-xl px-[15px] font-inter text-white text-[12px] ">
                Book Now
              </button> */}
              <Button
                onClick={handleInfo}
                type="primary"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  border: "none",
                  width: "100px",
                  height: "30px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#4851D5",
                  cursor: "pointer",
                }}
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>

        <div>
          <p className="text-[20px] font-semibold mb-5">Time’s not flexible?</p>

          <Link
            href={"#appointment"}
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              border: "none",
              fontSize: "14px",
              fontWeight: "bold",
              color: "#4851D5",
              cursor: "pointer",
            }}
            className="appointmentButton"
          >
            Make an appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthCare;
