import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { RadioGroup as Radio } from "@headlessui/react";

export default function RadioGroup({ valueList, value, label, onChange, error, name, ...props }) {
  const [selected, setSelected] = useState(null);
  const isError = error[name];

  useEffect(() => {
    if (!value) {
      setSelected(false);
    }
  });

  return (
    <div className="mb-5">
      <label className="text-zinc-800 text-base font-bold pb-1" htmlFor={name}>
        {label}
      </label>
      <Radio
        value={selected}
        onChange={(value) => {
          setSelected(value);
          onChange(value);
        }}
        className="flex gap-2"
      >
        {valueList.map((item, key) => (
          <Radio.Option
            key={key}
            value={item.value}
            className={`${
              isError ? "border-rose-600" : "border-zinc-300"
            } w-full border rounded text-base cursor-pointer`}
          >
            {({ checked }) => (
              <div
                className={`${
                  checked && "bg-custom-blue font-medium rounded text-white"
                } flex gap-2 items-center p-2.5`}
              >
                <div
                  className={`${
                    checked
                      ? "w-4 h-4 border bg-white rounded-full"
                      : "w-4 h-4 border border-zinc-300 rounded-full"
                  } flex items-center justify-center`}
                >
                  <div
                    className={`${!checked && "hidden"} w-2 h-2 bg-custom-blue rounded-full`}
                  ></div>
                </div>
                <div>{item.label}</div>
              </div>
            )}
          </Radio.Option>
        ))}
      </Radio>
      {isError && <span className="text-rose-600">{error[name]}</span>}
    </div>
  );
}

RadioGroup.propTypes = {
  valueList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  error: PropTypes.objectOf(PropTypes.string),
};
