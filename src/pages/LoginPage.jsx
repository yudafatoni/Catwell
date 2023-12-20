import React, { useEffect } from "react";
import "../style/Login.css";
import { Col, Container, Row, Image } from "react-bootstrap";
import logoImage from "../assets/LogoCatwell.svg";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const navigateToLoginPage = () => {
    navigate("/login");
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigateToLoginPage();
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [navigateToLoginPage]);

  return (
    <div className="myBg">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <div className="rectangle d-flex d-flex justify-content-center align-items-center" onClick={navigateToLoginPage}>
              <Image src={logoImage}></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
