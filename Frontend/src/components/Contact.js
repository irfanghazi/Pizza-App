import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { MdPhoneInTalk } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col md={6}>
            <h1>Pizza Shop</h1>
            <p>
              Sea eirmod nonumy kasd diam invidunt consetetur. Rebum et sed
              rebum sed, ipsum et dolor dolor takimata clita takimata gubergren,
              lorem labore dolores est voluptua elitr at, gubergren dolor
              consetetur dolore dolor amet no nonumy erat dolore, sed magna
              dolores kasd vero dolor, justo sea eos lorem clita stet ipsum.
              Kasd ipsum dolores aliquyam sit elitr accusam labore nonumy lorem.
              Aliquyam rebum sanctus est justo aliquyam rebum. Sea vero sit eos
              rebum et ipsum, ea duo tempor sed et amet accusam eos, sed
              voluptua consetetur diam est et nonumy. Labore consetetur clita
              nonumy kasd. Lorem eirmod stet aliquyam elitr at.
            </p>
            <Table striped bordered hover size="sm" className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    Contact Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <MdPhoneInTalk />
                  </td>
                  <td>Tele-Phone</td>
                  <td>033-236891</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Mobile</td>
                  <td>9773811971</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>help@pizzashop</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6} style={{ marginTop: "30px" }}>
            <Image
              src="images/farmhouse.jpg"
              style={{ width: "96%", height: "93%" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
