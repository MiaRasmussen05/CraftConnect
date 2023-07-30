import React, { useEffect, useRef, useState } from "react";

import { Form, Row, Col, Container, Alert, Button, Image }from "react-bootstrap";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import upload from "../../assets/upload.png";
import Asset from "../../components/Asset";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";


function EventEditForm() {
  
  const [errors, setErrors] = useState({});

  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    start_date_time: "",
    end_date_time: "",
    location: "Unknown",
    website_link: "",
    cost: 0,
    cover_image: ""
  });
  const { name, description, start_date_time, end_date_time,
    location, website_link, cost, cover_image } = eventData;
      
  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/events/${id}/`);
        const { name, description, start_date_time, end_date_time,
          location, website_link, cost, cover_image, is_owner  } = data;

        is_owner ? setEventData({ name, description, start_date_time, end_date_time,
          location, website_link, cost, cover_image }) : history.push("/");
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();
  }, [history, id]);
  
  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(cover_image);
      setEventData({
        ...eventData,
        cover_image: URL.createObjectURL(event.target.files[0]),
      });
    } 
  };
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
  
    formData.append("name", name);
    formData.append("description", description);
    formData.append("start_date_time", start_date_time);
    formData.append("end_date_time", end_date_time);
    formData.append("location", location);
    formData.append("website_link", website_link);
    formData.append("cost", cost);
    
    if (imageInput?.current?.files[0]) {
        formData.append("image", imageInput.current.files[0]);
    }
  
    try {
      await axiosReq.put(`/events/${id}/`, formData);
      history.push(`/events/${id}`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center p-3">
      <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control
        type="text" name="name"
        value={name} onChange={handleChange}
      />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
      <Alert variant="warning" key={idx}>
        {message}
      </Alert>
      ))}

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea" rows={6} name="description"
          value={description} onChange={handleChange}
        />
      </Form.Group>
      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Start date</Form.Label>
        <Form.Control
          type="datetime-local" rows={6} name="start_date_time"
          value={start_date_time} onChange={handleChange}
        />
      </Form.Group>
      {errors?.start_date_time?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>End date</Form.Label>
        <Form.Control
          type="datetime-local" rows={6} name="end_date_time"
          value={end_date_time} onChange={handleChange}
        />
      </Form.Group>
      {errors?.end_date_time?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text" name="location"
          value={location} onChange={handleChange}
        />
      </Form.Group>
      {errors?.location?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Website</Form.Label>
        <Form.Control
          type="url" name="website_link"
          value={website_link} onChange={handleChange}
        />
      </Form.Group>
      {errors?.website_link?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Cost</Form.Label>
        <Form.Control
          type="number" name="cost"
          value={cost} onChange={handleChange}
          min="0"
        />
      </Form.Group>
      {errors?.cost?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit"
        onClick={() => history.goBack()} 
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={7} lg={8} className="d-none d-md-block py-2 p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
        <Col className="py-2 p-0 p-md-2" md={5} lg={4}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center p-md-5`}
          >
            <Form.Group className="text-center">
              {cover_image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={cover_image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the cover image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center" 
                  htmlFor="image-upload"
                >
                  <Asset
                    src={upload} message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload" accept="image/*" 
                onChange={handleChangeImage} ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default EventEditForm;