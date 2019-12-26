import React from "react";
import { Card, Button } from "react-bootstrap";

function DetailCard({ detail }) {
  return (
    <div>
      <Card style={{ width: "18rem" }} mb-3>
        <Card.Body>
          <Card.Title style={{ color: "blue" }}>{detail.name}</Card.Title>
          <Card.Text>{detail.body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DetailCard;
