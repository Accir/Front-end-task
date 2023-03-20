import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown/Dropdown";
import "./DatePicker.css";

export default function DatePicker({ label, value, onChange, error, name, ...props }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [day, setDay] = useState(null);
  const [dayArray, setDayArray] = useState([]);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setDayArray(
      [...Array(new Date(parseInt(year), parseInt(month) + 1, 0).getDate()).keys()].map(
        (i) => i + 1
      )
    );
    if (!isValidDate(year, month, day)) {
      setDay(new Date(year, month + 1, 1).getDate());
    }
  }, [month, year]);

  useEffect(() => {
    if (!(month + 1) || !year || !selected) {
      onChange(null);
    } else {
      const date = new Date(year, month, day);
      onChange(new Date(date.getTime() - date.getTimezoneOffset() * 60000));
    }
  }, [month, year, day]);

  const currentYear = new Date().getFullYear();
  const range = (start, stop, step) => {
    return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
  };

  const [yearArray, setYearArray] = useState(range(currentYear, currentYear - 50, -1));

  const isValidDate = (year, month, day) => {
    const date = new Date(year, month, day);
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
  };

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setYearArray(range(currentYear, currentYear - yearArray.length - 10, -1));
    }
  };

  const isError = error[name];

  return (
    <div className="mb-5">
      <label className="text-zinc-800 text-base font-bold pb-1">{label}</label>
      <div className="flex gap-2">
        <Dropdown
          value={month}
          values={monthNames}
          setValue={setMonth}
          isKeyValue={true}
          displayFunction={(value) => monthNames[value]}
          placeholder="Month"
          isError={isError}
        />
        <Dropdown
          value={day}
          values={dayArray}
          setValue={setDay}
          className="shrink-2"
          placeholder="Day"
          isError={isError}
          selectCallback={(e) => setSelected(e)}
        />
        <Dropdown
          value={year}
          values={yearArray}
          setValue={setYear}
          className="shrink-2"
          onScroll={handleScroll}
          placeholder="Year"
          isError={isError}
        />
      </div>
      {isError && <span className="text-rose-600">{error[name]}</span>}
    </div>
  );
}

DatePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  error: PropTypes.objectOf(PropTypes.string),
  name: PropTypes.string.isRequired,
};
