import React, { useState } from "react";

import { Form, Row, Col, Container, Alert }from "react-bootstrap";


function EventEditForm() {
  
  const [errors] = useState({});

  const [postData] = useState({
    title: "",
    description: "",
  });
  const { title, description } = postData;

  const textFields = (
    <div className="text-center p-3">
      <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control
        type="text" name="title"
        value={title}
      />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
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