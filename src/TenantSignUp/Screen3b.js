import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../util/provider';
import { getTodayDate } from '../util/getDate';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
import Button from 'react-bootstrap/Button';
import Typography from '@material-ui/core/Typography';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import { Nav, Navbar, Form } from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import Dropdown from 'react-bootstrap/Dropdown';
import 'datatables.net-dt/css/jquery.dataTables.css';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Screen1 from './Screen1';

import Table from 'react-bootstrap/Table'
import $ from 'jquery';
$.DataTable = require('datatables.net')

const STATES = [
  'Bahasa Malaysia',
  'English'
];

export default function Screen3b(props) {
  const [state, setState] = useState(props);

  return <Card style={{ width: 900, height: 900, borderColor: '#E5E5E5', margin: 'auto' }}>
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
              {STATES.map((s, si) => {
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