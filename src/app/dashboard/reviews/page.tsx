"use client";
import { useGetMyReviewsQuery } from "@/Redux/features/RatingApi/RatingApi";
import Skeleton from "@/components/Loader/Skeleton";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { IReview } from "@/types/reviewsType";
import { Empty } from "antd";
import React from "react";

const Reviews = () => {
  const { data, isLoading } = useGetMyReviewsQuery(undefined);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className="container rounded bg-white mt-1 mb-5 p-4 font-inter">
      <UMBreadCrumb
        items={[
          {
            label: "user",
            link: "/user",
          },
          {
            label: "booking-Lists",
            link: "/user/user-reviews",
          },
        ]}
      />
      <h3
        className="mt-8 mb-4 text-xl md:text-2xl xl:text-4xl   font-medium leading-tight
      "
      >
        My All Reviews
      </h3>

      <div className="inline-block py-2 px-8 mb-16 text-white bg-indigo-500 rounded-full font-semibold">
        {data?.length} Reviews
      </div>

      <div className="grid grid-cols-4  justify-between gap-3">
        {data?.length > 0 ? (
          data?.map((review: IReview, index: number) => (
            <ReviewCard key={index} review={review} />
          ))
        ) : (
          <Empty description="No Reviews Added" />
        )}
        {/* {reviews?.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))} */}
      </div>
    </div>
  );
};

export default Reviews;
