"use client";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse, Skeleton } from "antd";
import { FaqType } from "@/types/FaQType";

type Props = {
  itemData: FaqType[];
  setData?: React.Dispatch<React.SetStateAction<any>>;
  size: "small" | "middle" | "large";
  isLoading?: boolean;
};

const FaqComponent = ({ itemData, setData, size, isLoading }: Props) => {
  const onChange = (key: string | string[]) => {
    console.log(key);
    setData && setData(key);
  };

  const items: CollapseProps["items"] = itemData;

  if (isLoading){
    return <Skeleton active />;
  }
    return (
      <div className="!w-full">
        <Collapse
          className="!w-full"
          items={items}
          defaultActiveKey={["1"]}
          onChange={onChange}
          size={size}
        />
      </div>
    );
};

export default FaqComponent;
