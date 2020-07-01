import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'datatables.net-dt/css/jquery.dataTables.css';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from 'react-bootstrap/Spinner';
import { postAPI } from './ConnAPI';
import { getTodayDate } from '../util/getDate';

import Table from 'react-bootstrap/Table'
import $ from 'jquery';
$.DataTable = require('datatables.net')

const SPECIALTIES = [
    'General Medicine',
    'Cardiologist',
    'Nefrology'
];

export default function HFSpecialties(props) {
    const [, setState] = useState([props]);
    const [dataSet, setDataSet] = React.useState([]);
    const [loading, setLoading] = useState(true)
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const email = localStorage.getItem('myData');

            if (email === null) {
                window.location = '/SignIn';
                return;
            }

            const datas = {
                txn_cd: "MEDPRO23",
                tstamp: getTodayDate(),
                data: {
                    tenantId: email,
                    specialtyCd: "General Medicine"
                }
            }

            postAPI(datas, (success) => {
                console.log(success);
                setProfile(success.status[0])
                setLoading(false);
            }, (error) => {
                alert(error.message)

            });
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div style={{ textAlign: 'center' }}>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>

        )
    }

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

    return <Form>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridBldNum">
                <Form.Label>Medical Specialties</Form.Label>
                <Form.Control
                    as="select"
                    name="medicalSpecialties"
                    defaultValue={profile.specialty_cd}
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
                        left: '55%',
                        top: '45%',
                        backgroundColor: '#025586',
                        color: 'white'
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
}