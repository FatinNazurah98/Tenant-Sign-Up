import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import 'datatables.net-dt/css/jquery.dataTables.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { postAPI } from './ConnAPI';
import { getTodayDate } from '../util/getDate';

export default function HFQualification(props) {
    const [state] = useState(props);

    const LANGUAGE = [
        'English',
        'Bahasa Malaysia',
        'Mandarin'
    ];

    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(true)

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

    return <Form>
        <Container style={{ marginLeft: 15 }}>
            <Row>
                <Col sm={6}>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            Place of Graduate
</Form.Label>
                        <Col>
                            <Form.Control
                                name="placeGraduate"
                                type="text"
                                placeholder="Place Of Graduate"
                                defaultValue={profile.university_name}
                                onChange={props.handleInput}
                            >
                            </Form.Control>
                        </Col>
                    </Form.Group><br />

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            Year of Experience
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
                            Prefered Language
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
            </Row>
        </Container>
    </Form>
}