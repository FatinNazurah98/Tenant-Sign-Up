import React from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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

export default function PersonalInfo() {
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

    return (
        <div>
            <div>
                <br />
                <h1 style={{
                    fontSize: 48,
                    position: 'absolute',
                    left: 158,
                }}>Personal Information</h1>

                <div>
                    <Card style={{
                        position: 'absolute',
                        left: 100,
                        top: 200,
                        width: '90%',
                        height: '80%',
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
                            <Tab textColor="inherit" label="Profile" {...a11yProps(0)} />
                            <Tab textColor="inherit" label="Account" {...a11yProps(1)} />
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
                                                            Name
                </Form.Label>
                                                        <Col>
                                                            <Form.Control />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="3">
                                                            IC No
                </Form.Label>
                                                        <Col>
                                                            <Form.Control />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="3">
                                                            Date Of Birth
                </Form.Label>
                                                        <Col>
                                                            <Form.Control />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="3">
                                                            Nationality
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

                                                <Col sm={6}>
                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Title
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
                                                            <Form.Control />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Gender
                </Form.Label>
                                                        <Col>
                                                            <Dropdown>
                                                                <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '100%' }}>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Mobile Phone
                </Form.Label>
                                                        <Col sm="10">
                                                            <Form.Control />
                                                        </Col>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Form>
                                </div>
                            </TabPanel>

                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <div>
                                    <h6>User ID Information</h6><br />
                                    <Form>
                                        <Container style={{ marginLeft: 15 }}>
                                            <Row>
                                                <Col sm={5}>
                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Email
                </Form.Label>
                                                        <Col>
                                                            <Form.Control />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Apc
                </Form.Label>
                                                        <Col>
                                                            <div className={classes.root}>
                                                                <input
                                                                    className={classes.input}
                                                                    id="contained-button-file"
                                                                    multiple
                                                                    type="file"
                                                                />
                                                            </div>
                                                        </Col>
                                                    </Form.Group><br />
                                                </Col>

                                                <Col sm={7}>
                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Password
                </Form.Label>
                                                        <Col>
                                                            <Button style={{
                                                                // position: 'absolute',
                                                                // width: '195px',
                                                                // height: '41px',
                                                                backgroundColor: '#DADADA',
                                                                borderColor: '#DADADA',
                                                                borderRadius: '6px',
                                                                color: 'black'
                                                            }}>Change Password</Button>
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Blc
                </Form.Label>
                                                        <Col>
                                                            <div className={classes.root}>
                                                                <input
                                                                    className={classes.input}
                                                                    id="contained-button-file"
                                                                    multiple
                                                                    type="file"
                                                                />
                                                            </div>
                                                        </Col>
                                                    </Form.Group><br />

                                                </Col>
                                            </Row>
                                        </Container>
                                    </Form>
                                </div>
                            </TabPanel>

                        </SwipeableViews>
                        <Button style={{
                            position: 'absolute',
                            width: '169px',
                            height: '45px',
                            left: '1100px',
                            top: 400,
                            backgroundColor: '#FBB03B',
                            color: 'white',
                            borderColor:'#FBB03B',
                            borderRadius: '6px'
                        }}>Save</Button>
                    </Card>
                </div>

            </div>

        </div>

    );
}
