import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import mainLogo from '../mainLogo.png';
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

export default function Jomedic() {
    const classes = useStyles();
    const [email, setEmail] = useState('');

    function signOutBtn() {
        localStorage.removeItem('myData');
        window.location = '/';
    }

    useEffect(() => {
        const fetchData = () => {
            setEmail(localStorage.getItem('myData'));
        };

        fetchData();
    }, []);

    return (
        <div>
            <Styles>
                <Navbar expand="lg">
                    <Navbar.Brand style={{ fontSize: 30, fontWeight: 'bold' }}>
                        <div style={{ display: 'inline-flex' }}>
                            <img src={mainLogo} alt="mainLogo" />&nbsp; JOMEDIC
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {email === null ?
                                <>
                                    <Nav.Item><Nav.Link href="/" style={{ fontSize: 20, fontWeight: 'bold' }}>Sign In</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link href="/TenantSignup" style={{ fontSize: 20, fontWeight: 'bold' }}>Sign Up</Nav.Link></Nav.Item>
                                </>

                                : <Nav.Item>
                                    <Dropdown>
                                        <Dropdown.Toggle style={{ fontSize: 20, fontWeight: 'bold', backgroundColor: '#ffffff00', color: 'black', borderColor: '#ffffff00' }} id="dropdown-basic">
                                            {email}
                                </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="PersonalInfo" style={{ fontWeight: 'bold' }}>Manage Personal Info</Dropdown.Item><Divider />
                                            <Dropdown.Item href="HealthCF" style={{ fontWeight: 'bold' }}>Manage Healthcare Facility</Dropdown.Item><Divider />
                                            {/* <Dropdown.Item href="ClinicSchedule" style={{ fontWeight: 'bold' }}>Manage Clinic Schedule</Dropdown.Item><Divider /> */}<br />
                                            <Dropdown.Item onClick={() => signOutBtn()} style={{ fontWeight: 'bold' }}>Sign Out <FontAwesomeIcon style={{ position: 'absolute', left: 200 }} icon={faChevronRight} /> </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Nav.Item>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Divider style={{ backgroundColor: '#C4C4C4' }} />
                <Divider style={{ backgroundColor: '#C4C4C4' }} />
                <Divider style={{ backgroundColor: '#C4C4C4' }} />
                <br />
            </Styles>
            <div className={classes.root}>


            </div>
        </div>


    );
}
