import React from "react";
import { Button, Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
//import components

//import functions

export default function Tombol({
  handleChangeTitle,
  handleChangeDescription,
  handleSaveChanges,
  display,
  defaultTitle,
  defaultDescription,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {display}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Todo Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter todo Title"
              // value={defaultTitle}
              onChange={handleChangeTitle}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Todo Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter todo description"
              // value={defaultDescription}
              onChange={handleChangeDescription}
            />
          </Form.Group>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSaveChanges();
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
