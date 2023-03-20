import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { CHECKOUT_PATH } from "../../util/paths";

export default function Landing() {
  return (
    <>
      <Link to={CHECKOUT_PATH}>
        <Button label="Proceed to checkout" />
      </Link>
    </>
  );
}
