/* eslint-disable @next/next/no-img-element */
import { Dropdown, MenuProps, Rate } from "antd";
import React from "react";
import { DashOutlined, DeleteOutlined } from "@ant-design/icons";

type IReview = {
  name: string;
  email: string;
  rating: number;
  review: string;
  createdAt: string;
  image: string;
  category: string;
};

const items: MenuProps["items"] = [
  {
    key: "3",
    label: (
      <button>
        <DeleteOutlined />
      </button>
    ),
  },
];

const ReviewCard = ({ review }: any) => {
  return (
    <div className="bg-white w-full max-w-sm  flex-shrink-0 shadow-xl rounded-2xl border">
      <div className="flex items-center justify-between py-4 px-8 bg-gray-200 rounded-t-2xl  bg-opacity-50 ">
        <div className="text-sm font-semibold flex items-center ">
          <img
            className="w-12 h-12 rounded-full object-cover mr-4 shadow"
            src={review?.image}
            alt="avatar"
          />
          <div className="mr-auto text-[18px] font-medium">
            <p className="text-gray-900 leading-none">{review?.name}</p>
            <p className="text-gray-600">{review?.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-sm text-gray-400 font-medium">
            {review?.createdAt}
          </p>
          <Dropdown menu={{ items }} placement="bottomLeft" arrow>
            <DashOutlined />
          </Dropdown>
        </div>
      </div>
      <div className="flex flex-col justify-between   p-8 bg-white overflow-hidden rounded-b-2xl">
        <div className="mb-6 text-sm text-gray-700 leading-loose h-[100px]">
          {review?.review}
        </div>

        <div>
          <p className="mr-6 text-xl font-heading font-semibold flex items-center gap-5">
            {review?.rating}
            <Rate disabled defaultValue={review?.rating} />
          </p>

          <p className="inline-flex justify-between mt-[12px] gap-2 items-center h-10 py-2 px-4 mb-2 bg-green-100 border-2 border-green-500 rounded-full text-sm text-green-500 font-heading font-medium">
            <span className="flex w-6 h-6 items-center justify-center bg-white rounded-full text-green-500">
              +
            </span>
            {review?.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
