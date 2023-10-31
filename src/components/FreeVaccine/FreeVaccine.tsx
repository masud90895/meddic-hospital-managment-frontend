"use client";
import React, { useEffect, useState } from "react";
import { Statistic } from "antd";
import { isLoggedIn } from "@/services/auth.service";
import { Modal, message } from "antd";
const { confirm } = Modal;
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

const FreeVaccine = () => {
  const book = getFromLocalStorage("freeVaccine");
  const [isBook, setIsBook] = useState((book === "true" && true) ?? false);
  const userLoggedIn = isLoggedIn();
  const router = useRouter();

  const handleBookNow = () => {
    // check if user is logged in
    // if not logged in
    if (!userLoggedIn) {
      confirm({
        title: "Please Login First",
        icon: <ExclamationCircleFilled />,
        content: "You need to login first to book. Do you want to login?",
        onOk() {
          return router.push("/login");
        },
        onCancel() {},
      });

      return;
    } else {
      // if logged in
      setToLocalStorage("freeVaccine", "true");
      setIsBook(true);
      message.success("You have successfully booked");
    }
  };

  return (
    <div
      className="common grid grid-cols-5 gap-4 items-center h-[700px]"
      style={{
        backgroundColor: "rgb(242, 246, 247)",
        backgroundImage:
          'url("https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/bg/25.jpg")',
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxSizing: "border-box",
        color: "rgb(92, 114, 125)",
        colorInterpolation: "sRGB",
        colorRendering: "auto",
        fontFamily: '"Nunito Sans", sans-serif',
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 1.8,
        outlineColor: "rgb(92, 114, 125)",
        outlineOffset: "0px",
        outlineStyle: "none",
        outlineWidth: "0px",
        paddingBottom: "120px",
        paddingTop: "120px",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div className="md:col-span-2 col-span-4">
        <p
          style={{
            boxSizing: "border-box",
            clear: "both",
            colorInterpolation: "sRGB",
            colorRendering: "auto",
            fontFamily: "Josefin Sans,sans-serif",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "1.3",
          }}
          className="text-primary"
        >
          Today&apos;s Hot Offer
        </p>
        <h3
          className="md:text-[44px] text-[24px] font-bold "
          style={{
            boxSizing: "border-box",
            clear: "both",
            color: "rgb(7, 28, 31)",
            colorInterpolation: "sRGB",
            colorRendering: "auto",
            fontFamily: '"Josefin Sans", sans-serif',
            // fontSize: "44px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: "15px",
            marginTop: "0px",
            outlineColor: "rgb(7, 28, 31)",
            outlineOffset: "0px",
            outlineStyle: "none",
            outlineWidth: "0px",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          Free Covid-19 Vaccine Campaign Ticket
        </h3>

        <p
          style={{
            boxSizing: "border-box",
            color: "rgb(92, 114, 125)",
            colorInterpolation: "sRGB",
            colorRendering: "auto",
            fontFamily: '"Nunito Sans", sans-serif',
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            hyphens: "auto",
            lineHeight: 1.8,
            marginBottom: "0px",
            marginTop: "0px",
            maxWidth: "600px",
            outlineColor: "rgb(92, 114, 125)",
            outlineOffset: "0px",
            outlineStyle: "none",
            outlineWidth: "0px",
            WebkitFontSmoothing: "antialiased",
          }}
          className="text-[14px] text-gray-600"
        >
          we are providing free covid-19 vaccine for all. Please register for
          free vaccine campaign ticket. We are providing free covid-19 vaccine
          for all. Please register for free vaccine campaign ticket.
        </p>

        <div className="my-[20px]">
          <Countdown
            value={deadline}
            format="D দিন H ঘণ্টা m মিনিট s সেকেন্ড "
            valueStyle={{
              color: "#4851D5",
              backgroundColor: "#fff",
              padding: "5px",
              display: "flex",
              fontSize: "30px",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          />
        </div>
        <div>
          {isBook === true ? (
            <p className="text-gray-500">You have already booked</p>
          ) : (
            <button
              onClick={handleBookNow}
              className="bg-primary md:text-[18px] px-4 py-2 text-white rounded-lg"
            >
              Book Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreeVaccine;
