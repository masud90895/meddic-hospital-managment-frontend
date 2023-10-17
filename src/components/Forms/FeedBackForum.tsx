"use client";
import React from "react";
import Form from "./Form";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import { Button } from "antd";

const FeedBackForum = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section className="text-gray-600 body-font relative  ">
      <div className="absolute inset-0 bg-indigo-100 ">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187905555!2d90.33728821510793!3d23.780975728070462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2z4Kai4Ka-4KaV4Ka-!5e0!3m2!1sbn!2sbd!4v1697518047346!5m2!1sbn!2sbd"
          style={{
            filter: "grayscale(1) contrast(1.2) opacity(0.4)",
          }}
        ></iframe>
      </div>

      <Form submitHandler={handleSubmit}>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-[52%] w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-xl mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600 text-[14px]">
              Medic Need your feedback to improve our service. Please give us
            </p>

            <FormInput
              name="feedbackSubject"
              label="Subject"
              placeholder="Enter Subject"
              type="text"
              required
            />

            {/* <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                data-gramm="false"
                wt-ignore-input="true"
              ></textarea>
              InFormIn
            </div> */}

            <FormTextArea
              name="feedbackDescription"
              label="Message"
              placeholder="Enter Message"
              required
              rows={10}
            />

            <Button
              htmlType="submit"
              type="primary"
              className="text-white mt-[8px] bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              style={{
                background: "#3F51B5",
                color: "#fff",
              }}
            >
              Button
            </Button>
            <p className="text-xs text-gray-500 mt-3">
              Medic provide free Hospital Services for clinics and health care
              providers.
            </p>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default FeedBackForum;
