// components/fields/NumberField.js
import React from "react";

const NumberField = ({ label, onChange }) => (
  <input
    type="number"
    className="form-control"
    placeholder={label}
    onChange={onChange}
  />
);

export default NumberField;
