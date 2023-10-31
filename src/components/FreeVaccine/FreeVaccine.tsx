import React from "react";
import { Statistic } from "antd";

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

const FreeVaccine = () => {
  return (
    <div
      className="common grid grid-cols-5 gap-4 items-center"
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
        height: "700px",
      }}
    >
      <div className="col-span-2">
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
          style={{
            boxSizing: "border-box",
            clear: "both",
            color: "rgb(7, 28, 31)",
            colorInterpolation: "sRGB",
            colorRendering: "auto",
            fontFamily: '"Josefin Sans", sans-serif',
            fontSize: "44px",
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
          />
        </div>

        <div>
          <button className="bg-primary text-[18px] px-4 py-2 text-white rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeVaccine;
