import React from "react";
import Form from "react-bootstrap/Form";

const MemoryFormGroup = () => {
  return (
    <Form.Group className="formGroup">
      <Form.Control type="text" placeholder="Manufacturer"></Form.Control>
      <Form.Control type="text" placeholder="Form Factor"></Form.Control>
      <Form.Control type="text" placeholder="Modules"></Form.Control>
      <Form.Control type="text" placeholder="Color"></Form.Control>
      <Form.Control type="text" placeholder="First Word Latency"></Form.Control>
      <Form.Control type="text" placeholder="CAS Latency"></Form.Control>
      <Form.Control type="text" placeholder="Voltage"></Form.Control>
    </Form.Group>
  );
};

export default MemoryFormGroup;
