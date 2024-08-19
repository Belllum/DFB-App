// components/fields/TextField.js
import React from "react";

const TextField = ({ label, onChange }) => (
  <input
    type="text"
    className="form-control"
    placeholder={label}
    onChange={onChange}
  />
);

export default TextField;
