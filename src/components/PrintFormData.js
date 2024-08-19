// components/PrintFormData.js
import React from "react";

const PrintFormData = ({ formData }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mt-4">
      <h3>Form Data</h3>
      <pre className="p-3 bg-light border rounded">
        {JSON.stringify(formData, null, 2)}
      </pre>
      <button className="btn btn-secondary mt-2" onClick={handlePrint}>
        Print Form Data
      </button>
    </div>
  );
};

export default PrintFormData;
