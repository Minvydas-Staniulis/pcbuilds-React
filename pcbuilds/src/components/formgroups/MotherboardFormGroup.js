import React from "react";
import Form from "react-bootstrap/Form";

const MotherboardFormGroup = () => {
  return (
    <Form.Group className="formGroup">
      <Form.Control type="text" placeholder="Manufacturer"></Form.Control>
      <Form.Control type="text" placeholder="Socket / CPU"></Form.Control>
      <Form.Control type="text" placeholder="Chipset"></Form.Control>
      <Form.Control type="text" placeholder="Color"></Form.Control>
    </Form.Group>
  );
};

export default MotherboardFormGroup;
