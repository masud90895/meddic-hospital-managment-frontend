/* eslint-disable @next/next/no-img-element */
"use client";
import {
  useGetBlogByIdQuery,
  useGetBlogQuery,
} from "@/Redux/features/blogApi/blogApi";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { IBlogType } from "@/types/BlogType";
import { Skeleton } from "antd";
import Link from "next/link";
import React from "react";

const BlogDetails = ({ params }: any) => {
  const blogId = params?.blogId;
  const { data: singleBlog, isLoading: singleBlogLoading } =
    useGetBlogByIdQuery(blogId);

  const { data, isLoading } = useGetBlogQuery(undefined);

  if (singleBlogLoading) {
    return (
      <div className="flex items-center my-8 w-full common">
        <Skeleton active />
      </div>
    );
  }

  const filterBlog = data?.filter((blog: IBlogType) => blog.blogId !== blogId);

  return (
    <div className="common">
      <div className="my-5">
        <UMBreadCrumb
          items={[
            { label: `Blog`, link: `/blogs` },
            { label: "Blog Details", link: `` },
          ]}
        />
      </div>

      <section className=" px-5 py-10 bg-gray-100 text-gray-800">
        <div className=" grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
          <article className=" md:col-span-8 col-span-12">
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
                    {new Date(singleBlog?.createdAt!).toLocaleDateString(
                      "en-US",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full mx-auto prose mb-[100px] ">
              <p className="text-[22px]">{singleBlog?.blogDescription}</p>
            </div>
          </article>

          {/* site bar */}
          <div className="hidden py-2 xl:col-span-4 lg:col-span-4 md:hidden lg:block sticky top-0 h-screen">
            <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-violet-600">
              <button
                type="button"
                className="pb-5 text-xs font-bold uppercase border-b-2 border-violet-600"
              >
                Latest
              </button>
              <button
                type="button"
                className="pb-5 text-xs font-bold uppercase border-b-2 border-transparent text-gray-600"
              >
                Popular
              </button>
            </div>
            <div className="flex flex-col divide-y divide-gray-300">
              {isLoading || !filterBlog ? (
                <div className="flex flex-col gap-3">
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </div>
              ) : (
                filterBlog?.map((blog: IBlogType) => (
                  <Link
                    href={`/blogs/${blog?.blogId}`}
                    className="flex px-1 py-4"
                    key={blog?.blogId}
                  >
                    <img
                      alt=""
                      className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                      src={blog?.blogImage}
                    />
                    <div className="flex flex-col flex-grow">
                      <p className="font-serif hover:underline">
                        {blog?.blogTitle?.length > 30
                          ? blog?.blogTitle?.slice(0, 30) + "..."
                          : blog?.blogTitle}
                      </p>

                      <p className="text-[12px]">
                        {blog?.blogDescription?.length > 60
                          ? blog?.blogDescription?.slice(0, 60) + "..."
                          : blog?.blogDescription}
                      </p>

                      <div className="mt-auto text-xs text-gray-600 flex ">
                        {/* <p>5 minutes ago</p> */}
                        {new Date(blog?.createdAt!).toLocaleDateString(
                          "en-US",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}

                        <p className="block text-blue-400 lg:ml-2 lg:inline hover:underline">
                          Medical
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
