import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
// import cardUser
const CardPost = ({ posts }) => {
  return (
    <div className="cardL m-3 cards">
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>{posts.title}</Card.Title>
          <Card.Text>{posts.body}</Card.Text>
          <Link to={`/details/${posts.id}`}>
            <Button variant="primary">details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default CardPost;
