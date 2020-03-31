import React from 'react';
import './App.css';
import LoginFormComponent from './components/LoginFormComponent';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';

function App() {
  return (
    <Container fluid={true} className="h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col md="6" sm="6" lg="4" xl="3">
          <Card>
            <CardHeader>
              SignIn
            </CardHeader>
            <CardBody>
              <LoginFormComponent/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
