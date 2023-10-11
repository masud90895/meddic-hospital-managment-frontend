import Image from "next/image";
import React from "react";
import Logo from "/public//assists/logo_Asset-1-1.png";

const Navbar = () => {
  return (
    <div className="py-[16px] ">
      <Image src={Logo} alt="" width={130} height={284} />
    </div>
  );
};

export default Navbar;
