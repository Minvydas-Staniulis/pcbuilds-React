import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

import CpuCoolerFormGroup from "./formgroups/CpuCoolerFormGroup";
import CaseFormGroup from "./formgroups/CaseFormGroup";
import CpuFormGroup from "./formgroups/CpuFormGroup";
import MotherboardFormGroup from "./formgroups/MotherboardFormGroup";
import MemoryFormGroup from "./formgroups/MemoryFormGroup";
import StorageFormGroup from "./formgroups/StorageFormGroup";
import PowerSupplyFormGroup from "./formgroups/PowerSupplyFormGroup";
import OperatingSystemFormGroup from "./formgroups/OperatingSystemFormGroup";
import GpuFormGroup from "./formgroups/GpuFormGroup";

const ModalButton = ({ selectedValue }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDisplay = () => {
    switch (selectedValue) {
      case "CPU":
        return <CpuFormGroup />;
      case "GPU":
        return <GpuFormGroup />;
      case "CPU Cooler":
        return <CpuCoolerFormGroup />;
      case "Motherboard":
        return <MotherboardFormGroup />;
      case "Memory":
        return <MemoryFormGroup />;
      case "Storage":
        return <StorageFormGroup />;
      case "Case":
        return <CaseFormGroup />;
      case "Power Supply":
        return <PowerSupplyFormGroup />;
      case "Operating System":
        return <OperatingSystemFormGroup />;
      default:
        return <p>Part is not selected</p>;
    }
  };
  useEffect(() => {
    handleDisplay();
  });
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Parts
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Parts</Modal.Title>
        </Modal.Header>
        <Modal.Body>{handleDisplay()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalButton;
