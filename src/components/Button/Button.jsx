import React from "react";
import PropTypes from "prop-types";

export default function Button({ label, isSubmit, color, ...props }) {
  const buttonColor = color || "bg-green-500";
  return (
    <button className={`w-full rounded ${buttonColor} p-3.5`} type={isSubmit ? "submit" : "button"}>
      <span className="text-white font-bold text-lg">{label}</span>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  isSubmit: PropTypes.bool.isRequired,
  color: PropTypes.string,
};
