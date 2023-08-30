import { Button, Col, Container, Row } from "react-bootstrap";
import ProjectsToShow from "../components/ProjectsToShow";

export default function FourthScreen() {
  return (
    <>
      <Container id="projects">
        <Row
          className="text-center pt-5"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <h1>Projects</h1>
        </Row>
        <ProjectsToShow
          firstTitle="Landing page: Art of War"
          firstDescription="This page was made with vite + react, this application is also animated and responsive."
          firstImage="https://github.com/RafaelM0reira/landingPage-Art-of-War/raw/main/ilustration%20prints/1.png"
          firstLink="https://github.com/RafaelM0reira/landingPage-Art-of-War"
          secondTitle="Game Library"
          secondDescription="This is an academic project maded in the course, in this application you can manage your games."
          secondImage="https://camo.githubusercontent.com/fcec56cf7d78e6a563661344918e8569d86fd7e716cb1150804e4fc88d28dd8a/68747470733a2f2f692e696d6775722e636f6d2f573836306f37392e706e67"
          secondLink="https://github.com/RafaelM0reira/Game-library"
        />
        <ProjectsToShow
          firstTitle="StopWatch React"
          firstDescription="In this project I was practicing and testing my knowledge with react."
          firstImage="https://camo.githubusercontent.com/ff34b7b8a0ab77841f1d5cdc5785bc67cdc027ba120a24083955574e2066cb45/68747470733a2f2f692e696d6775722e636f6d2f596554755943552e706e67"
          firstLink="https://github.com/RafaelM0reira/Stopwatch.js"
          secondTitle="HQScript E-commerce project"
          secondDescription="In this project I made an e-commerce of HQ and have a lot of functions like a shopping cart and each book has his own page."
          secondImage="https://github.com/RafaelM0reira/HQ-Script/raw/main/ilustration-prints/1.png"
          secondLink="https://github.com/RafaelM0reira/HQ-Script"
        />
        <ProjectsToShow
          firstTitle="Javascript Notes"
          firstDescription="This is the front end part of the project and it's a site that you can manage and create notes."
          firstImage="https://camo.githubusercontent.com/2cdd1a51148fd58a245577777bd8676504104f116f315ca715ff86495e504d9e/68747470733a2f2f692e696d6775722e636f6d2f3948386d5575432e706e67"
          firstLink="https://github.com/RafaelM0reira/Javascript-Notes"
          secondTitle="Javascript Notes API"
          secondDescription="This is the back end part of the Javascript notes, it's an api made with mongodb and bcrypt."
          secondImage="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
          secondLink="https://github.com/RafaelM0reira/Javascript-notes-api"
        />
      </Container>
    </>
  );
}
