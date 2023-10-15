import ReviewCard from "@/components/ReviewCard/ReviewCard";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import React from "react";

type IReview = {
  name: string;
  email: string;
  rating: number;
  review: string;
  createdAt: string;
  image: string;
  category: string;
};

const Reviews = () => {
  const reviews: IReview[] = [
    {
      name: "Masud",
      email: "masud@gmail.com",
      rating: 5.0,
      review: "This is a good course",
      createdAt: "12/12/12",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      category: "React",
    },
    {
      name: "Masud2",
      email: "masud2@gmail.com",
      rating: 4.2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae facere magnam, sed error obcaecati iure nobis nesciunt iste,.",
      createdAt: "12/12/12",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      category: "React",
    },
  ];

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
        {reviews?.length} Reviews
      </div>

      <div className="grid grid-cols-4 justify-between">
        {reviews?.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
