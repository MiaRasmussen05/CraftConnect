import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Container, Row, Col } from "react-bootstrap"
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";

import EventCreateForm from "../events/EventCreateForm"
import Event from "../events/Event"
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";


function EventsPage({ message = "" }) {
  const [events, setEvents] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axiosReq.get(`/events/`);
        setEvents(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchEvents();
  }, [pathname]);


  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={12}>
        <Container>
          <EventCreateForm />
        </Container>
      </Col>
      <Container>
        <Col className=" p-0 p-lg-2">
        {hasLoaded ? (
          <>
            {events.results.length ? (
              events.results.map((event) => (
                <Event key={event.id} {...event} setEvents={setEvents} />
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
        </Col>
      </Container>
    </Row>
  );
}

export default EventsPage;