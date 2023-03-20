import React from "react";
import PropTypes from "prop-types";
import "./InputField.css";

export default function InputField({
  label,
  type,
  placeholder,
  onChange,
  value,
  name,
  error,
  icon,
  iconAlt,
  className,
  iconStart,
  ...props
}) {
  const isError = error[name];
  return (
    <div className={`mb-5 pb-1 ${className}`}>
      <label className="text-zinc-800 font-bold " htmlFor={name}>
        {label}
      </label>
      <div className={`relative flex ${iconStart ? "justify-start" : "justify-end"}`}>
        {icon && (
          <img
            src={icon}
            alt={iconAlt}
            className={`absolute bottom-4 ${iconStart ? "pl-2" : "pr-2"}`}
          />
        )}
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          className={`${isError ? "border-rose-600" : "border-zinc-300"} ${
            icon && iconStart && "indent-5"
          } border-solid border border-radius text-base outline-none font-normal p-2.5 w-full ${
            !iconStart && "pr-6"
          }`}
        />
      </div>
      {isError && <span className="text-rose-600">{error[name]}</span>}
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.objectOf(PropTypes.string),
  icon: PropTypes.string,
  iconAlt: PropTypes.string,
  className: PropTypes.string,
  iconStart: PropTypes.bool,
};
