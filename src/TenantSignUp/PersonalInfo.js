import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import Spinner from 'react-bootstrap/Spinner';
import { postAPI } from './ConnAPI';
import { getTodayDate } from '../util/getDate';

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

export default function PersonalInfo(props) {
    const classes = useStyles();
    // const [] = React.useState(0);
    const [loading, setLoading] = useState(true)

    const [profile, setProfile] = useState([]);


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    const theme = useTheme();
    // const [] = React.useState(false);

    // const [] = useState(props);

    useEffect(() => {
        const fetchData = async () => {

            const email = localStorage.getItem('myData');

            if (email === null) {
                window.location = '/SignIn';
                return;
            }

            const datas = {
                txn_cd: "MEDPRO04",
                tstamp: getTodayDate(),
                data: {
                    userID: email
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
                                                            First Name
                </Form.Label>
                                                        <Col>
                                                            <Form.Control
                                                                name="firstName"
                                                                type="text"
                                                                placeholder="First Name"
                                                                defaultValue={profile.user_name}
                                                            />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="3">
                                                            IC No
                </Form.Label>
                                                        <Col>
                                                            <Form.Control
                                                                name="icNo"
                                                                type="text"
                                                                placeholder="IC No"
                                                                defaultValue={profile.id_number}
                                                            />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="3">
                                                            Date Of Birth
                </Form.Label>
                                                        <Col>
                                                            <Form.Control
                                                                name="dateOfBirth"
                                                                // type="date"
                                                                placeholder="Date of Birth"
                                                                defaultValue={profile.DOB}
                                                            />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="3">
                                                            Mobile Phone
                </Form.Label>
                                                        <Col>
                                                            <Form.Control
                                                                name="phoneNo"
                                                                type="text"
                                                                placeholder="Phone Number"
                                                                defaultValue={profile.mobile_no}
                                                            >
                                                            </Form.Control>
                                                        </Col>
                                                    </Form.Group><br />
                                                </Col>

                                                <Col sm={6}>
                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Last Name
                </Form.Label>
                                                        <Col sm="10">
                                                            <Form.Control
                                                                name="lastName"
                                                                type="text"
                                                                placeholder="Last Name"
                                                                defaultValue={profile.title}
                                                            />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Gender
                                                        </Form.Label>
                                                        <Col>
                                                            <Form.Control
                                                                as="select"
                                                                name="gender"
                                                                defaultValue={profile.gender_cd}
                                                            >
                                                                <option value="">- Select Gender -</option>
                                                                <option value="male">Male</option>
                                                                <option value="female">Female</option>
                                                            </Form.Control>
                                                        </Col>
                                                    </Form.Group><br />
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Form>
                                </div>
                            </TabPanel>

                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <div>
                                    <Form>
                                        <Container style={{ marginLeft: 15 }}>
                                            <Row>
                                                <Col sm={5}>
                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Email
                </Form.Label>
                                                        <Col>
                                                            <Form.Control
                                                                name="email"
                                                                type="text"
                                                                placeholder="Email Address"
                                                                defaultValue={profile.email}
                                                            />
                                                        </Col>
                                                    </Form.Group><br />

                                                    <Form.Group as={Row} controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Apc
                </Form.Label>
                                                        <Col>
                                                            <div className={classes.root}>
                                                                <input
                                                                    name="apc"
                                                                    className={classes.input}
                                                                    id="contained-button-file"
                                                                    type="file"
                                                                    defaultValue={profile.APC}
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
                                                                    name="blc"
                                                                    className={classes.input}
                                                                    id="contained-button-file"
                                                                    type="file"
                                                                    defaultValue={profile.BLC}
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
                            borderColor: '#FBB03B',
                            borderRadius: '6px'
                        }}>Save</Button>
                    </Card>
                </div>

            </div>

        </div>

    );
}
