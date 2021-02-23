import React from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { FaSnowflake } from "react-icons/fa";

type Props = {
  modalShow: boolean;
  onHide: (value: React.SetStateAction<boolean>) => void;
}

export function FrostProofModal(props: Props) {
  return (
    <Modal
      size="xl"
      {...props}
      aria-labelledby="contained-modal-title-vcenter text-center"
    >
      <Modal.Body className="show-grid text-center">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} className="d-flex justify-content-center align-items-center">
              <span className="mr-2">This item is frost proof! </span><FaSnowflake />
            </Col>
          </Row>
        </Container>
      </Modal.Body>

    </Modal>
  );
}
