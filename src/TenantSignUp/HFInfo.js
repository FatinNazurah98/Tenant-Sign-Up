import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from 'react-bootstrap/Spinner';
import { postAPI } from './ConnAPI';
import { getTodayDate } from '../util/getDate';

const STATES = [
    'Perlis',
    'Kedah',
    'Perak',
    'P. Pinang',
    'Langkawi',
    'Kelantan',
    'Pahang',
    'Selangor',
    'W. Persekutuan',
    'N. Sembilan',
    'Melaka',
    'Johor',
    'Sarawak',
    'Sabah',
    'Terengganu',
    'Labuan'
];

const COUNTRY = [
    'Brunei',
    'Indonesia',
    'Malaysia',
    'Thailand',
    'Singapore',
    'Vietnam'
];

export default function HFInfo(props) {
    const [loading, setLoading] = useState(true)
    const [profile, setProfile] = useState([]);
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        icNo: "",
        gender: "",
        dateOfBirth: "",
        phoneNo: "",
        apc: "",
        blc: ""
    });

    useEffect(() => {
        const fetchData = async () => {

            const email = localStorage.getItem('myData');

            if (email === null) {
                window.location = '/SignIn';
                return;
            }

            const datas = {
                txn_cd: "MEDPRO22",
                tstamp: getTodayDate(),
                data: {
                    tenantId: email,
                    tenantType: "0001"
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
                            Health Facility
</Form.Label>
                        <Col sm="9">
                            <Form.Control
                                name="healthFacility"
                                type="text"
                                placeholder="Healthcare Facility"
                                defaultValue={profile.organisation_name}
                                onChange={props.handleInput}
                            />
                        </Col>
                    </Form.Group><br />

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            Street Name
</Form.Label>
                        <Col sm="9">
                            <Form.Control
                                name="streetName"
                                type="text"
                                placeholder="Street Name"
                                defaultValue={profile.tenant_address2}
                                onChange={props.handleInput}
                            />
                        </Col>
                    </Form.Group><br />

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            City
</Form.Label>
                        <Col sm="9">
                            <Form.Control
                                name="cityProvider"
                                type="text"
                                placeholder="City"
                                defaultValue={profile.tenant_town_cd}
                                onChange={props.handleInput}
                            />
                        </Col>
                    </Form.Group><br />

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            State
</Form.Label>
                        <Col sm="9">
                            <Form.Control
                                as="select"
                                name="stateProvider"
                                defaultValue={profile.tenant_state_cd}
                                onChange={props.handleInput}
                            >
                                <option value="">- Select Country -</option>
                                {STATES.map((s, si) => {
                                    return (
                                        <option key={si} value={s}>{s.toUpperCase()}</option>
                                    );
                                })}
                            </Form.Control>
                        </Col>
                    </Form.Group><br />

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            Phone Number
</Form.Label>
                        <Col sm="9">
                            <Form.Control
                                name="providerPhoneNo"
                                type="text"
                                placeholder="Provider Phone Number"
                                defaultValue={profile.tenant_phone_no}
                                onChange={props.handleInput}
                            >

                            </Form.Control>
                        </Col>
                    </Form.Group><br />
                </Col>


                <Col sm={6}>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="4">
                            Building Number
</Form.Label>
                        <Col sm="8">
                            <Form.Control
                                name="buildingNo"
                                type="text"
                                placeholder="Building Number"
                                defaultValue={profile.tenant_address1}
                                onChange={props.handleInput}
                            >

                            </Form.Control>
                        </Col>
                    </Form.Group><br />

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="4">
                            Postcode
</Form.Label>
                        <Col sm="8">
                            <Form.Control
                                name="postcodeProvider"
                                type="text"
                                placeholder="Postcode"
                                defaultValue={profile.tenant_postcode}
                                onChange={props.handleInput}
                            >
                            </Form.Control>
                        </Col>
                    </Form.Group><br />

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="4">
                            Country
</Form.Label>
                        <Col sm="8">
                            <Form.Control
                                as="select"
                                name="country"
                                defaultValue={profile.tenant_country_cd}
                                onChange={props.handleInput}
                            >
                                <option value="">- Select Country -</option>
                                {COUNTRY.map((s, si) => {
                                    return (
                                        <option key={si} value={s}>{s.toUpperCase()}</option>
                                    );
                                })}
                            </Form.Control>
                        </Col>
                    </Form.Group><br />

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="4">
                            Email
</Form.Label>
                        <Col sm="8">
                            <Form.Control
                                name="providerEmail"
                                type="text"
                                placeholder="Provider Email"
                                defaultValue={profile.tenant_email}
                                onChange={props.handleInput}
                            >

                            </Form.Control>
                        </Col>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    </Form>
}