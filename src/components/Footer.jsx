import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <section className="footer-bg mt-5">
        <Container className="text-center pt-4">
          <h5 className="footer-text">
            Personal portfolio of{" "}
            <a
              href="https://www.linkedin.com/in/rafaelm0reira/"
              target="_blank"
              className="footer-link"
            >
              Rafael Moreira
            </a>
          </h5>
        </Container>
      </section>
    </>
  );
}
