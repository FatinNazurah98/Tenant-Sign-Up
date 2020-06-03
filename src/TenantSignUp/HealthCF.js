import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import { Nav, Navbar, Form } from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import Dropdown from 'react-bootstrap/Dropdown';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
// import Button from '@material-ui/core/Button';
import Button from 'react-bootstrap/Button';
import 'datatables.net-dt/css/jquery.dataTables.css';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from 'react-bootstrap/Table'

import $ from 'jquery';
$.DataTable = require('datatables.net')

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

const Styles = styled.div`
  .navbar { 
    background-color: white;
    position:'absolute';
    width:'1440px';
    height:'94px';
    left:'0px';
    top:'0px';
  }
  a, 
  .navbar-nav, .navbar-light .nav-link {
    color: black;
    &:hover { color: #FBB03B; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: black;
    &:hover { color: #FBB03B; } 
  }
`;

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

export default function HealthCF() {
    const classes = useStyles();
    const [] = React.useState(0);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    const theme = useTheme();
    const [] = React.useState(false);

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
                                                        <Form.Label column sm="2">
                                                            Health Facility
                </Form.Label>
                                                        <Col>
                                                            <Form.Control />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Street Name
                </Form.Label>
                                                        <Col>
                                                            <Form.Control />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            State
                </Form.Label>
                                                        <Col>
                                                            <Form.Control />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Phone No
                </Form.Label>
                                                        <Col sm="10">
                                                            <Form.Control />
                                                        </Col>
                                                    </Form.Group><br />
                                                </Col>


                                                <Col sm={6}>
                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Building Number
                </Form.Label>
                                                        <Col sm="10">
                                                            <Form.Control />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Postcode
                </Form.Label>
                                                        <Col sm="10">
                                                            <Form.Control />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Country
                </Form.Label>
                                                        <Col sm="10">
                                                            <Form.Control />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Email
                </Form.Label>
                                                        <Col sm="10">
                                                            <Form.Control placeholder="PCH@hotmail.com" />
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
                                            <Dropdown>
                                                <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '150%' }}>
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
                                                            <Form.Control />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="3">
                                                            Year of Experience
                </Form.Label>
                                                        <Col>
                                                            <Form.Control />
                                                        </Col>
                                                    </Form.Group><br />
                                                </Col>


                                                <Col sm={6}>
                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="3">
                                                            Year Graduate
                </Form.Label>
                                                        <Col>
                                                            <Form.Control />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="3">
                                                            Prefered Language
                </Form.Label>
                                                        <Col>
                                                        <Dropdown>
                                                                <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '100%' }}>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="#/action-1">Malaysian</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">Other</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3">Othersss</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
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
                                    <Card style={{ width: '700px', height: '750px', margin: 'auto' }}>
                                        <Card.Body>
                                            <Form>
                                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                                    <Form.Label column sm={3}>
                                                        Monday
                        </Form.Label>
                                                    <Col sm={9}>
                                                        <Form.Row>
                                                            <Form.Group as={Col} controlId="formGridStart">
                                                                <Form.Label>Start</Form.Label>
                                                                <Form.Control />
                                                            </Form.Group>

                                                            <Form.Group as={Col} controlId="formGridEnd">
                                                                <Form.Label>End</Form.Label>
                                                                <Form.Control />
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
                                                                <Form.Control />
                                                            </Form.Group>

                                                            <Form.Group as={Col} controlId="formGridEnd">
                                                                <Form.Label>End</Form.Label>
                                                                <Form.Control />
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
                                                                <Form.Control />
                                                            </Form.Group>

                                                            <Form.Group as={Col} controlId="formGridEnd">
                                                                <Form.Label>End</Form.Label>
                                                                <Form.Control />
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
                                                                <Form.Control />
                                                            </Form.Group>

                                                            <Form.Group as={Col} controlId="formGridEnd">
                                                                <Form.Label>End</Form.Label>
                                                                <Form.Control />
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
                                                                <Form.Control />
                                                            </Form.Group>

                                                            <Form.Group as={Col} controlId="formGridEnd">
                                                                <Form.Label>End</Form.Label>
                                                                <Form.Control />
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
                                                                <Form.Control />
                                                            </Form.Group>

                                                            <Form.Group as={Col} controlId="formGridEnd">
                                                                <Form.Label>End</Form.Label>
                                                                <Form.Control />
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
                                                                <Form.Control />
                                                            </Form.Group>

                                                            <Form.Group as={Col} controlId="formGridEnd">
                                                                <Form.Label>End</Form.Label>
                                                                <Form.Control />
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
