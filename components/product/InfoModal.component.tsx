import React from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { checkIfValsThere, round, numberWithCommas } from "../../helper";
import { Product } from "../../interfaces/Product";

type Props = {
  product: Product;
  pricePerBox: number;
  pricePerPiece: number;
  pricePerSquareFoot: number;
  modalShow: boolean;
  onHide: (value: React.SetStateAction<boolean>) => void;
}

export function InfoModal(props: Props) {
  return (
    <Modal
      size="xl"
      {...props}
      aria-labelledby="contained-modal-title-vcenter text-center"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.product.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} sm={4} md={4}>
              <div className="p-3 m-1">
                <div>material:</div>{" "}
                <div className="text-muted font-italic">
                  {props.product.material.toLowerCase()}
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4} md={4}>
              <div className="p-3 m-1">
                <div>weight:</div>{" "}
                <div className="text-muted font-italic">
                  {props.product.weight} lbs
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4} md={4}>
              <div className=" p-3 m-1">
                <div>product type:</div>{" "}
                <div className="text-muted font-italic">
                  {props.product.productType.toLowerCase()}
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={4} md={4}>
              <div className=" p-3 m-1">
                <div>size:</div>{" "}
                <div className="text-muted font-italic">
                  {props.product.length &&
                  props.product.width &&
                  props.product.length.toLowerCase() !== "n/a" &&
                  props.product.width.toLowerCase() !== "n/a"
                    ? `${props.product.length}" x ${props.product.width}" x `
                    : null}
                  {`${props.product.thickness}`}
                </div>
              </div>
            </Col>
            <Col>
              <div className=" p-3 m-1">
                <div>color:</div>{" "}
                <div className="text-muted font-italic">
                  {props.product.color}
                </div>
              </div>
            </Col>

            <Col xs={12} sm={4} md={4}>
              <div className=" p-3 m-1">
                <div>finish:</div>{" "}
                <div className="text-muted font-italic">
                  {checkIfValsThere(props.product.finish)}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              className="d-flex justify-content-center align-items-start flex-column"
              xs={12}
              sm={4}
              md={4}
            >
              <div className=" p-3 m-1">
                <div>color variation:</div>{" "}
                <div className="text-muted font-italic">
                  {props.product.colorVariation}
                </div>
              </div>
            </Col>

            <Col
              className="d-flex justify-content-center align-items-start flex-column"
              xs={12}
              sm={4}
              md={4}
            >
              <div className=" p-3 m-1">
                <div>application:</div>{" "}
                <div className="text-muted font-italic">
                  {props.product.application}
                </div>
              </div>
            </Col>

            <Col
              className="d-flex justify-content-center align-items-start flex-column"
              xs={12}
              sm={4}
              md={4}
            >
              <div className=" p-3 m-1">
                <div>frost resistant:</div>
                <div className="text-muted font-italic">
                  {props.product.frostProof ? " yes" : " no"}
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={4} md={4}>
              <div className="border p-3 m-1">
                <div>price / sf:</div>{" "}
                <div className="text-muted font-italic">
                  $
                  {checkIfValsThere(
                    numberWithCommas(round(props.pricePerSquareFoot))
                  )}
                </div>
              </div>
            </Col>

            <Col xs={12} sm={4} md={4}>
              <div className="border p-3 m-1">
                <div>price / pc: </div>
                <div className="text-muted font-italic">
                  ${checkIfValsThere(round(props.pricePerPiece))}
                </div>
              </div>
            </Col>

            <Col xs={12} sm={4} md={4}>
              <div className="border p-3 m-1">
                <div>price / box:</div>{" "}
                <div className="text-muted font-italic">
                  $
                  {checkIfValsThere(
                    numberWithCommas(round(props.pricePerBox))
                  ) == 0
                    ? "N/A"
                    : checkIfValsThere(
                        numberWithCommas(round(props.pricePerBox))
                      )}
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={4} md={4}>
              <div className="border p-3 m-1">
                <div>sf / pc:</div>{" "}
                <div className="text-muted font-italic">
                  {checkIfValsThere(props.product.squareFootPerPiece)}
                </div>
              </div>
            </Col>

            <Col xs={12} sm={4} md={4}>
              <div className="border p-3 m-1">
                <div>sf / box: </div>
                <div className="text-muted font-italic">
                  {checkIfValsThere(props.product.squareFootPerBox)}
                </div>
              </div>
            </Col>

            <Col xs={12} sm={4} md={4}>
              <div className="border p-3 m-1">
                <div>pcs / box:</div>{" "}
                <div className="text-muted font-italic">
                  {checkIfValsThere(props.product.piecesPerBox)}
                </div>
              </div>
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
