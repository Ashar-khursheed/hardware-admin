"use client";
import { Col, Container, Row } from "reactstrap";
import Image from "next/image";

const AuthLayout = ({ children }) => {
  return (
    <section className="log-in-section p-0">
      <Container fluid className="p-0">
        <Row className="m-0 align-items-stretch">
          <Col xl="7" lg="6" className="p-0 d-none d-lg-block position-relative">
            <div className="auth-bg-section h-100 position-relative w-100">
              <Image src="/assets/images/auth-bg.png" alt="Auth Background" layout="fill" objectFit="cover" quality={100} className="auth-bg-img" priority />
              <div className="auth-bg-overlay">
                <div className="auth-bg-content text-white">
                  <h1 className="fw-bold mb-3">Welcome to Hardware Admin</h1>
                  <p className="fs-5 opacity-75">Securely manage your enterprise hardware, operations, and inventory with a professional platform.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xl="5" lg="6" className="p-0 auth-form-section d-flex align-items-center justify-content-center bg-white min-vh-100">
            <div className="auth-form-container w-100 p-4 p-md-5">
              {children}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AuthLayout;
