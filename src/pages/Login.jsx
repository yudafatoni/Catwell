import React from "react";
import "../style/Login.css";
import { Col, Container, Row, Image } from "react-bootstrap";
import logoImage from "../assets/LogoCatwell.svg";
import FormInput from "../components/FormInput";
import Button1 from "../components/ButtonLogin";

const Login = () => {
  return (
    <div className="myBg">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <div className="rectangleLogin text-center py-4">
              <Image src={logoImage} alt="Logo" width="248" height="52" className="mt-2"></Image>
              <div className="py-3 px-4">
                <FormInput />
                <div className="mt-5">
                  <a href="/dashboard">
                    <Button1 />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
