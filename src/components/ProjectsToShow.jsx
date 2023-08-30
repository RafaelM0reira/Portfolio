import { Button, Col, Row } from "react-bootstrap";
export default function ProjectsToShow(props) {
  return (
    <>
      <Row className="pt-5 pb-5" data-aos="fade-up" data-aos-duration="2500">
        <Col>
          <img src={props.firstImage} className="project-image" />
        </Col>
        <Col>
          <strong>
            <h3 className="project-title">{props.firstTitle}</h3>
          </strong>
          <p className="projects-text">{props.firstDescription}</p>
          <a href={props.firstLink} target="_blank">
            <Button variant="outline-light" className="project-btn">
              GitHub
            </Button>
          </a>
        </Col>
      </Row>
      <Row data-aos="fade-down" data-aos-duration="2500">
        <Col
          className="second-project-text"
          sm={{ order: "last" }}
          xs={{ order: "last" }}
          md={{ order: "first" }}
        >
          <strong>
            <h3 className="project-text">{props.secondTitle}</h3>
          </strong>
          <p className="projects-text">{props.secondDescription}</p>
          <a href={props.secondLink} target="_blank">
            <Button variant="outline-light" className="project-btn">
              GitHub
            </Button>
          </a>
        </Col>
        <Col>
          <img src={props.secondImage} className="project-image" />
        </Col>
      </Row>
    </>
  );
}
