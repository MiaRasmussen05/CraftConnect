import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentCreateEditForm.module.css";

function IdeaEditForm(props) {
  const { id, title, setShowEditForm, setIdeas } = props;

  const [formTitle, setFormTitle] = useState(title);

  const handleChange = (event) => {
    setFormTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (formTitle.trim() === title) {
        setShowEditForm(false);
        return;
      }

      await axiosRes.put(`/ideas/${id}/`, {
        title: formTitle.trim(),
      });

      setIdeas((prevIdeas) => ({
        ...prevIdeas,
        results: prevIdeas.results.map((idea) =>
          idea.id === id
            ? {
                ...idea,
                title: formTitle.trim(),
                updated_at: "now",
              }
            : idea
        ),
      }));
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formTitle}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          Cancel
        </button>
        <button
          className={styles.Button}
          disabled={!formTitle.trim() || formTitle.trim() === title}
          type="submit"
        >
          Save
        </button>
      </div>
    </Form>
  );
}

export default IdeaEditForm;