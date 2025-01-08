import { Col, Container, Row } from "react-bootstrap";
const MyFooter = function () {
  return (
    <>
      <footer className="bg-dark text-light py-4">
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={12} sm={6} md={3} className="mb-3">
              <h5>About Us</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                non volutpat massa.
              </p>
            </Col>
            <Col xs={12} sm={6} md={3} className="mb-3">
              <h5>Useful Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3} className="mb-3">
              <h5>Contact</h5>
              <ul className="list-unstyled">
                <li>Email: bookshop@example.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Main Street, City, State</li>
              </ul>
            </Col>
          </Row>
          <Row className="justify-content-center mt-4">
            <Col className="text-center">
              <p>&copy; 2024 Book Shop. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default MyFooter;
