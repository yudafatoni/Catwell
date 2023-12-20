import React from "react";
import "../style/Login.css";
import { Col, Container, Row, Image } from "react-bootstrap";
import logoImage from "../assets/LogoCatwell.svg";

const CardLogin = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <div className="rectangleLogin text-center py-5 ">
            <Image src={logoImage} alt="Logo" width="248" height="52" className="mt-"></Image>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CardLogin;
