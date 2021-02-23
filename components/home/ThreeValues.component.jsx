import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
const ThreeValues = () => {
  return (
    <Row className="three-values-container mr-0 ml-0 p-4">
      <Col sm="4" className=" d-flex flex-column align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Image
            src="/delivery-truck_r5mneg.svg"
            layout="fixed"
            width={100}
            height={100}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4 className="pt-4 pl-2 pr-2">We Source Highend Stone</h4>
          <em className="p-4">
            Surface Group ships all over the country and find the best possible
            rates for you!
          </em>
        </div>
      </Col>
      <Col
        sm="4"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Image
            src="/floor_kfbnrj.svg"
            layout="fixed"
            width={100}
            height={100}
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <h4 className="pt-4 pl-2 pr-2">We Restore Surfaces</h4>
          <em className="p-4">
            Our knowledgable staff can diagnose your stone countertops and make
            them look like new!
          </em>
        </div>
      </Col>
      <Col
        sm="4"
        className=" d-flex flex-column justify-content-center align-items-center"
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Image
            src="/hand-tools_w5ebpn.svg"
            layout="fixed"
            width={100}
            height={100}
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <h4 className="pt-4 pl-2 pr-2">We Do Installs/Remodels</h4>
          <em className="p-4">
            Our trained installers know best when it comes to installing natural
            stone and porcelains!
          </em>
        </div>
      </Col>
    </Row>
  );
};

export default ThreeValues;
