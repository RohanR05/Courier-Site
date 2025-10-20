import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      {" "}
      <div className="flex items-end">
        <img className="mb-2" src={logo} alt="" />
        <p className="text-3xl text-secondary -ml-3 font-bold">
          Pro<span className="text-primary">Fast</span>
        </p>
      </div>
    </Link>
  );
};

export default Logo;
