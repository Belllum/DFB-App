import React, { useState } from "react";
import TextField from "./fields/TextField";
import NumberField from "./fields/NumberField";
import CheckboxGroup from "./fields/CheckboxGroup";
import RadioGroup from "./fields/RadioGroup";
import DateField from "./fields/DateField";

const FormField = ({ field, onChange }) => {
  const [checkboxValues, setCheckboxValues] = useState([]);

  const handleInputChange = (e) => {
    let value;
    if (field.type === "radio") {
      value = e.target.value;
    } else {
      value = e.target.value;
    }

    onChange(value);
  };

  const handleCheckboxChange = (option) => {
    let updatedValues = [...checkboxValues];
    if (updatedValues.includes(option)) {
      updatedValues = updatedValues.filter((value) => value !== option);
    } else {
      updatedValues.push(option);
    }
    setCheckboxValues(updatedValues);
    onChange(updatedValues);
  };

  const handleRadioChange = (option) => {
    console.log(option);
    onChange(option);
  };
  switch (field.type) {
    case "text":
      return <TextField label={field.label} onChange={handleInputChange} />;
    case "number":
      return <NumberField label={field.label} onChange={handleInputChange} />;
    case "checkbox":
      return (
        <CheckboxGroup
          label={field.label}
          options={field.options}
          onChange={handleCheckboxChange}
        />
      );
    case "radio":
      return (
        <RadioGroup
          label={field.label}
          options={field.options}
          onChange={handleRadioChange}
        />
      );
    case "date":
      return <DateField label={field.label} onChange={handleInputChange} />;
    default:
      return null;
  }
};

export default FormField;
