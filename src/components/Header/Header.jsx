import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { BASE_PATH } from "../../util/paths";

export default function Header() {
  return (
    <header className="bg-custom-dark w-full p-5">
      <Link to={BASE_PATH}>
        <img src={logo} alt="Logo" className="m-auto" />
      </Link>
    </header>
  );
}
