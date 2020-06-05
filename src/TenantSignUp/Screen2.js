import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Dropdown from 'react-bootstrap/Dropdown';

const Styles = styled.div`
  .navbar {
    background-color: #C4C4C4;
    position:'absolute';
    width:'1440px';
    height:'94px';
    left:'0px';
    top:'0px';
  }
  a,
  .navbar-nav, .navbar-light .nav-link {
    color: #FFFFFF;
    &:hover { color: black; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: black;
    &:hover { color: white; }
  }

  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
`;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const STATES = [
  'Perlis',
  'Kedah',
  'Perak',
  'P. Pinang',
  'Langkawi',
  'Kelantan',
  'Pahang',
  'Selangor',
  'W. Persekutuan',
  'N. Sembilan',
  'Melaka',
  'Johor',
  'Sarawak',
  'Sabah',
  'Terengganu',
  'Labuan'
];


export default function Screen2(props) {
  const classes = useStyles();
  const [state, setState] = useState(props);

  return <Card style={{ width: 900, height: 900, borderColor: '#E5E5E5', margin: 'auto' }}>
    <Card.Body>
      <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Personal Information</h1>
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

        <Form.Row>
          <Form.Group as={Col} controlId="formGridFName">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name="phoneNo"
              type="text"
              placeholder="Phone Number"
              defaultValue={state.phoneNo}
              onChange={props.handleInput}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLName">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control
              name="dateOfBirth"
              type="date"
              placeholder="Date of Birth"
              defaultValue={state.dateOfBirth}
              onChange={props.handleInput}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formBasicUpload">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              defaultValue={state.gender}
              onChange={props.handleInput}
            >
              <option value="">- Select Gender -</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formBasicUpload">
          <Form.Label>Billing Address</Form.Label>
          <Form.Control
            name="billingAddress"
            type="text"
            placeholder="Billing Address"
            defaultValue={state.billingAddress}
            onChange={props.handleInput}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridFName">
            <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                name="state"
                defaultValue={state.state}
                onChange={props.handleInput}
              >
                <option value="">- Select State -</option>
                {STATES.map((s, si) => {
                  return (
                    <option key={si} value={s}>{s.toUpperCase()}</option>
                  );
                })}
              </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLName">
            <Form.Label>Postcode</Form.Label>
            <Form.Control
              name="postcode"
              type="text"
              placeholder="Postcode"
              defaultValue={state.postcode}
              onChange={props.handleInput}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridFName">
            <Form.Label>IC/ Passport Number</Form.Label>
            <Form.Control
            name="icNo"
            type="text"
            placeholder="IC / Passport number"
            defaultValue={state.icNo}
            onChange={props.handleInput}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLName">
            <Form.Label>Upload NRIC/ID</Form.Label>
            <div className={classes.root}>
              <input
                name="icUpload"
                className={classes.input}
                id="contained-button-file"
                type="file"
                onChange={props.handleInput}
              />
            </div>
          </Form.Group>
        </Form.Row>

      </Form>
    </Card.Body>
  </Card>
}
