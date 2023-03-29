import React from "react";
import logo from "../assets/custodial-wallet.png";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <img src={logo} alt="custodial wallet logo" className="w-52" />
    </div>
  );
};

export default Navbar;
