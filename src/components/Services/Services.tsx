"use client";
import { IServiceTypes } from "@/types/Service";
import React from "react";
import ServiceCard from "./ServiceCard";
import { useGetServicesQuery } from "@/Redux/features/serviceApi/serviceApi";
import Skeleton from "../Loader/Skeleton";
import Link from "next/link";

const Services = () => {
  const { data, isLoading } = useGetServicesQuery("");

  // const serviceData: IServiceTypes[] = [
  //   {
  //     serviceName: "Pharmacy Services",
  //     description:
  //       "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
  //     location: "Thakurgaon Sadar, Thakurgaon",
  //     serviceImage: "https://i.ibb.co/1f08g2g/medicin.jpg",
  //     servicePrice: 1000,
  //     serviceStatus: "Available",
  //     category: {
  //       categoryName: "Medicine",
  //       description:
  //         "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
  //     },
  //   },
  //   {
  //     serviceName: "Medical Specialist",
  //     description:
  //       "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
  //     location: "Thakurgaon Sadar, Thakurgaon",
  //     serviceImage: "https://i.ibb.co/tCFyqHx/madical.jpg",
  //     servicePrice: 1000,
  //     serviceStatus: "Available",
  //     category: {
  //       categoryName: "Medicine",
  //       description:
  //         "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
  //     },
  //   },
  //   {
  //     serviceName: "Medical Checkup",
  //     description:
  //       "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
  //     location: "Thakurgaon Sadar, Thakurgaon",
  //     serviceImage: "https://i.ibb.co/9rPKyFK/checkoup.jpg",
  //     servicePrice: 1000,
  //     serviceStatus: "Available",
  //     category: {
  //       categoryName: "Medicine",
  //       description:
  //         "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
  //     },
  //   },
  //   {
  //     serviceName: "Health Consultation",
  //     description:
  //       "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
  //     location: "Thakurgaon Sadar, Thakurgaon",
  //     serviceImage: "https://i.ibb.co/sjqWY7P/Consultation.jpg",
  //     servicePrice: 1000,
  //     serviceStatus: "Available",
  //     category: {
  //       categoryName: "Medicine",
  //       description:
  //         "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
  //     },
  //   },
  //   {
  //     serviceName: "Ambulance Service",
  //     description:
  //       "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
  //     location: "Thakurgaon Sadar, Thakurgaon",
  //     serviceImage: "https://i.ibb.co/qJKWk8j/Ambulance.jpg",
  //     servicePrice: 1000,
  //     serviceStatus: "Available",
  //     category: {
  //       categoryName: "Medicine",
  //       description:
  //         "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
  //     },
  //   },
  //   {
  //     serviceName: "Health Assurance",
  //     description:
  //       "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
  //     location: "Thakurgaon Sadar, Thakurgaon",
  //     serviceImage: "https://i.ibb.co/V2XgtBr/Health.jpg",
  //     servicePrice: 1000,
  //     serviceStatus: "Available",
  //     category: {
  //       categoryName: "Medicine",
  //       description:
  //         "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
  //     },
  //   },
  // ];

  const serviceData = data?.slice(0, 6);
  return (
    <div className="common pb-[100px]">
      <p className="text-primary md:text-[20px] text-[16px] font-semibold">
        OUR SERVICES
      </p>
      <p className="font-poppins md:text-[45px] text-[35px] md:w-[550px] py-[30px] ">
        Amazing Medical Facilities Just for You
      </p>

      {/* service card */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-between">
        {isLoading ? (
          <Skeleton />
        ) : (
          serviceData?.map((service: IServiceTypes, index: number) => (
            <ServiceCard key={index} service={service} />
          ))
        )}
      </div>

      {/* button */}
      {data?.length > 6 && (
        <Link
          href={"/services"}
          className="flex justify-center items-center mt-5"
        >
          <button className="appointmentButton">More Service</button>
        </Link>
      )}
    </div>
  );
};

export default Services;
