import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaTruckLoading, spark, FaTimes } from "react-icons/fa";
import Image from "next/image";
const ThreeValues = () => {
  return (
    <Row className="p-5">
      <Col
        sm="4"
        className=" d-flex flex-column justify-content-center align-items-center"
      >
        <div className="h-50 d-flex flex-column justify-content-center align-items-center">
          <Image
            src="/delivery-truck_gcphmc.svg"
            layout="fixed"
            width={100}
            height={100}
          />
        </div>
        <div className="h-50 d-flex flex-column justify-content-center align-items-center">
          <h3 className="pt-4 pl-2 pr-2">We Source Highend Stone</h3>
          <em className="p-4">
            Surface Group ships all over the country and find the best possible
            rates for you!
          </em>
        </div>
      </Col>
      <Col
        sm="4"
        className=" d-flex flex-column justify-content-center align-items-center"
      >
        <div className="h-50 d-flex flex-column justify-content-center align-items-center">
        <Image
            src="/floor_rfmagk.svg"
            layout="fixed"
            width={100}
            height={100}
          />
        </div>
        <div className="h-50 d-flex flex-column justify-content-center align-items-center">
          <h3 className="pt-4 pl-2 pr-2">We Restore Surfaces</h3>
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
        <div className="h-50 d-flex flex-column justify-content-center align-items-center">
        <Image
            src="/hand-tools_1_fwggwz.svg"
            layout="fixed"
            width={100}
            height={100}
          />
        </div>
        <div className="h-50 d-flex flex-column justify-content-center align-items-center">
          <h3 className="pt-4 pl-2 pr-2">We Do Installs/Remodels</h3>
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
