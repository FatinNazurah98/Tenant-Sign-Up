import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
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

const COUNTRY = [
  'Brunei',
  'Indonesia',
  'Malaysia',
  'Thailand',
  'Singapore',
  'Vietnam'
];

export default function Screen3(props) {
  const [state, setState] = useState(props);

  return <Card style={{ width: 900, height: 900, borderColor: '#E5E5E5', margin: 'auto' }}>
    <Card.Body>
      <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Provider Information</h1>
      <br />

      <Form>
        <Form.Group controlId="formBasicProviderName">
          <Form.Label>Healthcare Facility</Form.Label>
          <Form.Control
            name="healthcareFacility"
            type="text"
            placeholder="Healthcare Facility"
            defaultValue={state.healthcareFacility}
            onChange={props.handleInput}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridBldNum">
            <Form.Label>Building Number</Form.Label>
            <Form.Control
              name="buildingNo"
              type="text"
              placeholder="Building Number"
              defaultValue={state.buildingNo}
              onChange={props.handleInput}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridStreetName">
            <Form.Label>Street Name</Form.Label>
            <Form.Control
              name="streetName"
              type="text"
              placeholder="Street Name"
              defaultValue={state.streetName}
              onChange={props.handleInput}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPostcode">
            <Form.Label>Postcode</Form.Label>
            <Form.Control
              name="postcode"
              type="text"
              placeholder="Postcode"
              defaultValue={state.postcode}
              onChange={props.handleInput}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              as="select"
              name="stateProvider"
              defaultValue={state.stateProvider}
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
        </Form.Row>

        <Form.Group controlId="formBasicCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control
            as="select"
            name="country"
            defaultValue={state.country}
            onChange={props.handleInput}
          >
            <option value="">- Select Country -</option>
            {COUNTRY.map((s, si) => {
              return (
                <option key={si} value={s}>{s.toUpperCase()}</option>
              );
            })}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicPPhoneNum">
          <Form.Label>Provider Phone Number</Form.Label>
          <Form.Control
            name="providerPhoneNo"
            type="text"
            placeholder="Provider Phone Number"
            defaultValue={state.providerPhoneNo}
            onChange={props.handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicProviderEmail">
          <Form.Label>Provider Email</Form.Label>
          <Form.Control
            name="providerEmail"
            type="email"
            placeholder="Provider Email"
            defaultValue={state.providerEmail}
            onChange={props.handleInput}
          />
        </Form.Group>
      </Form>
    </Card.Body>
  </Card >
}