import { Button, Col, Row } from "react-bootstrap";

export default function Skill(props) {
  return (
    <Col xl={2} lg={3} md={4} sm={5} className="text-center">
      <a href={props.link} target="_blank">
        <Button variant="dark" className="skill-btn">
          <img src={props.image} className="skills-image pt-2 pb-1" />
        </Button>
      </a>
      <Row className="pt-2">
        <strong>
          <h5 className="skills-text">{props.title}</h5>
        </strong>
        <p className="skills-text">{props.description}</p>
      </Row>
    </Col>
  );
}
