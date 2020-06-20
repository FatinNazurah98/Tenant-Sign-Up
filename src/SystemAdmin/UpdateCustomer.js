import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import Table from 'react-bootstrap/Table'
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';


import 'datatables.net-dt/css/jquery.dataTables.css';
import $ from 'jquery';
$.DataTable = require('datatables.net')

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

const Styles = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: -8em;
  margin-left: 21em;
  margin-right: 6em;
`;

const StyledNavItem = styled.div`
    a {
        color: ${(props) => props.active ? "white" : "black"};
        :hover {
            opacity: 0.7;
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon />,
        label: 'Very Satisfied',
    },
};

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

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};

function UpdateCustomer() {
    const sampleData = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "complaint": "Flu",
            "type": "Chat",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": "Spain",
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": "America",
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
        },
    ]

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    const classes = useStyles();
    const theme = useTheme();
    // const [] = React.useState(false);
    const [dataSet] = React.useState(sampleData);


    useEffect(() => {
        $("#myTable").DataTable();
    });

    return (
        <Styles>
            <main className={classes.content}>
                <div className={classes.toolbar} />

                <StyledNavItem>
                    <NavLink to="/LCustomer">
                        <Typography color="inherit" style={{
                            fontWeight: 'bold',
                            fontSize: '24px',
                        }}>
                            <IconButton>
                                <ChevronLeftIcon />
                            </IconButton>

                    Update Customer
                </Typography>
                    </NavLink>
                </StyledNavItem>
                <br />

                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab textColor="inherit" label="Profile"  {...a11yProps(0)} />
                    <Tab textColor="inherit" label="Account" {...a11yProps(1)} />
                    <Tab textColor="inherit" label="Review" {...a11yProps(2)} />
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <div>
                            <h6>Personal Information</h6><br />
                            <Form>
                                <Container style={{ marginLeft: 15 }}>
                                    <Row>
                                        <Col sm={6}>
                                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                                <Form.Label column sm="2">
                                                    Name
                </Form.Label>
                                                <Col>
                                                    <Form.Control />
                                                </Col>
                                            </Form.Group><br />

                                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                                <Form.Label column sm="2">
                                                    IC No
                </Form.Label>
                                                <Col>
                                                    <Form.Control />
                                                </Col>
                                            </Form.Group><br />

                                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                                <Form.Label column sm="2">
                                                    Date Of Birth
                </Form.Label>
                                                <Col>
                                                    <Form.Control />
                                                </Col>
                                            </Form.Group><br />

                                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                                <Form.Label column sm="2">
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

                                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                                <Form.Label column sm="2">
                                                    Occupation
                </Form.Label>
                                                <Col sm="10">
                                                    <Form.Control />
                                                </Col>
                                            </Form.Group>


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
                                        <Col sm={6}>
                                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                                <Form.Label column sm="2">
                                                    User ID
                </Form.Label>
                                                <Col>
                                                    <Form.Control />
                                                </Col>
                                            </Form.Group><br />

                                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                                <Form.Label column sm="2">
                                                    Status
                </Form.Label>
                                                <Col>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '100%' }}>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">New</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Pending</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Approved</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </Col>
                                            </Form.Group><br />
                                        </Col>

                                        <Col sm={6}>
                                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                                <Form.Label column sm="2">
                                                </Form.Label>
                                                <Col sm="10">

                                                </Col>
                                            </Form.Group><br />

                                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                                <Form.Label column sm="2">
                                                    Start Date
                </Form.Label>
                                                <Col sm="10">
                                                    <Form.Control />
                                                </Col>
                                            </Form.Group><br />
                                        </Col>
                                    </Row>
                                </Container>
                            </Form>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <div>
                            <h6>List of Customer</h6>
                            <div style={{ paddingTop: 20 }}>
                                <div>
                                    <Table className="display" width="100%" id="myTable">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Complaint</th>
                                                <th>Type</th>
                                                <th>Review</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataSet.map((item, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>{item.id}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.complaint}</td>
                                                        <td>{item.type}</td>
                                                        <td>
                                                            <div>
                                                                <Box component="fieldset" borderColor="transparent">
                                                                    <Rating
                                                                        name="customized-empty"
                                                                        defaultValue={2}
                                                                        precision={0.5}
                                                                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                                                    />
                                                                </Box>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            {/* <FontAwesomeIcon icon={faEdit} onClick={() => alert(item.name)} /> */}
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </SwipeableViews>
                <Button style={{
                    position: 'absolute',
                    width: '169px',
                    height: '45px',
                    left: '1300px',
                    top: '650px',
                    backgroundColor: '#FBB03B',
                    borderRadius: '6px'
                }}>Save</Button>
            </main>
        </Styles>
    );
}

UpdateCustomer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.any
};

export default UpdateCustomer;
