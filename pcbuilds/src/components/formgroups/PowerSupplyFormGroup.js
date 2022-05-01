import React from "react";
import Form from "react-bootstrap/Form";

const PowerSupplyFormGroup = () => {
  return (
    <Form.Group className="formGroup">
      <Form.Control type="text" placeholder="Manufacturer"></Form.Control>
      <Form.Control type="text" placeholder="Efficiency Rating"></Form.Control>
      <Form.Control type="text" placeholder="Wattage"></Form.Control>
      <Form.Control type="text" placeholder="Length"></Form.Control>
      <Form.Control type="text" placeholder="Modular"></Form.Control>
      <Form.Control type="text" placeholder="Color"></Form.Control>
      <Form.Control type="text" placeholder="Type"></Form.Control>
      <Form.Control type="text" placeholder="Fanless"></Form.Control>
      <Form.Control
        type="text"
        placeholder="PCIe 12-Pin Connectors"
      ></Form.Control>
      <Form.Control
        type="text"
        placeholder="PCIe 8-Pin Connectors"
      ></Form.Control>
      <Form.Control
        type="text"
        placeholder="PCIe 6+2-Pin Connectors"
      ></Form.Control>
      <Form.Control
        type="text"
        placeholder="PCIe 6-Pin Connectors"
      ></Form.Control>
      <Form.Control type="text" placeholder="SATA Connectors"></Form.Control>
      <Form.Control
        type="text"
        placeholder="Molex 4-Pin Connectors"
      ></Form.Control>
    </Form.Group>
  );
};

export default PowerSupplyFormGroup;
