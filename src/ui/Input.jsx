import React, { useState, useEffect, useRef } from "react";
import "../styles/Input.scss";

export function Input(props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(!props.value);
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [labelWidth, setLabelWidth] = useState(0);
  const labelRef = useRef(null);

  useEffect(() => {
    if (labelRef.current) {
      setLabelWidth(labelRef.current.offsetWidth);
    }
  }, [props.label]);

  const isTelType = props.type === "tel";
  const isCheckbox = props.type === "checkbox";
  const inputValue = props.disabled ? props.defaultValue : props.value || "";
  const hasError = props.error && props.error.length > 0;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (props.setError) {
      props.setError("");
    }
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    setIsEmpty(e.target.value === "");
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  const handleChange = (e) => {
    setIsEmpty(e.target.value === "");
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const labelClassName = `absolute ${
    props.disabled
      ? "text-14p font-inter -top-10p left-15p text-gray-400 z-1 shadow-none"
      : `transition-all ${
          isFocused || !isEmpty || inputValue 
            ? "text-14p font-inter -top-10p left-15p text-labelName px-4p z-99"
            : "text-18p leading-25p font-inter top-16p left-20p text-primary-black"
        } ${isTelType && !isFocused && isEmpty && !inputValue ? "pl-50p" : ""}`
  }`;

  const inputClassName = `border rounded-6p py-2 max-w-360p ${
    isTelType ? "pl-70p" : "pl-8p"
  } ${
    isCheckbox ? "w-30p h-30p" : "w-full h-60p"
  } pr-8 focus:outline-none font-inter text-18p ${
    hasError && !props.disabled && !isFocused && isEmpty
      ? "border-primary-500 focus:border-primary-500"
      : "border-borderColor focus:border-borderInput "
  } ${props.disabled ? "text-gray-400 bg-white" : ""}`;

  const checkboxClassName = `border ${
    isChecked
      ? "border-borderInput"
      : hasError && !props.disabled && !isFocused && isEmpty
        ? "border-primary-500 focus:border-primary-500"
        : ""
  }`;


  let adjustedWidth = labelWidth < 60 ? 60 : labelWidth - 2;

  return (
    <div className={`relative px-10p ${hasError ? "border-primary-500" : ""}`}>
      {isCheckbox ? (
        <input
          type="checkbox"
          name={props.name}
          checked={isChecked}
          onChange={handleCheckboxChange || props.onChange}
          className={checkboxClassName}
          placeholder=""
          disabled={props.disabled || false}
        />
      ) : (
        <div className="relative">
          <label
            className={`
            ${labelClassName}
            ${
              hasError && !props.disabled && !isFocused && isEmpty
                ? "text-red-500"
                : ""
            }
          `}
            htmlFor="inputField"
            style={{ pointerEvents: props.disabled ? "auto" : "none" }}
          >
            <span ref={labelRef}>{props.label}</span>
          </label>
          {isTelType && (
            <span className="absolute top-32p left-0 transform -translate-y-2/4 h-30p text-18p font-inter text-primary-black border-r border-borderColor px-3">
              +385
            </span>
          )}

          {props.disabled && (
            <img
              src="/assets/icons/lock.svg"
              alt="lock"
              className="absolute top-2/4 right-4 transform -translate-y-2/4 focus:outline-none"
            />
          )}
          <input
            name={props.name}
            type={
              props.type === "password" && !showPassword
                ? "password"
                : props.type === "number"
                ? "number"
                : "text"
            }
            disabled={props.disabled || false}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={inputValue}
            className={`${inputClassName}`}
            placeholder=""
            maxLength={props.maxLength}
            autoComplete={props.autoComplete}
          />
          <div className="group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none">
            <div className="pointer-events-none  box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem] border-neutral-300 dark:border-neutral-600"></div>
            <div
              className={`pointer-events-none box-border bg-transparent transition-all duration-100 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%)] ${
                isFocused || !isEmpty || props.disabled ? "h-full" : ""
              } border-r-0 border-l-0 border-neutral-300 dark:border-neutral-600 ${
                isFocused ? "border-t-1 border-white z-2" : ""
              }`}
              style={{
                width:
                  isFocused || props.disabled || !isEmpty
                    ? `${adjustedWidth}px`
                    : "100%",
                maxWidth:
                  isFocused || props.disabled || !isEmpty
                    ? `${adjustedWidth}px`
                    : "100%",
                borderTop:
                  isFocused || !isEmpty || props.disabled
                    ? "1px solid white"
                    : "",
              }}
            ></div>

            <div className="pointer-events-none  box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem] border-neutral-300 dark:border-neutral-600"></div>
          </div>
          {props.type === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-2/4 right-4 transform -translate-y-2/4 focus:outline-none"
            >
              {showPassword ? (
                <img src="/assets/icons/eye-off.svg" alt="eye-off" />
              ) : (
                <img src="/assets/icons/eye.svg" alt="eye" />
              )}
            </button>
          )}
        </div>
      )}
      {hasError && !props.disabled && !isFocused && (
        <div className="text-red-500 text-12p leading-16p">
          <p>{props.error[0]}</p>
        </div>
      )}
    </div>
  );
}
