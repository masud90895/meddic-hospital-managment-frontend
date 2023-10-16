/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetBlogByIdQuery } from "@/Redux/features/blogApi/blogApi";
import { Skeleton } from "antd";
import React from "react";

const BlogDetails = ({ params }: any) => {
  const blogId = params?.blogId;
  const { data: singleBlog, isLoading: singleBlogLoading } =
    useGetBlogByIdQuery(blogId);
  console.log("🚀 ~ file: page.tsx:9 ~ BlogDetails ~ singleBlog:", singleBlog);

  if (singleBlogLoading) {
    return (
      <div className="flex items-center my-8 w-full">
        <Skeleton active />
      </div>
    );
  }

  return (
    <article
      className=" mx-auto common  mt-8"
      itemID="#"
      itemScope={true}
      itemType="http://schema.org/BlogPosting"
    >
      <div className="w-full mx-auto mb-12 text-left ">
        <img
          src={singleBlog?.blogImage}
          className="object-cover w-full  bg-center rounded-lg"
          alt={singleBlog?.blogTitle}
        />
        <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">
          Medical
        </p>
        <h1
          className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
          itemProp="headline"
          title={singleBlog?.blogTitle}
        >
          {singleBlog?.blogTitle}
        </h1>

        <div className="flex items-center text-gray-700">
          <div className="avatar">
            <img
              src={
                singleBlog?.profile?.profileImage ??
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt={singleBlog?.profile?.firstName}
              className="object-cover w-10 h-10 rounded-full shadow"
            />
          </div>
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-800">
              {singleBlog?.profile?.firstName +
                " " +
                singleBlog?.profile?.lastName}
            </p>
            <p className="text-sm text-gray-500">
              {new Date(singleBlog?.createdAt!).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto prose mb-[100px] ">
        <p className="text-[22px]">{singleBlog?.blogDescription}</p>
      </div>
    </article>
  );
};

export default BlogDetails;
