// src/App.js
import React from 'react';
import UserList from './Components/UserList';
import UserForm from './Components/UserForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function App() {
  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">User Management</h1>
      <Row>
        <Col md={6}>
          <UserForm />
        </Col>
        <Col md={6}>
          <UserList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
