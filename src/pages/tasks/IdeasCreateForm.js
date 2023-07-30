import React, { useState } from "react";

import { Form, InputGroup } from "react-bootstrap";

import styles from "../../styles/TaskPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";


function IdeasCreateForm(props) {
  const { setIdeas } = props;

  const [title, setTitle] = useState("");
  const [setErrors] = useState({});

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);

    try {
      const response = await axiosReq.post("/ideas/", formData);
      const newIdea = response.data;
      setTitle("");

      setIdeas((prevIdeas) => ({
        ...prevIdeas,
        results: [newIdea, ...prevIdeas.results],
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
            placeholder="Write your idea here..."
            as="textarea"
            value={title}
            onChange={handleChange}
            rows={1}
          />
        </InputGroup>
        <button
          className={`${styles.AddBtn} ${btnStyles.Button} btn d-block ml-auto`}
          disabled={!title.trim()}
          type="submit"
        >
          Add
        </button>
      </Form.Group>
    </Form>
  );
}

export default IdeasCreateForm;