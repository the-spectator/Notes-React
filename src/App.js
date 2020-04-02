import React from 'react';
import './App.css';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import LoginFormContainer from 'components/LoginFormContainer';

function App() {
  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col md="6" sm="6" lg="4" xl="3">
          <Card className="card-block">
            <CardHeader>
              SignIn
            </CardHeader>
            <CardBody>
              <LoginFormContainer/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
