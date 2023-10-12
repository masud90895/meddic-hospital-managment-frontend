import { IServiceTypes } from "@/types/Service";
import React from "react";
import image1 from "../../../public/assists/Service/medicin.jpg";
import image2 from "../../../public/assists/Service/madical.jpg";
import image3 from "../../../public/assists/Service/checkoup.jpg";
import image4 from "../../../public/assists/Service/Consultation.jpg";
import image5 from "../../../public/assists/Service/ambulance.jpg";
import image6 from "../../../public/assists/Service/Health.jpg";

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

  return <div></div>;
};

export default Services;
