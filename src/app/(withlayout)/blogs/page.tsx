/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetBlogQuery } from "@/Redux/features/blogApi/blogApi";
import BlogCard from "@/components/BlogPage/blogCard";
import { IBlogType } from "@/types/BlogType";
import { Skeleton } from "antd";
import Link from "next/link";
import React from "react";

const BlogsPages = () => {
  const { data, isLoading } = useGetBlogQuery(undefined);

  if (isLoading) {
    return (
      <div className="common grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-[100px] h-screen ">
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </div>
    );
  }

  const [data1, ...allBlogData] = data;

  return (
    <section className="common">
      <div className="  md:p-6 p-2 mx-auto space-y-6 sm:space-y-12">
        <Link
          href={`/blogs/${data1?.blogId}`}
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 border-2 border-primary/20 hover:border-primary/80 rounded-xl "
        >
          <img
            src={data1?.blogImage}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 "
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {data1?.blogTitle}
            </h3>
            <span className="text-xs text-primary ">
              {new Date(data1?.createdAt!).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <p>
              {data1?.blogDescription.length > 280
                ? data1?.blogDescription.slice(0, 280) + "..."
                : data1?.blogDescription}
            </p>
          </div>
        </Link>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* card */}

          {allBlogData?.map((blog: IBlogType) => (
            <BlogCard key={blog.blogId} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPages;
