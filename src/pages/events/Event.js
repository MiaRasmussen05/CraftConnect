import React from "react";
import { Card, Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import eventStyle from "../../styles/EventPage.module.css"

import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Event = (props) => {
  const {
    id,
    owner,
    joins_count,
    join_id,
    cover_image,
    name,
    description,
    start_date_time,
    location,
    cost,
    updated_at,
    eventPage,
    setEvents
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/events/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/events/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

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

  const handleJoin = async () => {
    try {
      const { data } = await axiosRes.post("/joins/", { event: id });
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? { ...event, joins_count: event.joins_count + 1, join_id: data.id }
            : event;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleLeave = async () => {
    try {
      await axiosRes.delete(`/joins/${join_id}/`);
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? { ...event, joins_count: event.joins_count - 1, join_id: null }
            : event;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={`${eventStyle.CardSize} mb-3`}>
      <Link to={`/events/${id}`}>
        <Card.Img variant="top" src={cover_image} alt={name} />
      </Link>
      <Card.Body>
        {name && <Card.Title className={eventStyle.Title}>
          <p className={eventStyle.Name}>{name}</p> {timeDifferenceInDays <= 5 && (
          <Badge variant="info" className="ml-2">New</Badge>
        )}
        <span className={eventStyle.JoinCount}>
            {joins_count} {is_owner && eventPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
        </span>
        {join_id ? (
              <span onClick={handleLeave}>
                <i
                  className={`far fa-calendar-minus ${eventStyle.Join}`}
                />
              </span>
            ) : currentUser ? (
              <span onClick={handleJoin}>
                <i
                  className={`far fa-calendar-plus ${eventStyle.JoinOutline}`}
                />
              </span>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to join events!</Tooltip>}
              >
                <i className="far fa-calendar-plus" />
              </OverlayTrigger>
            )}
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