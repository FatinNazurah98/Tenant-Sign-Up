import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


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
  const [state] = useState(props);

  return <Card style={{ width: 900, height: 900, borderColor: '#E5E5E5', margin: 'auto' }}>
    <Card.Body>
      <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Provider Information</h1>
      <br />

      <Form>
        <Form.Group controlId="formBasicProviderName">
          <Form.Label>Healthcare Facility</Form.Label>
          <Form.Control
            name="healthFacility"
            type="text"
            placeholder="Healthcare Facility"
            defaultValue={state.healthFacility}
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
              name="postcodeProvider"
              type="text"
              placeholder="Postcode"
              defaultValue={state.postcodeProvider}
              onChange={props.handleInput}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>City</Form.Label>
            <Form.Control
              name="cityProvider"
              type="text"
              placeholder="City"
              defaultValue={state.cityProvider}
              onChange={props.handleInput}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPostcode">
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

          <Form.Group as={Col} controlId="formGridState">
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
        </Form.Row>

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
            type="text"
            placeholder="Provider Email"
            defaultValue={state.providerEmail}
            onChange={props.handleInput}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPostcode">
            <Form.Label>Longitude</Form.Label>
            <Form.Control
              name="longitude"
              type="text"
              placeholder="Longitude"
              defaultValue={state.longitude}
              onChange={props.handleInput}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              name="latitude"
              type="text"
              placeholder="Latitude"
              defaultValue={state.latitude}
              onChange={props.handleInput}
            >
            </Form.Control>
          </Form.Group>
        </Form.Row>
      </Form>
    </Card.Body>
  </Card >
}
