import Image from "next/image";
import React from "react";

const Apointment = () => {
  return (
    <div className="common md:flex gap-10 items-center mb-[60px]">
      <Image
        src="https://askproject.net/meddic/wp-content/uploads/sites/156/2023/10/team-of-doctors-discussing-something-at-hospital-c-FHAY6CS.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
        className="rounded-xl md:w-[550px] md:h-[660px] border-2 "
      />

      {/* FAQS */}
      <div className="font-inter my-[20px] md:my-0 flex flex-col h-[400px] justify-around md:w-[400px]">
        <p className="text-primary md:text-[20px] text-[16px] font-semibold">
          APPOINTMENT
        </p>
        <p className="font-poppins md:text-[45px] text-[35px] md:w-[550px]">
          Book Your Appointment
        </p>
        <p className="md:w-[500px] text-gray-[400px] font-poppins text-gray-500">
          The benefits of MEDDPICC are that it allows sellers to quickly qualify
          or disqualify opportunities.
        </p>
      </div>
    </div>
  );
};

export default Apointment;
