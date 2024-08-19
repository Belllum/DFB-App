import React, { useState } from "react";
import FormField from "./FormField";
import PrintFormData from "./PrintFormData";

const DynamicForm = ({ fields }) => {
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (name, value) => {
    // If the field is already an array (like for checkboxes), we handle it as an array.
    if (Array.isArray(formData[name])) {
      setFormData({
        ...formData,
        [name]: Array.isArray(value) ? value : [value], // Convert to array if not already
      });
    } else {
      // Otherwise, it's a single value field (like text, number, etc.)
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="card p-4 mt-4">
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div className="mb-3" key={index}>
            <label className="form-label">{field.label}</label>
            <FormField
              field={field}
              value={formData[field.label] || ""}
              onChange={(value) => handleChange(field.label, value)}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {isSubmitted && <PrintFormData formData={formData} />}
    </div>
  );
};

export default DynamicForm;
