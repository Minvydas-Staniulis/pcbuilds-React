import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import ModalButton from "./ModalButton";
import { useState } from "react";

const PartsDropdown = () => {
  const [select, setSelect] = useState("CPU");

  return (
    <div className="PartsDropdown">
      <Form.Select
        value={select}
        onChange={(e) => {
          setSelect(e.target.value);
        }}
      >
        <option value="CPU">CPU</option>
        <option value="CPU Cooler">CPU Cooler</option>
        <option value="Motherboard">Motherboard</option>
        <option value="Memory">Memory</option>
        <option value="Storage">Storage</option>
        <option value="GPU">GPU</option>
        <option value="Case">Case</option>
        <option value="Power Supply">Power Supply</option>
        <option value="Operating System">Operating System</option>
      </Form.Select>
      <ModalButton selectedValue={select} />
    </div>
  );
};

export default PartsDropdown;
