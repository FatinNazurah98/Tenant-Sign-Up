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

export default function Screen4(props) {
  const [state, setState] = useState(props);

    return <Card style={{ width: 900, height: 900, borderColor: '#E5E5E5', margin: 'auto' }}>
      <Card.Body>
        <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Operation Hour</h1>
        <br />

        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={3}>
              Monday
                          </Form.Label>
            <Col sm={9}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridStart">
                  <Form.Label>Start</Form.Label>
                  <Form.Control 
                  name="monStart"
                  type="time"
                  placeholder="Start time"
                  defaultValue={state.monStart}
                  onChange={props.handleInput}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEnd">
                  <Form.Label>End</Form.Label>
                  <Form.Control
                  name="monEnd"
                  type="time"
                  placeholder="End time"
                  defaultValue={state.monEnd}
                  onChange={props.handleInput}
                  />
                </Form.Group>
              </Form.Row>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={3}>
              Tuesday
                          </Form.Label>
            <Col sm={9}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridStart">
                  <Form.Label>Start</Form.Label>
                  <Form.Control
                  name="tueStart"
                  type="time"
                  placeholder="Start time"
                  defaultValue={state.tueStart}
                  onChange={props.handleInput}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEnd">
                  <Form.Label>End</Form.Label>
                  <Form.Control
                  name="tueEnd"
                  type="time"
                  placeholder="End time"
                  defaultValue={state.tueEnd}
                  onChange={props.handleInput}
                  />
                </Form.Group>
              </Form.Row>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={3}>
              Wednesday
                          </Form.Label>
            <Col sm={9}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridStart">
                  <Form.Label>Start</Form.Label>
                  <Form.Control
                  name="wedStart"
                  type="time"
                  placeholder="Start time"
                  defaultValue={state.wedStart}
                  onChange={props.handleInput}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEnd">
                  <Form.Label>End</Form.Label>
                  <Form.Control
                  name="wedEnd"
                  type="time"
                  placeholder="End time"
                  defaultValue={state.wedEnd}
                  onChange={props.handleInput}
                  />
                </Form.Group>
              </Form.Row>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={3}>
              Thursday
                          </Form.Label>
            <Col sm={9}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridStart">
                  <Form.Label>Start</Form.Label>
                  <Form.Control
                  name="thuStart"
                  type="time"
                  placeholder="Start time"
                  defaultValue={state.thuStart}
                  onChange={props.handleInput}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEnd">
                  <Form.Label>End</Form.Label>
                  <Form.Control
                  name="thuEnd"
                  type="time"
                  placeholder="End time"
                  defaultValue={state.thuEnd}
                  onChange={props.handleInput}
                  />
                </Form.Group>
              </Form.Row>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={3}>
              Friday
                          </Form.Label>
            <Col sm={9}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridStart">
                  <Form.Label>Start</Form.Label>
                  <Form.Control
                  name="friStart"
                  type="time"
                  placeholder="Start time"
                  defaultValue={state.friStart}
                  onChange={props.handleInput}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEnd">
                  <Form.Label>End</Form.Label>
                  <Form.Control
                  name="friEnd"
                  type="time"
                  placeholder="End time"
                  defaultValue={state.friEnd}
                  onChange={props.handleInput}
                  />
                </Form.Group>
              </Form.Row>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={3}>
              Saturday
                          </Form.Label>
            <Col sm={9}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridStart">
                  <Form.Label>Start</Form.Label>
                  <Form.Control
                  name="satStart"
                  type="time"
                  placeholder="Start time"
                  defaultValue={state.satStart}
                  onChange={props.handleInput}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEnd">
                  <Form.Label>End</Form.Label>
                  <Form.Control
                  name="satEnd"
                  type="time"
                  placeholder="End time"
                  defaultValue={state.satEnd}
                  onChange={props.handleInput}
                  />
                </Form.Group>
              </Form.Row>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={3}>
              Sunday
                          </Form.Label>
            <Col sm={9}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridStart">
                  <Form.Label>Start</Form.Label>
                  <Form.Control
                  name="sunStart"
                  type="time"
                  placeholder="Start time"
                  defaultValue={state.sunStart}
                  onChange={props.handleInput}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEnd">
                  <Form.Label>End</Form.Label>
                  <Form.Control
                  name="sunEnd"
                  type="time"
                  placeholder="End time"
                  defaultValue={state.sunEnd}
                  onChange={props.handleInput}
                  />
                </Form.Group>
              </Form.Row>
            </Col>
          </Form.Group>

        </Form>
      </Card.Body>
    </Card>
  }