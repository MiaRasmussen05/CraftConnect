import React from "react";
import { CardDeck, Card } from "react-bootstrap";

const Event = (props) => {
  const {
    name,
    description,
  } = props;

  return (
    <CardDeck>
      <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
          {name && <Card.Title className="text-center">{name}</Card.Title>}
          {description && <Card.Text>{description}</Card.Text>}
          </Card.Body>
          <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
      </Card>
    </CardDeck>
  );
};

export default Event;