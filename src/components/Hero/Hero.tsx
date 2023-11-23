/* eslint-disable @next/next/no-img-element */
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/virus-disinfection.json";

const Hero = () => {
  // const HeroData = [
  //   {
  //     name: "25+",
  //     description: "Years of Experience",
  //   },
  //   {
  //     name: "140+",
  //     description: "Specialist Doctors",
  //   },
  // ];

  return (
    <div className="common h-[740px] md:flex items-center justify-between ">
      {/* welcome */}
      <div className="font-inter my-[20px] md:my-0 flex flex-col h-[400px] justify-around">
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
          WELCOME TO MEDDIC
        </p>
        <p
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
          We Are Here to Hear <br /> and Heal Your <br /> Health Problems
        </p>
        <p className="md:w-[500px] text-gray-[400px] text-[14px] font-poppins text-gray-500">
          The benefits of MEDDIC are that it allows sellers to quickly qualify
          or disqualify opportunities before they get too far into the sales
          process and gives sellers a framework to start from.
        </p>

        <div className="flex w-full gap-5 my-[10px]">
          <button className="appointmentButton">Get Start</button>
          <button className="px-[20px] py-[10px]  rounded-xl border-2 scale-100 hover:scale-110 ease-in duration-100 ">
            Contact Us
          </button>
        </div>
      </div>

      {/* image */}

      {/* <div className="hidden md:block">
        <Image
          src={DoctorImage}
          alt=""
          width={500}
          height={600}
          className="md:mt-[90px] md:max-w-[550px] md:h-[650px] "
        />
      </div> */}
      <Lottie
        animationData={animationData}
        className="flex justify-center items-center  md:max-w-[850px] md:h-[1250px] "
        loop={true}
      />

      {/* card */}
      {/* <div className="flex flex-col gap-5">
        {HeroData.map((data, i) => (
          <div
            key={i}
            className="card flex flex-col items-center justify-center bg-white p-4 md:w-[250px]  rounded-xl shadow-xl"
          >
            <p className="text-[40px] font-semibold">{data.name}</p>
            <p className="text-[18px] text-gray-500">{data.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Hero;
