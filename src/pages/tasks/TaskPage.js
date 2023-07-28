import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import taskStyles from "../../styles/TaskPage.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import IdeasCreateForm from "../tasks/IdeasCreateForm";
import TaskCreateForm from "../tasks/TaskCreateForm";
import Idea from "../tasks/Idea";

function TaskPage() {
  const { id } = useParams();

  const currentUser = useCurrentUser();
  const [ideas, setIdeas] = useState({ results: [] });

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const [{ data: ideas }] = await Promise.all([
          axiosReq.get(`/ideas/?id=${id}`),
        ]);
        setIdeas(ideas);
      } catch (err) {
        console.log(err);
      }
    };

    fetchIdeas();
  }, [id]);

  return (
    <Row >
      <Col className="py-2 p-0 p-lg-2" lg={7}>
        <h1 className={`${taskStyles.Header} text-center mt-5`}>Don't forget your next project!</h1>
        <IdeasCreateForm setIdeas={setIdeas}  />
        <Container className={`${appStyles.Content} ${taskStyles.IdeasWrapper}`}>
          {currentUser ? (
            <br />
          ) : ideas.results.length ? (
            "Ideas"
          ) : null}
          {ideas.results.length ? (
            <InfiniteScroll
              children={ideas.results.map((idea) => (
                <Container>
                  <Idea key={idea.id} id={idea.id} {...idea} setIdeas={setIdeas} />
                </Container>
              ))}
              dataLength={ideas.results.length}
              loader={<Asset spinner />}
              hasMore={!!ideas.next}
              next={() => fetchMoreData(ideas, setIdeas)}
            />
          ) : currentUser ? (
            <span>No ideas... yet</span>
          ) : (
            <Container>
              <Asset spinner />
            </Container>
          )}
        </Container>
      </Col>
      <Col className="py-3 p-lg-3">
        <h2 className={`${taskStyles.Header} text-center mt-5`}>Todo Task</h2>
        <Container className={`${appStyles.Content} p-4`}>
          <TaskCreateForm />
        </Container>
      </Col>
    </Row>
  );
}
export default TaskPage;