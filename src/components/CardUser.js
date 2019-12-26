import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function CardUser({ contact }) {
  return (
    <>
      <Link to={`/posts/${contact.id}`} className="user">
        <Card style={{ width: "18rem" }} mb-3>
          <Card.Body>
            <Card.Title style={{ color: "blue" }}>{contact.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">following</Button>
          </Card.Body>
        </Card>
      </Link>
      {/* <Link to="/">
        <Button>back</Button>
      </Link> */}
    </>
  );
}

export default CardUser;
