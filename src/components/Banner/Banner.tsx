/* eslint-disable @next/next/no-img-element */
import React from "react";
import doctor from "../../../public/assists/vecteezy_doctor-3d-icon-illustration_28238992_258.png";
import Care from "../../../public/assists/stock-vector-hospital-building-icon-vector-logo-1727598499-removebg-preview.png";
import Phone from "../../../public/assists/phone-removebg-preview.png";
import Image from "next/image";

const Banner = () => {
  const BannerData = [
    {
      title: "Expert Doctors",
      description:
        "Our doctors are highly qualified and experienced in their respective fields.",
      image: doctor,
    },
    {
      title: "Emergrncy Care",
      description: "We are available for 24/7 for any emergency care.",
      image: Care,
    },
    {
      title: "24/7 Full Support",
      description:
        "Our support team is always available to help you with any queries.",
      image: Phone,
    },
  ];

  return (
    <div className="common bg-primary flex flex-col md:flex-row md:gap-3 gap-10  justify-between py-[50px] text-white font-inter">
      {BannerData.map((data, i) => (
        <div className="flex items-center gap-4 px-[20px]" key={i}>
          <Image
            src={data.image}
            alt="Picture of the author"
            width={80}
            height={80}
            className="bg-white rounded-full"
          />

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-[20px]">{data.title}</h3>
            <p>{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
