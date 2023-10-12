import { IServiceTypes } from "@/types/Service";
import React from "react";
import image1 from "../../../public/assists/Service/medicin.jpg";
import image2 from "../../../public/assists/Service/madical.jpg";
import image3 from "../../../public/assists/Service/checkoup.jpg";
import image4 from "../../../public/assists/Service/Consultation.jpg";
import image5 from "../../../public/assists/Service/ambulance.jpg";
import image6 from "../../../public/assists/Service/Health.jpg";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceData: IServiceTypes[] = [
    {
      serviceName: "Pharmacy Services",
      description:
        "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
      location: "Thakurgaon Sadar, Thakurgaon",
      serviceImage: image1,
      servicePrice: 1000,
      serviceStatus: "Available",
      category: {
        categoryName: "Medicine",
        description:
          "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
      },
    },
    {
      serviceName: "Medical Specialist",
      description:
        "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
      location: "Thakurgaon Sadar, Thakurgaon",
      serviceImage: image2,
      servicePrice: 1000,
      serviceStatus: "Available",
      category: {
        categoryName: "Medicine",
        description:
          "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
      },
    },
    {
      serviceName: "Medical Checkup",
      description:
        "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
      location: "Thakurgaon Sadar, Thakurgaon",
      serviceImage: image3,
      servicePrice: 1000,
      serviceStatus: "Available",
      category: {
        categoryName: "Medicine",
        description:
          "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
      },
    },
    {
      serviceName: "Health Consultation",
      description:
        "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
      location: "Thakurgaon Sadar, Thakurgaon",
      serviceImage: image4,
      servicePrice: 1000,
      serviceStatus: "Available",
      category: {
        categoryName: "Medicine",
        description:
          "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
      },
    },
    {
      serviceName: "Ambulance Service",
      description:
        "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
      location: "Thakurgaon Sadar, Thakurgaon",
      serviceImage: image5,
      servicePrice: 1000,
      serviceStatus: "Available",
      category: {
        categoryName: "Medicine",
        description:
          "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
      },
    },
    {
      serviceName: "Health Assurance",
      description:
        "We provide a wide range of pharmacy services to meet the needs of our patients and customers in our community.",
      location: "Thakurgaon Sadar, Thakurgaon",
      serviceImage: image6,
      servicePrice: 1000,
      serviceStatus: "Available",
      category: {
        categoryName: "Medicine",
        description:
          "Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease.",
      },
    },
  ];

  return (
    <div className="common pb-[100px]">
      <p className="text-primary md:text-[20px] text-[16px] font-semibold">
        OUR SERVICES
      </p>
      <p className="font-poppins md:text-[45px] text-[35px] md:w-[550px] py-[30px] ">
        Amazing Medical Facilities Just for You
      </p>

      {/* service card */}

      <div className="grid grid-cols-3 gap-8 justify-between">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
