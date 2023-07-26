import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import eventStyle from "../../styles/EventPage.module.css"

const Event = (props) => {
  const {
    id,
    cover_image,
    name,
    description,
    start_date_time,
    location,
    cost,
    updated_at
  } = props;

  const startDate = new Date(start_date_time);
  const currentDate = new Date();
  const timeDifferenceInDays = Math.floor(
    (currentDate - startDate) / (1000 * 60 * 60 * 24)
  );

  const calculateTimeDifference = () => {
    const updatedDate = new Date(updated_at);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - updatedDate.getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    const oneMonth = 30 * oneDay;
    const oneYear = 365 * oneDay;

    if (timeDifference < oneDay) {
      return `${Math.floor(timeDifference / (60 * 60 * 1000))} hours ago`;
    } else if (timeDifference < oneMonth) {
      return `${Math.floor(timeDifference / oneDay)} days ago`;
    } else if (timeDifference < oneYear) {
      return `${Math.floor(timeDifference / oneMonth)} months ago`;
    } else {
      return `${Math.floor(timeDifference / oneYear)} years ago`;
    }
  };

  return (
    <Card className={`${eventStyle.CardSize} mb-3`}>
      <Link to={`/events/${id}`}>
        <Card.Img variant="top" src={cover_image} alt={name} />
      </Link>
      <Card.Body>
        {name && <Card.Title className={eventStyle.Title}>
          {name} {timeDifferenceInDays <= 5 && (
          <Badge variant="info" className="ml-2">New</Badge>
        )}
        <i class="far fa-calendar-plus"></i>
      </Card.Title>}
        {description && <Card.Text className={`${eventStyle.Description} text-muted`}>{description}</Card.Text>}
        {start_date_time && <Card.Text className={`${eventStyle.EventFontSize} text-muted mb-0`}>
          <i class="far fa-clock"></i>{start_date_time}</Card.Text>}
        {location && <Card.Text className={`${eventStyle.EventFontSize} text-muted`}>
          <i class="fas fa-map-marker-alt"></i>{location}</Card.Text>}
        {cost && <Card.Text className={`${eventStyle.EventFontSize} text-right text-muted`}>
          <i class="fas fa-euro-sign"></i>{cost}</Card.Text>}
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated {calculateTimeDifference()}</small>
      </Card.Footer>
    </Card>
  );
};

export default Event;