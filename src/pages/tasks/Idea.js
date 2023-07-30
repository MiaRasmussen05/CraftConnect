import React, { useState } from "react";
import { Media } from "react-bootstrap";

import { MoreDropdown } from "../../components/MoreDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import IdeaEditForm from "./IdeaEditForm";

const Idea = (props) => {
  const { title, id, setIdeas, owner } = props;

  const [showEditForm, setShowEditForm] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/ideas/${id}/`);
      setIdeas((prevIdeas) => ({
        ...prevIdeas,
        results: prevIdeas.results.filter((idea) => idea.id !== id),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleEdit = () => {
    setShowEditForm(true);
  };

  return (
    <div>
      <Media>
        <Media.Body className="align-self-center p-0 pl-3 m-0">
          {showEditForm ? (
            <IdeaEditForm
              id={id}
              title={title}
              setIdeas={setIdeas}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p className="d-flex pt-2 m-0">{title} {is_owner && (
              <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
            )}</p>
          )}
        </Media.Body>
      </Media>
      <hr />
    </div>
  );
};

export default Idea;