// components/fields/CheckboxGroup.js
import React from "react";

const CheckboxGroup = ({ label, options, onChange }) => (
  <div>
    {options.map((option, index) => (
      <div key={index} className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          value={option}
          onChange={() => onChange(option)}
        />
        <label className="form-check-label">{option}</label>
      </div>
    ))}
  </div>
);

export default CheckboxGroup;
