"use client";

import { IBlogType } from "@/types/BlogType";
import React from "react";
import BlogCard from "./blogCard";
import { useGetBlogQuery } from "@/Redux/features/blogApi/blogApi";
import { Skeleton } from "antd";
import Link from "next/link";

const BlogPage = () => {
  const { data, isLoading } = useGetBlogQuery(undefined);

  if (isLoading) {
    return (
      <div className="common grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 ">
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </div>
    );
  }

  const blogData = data?.slice(0, 3);
  return (
    <div className="common mb-[60px]">
      {/* blog news */}

      <div className="w-full flex justify-between items-center mb-[100px]">
        <div>
          <p className="text-primary md:text-[20px] text-[16px] font-semibold">
            BLOG NEWS
          </p>
          <p className="font-poppins md:text-[45px] text-[35px] md:w-[550px]">
            Articles From Meddic
          </p>
        </div>
        <Link href={"/blogs"}>
          <button className="appointmentButton">More Article</button>
        </Link>
      </div>

      {/* blogs */}

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 ">
        {blogData?.map((blog: IBlogType) => (
          <BlogCard key={blog.blogId} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
