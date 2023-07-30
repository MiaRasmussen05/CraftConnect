import React, { useState } from "react";

import { Form, InputGroup } from "react-bootstrap";

import styles from "../../styles/TaskPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";


function TodoCreateForm(props) {

  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("content", content);

    try {
      const response = await axiosReq.post("/tasks/${taskId}/contents/", formData);
      const newContent = response.data;
      setContent("");

      setContent((prevContent) => ({
        ...prevContent,
        results: [newContent, ...prevContent.results],
      }));
    } catch (err) {
      // console.log(err);
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
            placeholder="Write your list here..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={1}
          />
        </InputGroup>
        <button
          className={`${styles.AddBtn} ${btnStyles.Button} btn d-block ml-auto`}
          disabled={!content.trim()}
          type="submit"
        >
          Add
        </button>
      </Form.Group>
    </Form>
  );
}

export default TodoCreateForm;