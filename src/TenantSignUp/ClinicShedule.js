import React, { Component } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { Nav, Navbar } from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import Dropdown from 'react-bootstrap/Dropdown';
import Box from '@material-ui/core/Box';
import Card from 'react-bootstrap/Card';
// import Button from '@material-ui/core/Button';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Table from 'react-bootstrap/Table';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Form from 'react-bootstrap/Form';
import TextField from '@material-ui/core/TextField';

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
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: 150,
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

export default function ClinicSchedule() {
    const [] = React.useState(0);
    const [] = React.useState(false);

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }

    const classes = useStyles();

    return (
        <div>
            <div>
                <br />
                <h1 style={{
                    fontSize: 48,
                    position: 'absolute',
                    left: 158,
                }}>Clinic Schedule</h1>

                <div>
                    <Card style={{
                        position: 'absolute',
                        left: 100,
                        top: 200,
                        width: '90%',
                        height: '90%',
                        borderColor: '#E5E5E5'
                    }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Day/Date</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                    <th>Available</th>
                                    <th>Quota</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Monday<br />
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="date"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </form>
                                    </td>
                                    <td>
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="time"
                                                type="time"
                                                defaultValue="08:00"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                            />
                                        </form>
                                    </td>
                                    <td>
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="time"

                                                type="time"
                                                defaultValue="15:00"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                            />
                                        </form>
                                    </td>
                                    <td>
                                        <Form>
                                            {['radio'].map((type) => (
                                                <div key={`custom-inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        label=""
                                                        type={type}
                                                        id={`custom-inline-${type}-1`}
                                                    />
                                                </div>
                                            ))}
                                        </Form>
                                    </td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '100%' }}>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown></td>
                                </tr>
                                <tr>
                                    <td>Tuesday<br />
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="date"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </form>

                                    </td>
                                    <td>
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="time"
                                                type="time"
                                                defaultValue="08:00"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                            />
                                        </form>
                                    </td>
                                    <td>
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="time"
                                                type="time"
                                                defaultValue="15:00"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                            />
                                        </form>
                                    </td>
                                    <td>
                                        <Form>
                                            {['radio'].map((type) => (
                                                <div key={`custom-inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        label=""
                                                        type={type}
                                                        id={`custom-inline-${type}-2`}
                                                    />
                                                </div>
                                            ))}
                                        </Form>
                                    </td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '100%' }}>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Wednesday<br />
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="date"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </form>

                                    </td>
                                    <td>
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="time"
                                                type="time"
                                                defaultValue="08:00"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                            />
                                        </form>
                                    </td>
                                    <td>
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="time"
                                                type="time"
                                                defaultValue="15:00"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                            />
                                        </form>
                                    </td>
                                    <td>
                                        <Form>
                                            {['radio'].map((type) => (
                                                <div key={`custom-inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        label=""
                                                        type={type}
                                                        id={`custom-inline-${type}-3`}
                                                    />
                                                </div>
                                            ))}
                                        </Form>
                                    </td>
                                    <td><Dropdown>
                                        <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '100%' }}>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown></td>
                                </tr>
                                <tr>
                                    <td>Thursday<br />
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="date"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </form>

                                    </td>
                                    <td>
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="time"
                                                type="time"
                                                defaultValue="08:00"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                            />
                                        </form>
                                    </td>
                                    <td><form className={classes.container} noValidate>
                                        <TextField
                                            id="time"
                                            type="time"
                                            defaultValue="15:00"
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                        />
                                    </form></td>
                                    <td>
                                        <Form>
                                            {['radio'].map((type) => (
                                                <div key={`custom-inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        label=""
                                                        type={type}
                                                        id={`custom-inline-${type}-4`}
                                                    />
                                                </div>
                                            ))}
                                        </Form>
                                    </td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '100%' }}>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Friday<br />
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="date"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </form>

                                    </td>
                                    <td>
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="time"
                                                type="time"
                                                defaultValue="08:00"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                            />
                                        </form>
                                    </td>
                                    <td>
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="time"
                                                type="time"
                                                defaultValue="15:00"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                            />
                                        </form>
                                    </td>
                                    <td>
                                        <Form>
                                            {['radio'].map((type) => (
                                                <div key={`custom-inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        label=""
                                                        type={type}
                                                        id={`custom-inline-${type}-5`}
                                                    />
                                                </div>
                                            ))}
                                        </Form>
                                    </td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '100%' }}>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Saturday<br />
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="date"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </form>

                                    </td>
                                    <td>
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="time"
                                                type="time"
                                                defaultValue="08:00"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                            />
                                        </form>
                                    </td>
                                    <td>
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="time"
                                                type="time"
                                                defaultValue="15:00"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                            />
                                        </form>
                                    </td>
                                    <td>
                                        <Form>
                                            {['radio'].map((type) => (
                                                <div key={`custom-inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        label=""
                                                        type={type}
                                                        id={`custom-inline-${type}-6`}
                                                    />
                                                </div>
                                            ))}
                                        </Form>
                                    </td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '100%' }}>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sunday<br />
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="date"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </form>

                                    </td>
                                    <td>
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="time"
                                                type="time"
                                                defaultValue="08:00"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                            />
                                        </form>
                                    </td>
                                    <td>
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="time"
                                                type="time"
                                                defaultValue="15:00"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                            />
                                        </form>
                                    </td>
                                    <td>
                                        <Form>
                                            {['radio'].map((type) => (
                                                <div key={`custom-inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        label=""
                                                        type={type}
                                                        id={`custom-inline-${type}-7`}
                                                    />
                                                </div>
                                            ))}
                                        </Form>
                                    </td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '100%' }}>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <Button style={{
                            position: 'absolute',
                            width: '169px',
                            height: '45px',
                            left: '20px',
                            top: '650px',
                            backgroundColor: 'white',
                            color: '#FBB03B',
                            borderColor: '#FBB03B',
                            borderRadius: '50px',

                        }}>Previous</Button>

                        <Button style={{
                            position: 'absolute',
                            width: '169px',
                            height: '45px',
                            left: '1190px',
                            top: '650px',
                            backgroundColor: '#FBB03B',
                            color: 'white',
                            borderColor: '#FBB03B',
                            borderRadius: '50px'
                        }}>Next</Button>
                    </Card>
                </div>

            </div>

        </div>

    );
}
