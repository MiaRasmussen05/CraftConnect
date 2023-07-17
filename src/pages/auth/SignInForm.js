import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css"


function SignInForm() {
    return (
        <Row className={styles.Row}>
            <Col className="m-auto py-2 p-md-1" md={7}>
                <h1 className="text-center">CraftHub</h1>
                <p className="text-center">Share your ideas, connect with others!</p>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>login</h1>
                    <Form>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control 
                                type="text" placeholder="Username"
                                name="username" className={styles.Input}
                            />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control 
                                type="password" placeholder="Password"
                                name="password" className={styles.Input}
                            />
                        </Form.Group>

                        <Button className={`${btnStyles.Button} ${btnStyles.Wide}`}
                            type="submit">
                            Login
                        </Button>
                    </Form>

                </Container>
                <Container className={`mt-3 ${appStyles.Content}`}>
                    <Link className={styles.Link} to="/signup">
                        Don't have an account? <span>Sign up now!</span>
                    </Link>
                </Container>
            </Col>

        </Row>
    );
}

export default SignInForm;