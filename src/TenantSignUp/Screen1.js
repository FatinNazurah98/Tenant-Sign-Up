import React, { useState } from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function Screen1(props) {
  const [state, setState] = useState(props);
  return <Card style={{ width: 900, height: 900, borderColor: '#E5E5E5', margin: 'auto' }}>
    <Card.Body>
      <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Create Jomedic ID</h1>
      <br />
      <Form>
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
