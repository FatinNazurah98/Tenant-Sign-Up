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

export default function Screen3a(props) {
  const [state, setState] = useState(props);
  
    const sampleData = [
      {
        "id": 1,
        "medicalSpecialties": "General Medicine",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": "Spain",
        "phone": "1-770-736-8031",
        "status": "New",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "medicalSpecialties": "Cardiologist",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": "America",
        "phone": "010-692-6593",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "medicalSpecialties": "Nefrology",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": "America",
        "phone": "010-692-6593",
        "website": "anastasia.net",
      },
    ]
    const [dataSet] = React.useState(sampleData);

    useEffect(() => {
      $("#myTable").DataTable();
    });

    return <Card style={{ width: 900, height: 900, borderColor: '#E5E5E5', margin: 'auto' }}>
      <Card.Body>
        <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Specialties</h1>
        <br />

        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridBldNum">
              <Form.Label>Medical Specialties</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '500px' }}>
                  Select Specialties
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridStreetName">
              <Form.Label></Form.Label><br />
              <Button style={{
                position: 'absolute',
                left: '5%',
                top: '45%',
                backgroundColor: '#025586'
              }}>+ Add Specialties</Button>

            </Form.Group>
          </Form.Row>
          <div>
            <div style={{ paddingTop: 20 }}>
              <Table className="display" width="100%" id="myTable">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Medical Specialties</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dataSet.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td>{item.id}</td>
                        <td>{item.medicalSpecialties}</td>
                        <td>
                          <FontAwesomeIcon icon={faTrashAlt} onClick={() => alert(item.medicalSpecialties)} />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </Form>
      </Card.Body>
    </Card>
  }