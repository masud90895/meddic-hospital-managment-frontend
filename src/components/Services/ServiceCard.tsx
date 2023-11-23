import { addToCart } from "@/Redux/features/addToCartSlice/addToCartSlice";
import { useAppDispatch } from "@/Redux/hook";
import { IServiceTypes } from "@/types/Service";
import { Rate, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ServiceCardProps = {
  service: IServiceTypes;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  let rating = 0;

  if (service?.reviewAndRatings && service?.reviewAndRatings?.length > 0) {
    for (const review of service?.reviewAndRatings) {
      rating += Number(review.reviewRating);
    }
  }

  const dispatch = useAppDispatch();

  const handleAddToCart = (addedService: IServiceTypes) => {
    dispatch(addToCart(addedService));
    message.success("Service added to cart");
  };

  return (
    <div
      className="
    bg-blue-50/75 
    border 
    rounded-xl 
     flex flex-col
      gap-3 
      font-inter 
      hover:border-primary 
      ease-in
       duration-100 
       delay-75 
       transform  
        transition-all
        hover:shadow-lg
        cursor-pointer
        hover:scale-105


       "
    >
      <Image
        alt={service?.serviceName}
        src={service?.serviceImage}
        height={180}
        width={180}
        className="bg-white w-full h-[150px] rounded-t-xl "
      />

      <div className="p-[20px] flex flex-col gap-3 justify-between h-full">
        <div className="flex justify-between gap-1 items-center">
          <p className="text-[22px] font-semibold text-gray-700">
            {service?.serviceName}
          </p>

          <p className="bg-[#6d74dd] rounded-full p-1 text-[12px] text-white">
            {service?.serviceStatus}
          </p>
        </div>

        <p className="text-gray-500 font-roboto text-[12px]">
          {service?.description?.length > 80
            ? service?.description.slice(0, 80) + "..."
            : service?.description}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-[18px] font-inter font-semibold">
            ৳{service?.servicePrice}
          </p>
          <p className="bg-[#7f85e2] text-white p-1 rounded-full text-[12px]">
            {service?.category?.categoryName}
          </p>
        </div>

        <p className="text-[12px]">{service?.location}</p>
        <p className="text-xs">reviews: {service?.reviewAndRatings?.length}</p>

        {rating > 0 && (
          <div>
            <Rate
              value={rating / service?.reviewAndRatings?.length!}
              disabled
            />
          </div>
        )}

        {/* add to card */}

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleAddToCart(service)}
            className="bg-primary text-white px-3 py-1 rounded-full text-[12px]"
          >
            Add to cart
          </button>
          <Link
            href={`services/${service?.serviceId}`}
            className="bg-white text-primary px-3 py-1 rounded-full text-[12px] border border-primary"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
