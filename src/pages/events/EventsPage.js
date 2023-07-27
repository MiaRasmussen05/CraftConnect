import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import { Container, Row, Col, Form } from "react-bootstrap"
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import eventStyle from "../../styles/EventPage.module.css"

import Event from "../events/Event"
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";
import { useHistory } from "react-router-dom";


function EventsPage({ message, filter = "" }) {
  const [events, setEvents] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const history = useHistory();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axiosReq.get(`/events/?${filter}search=${query}`);
        setEvents(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchEvents();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };

  }, [filter, query, pathname]);

  const ButtonComponent = () => {
    const handleButton = () => {
      history.push("/events/create");
    };

    return (
      <button className={eventStyle.Btn} onClick={handleButton}>
        <i className="far fa-plus-square"></i>Add Event
      </button>
    );
  };

  

  return (
    <Container>
      <Row>
        <Col>
          <ButtonComponent />
        </Col>
        <Col className="py-2 p-0 p-lg-2" lg={12}>
          <i className={`fas fa-search ${styles.SearchIcon}`} />
          <Form
            className={styles.SearchBar}
            onSubmit={(event) => event.preventDefault()}
          >
            <Form.Control
              value={query} onChange={(event) => setQuery(event.target.value)}
              type="text" className="mr-sm-2" placeholder="Search posts"
            />
          </Form>
        </Col>
      </Row>
      <Row>
        {hasLoaded ? (
          <>
            {events.results.length ? (
              events.results.map((event) => (
                <Col key={event.id} className="p-0 p-lg-2" lg={4}>
                  <Event {...event} setEvents={setEvents} eventsPage />
                </Col>
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
      </Row>
    </Container>
  );
}

export default EventsPage;