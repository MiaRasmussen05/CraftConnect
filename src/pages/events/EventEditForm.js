import React, { useState } from "react";

import { Form, Row, Col, Container, Alert }from "react-bootstrap";


function EventEditForm() {
  
  const [errors] = useState({});

  const [postData] = useState({
    name: "",
    description: "",
    start_date_time: "",
    end_date_time: "",
    location: "Unknown",
  });
  const { name, description, start_date_time, end_date_time,
    location } = postData;

  const textFields = (
    <div className="text-center p-3">
      <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control
        type="text" name="name"
        value={name}
      />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
      ))}

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea" rows={6} name="description"
          value={description}
        />
      </Form.Group>
      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Start date</Form.Label>
        <Form.Control
          type="datetime-local" rows={6} name="start_date_time"
          value={start_date_time}
        />
      </Form.Group>
      {errors?.start_date_time?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>End date</Form.Label>
        <Form.Control
          type="datetime-local" rows={6} name="end_date_time"
          value={end_date_time}
        />
      </Form.Group>
      {errors?.end_date_time?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

<Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text" name="location"
          value={location}
        />
      </Form.Group>
      {errors?.location?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

    </div>
  );

  return (
    <Form>
      <Row>
        <Col md={7} lg={8} className="d-none d-md-block p-0 p-md-2">
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default EventEditForm;