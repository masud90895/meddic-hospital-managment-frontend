"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import React from "react";

const AddFaq = () => {
  const submitHandler = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <h1 className="text-[25px] my-[12px] font-semibold">Add FAQ</h1>
      </div>

      <Form submitHandler={submitHandler}>
        <FormInput
          name="faqTitle"
          label="FAQ Title"
          placeholder="Enter FAQ Title"
          size="large"
          type="text"
          required={true}
        />
        <FormInput
          name="faqDescription"
          label="FAQ Description"
          placeholder="Enter FAQ Description"
          size="large"
          type="text"
          required={true}
        />

        <input
          type="submit"
          value="Submit"
          className="appointmentButton my-[20px] flex items-end justify-between"
        />
      </Form>
    </div>
  );
};

export default AddFaq;
