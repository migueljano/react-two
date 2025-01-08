import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import romance from "../Books/romance.json";
import fantasy from "../Books/fantasy.json";
import history from "../Books/history.json";
import scifi from "../Books/scifi.json";

import { Component } from "react";
// import { Component } from 'react'

class AllTheBooks extends Component {
    state = {
        books: romance
      };
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default AllTheBooks;
