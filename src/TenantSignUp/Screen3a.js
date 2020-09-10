import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import 'datatables.net-dt/css/jquery.dataTables.css';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Table from 'react-bootstrap/Table'
import $ from 'jquery';
$.DataTable = require('datatables.net')

const SPECIALTIES = [
  'General Medicine',
  'Cardiologist',
  'Nefrology'
];

export default function Screen3a(props) {
  const [, setState] = useState([props]);
  const [dataSet, setDataSet] = React.useState([]);

  let styles = { borderColor: '#E5E5E5', margin: 'auto' }
  const max_width = 900;
  if (window.innerWidth >= max_width) {
      styles = {
          ...styles,
          width: max_width
      }
  }

  // useEffect(() => {
  //   $("#myTable").DataTable();
  // });

  function addSpecialtiesBtn() {

    var data = dataSet.filter(items =>
      items.medicalSpecialties === props.medicalSpecialties
    );

    if (data.length !== 0) {
      alert(`${props.medicalSpecialties} already added.`);
      return;
    }
    setDataSet(oldArray => [...oldArray, { medicalSpecialties: props.medicalSpecialties }]);
    console.log(props.medicalSpecialties);
    setState(state => [...state, props.medicalSpecialties])
  }

  function removeSpecialtiesBtn(index) {
    // setDataSet(dataSet.filter(items => items.medicalSpecialties !== item))
    const temp = [...dataSet];
    temp.splice(index, 1);
    setDataSet(temp);
  }

  return <Card style={styles}>
    <Card.Body>
      <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Specialties</h1>
      <br />

      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridBldNum">
            <Form.Label>Medical Specialties</Form.Label>
            <Form.Control
              as="select"
              name="medicalSpecialties"
              onChange={props.handleInput}
            >
              <option value="">- Select Medical Specialties -</option>
              {SPECIALTIES.map((s, si) => {
                return (
                  <option key={si} value={s}>{s.toUpperCase()}</option>
                );
              })}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridStreetName">
            <Form.Label></Form.Label><br />
            <Button
              onClick={() => addSpecialtiesBtn()}
              style={{
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
                  <th>Medical Specialties</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dataSet.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>{item.medicalSpecialties}</td>
                      <td>
                        <FontAwesomeIcon icon={faTrashAlt} onClick={() => removeSpecialtiesBtn(key)} />
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