import { IBlogType } from "@/types/BlogType";
import Image from "next/image";
import React from "react";

type Props = {
  blog: IBlogType;
};

const BlogCard = ({ blog }: Props) => {
  return (
    <div className="border border-borderColor rounded-xl w-[500px]">
      <Image
        src={blog.blogImage}
        alt="Picture of the author"
        width={500}
        height={500}
        className="rounded-xl md:w-[550px] md:h-[660px] border-2 "
      />
    </div>
  );
};

export default BlogCard;
