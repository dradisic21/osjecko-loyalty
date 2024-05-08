import React from "react";

export function Textarea(props) {
  return (
    <label className="block">
      {props.label && <span className="block mb-2">{props.label}</span>}
      <div className="relative">
        <textarea
          rows={props.rows || 4} 
          cols={props.cols || 50} 
          placeholder={props.placeholder || "Napiši problem..."} 
          value={props.value}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          className={`block w-full bg-primary-250 pl-10p focus:border-none outline-none`}
        />
      </div>
    </label>
  );
}
