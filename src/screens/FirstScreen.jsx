import { Col, Container, Row } from "react-bootstrap";

export default function FirstScreen() {
  return (
    <>
      <section className="bg-first-screen" id="start">
        <Container className="container-first-screen text-center">
          <Row>
            <Col className=" pt-5 " data-aos="fade-up" data-aos-duration="3000">
              <h1 className="title-first-screen">Welcome!</h1>
            </Col>
          </Row>
          <Row
            className="text-center assign"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <h2 className="text-assign">Rafael Moreira</h2>
            <h3 className="text-assign">Web Developer</h3>
          </Row>
          <Row className="justify-content-center">
            <img src="scroll-down.gif" className="scroll-down" />
          </Row>
        </Container>
      </section>
    </>
  );
}
