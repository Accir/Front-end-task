import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import PropTypes from "prop-types";
import arrows from "../../assets/images/arrows.svg";

export default function Dropdown({
  value,
  setValue,
  displayFunction,
  values,
  className,
  isKeyValue,
  onScroll,
  placeholder,
  isError,
  selectCallback,
  ...props
}) {
  const [selected, setSelected] = useState(false);

  return (
    <Listbox
      value={value}
      onChange={(value) => {
        setValue(value);
        setSelected(true);
        selectCallback && selectCallback(true);
      }}
      as="div"
      className={`relative w-full ${className}`}
    >
      <Listbox.Button
        className={`${
          isError ? "border-rose-600" : "border-zinc-300"
        } rounded border text-base text-left outline-none font-normal p-2.5 w-full flex justify-between items-center`}
      >
        {placeholder && !selected ? (
          <span className="text-zinc-500">{placeholder}</span>
        ) : displayFunction ? (
          displayFunction(value)
        ) : (
          value
        )}
        <img src={arrows} alt="Arrows" className="pl-4" />
      </Listbox.Button>
      <Listbox.Options
        className="border border-zinc-300 rounded mt-1 absolute bg-white w-full max-h-40 overflow-y-scroll overflow-x-hidden z-10"
        onScroll={onScroll}
      >
        {values.map((item, key) => (
          <Listbox.Option
            key={key}
            value={isKeyValue ? key : item}
            className="cursor-pointer select-none hover:bg-zinc-300"
          >
            {({ selected }) => (
              <div className={`${selected && "bg-zinc-300"} py-1 pl-1`}>{item}</div>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

Dropdown.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setValue: PropTypes.func.isRequired,
  displayFunction: PropTypes.func,
  values: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  className: PropTypes.string,
  isKeyValue: PropTypes.bool,
  onScroll: PropTypes.func,
  placeholder: PropTypes.string,
  isError: PropTypes.string,
  selectCallback: PropTypes.func,
};
