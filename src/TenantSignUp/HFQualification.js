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

    // if (loading) {
    //     return (
    //         <div style={{ textAlign: 'center' }}>
    //             <Spinner animation="border" role="status">
    //                 <span className="sr-only">Loading...</span>
    //             </Spinner>
    //         </div>

    //     )
    // }

    function addQualificationBtn() {

        var data = dataSet.filter(items =>
            items.qualification === props.qualification
        );

        if (data.length !== 0) {
            alert(`${props.qualification} already added.`);
            return;
        }
        setDataSet(oldArray => [...oldArray, { qualification: props.qualification }]);
        console.log(props.qualification);
        setState(state => [...state, props.qualification])

        var data = dataSet.filter(items =>
            items.major === props.major
        );

        setDataSet(oldArray => [...oldArray, { major: props.major }]);
        console.log(props.major);
        setState(state => [...state, props.major])
    }

    function removeQualificationBtn(index) {
        // setDataSet(dataSet.filter(items => items.medicalSpecialties !== item))
        const temp = [...dataSet];
        temp.splice(index, 1);
        setDataSet(temp);
    }

    return <Form>
        <Container style={{ marginLeft: 15 }}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Qualification</Form.Label>
                    <Form.Control
                        as="select"
                        name="qualification"
                        defaultValue={profile.qualification}
                        onChange={props.handleInput}
                    >
                        <option value="">- Select Qualification Level -</option>
                        {QUALIFICATION.map((s, si) => {
                            return (
                                <option key={si} value={s}>{s.toUpperCase()}</option>
                            );
                        })}
                    </Form.Control><br />
                    <Form.Control
                        name="placeGraduated"
                        type="text"
                        placeholder="University/School"
                        defaultValue={profile.university_name}
                        onChange={props.handleInput}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label><br /></Form.Label>
                    <Form.Control
                        name="major"
                        type="text"
                        placeholder="eg : Diploma in.."
                        defaultValue={profile.major}
                        onChange={props.handleInput}
                    >
                    </Form.Control><br />

                    <div style={{ display: "inline-flex" }}>
                        <Form.Control style={{ width: 450 }}
                            name="yearGraduated"
                            type="text"
                            placeholder="Year graduated"
                            defaultValue={profile.yearGraduated}
                            onChange={props.handleInput}
                        >
                        </Form.Control>&nbsp;&nbsp;&nbsp;
                        <Button
                            onClick={() => addQualificationBtn()}
                            style={{
                                width: 100,
                                backgroundColor: 'white',
                                color: 'black',
                                borderColor: '#C4C4C4'
                            }}
                        > Add</Button>
                    </div>



                </Form.Group>
            </Form.Row>
            <div>
                <div style={{ paddingTop: 20 }}>
                    <Table className="display" width="100%" id="myTable">
                        <thead>
                            <tr>
                                <th>LEVEL</th>
                                <th>DESCRIPTION</th>
                                <th>GRADUATED YEAR</th>
                                <th>INSTITUTION</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataSet.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{item.qualification}</td>
                                        <td>{item.major}</td>
                                        <td>{item.graduatedYear}</td>
                                        <td>{item.institution}</td>
                                        <td>
                                            <FontAwesomeIcon icon={faTrashAlt} onClick={() => removeQualificationBtn(key)} />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
            
            {/* <Row>
                <Col sm={6}>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            Area of Expertise
</Form.Label>
                        <Col>
                        <Form.Control
                                as="select"
                                name="areaExpertise"
                                defaultValue={profile.areaExpertise}
                                onChange={props.handleInput}
                            >
                                <option value="">- Select Area of Expertise -</option>
                                {AREA.map((s, si) => {
                                    return (
                                        <option key={si} value={s}>{s.toUpperCase()}</option>
                                    );
                                })}
                            </Form.Control>
                        </Col>
                    </Form.Group><br />

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            Experience (Year)
</Form.Label>
                        <Col>
                            <Form.Control
                                name="yearExperience"
                                type="text"
                                placeholder="Year Of Experience"
                                defaultValue={profile.field_study}
                                onChange={props.handleInput}
                            >
                            </Form.Control>
                        </Col>
                    </Form.Group><br />
                </Col>


                <Col sm={6}>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            User Sub Area of Expertise
</Form.Label>
                        <Col>
                            <Form.Control
                                as="select"
                                name="preferedLanguage"
                                defaultValue={profile.qualification_cd}
                                onChange={props.handleInput}
                            >
                                <option value="">- Select Prefered Language -</option>
                                {LANGUAGE.map((s, si) => {
                                    return (
                                        <option key={si} value={s}>{s.toUpperCase()}</option>
                                    );
                                })}
                            </Form.Control>
                        </Col>
                    </Form.Group><br />
                </Col>
            </Row> */}
        </Container>
    </Form>
}