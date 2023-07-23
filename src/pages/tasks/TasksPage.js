import React from "react";

import { Col, Row, Container } from "react-bootstrap";
import TaskCreateForm from "../tasks/TaskCreateForm";


function TaskPage() {

  return (
    <Row className="h-100">
      <Col className="mx-auto py-2 p-0 p-lg-2 mt-5" lg={6}>
        <Container>
          <TaskCreateForm />
        </Container>
      </Col>
    </Row>
  );
}
export default TaskPage;