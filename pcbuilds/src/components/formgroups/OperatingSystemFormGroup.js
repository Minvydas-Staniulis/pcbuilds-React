import React from "react";
import Form from "react-bootstrap/Form";

const OperatingSystemFormGroup = () => {
  return (
    <Form.Group className="formGroup">
      <Form.Control type="text" placeholder="Manufacturer"></Form.Control>
      <Form.Control type="text" placeholder="Mode"></Form.Control>
      <Form.Control type="text" placeholder="Version"></Form.Control>
      <Form.Control
        type="text"
        placeholder="Maximum Supported Memory"
      ></Form.Control>
    </Form.Group>
  );
};

export default OperatingSystemFormGroup;
