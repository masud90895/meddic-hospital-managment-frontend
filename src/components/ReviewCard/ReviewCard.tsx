"use client";
/* eslint-disable @next/next/no-img-element */
import { Dropdown, MenuProps, Rate, message } from "antd";
import React from "react";
import { DashOutlined, DeleteOutlined } from "@ant-design/icons";
import { IReview } from "@/types/reviewsType";
import { useDeleteReviewMutation } from "@/Redux/features/RatingApi/RatingApi";
import { Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

const { confirm } = Modal;

const ReviewCard = ({ review }: { review: IReview }) => {
  const [deleteReview] = useDeleteReviewMutation();
  const handleDelete = async (id: string) => {
    confirm({
      title: "Do you Want to delete these Review?",
      icon: <ExclamationCircleFilled />,
      content: "If you delete this review it will be deleted permanently.",
      async onOk() {
        try {
          const res = await deleteReview(id).unwrap();
          if (res?.data?.success) {
            message.success("Review Deleted Successfully");
          }
        } catch (error: any) {
          console.error(error);
          message.error(error?.data?.message);
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
    await deleteReview(id).unwrap();
  };

  const items: MenuProps["items"] = [
    {
      key: "3",
      label: (
        <button onClick={() => handleDelete(review?.reviewId)}>
          <DeleteOutlined />
        </button>
      ),
    },
  ];

  return (
    <div className="bg-white w-full max-w-sm  flex-shrink-0 shadow-xl rounded-2xl border">
      <div className="flex items-center justify-between py-4 px-8 bg-gray-200 rounded-t-2xl  bg-opacity-50 ">
        <div className="text-sm font-semibold flex items-center ">
          <img
            className="w-12 h-12 rounded-full object-cover mr-4 shadow"
            src={
              review?.profile?.profileImage ??
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfHVThC6NDvAo7W_aBedFmduYaNv6oXl-5T0lykgFHRoznpF85SfTb5c17nw9LqJVY94&usqp=CAU"
            }
            alt="avatar"
          />
          <div className="mr-auto text-[18px] font-medium">
            <p className="text-gray-900 leading-none">
              {review?.profile?.firstName + "" + review?.profile?.lastName}
            </p>
            <p className="text-xs text-gray-400 ">
              {new Date(review?.createdAt!).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Dropdown menu={{ items }} placement="bottomLeft" arrow>
            <DashOutlined />
          </Dropdown>
        </div>
      </div>
      <div className="flex flex-col justify-between   p-8 bg-white overflow-hidden rounded-b-2xl">
        <div className="mb-6 text-sm text-gray-700 leading-loose h-[100px]">
          {review?.reviewComment}
        </div>

        <div>
          <p className="mr-6 text-xl font-heading font-semibold flex items-center gap-5">
            <Rate disabled defaultValue={Number(review?.reviewRating)} />
          </p>

          <p className="inline-flex justify-between mt-[12px] gap-2 items-center h-10 py-2 px-4 mb-2 bg-green-100 border-2 border-green-500 rounded-full text-sm text-green-500 font-heading font-medium">
            <span className="flex w-auto h-6 items-center justify-center bg-white rounded-full text-green-500">
              +
            </span>
            {review?.service?.serviceName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
