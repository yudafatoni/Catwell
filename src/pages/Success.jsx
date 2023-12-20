import React, { useEffect } from "react";
import "../style/Login.css";

import { Col, Container, Row, Image } from "react-bootstrap";
import logoImage from "../assets/LogoCatwell.svg";
import logoSuccess from "../assets/Success.svg";
import { useNavigate } from "react-router-dom";

const Success = () => {
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
    <div className="d-flex justify-content-center align-items-center myBg">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center position-relative">
            <div className="rectangleLogin text-center" onClick={navigateToLoginPage}>
              <Image src={logoImage} alt="Logo" width="248" height="52" className="mt-5" />

              <div className="d-flex justify-content-center align-items-center position-absolute" style={{ marginTop: "auto", left: "50%", transform: "translate(-50%,250%)" }}>
                <Image src={logoSuccess} alt="LogoSuccess" />
              </div>
              <p className="d-flex align-items-center position-absolute" style={{ top: "450px", left: "50%", transform: "translateX(-50%)" }}>
                Kata sandi berhasil diubah
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Success;
