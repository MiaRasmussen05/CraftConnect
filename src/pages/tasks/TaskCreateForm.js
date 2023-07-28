import React, { useState } from "react";

import { Form, InputGroup, Alert } from "react-bootstrap";

import styles from "../../styles/TaskPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";


function TaskCreateForm(props) {
  const { setTasks } = props;

  const [title, setTitle] = useState("");
  const [idea, setIdea] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("idea", idea);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);

    try {
      const response = await axiosReq.post("/tasks/", formData);
      const newTask = response.data;
      setTitle("");
      setIdea("");
      setContent("");
      setCategory("");

      setTasks((prevTasks) => ({
        ...prevTasks,
        results: [newTask, ...prevTasks.results],
      }));
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Form className="mt-3" onSubmit={handleSubmit}>
      <Form.Group className="d-flex">
        <InputGroup>
          <Form.Control className={`${styles.Input} d-flex`}
            placeholder="Write your idea here..."
            as="select"
            value={idea}
            onChange={handleChange}
            rows={1}
          />
        </InputGroup>
      </Form.Group>
      {errors?.idea?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Control className={`${styles.Input} d-flex`}
          placeholder="Write your idea here..."
          as="textarea"
          value={title}
          onChange={handleChange}
          rows={1}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <button
        className={`${btnStyles.Button} btn d-block ml-auto`}
        disabled={!title.trim()}
        type="submit"
      >
        Add
      </button>
    </Form>
  );
}

export default TaskCreateForm;