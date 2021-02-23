import React from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";

type Props = {
  modalShow: boolean;
  onHide: (value: React.SetStateAction<boolean>) => void;
};

export function OrderSampleModal(props: Props) {
  return (
    <Modal
      className="text-center w-100"
      size="xl"
      {...props}
      aria-labelledby="contained-modal-title-vcenter text-center"
    >
      <Modal.Header className="d-flex justify-content-center">
   
       
            <h3>Request A Sample</h3>


      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row className="p-3">
            <Col xs={12} sm={12} md={12}>
              <>
                Surface Group does not offer online sample orders at this time.
              </>
            </Col>
          </Row>
          <Row className="p-3">
            <Col xs={12} sm={12} md={12}>
              <span className="pr-5 pl-5">
                To request a sample, please send us an email to
                <strong> orders@surfacegroup.com</strong> with the product name
                you would like a sample of, or call us at{" "}
                <strong>(847) 713-2373</strong> to place a sample order!
              </span>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn btn-secondary"
          onClick={() => props.onHide(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
