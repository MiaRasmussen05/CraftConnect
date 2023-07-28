import React, { useState } from "react";

import { Form, Alert } from "react-bootstrap";

import styles from "../../styles/TaskPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";

function TaskCreateForm(props) {
  const { setTasks } = props;

  const initialState = {
    idea: "",
    title: "",
    content: "",
    category: "",
  };

  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("idea", formValues.idea);
    formData.append("title", formValues.title);
    formData.append("content", formValues.content);
    formData.append("category", formValues.category);

    try {
      const response = await axiosReq.post("/tasks/", formData);
      const newTask = response.data;
      setFormValues(initialState);

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
      <Form.Group>
        <Form.Control
          className={`${styles.Input} d-flex`}
          placeholder="Write your idea here..."
          as="select"
          name="idea"
          value={formValues.idea}
          onChange={handleChange}
          rows={1}
        >
          <option>Choose an idea here...</option>
        </Form.Control>
      </Form.Group>
      {errors?.idea?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Control
          className={`${styles.Input} d-flex`}
          placeholder="Write the title here..."
          as="textarea"
          name="title"
          value={formValues.title}
          onChange={handleChange}
          rows={1}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Control
          className={`${styles.Input} d-flex`}
          placeholder="Write some context here..."
          as="textarea"
          name="content"
          value={formValues.content}
          onChange={handleChange}
          rows={1}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Control
          className={`${styles.Input} d-flex`}
          as="select"
          name="category"
          value={formValues.category}
          onChange={handleChange}
          rows={1}
        >
          <option>Choose a category here...</option>
        </Form.Control>
      </Form.Group>
      {errors?.category?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <button
        className={`${btnStyles.Button} btn d-block ml-auto`}
        disabled={!formValues.title.trim()}
        type="submit"
      >
        Add
      </button>
    </Form>
  );
}

export default TaskCreateForm;