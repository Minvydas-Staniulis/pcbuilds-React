import React from "react";
import Form from "react-bootstrap/Form";

const CaseFormGroup = () => {
  return (
    <Form.Group className="formGroup">
      <Form.Control type="text" placeholder="Manufacturer"></Form.Control>
      <Form.Control type="text" placeholder="Color"></Form.Control>
    </Form.Group>
  );
};

export default CaseFormGroup;
