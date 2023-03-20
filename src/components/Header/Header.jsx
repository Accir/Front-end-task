import React from "react";
import logo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <header className="bg-custom-dark w-full p-5">
      <img src={logo} alt="Logo" className="m-auto" />
    </header>
  );
}
