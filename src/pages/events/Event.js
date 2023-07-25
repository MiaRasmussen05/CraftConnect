import React from "react";
import { Card } from "react-bootstrap";

const Event = (props) => {
  const {
    cover_image,
    name,
    description,
    start_date_time,
    location,
    cost
  } = props;

  return (
    <Card>
      <Card.Img variant="top" src={cover_image} alt={name} />
      <Card.Body>
        {name && <Card.Title>{name}</Card.Title>}
        {description && <Card.Text>{description}</Card.Text>}
        {start_date_time && <Card.Text className="text-muted"><i class="far fa-clock"></i>{start_date_time}</Card.Text>}
        {location && <Card.Text className="text-muted"><i class="fas fa-map-marker-alt"></i>{location}</Card.Text>}
        {cost && <Card.Text className="text-right text-muted"><i class="fas fa-euro-sign"></i>{cost}</Card.Text>}
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
};

export default Event;