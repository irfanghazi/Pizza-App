import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function BottomBar() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col className="text-center">
              <span>Copyright &copy; Irfan Ghazi@2021</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default BottomBar;
