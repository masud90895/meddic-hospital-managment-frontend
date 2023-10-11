/* eslint-disable @next/next/no-img-element */
import React from "react";

import DoctorImage from "../../../public/assists/bruno-rodrigues-279xIHymPYY-unsplash-removebg-preview.png";
import Image from "next/image";

const Hero = () => {
  const HeroData = [
    {
      name: "25+",
      description: "Years of Experience",
    },
    {
      name: "140+",
      description: "Specialist Doctors",
    },
  ];

  return (
    <div className="common h-[740px] flex items-center ">
      {/* welcome */}
      <div className="font-inter flex flex-col h-[400px] justify-around">
        <p className="text-primary text-[20px] font-semibold">
          WELCOME TO MEDDIC
        </p>
        <p className="font-poppins text-[55px] w-[550px]">
          We Are Here to Hear <br /> and Heal Your <br /> Health Problems
        </p>
        <p className="w-[500px] text-gray-[400px] font-poppins text-gray-500">
          The benefits of MEDDPICC are that it allows sellers to quickly qualify
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

      <div>
        <Image
          src={DoctorImage}
          alt=""
          width={500}
          height={600}
          className="mt-[139px] w-[550px] h-[650px]"
        />

        <div>
          <div className="flex -space-x-2 overflow-hidden">
            <img
              className="inline-block h-15 w-15 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* card */}
      <div className="flex flex-col gap-5">
        {HeroData.map((data, i) => (
          <div
            key={i}
            className="card flex flex-col items-center justify-center bg-white p-4 w-[250px]  rounded-xl shadow-xl"
          >
            <p className="text-[40px] font-semibold">{data.name}</p>
            <p className="text-[18px] text-gray-500">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
