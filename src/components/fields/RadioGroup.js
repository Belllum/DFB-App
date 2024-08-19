import React from "react";

const RadioGroup = ({ label, options, value, onChange }) => (
  <div>
    {/* <form> */}
    {options.map((option, index) => (
      <div key={index} className="form-check">
        <input
          type="radio"
          className="form-check-input"
          name={label}
          value={option}
          // checked={value === option}
          onChange={(e) => onChange(option)}
        />
        <label className="form-check-label">{option}</label>
      </div>
    ))}
    {/* </form> */}
  </div>
);

export default RadioGroup;
