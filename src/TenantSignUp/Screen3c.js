import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Container from 'react-bootstrap/Container';
import 'datatables.net-dt/css/jquery.dataTables.css';

import $ from 'jquery';
$.DataTable = require('datatables.net')

const LANGUAGE = [
  'English',
  'Bahasa Malaysia',
  'Mandarin'
];

export default function Screen3c(props) {
  const [state, setState] = useState([props]);
  const [dataSet, setDataSet] = React.useState([]);

  let styles = { borderColor: '#E5E5E5', margin: 'auto' };
  const max_width = 900;
  if (window.innerWidth >= max_width) {
    styles = {
      ...styles,
      width: max_width
    }
  }

  function addLanguageBtn() {

    var data = dataSet.filter(items =>
        items.preferedLanguage === props.preferedLanguage
    );

    if (data.length !== 0) {
        alert(`${props.preferedLanguage} already added.`);
        return;
    }
    setDataSet(oldArray => [...oldArray, { preferedLanguage: props.preferedLanguage }]);
    console.log(props.preferedLanguage);
    setState(state => [...state, props.preferedLanguage])
}

function removeLanguageBtn(index) {
    // setDataSet(dataSet.filter(items => items.medicalSpecialties !== item))
    const temp = [...dataSet];
    temp.splice(index, 1);
    setDataSet(temp);
}

  return <Card style={styles}>
    <Card.Body>
      <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Language</h1>
      <br />

      <Form>
        <Container style={{ marginLeft: 15 }}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Language Spoken</Form.Label>
              <Form.Control
                as="select"
                name="preferedLanguage"
                defaultValue={state.preferedLanguage}
                onChange={props.handleInput}
              >
                <option value="">- Select language spoken -</option>
                {LANGUAGE.map((s, si) => {
                  return (
                    <option key={si} value={s}>{s.toUpperCase()}</option>
                  );
                })}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label><br /></Form.Label><br />
              <Button
                onClick={() => addLanguageBtn()}
                style={{
                  width: 100,
                  backgroundColor: 'white',
                  color: 'black',
                  borderColor: '#C4C4C4'
                }}
              > Add</Button>
            </Form.Group>
          </Form.Row>
          <div>
            <div style={{ paddingTop: 20 }}>
              <Table className="display" width="100%" id="myTable">
                <thead>
                  <tr>
                    <th>LANGUAGE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {dataSet.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td>{item.preferedLanguage}</td>
                        <td>
                          <FontAwesomeIcon icon={faTrashAlt} onClick={() => removeLanguageBtn(key)} />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </Container>
      </Form>
    </Card.Body>
  </Card>
}
