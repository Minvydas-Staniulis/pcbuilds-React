import React from "react";
import Form from "react-bootstrap/Form";

const StorageFormGroup = () => {
  return (
    <Form.Group className="formGroup">
      <Form.Control type="text" placeholder="Manufacturer"></Form.Control>
      <Form.Control type="text" placeholder="Capacity"></Form.Control>
      <Form.Control type="text" placeholder="Type"></Form.Control>
      <Form.Control type="text" placeholder="Cache"></Form.Control>
      <Form.Control type="text" placeholder="Form Factor"></Form.Control>
      <Form.Control type="text" placeholder="Interface"></Form.Control>
      <Form.Control type="text" placeholder="NVME"></Form.Control>
    </Form.Group>
  );
};

export default StorageFormGroup;
