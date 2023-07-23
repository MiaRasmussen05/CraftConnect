import React, { useEffect, useState } from "react";

import { Col, Row, Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import TaskCreateForm from "../tasks/TaskCreateForm";
import Ideas from "../tasks/Ideas";

import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";


function TaskPage() {
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const [ideas, setIdeas] = useState({ results: [] });

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const { data } = await axiosReq.get(`/ideas/?id=${id}`);
        setIdeas(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchIdeas();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="mx-auto py-2 p-0 p-lg-2 mt-5" lg={6}>
      <Container className={appStyles.Content}>
          {currentUser ? (
            <TaskCreateForm />
          ) : ideas.results.length ? (
            "Ideas"
          ) : null}
          {ideas.results.length ? (
            <InfiniteScroll
              children={ideas.results.map((idea) => (
                <Ideas key={idea.id} {...idea} />
              ))}
              dataLength={ideas.results.length}
              loader={<Asset spinner />}
              hasMore={!!ideas.next}
              next={() => fetchMoreData(ideas, setIdeas)}
            />
          ) : currentUser ? (
            <span>No ideas... yet</span>
          ) : (
            <Container >
              <Asset spinner />
            </Container>
          )}
        </Container>
        <Container></Container>
      </Col>
    </Row>
  );
}
export default TaskPage;