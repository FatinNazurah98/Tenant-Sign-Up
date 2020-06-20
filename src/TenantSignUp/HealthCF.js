import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Form } from 'react-bootstrap';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'datatables.net-dt/css/jquery.dataTables.css';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from 'react-bootstrap/Table'

import $ from 'jquery';
$.DataTable = require('datatables.net')



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

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

const SPECIALTIES = [
    'General Medicine',
    'Cardiologist',
    'Nefrology'
];

const LANGUAGE = [
    'English',
    'Bahasa Malaysia',
    'Mandarin'
];

export default function HealthCF(props) {
    const [state] = useState(props);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    const theme = useTheme();

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

    // useEffect(() => {
    //     $("#myTable").DataTable();
    // });

    return (
        <div>
            <div>
                <br />
                <h1 style={{
                    fontSize: 48,
                    position: 'absolute',
                    left: 158,
                }}>Healthcare Facility</h1>

                <div>
                    <Card style={{
                        position: 'absolute',
                        left: 100,
                        top: 200,
                        width: '90%',
                        height: '120%',
                        borderColor: '#E5E5E5'
                    }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab textColor="inherit" label="Information" {...a11yProps(0)} />
                            <Tab textColor="inherit" label="Specialties" {...a11yProps(1)} />
                            <Tab textColor="inherit" label="Qualification & Language" {...a11yProps(2)} />
                            <Tab textColor="inherit" label="Operation Hour" {...a11yProps(3)} />
                        </Tabs>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <div>
                                    <Form>
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
                                                                defaultValue={state.healthFacility}
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
                                                                defaultValue={state.streetName}
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
                                                                defaultValue={state.stateProvider}
                                                                onChange={props.handleInput}
                                                            >
                                                                <option value="">- Select State -</option>
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
                                                                defaultValue={state.providerPhoneNo}
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
                                                                defaultValue={state.buildingNo}
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
                                                                defaultValue={state.postcodeProvider}
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
                                                                defaultValue={state.country}
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
                                                                defaultValue={state.providerEmail}
                                                                onChange={props.handleInput}
                                                            >

                                                            </Form.Control>
                                                        </Col>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Form>
                                </div>
                            </TabPanel>

                            <TabPanel value={value} index={1} dir={theme.direction}>
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
                                                // onClick={() => addSpecialtiesBtn()}
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
                                                                    <FontAwesomeIcon icon={faTrashAlt} /* onClick={() => removeSpecialtiesBtn(key, item.medicalSpecialties)} */ />
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </Form>
                            </TabPanel>

                            <TabPanel value={value} index={2} dir={theme.direction}>
                                <div>
                                    <Form>
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
                                                                defaultValue={state.placeGraduate}
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
                                                                defaultValue={state.yearExperience}
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
                                                                defaultValue={state.preferedLanguage}
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
                                </div>
                            </TabPanel>

                            <TabPanel value={value} index={3} dir={theme.direction}>
                                <div>
                                    <Card style={{ width: '800px', height: '800px', margin: 'auto' }}>
                                        <Card.Body>
                                            <Form>
                                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                                    <Form.Label column sm={3}><br />
                                                        <Form.Control
                                                            as="select"
                                                            name="monDay"
                                                            defaultValue={state.monDay}
                                                            onChange={props.handleInput}
                                                        >
                                                            <option value="">- Select Day -</option>
                                                            <option value="monday">Monday</option>
                                                        </Form.Control>
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
                                                                >
                                                                </Form.Control>
                                                            </Form.Group>

                                                            <Form.Group as={Col} controlId="formGridEnd">
                                                                <Form.Label>End</Form.Label>
                                                                <Form.Control
                                                                    name="monEnd"
                                                                    type="time"
                                                                    placeholder="End time"
                                                                    defaultValue={state.monEnd}
                                                                    onChange={props.handleInput}
                                                                >
                                                                </Form.Control>
                                                            </Form.Group>
                                                        </Form.Row>
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                                    <Form.Label column sm={3}><br />
                                                        <Form.Control
                                                            as="select"
                                                            name="tueDay"
                                                            defaultValue={state.tueDay}
                                                            onChange={props.handleInput}
                                                        >
                                                            <option value="">- Select Day -</option>
                                                            <option value="tuesday">Tuesday</option>
                                                        </Form.Control>
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
                                                                >
                                                                </Form.Control>
                                                            </Form.Group>

                                                            <Form.Group as={Col} controlId="formGridEnd">
                                                                <Form.Label>End</Form.Label>
                                                                <Form.Control
                                                                    name="tueEnd"
                                                                    type="time"
                                                                    placeholder="End time"
                                                                    defaultValue={state.tueEnd}
                                                                    onChange={props.handleInput}
                                                                >
                                                                </Form.Control>
                                                            </Form.Group>
                                                        </Form.Row>
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                                    <Form.Label column sm={3}><br />
                                                        <Form.Control
                                                            as="select"
                                                            name="wedDay"
                                                            defaultValue={state.wedDay}
                                                            onChange={props.handleInput}
                                                        >
                                                            <option value="">- Select Day -</option>
                                                            <option value="wednesday">Wednesday</option>
                                                        </Form.Control>
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
                                                                >
                                                                </Form.Control>
                                                            </Form.Group>

                                                            <Form.Group as={Col} controlId="formGridEnd">
                                                                <Form.Label>End</Form.Label>
                                                                <Form.Control
                                                                    name="wedEnd"
                                                                    type="time"
                                                                    placeholder="End time"
                                                                    defaultValue={state.wedEnd}
                                                                    onChange={props.handleInput}
                                                                >
                                                                </Form.Control>
                                                            </Form.Group>
                                                        </Form.Row>
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                                    <Form.Label column sm={3}><br />
                                                        <Form.Control
                                                            as="select"
                                                            name="thuDay"
                                                            defaultValue={state.thuDay}
                                                            onChange={props.handleInput}
                                                        >
                                                            <option value="">- Select Day -</option>
                                                            <option value="thursday">Thursday</option>
                                                        </Form.Control>
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
                                                                >
                                                                </Form.Control>
                                                            </Form.Group>

                                                            <Form.Group as={Col} controlId="formGridEnd">
                                                                <Form.Label>End</Form.Label>
                                                                <Form.Control
                                                                    name="thuEnd"
                                                                    type="time"
                                                                    placeholder="End time"
                                                                    defaultValue={state.thuEnd}
                                                                    onChange={props.handleInput}
                                                                >
                                                                </Form.Control>
                                                            </Form.Group>
                                                        </Form.Row>
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                                    <Form.Label column sm={3}><br />
                                                        <Form.Control
                                                            as="select"
                                                            name="friDay"
                                                            defaultValue={state.friDay}
                                                            onChange={props.handleInput}
                                                        >
                                                            <option value="">- Select Day -</option>
                                                            <option value="friday">Friday</option>
                                                        </Form.Control>
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
                                                                >
                                                                </Form.Control>
                                                            </Form.Group>

                                                            <Form.Group as={Col} controlId="formGridEnd">
                                                                <Form.Label>End</Form.Label>
                                                                <Form.Control
                                                                    name="friEnd"
                                                                    type="time"
                                                                    placeholder="End time"
                                                                    defaultValue={state.friEnd}
                                                                    onChange={props.handleInput}
                                                                >
                                                                </Form.Control>
                                                            </Form.Group>
                                                        </Form.Row>
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                                    <Form.Label column sm={3}><br />
                                                        <Form.Control
                                                            as="select"
                                                            name="satDay"
                                                            defaultValue={state.satDay}
                                                            onChange={props.handleInput}
                                                        >
                                                            <option value="">- Select Day -</option>
                                                            <option value="saturday">Saturday</option>
                                                        </Form.Control>
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
                                                                >
                                                                </Form.Control>
                                                            </Form.Group>

                                                            <Form.Group as={Col} controlId="formGridEnd">
                                                                <Form.Label>End</Form.Label>
                                                                <Form.Control
                                                                    name="satEnd"
                                                                    type="time"
                                                                    placeholder="End time"
                                                                    defaultValue={state.satEnd}
                                                                    onChange={props.handleInput}
                                                                >
                                                                </Form.Control>
                                                            </Form.Group>
                                                        </Form.Row>
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                                    <Form.Label column sm={3}><br />
                                                        <Form.Control
                                                            as="select"
                                                            name="sunDay"
                                                            defaultValue={state.sunDay}
                                                            onChange={props.handleInput}
                                                        >
                                                            <option value="">- Select Day -</option>
                                                            <option value="sunday">Sunday</option>
                                                        </Form.Control>
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
                                                                >
                                                                </Form.Control>
                                                            </Form.Group>

                                                            <Form.Group as={Col} controlId="formGridEnd">
                                                                <Form.Label>End</Form.Label>
                                                                <Form.Control
                                                                    name="sunEnd"
                                                                    type="time"
                                                                    placeholder="End time"
                                                                    defaultValue={state.sunEnd}
                                                                    onChange={props.handleInput}
                                                                >
                                                                </Form.Control>
                                                            </Form.Group>
                                                        </Form.Row>
                                                    </Col>
                                                </Form.Group>

                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </TabPanel>

                        </SwipeableViews>
                        <Button style={{
                            position: 'absolute',
                            width: '169px',
                            height: '45px',
                            left: '1100px',
                            top: '850px',
                            backgroundColor: '#FBB03B',
                            borderColor: '#FBB03B',
                            color: 'white',
                            borderRadius: '6px'
                        }}>Save</Button>
                    </Card>
                </div>

            </div>

        </div>

    );
}
