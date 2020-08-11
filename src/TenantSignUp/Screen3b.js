import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import 'datatables.net-dt/css/jquery.dataTables.css';

import $ from 'jquery';
$.DataTable = require('datatables.net')

const LANGUAGE = [
  'English',
  'Bahasa Malaysia',
  'Mandarin'
];

export default function Screen3b(props) {
  const [state] = useState(props);

  let styles = { borderColor: '#E5E5E5', margin: 'auto' };
  const max_width = 900;
  if (window.innerWidth >= max_width) {
      styles = {
          ...styles,
          width: max_width
      }
  }

  return <Card style={styles}>
    <Card.Body>
      <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Qualification & Language</h1>
      <br />

      <Form>
        <Form.Group controlId="formBasicProviderName">
          <Form.Label>Place Of Graduate</Form.Label>
          <Form.Control
            name="placeGraduate"
            type="text"
            placeholder="Place Of Graduate"
            defaultValue={state.placeGraduate}
            onChange={props.handleInput}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridBldNum">
            <Form.Label>Year Of Experience</Form.Label>
            <Form.Control
              name="yearExperience"
              type="text"
              placeholder="Year Of Experience"
              defaultValue={state.yearExperience}
              onChange={props.handleInput}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridStreetName">
            <Form.Label>Prefered Language</Form.Label>
            <Form.Control
              as="select"
              name="preferedLanguage"
              defaultValue={state.preferedLanguage}
              onChange={props.handleInput}
            >
              <option value="">- Select Prefered Language -</option>
              {LANGUAGE.map((s, si) => {
                return (
                  <option key={si} value={s}>{s.toUpperCase()}</option>
                );
              })}
            </Form.Control>
          </Form.Group>
        </Form.Row>

      </Form>
    </Card.Body>
  </Card>
}
