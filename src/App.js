// App.js
import React, { useState } from "react";
import FormBuilder from "./components/FormBuilder";
import DynamicForm from "./components/DynamicFrom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [formFields, setFormFields] = useState([]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Dynamic Form Builder</h1>
      <FormBuilder onFormBuild={(fields) => setFormFields(fields)} />
      {formFields.length > 0 && (
        <>
          <h2 className="text-center mt-5">Generated Form</h2>
          <DynamicForm fields={formFields} />
        </>
      )}
    </div>
  );
}

export default App;
