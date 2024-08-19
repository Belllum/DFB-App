// components/FormBuilder.js
import React, { useState } from "react";

const FormBuilder = ({ onFormBuild }) => {
  const [fields, setFields] = useState([]);
  const [field, setField] = useState({ label: "", type: "text", options: [] });
  const [option, setOption] = useState("");

  const addField = () => {
    setFields([...fields, field]);
    setField({ label: "", type: "text", options: [] });
  };

  const addOption = () => {
    if (field.type === "checkbox" || field.type === "radio") {
      setField({
        ...field,
        options: [...field.options, option],
      });
      setOption("");
    }
  };

  const deleteOption = (optionIndex) => {
    const updatedOptions = field.options.filter(
      (_, index) => index !== optionIndex
    );
    setField({ ...field, options: updatedOptions });
  };

  const deleteField = (fieldIndex) => {
    const updatedFields = fields.filter((_, index) => index !== fieldIndex);
    setFields(updatedFields);
  };

  const buildForm = () => {
    onFormBuild(fields);
  };

  return (
    <div className="card p-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Field Label"
          value={field.label}
          onChange={(e) => setField({ ...field, label: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          value={field.type}
          onChange={(e) => setField({ ...field, type: e.target.value })}
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="checkbox">Checkbox</option>
          <option value="radio">Radio</option>
          <option value="date">Date</option>
          {/* Add more field types as needed */}
        </select>
      </div>
      {(field.type === "checkbox" || field.type === "radio") && (
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Option"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-secondary mt-2"
            onClick={addOption}
          >
            Add Option
          </button>
          <div className="mt-3">
            {field.options.map((opt, index) => (
              <div key={index} className="d-flex justify-content-between">
                <span>{opt}</span>
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteOption(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <button type="button" className="btn btn-primary" onClick={addField}>
        Add Field
      </button>
      <div className="mt-3">
        <h5>Form Fields:</h5>
        <ul className="list-group">
          {fields.map((f, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
            >
              <span>
                {f.label} ({f.type})
              </span>
              <button
                type="button"
                className="btn btn-sm btn-danger"
                onClick={() => deleteField(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="btn btn-success mt-3"
        onClick={buildForm}
      >
        Build Form
      </button>
    </div>
  );
};

export default FormBuilder;
