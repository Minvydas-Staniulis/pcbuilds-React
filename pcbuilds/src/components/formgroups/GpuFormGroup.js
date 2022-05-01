import React from "react";
import Form from "react-bootstrap/Form";

const GpuFormGroup = () => {
  return (
    <Form.Group className="formCpu">
      <Form.Control type="text" placeholder="Manufacturer"></Form.Control>
      <Form.Control type="text" placeholder="Chipset"></Form.Control>
      <Form.Control type="text" placeholder="Memory"></Form.Control>
      <Form.Control type="text" placeholder="Core clock"></Form.Control>
      <Form.Control type="text" placeholder="Boost Clock"></Form.Control>
      <Form.Control type="text" placeholder="Interface"></Form.Control>
      <Form.Control type="text" placeholder="TDP"></Form.Control>
      <Form.Control type="text" placeholder="Cooling"></Form.Control>
      <Form.Control type="text" placeholder="HDMI Outputs"></Form.Control>
      <Form.Control
        type="text"
        placeholder="DisplayPort Outputs"
      ></Form.Control>
    </Form.Group>
  );
};

export default GpuFormGroup;
