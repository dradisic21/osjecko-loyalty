import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import hrLocale from "date-fns/locale/hr";
import "../styles/DateInput.scss";

export function DateInput({ value, onChange, label, error }) {
  const [selectedDate, setSelectedDate] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(!value);
  const hasError = error && error.length > 0;

  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1).toISOString().split("T")[0];
      setSelectedDate(date);
      onChange(formattedDate);
      setIsEmpty(false);
    } else {
      setSelectedDate(null);
      onChange("");
      setIsEmpty(true);
    }
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    e.target.readOnly = true;
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const labelClassName = `absolute ${
    isFocused || !isEmpty
      ? "transition-all text-14p font-inter -top-10p left-20p text-labelName px-4p bg-transparent shadow-custom-input z-1"
      : "transition-all text-18p leading-25p font-inter top-16p left-28p text-primary-black z-1"
  }`;

  const inputClassName = `border rounded-6p w-full py-2 h-60p pl-8p ${
    hasError && !isFocused && isEmpty
      ? "border-primary-500 focus:border-primary-500"
      : "border-borderColor focus:border-borderInput outline-none"
  }`;

  return (
    <div className={`relative px-10p ${hasError ? "border-primary-500" : ""}`}>
      <label
        className={`
            ${labelClassName}
            ${hasError && !isFocused && isEmpty ? "text-red-500" : ""}
          `}
        htmlFor="dateField"
      >
        {label}
      </label>
      <DatePicker
        id="dateField"
        selected={selectedDate}
        onChange={handleDateChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        dateFormat="dd/MM/yyyy"
        showMonthDropdown={true}
        showYearDropdown={true}
        scrollableYearDropdown
        yearDropdownItemNumber={100}
        maxDate={new Date()}
        locale={hrLocale}
        className={`z-99999 ${inputClassName}`}
        onKeyDown={(e) => {
          if ((e.key >= '0' && e.key <= '9') || (e.key >= 'a' && e.key <= 'z') || (e.key >= 'A' && e.key <= 'Z')) {
            e.preventDefault();
          }
      }}
      />
      {error && (
        <div className="text-red-500 text-12p leading-16p">
          <p>{error[0]}</p>
        </div>
      )}
    </div>
  );
}
