import React, { useState } from "react";

import { Form, Alert } from "react-bootstrap";

import styles from "../../styles/TaskPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";

function TaskCreateForm(props) {

  const { setTasks, setTitle } = props;

  const [errors, setErrors] = useState({});
  const [taskData, setTaskData] = useState({
    title: "",
    content: "",
    idea: "",
    category: "",
  });

  const { title, content, idea, category } = taskData;

  const handleChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("idea", idea);
    formData.append("category", category);

    try {
      const response = await axiosReq.post("/tasks/", formData);
      const newTask = response.data;
      setTitle("");
      setTaskData({
        title: "",
        content: "",
        idea: "",
        category: "",
      });

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
          value={idea}
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

      <Form.Group>
        <Form.Control
          className={`${styles.Input} d-flex`}
          placeholder="Write some context here..."
          as="textarea"
          name="content"
          value={content}
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
          value={category}
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
        disabled={!title.trim()}
        type="submit"
      >
        Add
      </button>
    </Form>
  );
}

export default TaskCreateForm;