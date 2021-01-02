import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label
} from "reactstrap";

const GluuDialog = ({ row, handler, modal, onAccept }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={handler} className="modal-outline-primary">
        <ModalHeader toggle={handler}>
          <i
            style={{ color: "red" }}
            className="fa fa-2x fa-warning fa-fw modal-icon mb-3"
          ></i>
          Deletion confirmation for {row.inum}-{row.name}
        </ModalHeader>
        <ModalBody>
          <Label sm={12}>
            The following item will be removed from the datastore. This actiion
            is not reversible!
          </Label>
          Do you really want to delete this item?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onAccept}>
            Yes
          </Button>{" "}
          <Button color="secondary" onClick={handler}>
            No
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default GluuDialog;
