import React from "react";
import Form from "react-bootstrap/Form";

const CpuCoolerFormGroup = () => {
  return (
    <Form.Group className="formGroup">
      <Form.Control type="text" placeholder="Manufacturer"></Form.Control>
      <Form.Control type="text" placeholder="Model"></Form.Control>
      <Form.Control type="text" placeholder="Fan RPM"></Form.Control>
      <Form.Control type="text" placeholder="Noise Level"></Form.Control>
      <Form.Control type="text" placeholder="Color"></Form.Control>
      <Form.Control type="text" placeholder="CPU Socket"></Form.Control>
      <Form.Control type="text" placeholder="Water Cooled"></Form.Control>
      <Form.Control type="text" placeholder="Fanless"></Form.Control>
    </Form.Group>
  );
};

export default CpuCoolerFormGroup;
