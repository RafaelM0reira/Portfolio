import { Button, Col, Container, Row } from "react-bootstrap";
import Skill from "../components/Skill";

export default function ThirdScreen() {
  return (
    <>
      <Container className="pt-5" id="skills">
        <Row
          className="text-center"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <h1>Skills</h1>
        </Row>
        <Row className="skills-row" data-aos="fade-up" data-aos-duration="1000">
          <Skill
            image="https://cdn-icons-png.flaticon.com/512/732/732212.png"
            title="Html 5"
            description="This is a markup language used for structuring and presenting content on the World Wide Web."
            link="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
          />
          <Skill
            image="https://logospng.org/download/css-3/logo-css-3-1536.png"
            title="Css 3"
            description="CSS is an acronym, short for Cascading Style Sheets and is a stylesheet language used by web designers to create a style or make web page."
            link="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
          />
          <Skill
            image="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
            title="Javascript"
            description="Javascript is a programmer language that work together with the css and the html to compose websites."
            link="https://developer.mozilla.org/pt-BR/docs/Web/JAVASCRIPT"
          />
          <Skill
            image="https://gitlab.com/uploads/-/system/project/avatar/31182514/logo-react-icon.png"
            title="React"
            description="This is a library for front end developers very used to simplify and make the development faster."
            link="https://www.w3schools.com/whatis/whatis_react.asp"
          />
          <Skill
            image="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
            title="Bootstrap"
            description="The most popular framework for css, is used to develop responsive and beautiful web sites."
            link="https://www.w3schools.com/whatis/whatis_bootstrap.asp"
          />
          <Skill
            image="https://cdn-icons-png.flaticon.com/512/5968/5968358.png"
            title="Sass"
            description="The most known Css pre-processor, and is used to reduces repetition."
            link="https://www.w3schools.com/sass/sass_intro.php"
          />
          <Skill
            image="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
            title="Node"
            description="Node allows developers to write JavaScript code that runs directly in a computer, and do some other extraordinary things."
            link="https://www.w3schools.com/nodejs/nodejs_intro.asp"
          />
          <Skill
            image="https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png"
            title="MongoDb"
            description="MongoDb is a database noSQL that is designed to be easy for use."
            link="https://www.mongodb.com/docs/v5.0/"
          />
          <Skill
            image="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
            title="PostgreSQL"
            description="PostgreSQL is a complete database SQL and has strong reputation for reliability."
            link="https://www.postgresql.org"
          />
        </Row>
      </Container>
    </>
  );
}
