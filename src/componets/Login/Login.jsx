import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <Row className="justify-content-center">
          {/* <Col md={12} lg={4}> */}
            <h2 className="text-center mb-4">Login</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
  
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
  
              <Button className='mt-4' variant="primary" type="submit" block>
                Submit
              </Button>
             
            </Form>
          {/* </Col> */}
        </Row>
      </Container>
    );
};

export default Login;