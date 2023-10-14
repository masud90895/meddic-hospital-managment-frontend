/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "./profile.css";
import InputField from "@/components/InputField/InputField";
import UploadImage from "@/components/ui/UploadImage";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";

const Profile = () => {
  const [isEdit, setIsEdit] = React.useState(false);

  const adminOnSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    // message.loading("Creating...");
    try {
      // const res = await addFacultyWithFormData(formData);
      // if (!!res) {
      //   message.success("Faculty created successfully!");
      // }
    } catch (err: any) {
      // console.error(err.message);
    }
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <Form submitHandler={adminOnSubmit}>
        <div className="md:grid grid-cols-3 gap-4">
          <div className="col-span-1 border-r">
            <div className="flex flex-col items-center text-center p-3 py-5">
              {isEdit ? (
                <UploadImage name="file" />
              ) : (
                <img
                  className="rounded-full mt-5 w-60"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  alt="profile"
                />
              )}

              <span className="font-bold mt-5">Md Masud Rana</span>
              <span className="text-gray-500">
                masudhossainmbs129@gmail.com
              </span>
            </div>
          </div>
          <div className="col-span-2 border-r">
            <div className="p-3 py-5">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-right text-[22px] font-semibold">
                  Profile Settings
                </h4>
                <div className="mt-5 text-center">
                  {isEdit ? (
                    <button
                      // onClick={() => setIsEdit(!isEdit)}
                      className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                      type="submit"
                    >
                      Save Profile
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsEdit(!isEdit)}
                      className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                      type="button"
                    >
                      Edit Profile
                    </button>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* first name */}
                <FormInput
                  label="First Name"
                  placeholder="first name"
                  type="text"
                  required
                  name="name.firstName"
                  disabled={!isEdit}
                  size="large"
                />

                {/* last name */}
                <FormInput
                  label="Last Name"
                  placeholder="last name"
                  type="text"
                  disabled={!isEdit}
                  size="large"
                  required
                  name="name.lastName"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 mt-3">
                <FormInput
                  label="Mobile Number"
                  placeholder="Enter phone number"
                  type="text"
                  disabled={!isEdit}
                  size="large"
                  required
                  name="phone"
                />

                {/* Address */}
                <FormInput
                  label="Address Line 1"
                  placeholder="Enter address line 1"
                  type="text"
                  disabled={!isEdit}
                  size="large"
                  required
                  name="address"
                />

                {/* Postcode */}
                <FormInput
                  label="Postcode"
                  placeholder="Enter postcode"
                  type="number"
                  disabled={!isEdit}
                  size="large"
                  required
                  name="postcode"
                />

                {/* State */}
                <FormInput
                  label="State"
                  placeholder="Enter state"
                  type="text"
                  disabled={!isEdit}
                  size="large"
                  required
                  name="state"
                />

                {/* Area */}
                <FormInput
                  label="Area"
                  placeholder="Enter area"
                  type="text"
                  disabled={!isEdit}
                  size="large"
                  required
                  name="area"
                />

                {/* <label className="block text-gray-700 font-bold mb-2">
                Email ID
              </label>
              <input
                type="text"
                className="form-input mt-1 block w-full"
                placeholder="Enter email id"
                value=""
              /> */}
              </div>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="col-span-1">
                  {/* <label className="block text-gray-700 font-bold mb-2">
                  Country
                </label>
                <input
                  type="text"
                  className="form-input mt-1 block w-full"
                  placeholder="country"
                  value=""
                /> */}
                  {/* country */}
                  <FormInput
                    label="Country"
                    placeholder="Enter country"
                    type="text"
                    disabled={!isEdit}
                    size="large"
                    required
                    name="country"
                  />
                </div>
                <div className="col-span-1">
                  {/* <label className="block text-gray-700 font-bold mb-2">
                  State/Region
                </label>
                <input
                  type="text"
                  className="form-input mt-1 block w-full"
                  value=""
                  placeholder="state"
                /> */}
                  {/* State/Region */}
                  <FormInput
                    label="State/Region"
                    placeholder="Enter state/region"
                    type="text"
                    disabled={!isEdit}
                    size="large"
                    required
                    name="state"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Profile;
