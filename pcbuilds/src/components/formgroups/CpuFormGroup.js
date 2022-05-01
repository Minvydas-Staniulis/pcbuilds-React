import React from "react";
import Form from "react-bootstrap/Form";

const CpuFormGroup = () => {
  return (
    <Form.Group className="formCpu">
      <Form.Control type="text" placeholder="Manufacturer"></Form.Control>
      <Form.Control type="text" placeholder="Core Count"></Form.Control>
      <Form.Control
        type="text"
        placeholder="Perfomance Core Clock"
      ></Form.Control>
      <Form.Control
        type="text"
        placeholder="Perfomance Boost Clock"
      ></Form.Control>
      <Form.Control type="text" placeholder="TDP"></Form.Control>
      <Form.Control type="text" placeholder="Socket"></Form.Control>
      <Form.Control
        type="text"
        placeholder="Maximum Supported Memory"
      ></Form.Control>
    </Form.Group>
  );
};

export default CpuFormGroup;
