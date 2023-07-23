import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import styles from "../../styles/Button.module.css";
import taskStyles from "../../styles/TaskPage.module.css";

import { axiosRes } from "../../api/axiosDefaults";

function TaskCreateForm() {
  const [title, setTitle] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.post("/ideas/", {
        title,
      });
      setTitle("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-1">
      <h1 className="text-center">Ideas for your next DIY</h1>
      <div className="d-flex">
        <Form.Control value={title} className={taskStyles.Input}
          onChange={handleChangeTitle} placeholder="Write them down here..." />
        <Button className={`${styles.Blue} ${taskStyles.AddBtn} py-0`} type="submit">
          Add
        </Button>
      </div>
    </Form>
  );
}

export default TaskCreateForm;