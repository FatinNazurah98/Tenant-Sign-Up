import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


export default function Screen1(props) {
  const [state] = useState(props);

  let styles = { borderColor: '#E5E5E5', margin: 'auto' }
  const max_width = 900;
  if (window.innerWidth >= max_width) {
      styles = {
          ...styles,
          width: max_width
      }
  }
  return <Card style={styles}>
    <Card.Body>
      <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Create JOMEDIC ID</h1>
      <br />
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              placeholder="First Name"
              defaultValue={state.firstName}
              onChange={props.handleInput}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              placeholder="Last Name"
              defaultValue={state.lastName}
              onChange={props.handleInput}
            />
          </Form.Group>

        </Form.Row>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="text"
            placeholder="Email Address"
            defaultValue={state.email}
            onChange={props.handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            defaultValue={state.password}
            onChange={props.handleInput}
          />
        </Form.Group>


        <Form.Group controlId="formBasicPassword2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="passwordConfirm"
            type="password"
            placeholder="confirm password"
            defaultValue={state.passwordConfirm}
            onChange={props.handleInput}
          />
        </Form.Group>
      </Form>
    </Card.Body>
  </Card>

}
