// components/fields/DateField.js
import React from "react";

const DateField = ({ label, onChange }) => (
  <input type="date" className="form-control" onChange={onChange} />
);

export default DateField;
