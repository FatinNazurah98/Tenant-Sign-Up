import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import 'datatables.net-dt/css/jquery.dataTables.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { postAPI } from './ConnAPI';
import { getTodayDate } from '../util/getDate';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Divider } from '@material-ui/core';

export default function HFQualification(props) {
    const [, setState] = useState([props]);
    // const [state] = useState(props);
    const [dataSet, setDataSet] = React.useState([]);
    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(true)

    const QUALIFICATION = [
        'Diploma',
        'Bachelor Degree',
        'Master',
        'Doctorate'
    ];

    const LANGUAGE = [
        'English',
        'Bahasa Malaysia',
        'Mandarin'
    ];

    const AREA = [
        'English',
        'Bahasa Malaysia',
        'Mandarin'
    ];

    useEffect(() => {
        const fetchData = async () => {

            const email = localStorage.getItem('myData');

            if (email === null) {
                window.location = '/SignIn';
                return;
            }

            const datas = {
                txn_cd: "MEDPRO24",
                tstamp: getTodayDate(),
                data: {
                    tenantId: email,
                    qualificationCd: "",
                    fieldStudy: ""
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

    
    function addLanguageBtn() {

        var data2 = dataSet.filter(items =>
            items.language === props.language
        );

        if (data2.length !== 0) {
            alert(`${props.language} already added.`);
            return;
        }
        setDataSet(oldArray => [...oldArray, { language: props.language }]);
        console.log(props.language);
        setState(state => [...state, props.language])
    }

    function removeLanguageBtn(index) {
        // setDataSet(dataSet.filter(items => items.medicalSpecialties !== item))
        const temp = [...dataSet];
        temp.splice(index, 1);
        setDataSet(temp);
    }

    return <Form>
        <Container style={{ marginLeft: 15 }}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Language Spoken</Form.Label>
                    <Form.Control
                        as="select"
                        name="language"
                        defaultValue={profile.language}
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
                    <Form.Label><br/></Form.Label><br/>
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
                                        <td>{item.language}</td>
                                        <td>
                                            <FontAwesomeIcon icon={faTrashAlt} onClick={() => removeLanguageBtn(key)} />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
            </Form.Row>
        </Container>
    </Form>
}