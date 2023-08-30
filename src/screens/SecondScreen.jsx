import { Col, Container, Row } from "react-bootstrap";

export default function SecondScreen() {
  return (
    <>
      <Container className="pt-5 pb-5 about-me" id="aboutMe">
        <Row>
          <Col
            style={{ textAlign: "justify" }}
            data-aos="fade-down"
            data-aos-duration="1000"
            lg={4}
            xl={6}
            xxl={6}
          >
            <h1>About me</h1>
            <h5 className="about-me-text">
              Hey there, I'm a rising web programmer and I really like to create
              beautiful web sites and solve some problems. I also like music,
              book and play some games, I studied english too in a CCAA school
              in Brazil and I would love to talk with you in English. If you're
              interested to explore more of me, just scroll down and see what I
              have to offer.
            </h5>
          </Col>
          <Col
            data-aos="fade-down"
            data-aos-duration="1000"
            xl={5}
            lg={4}
            className="text-center"
          >
            <img src="avatar.png" className="avatar" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
