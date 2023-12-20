import React from "react";
import "../style/Login.css";
import { Col, Container, Row, Image } from "react-bootstrap";
import Button from "../components/Button";

const NewPassword = () => {
  return (
    <div className="myBg">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <div className="rectangleLogin text-center py-3 ">
              <div className="text-center position-relative d-flex flex-column align-items-center">
                <p className="teks" style={{ marginTop: 10 }}>
                  Masukkan kata sandi baru Anda
                  <br />
                  Kata sandi tidak boleh sama dengan yang sebelumnya
                </p>
                <div className="form">
                  <div className="login-container">
                    <div className="form-group mt-4">
                      <label htmlFor="email" className="label-email">
                        Kata sandi baru :
                      </label>
                      <input className="form-control text-start" name="newPassword" style={{ borderRadius: 9, border: "1px #F28705 solid", width: "346px" }} type="password" placeholder="Masukkan kata sandi baru Anda" />
                    </div>
                    <div className="form-group ">
                      <label htmlFor="password" className="label-password">
                        Konfirmasi kata sandi baru :
                      </label>
                      <input className="form-control text-start" name="password" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="password" placeholder="Konfirmasi kata sandi baru anda" />
                    </div>
                    <div className="button " style={{ marginTop: 2 }}>
                      <a href="/success" style={{ textDecoration: "none" }}>
                        <Button label="Kirim" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewPassword;
