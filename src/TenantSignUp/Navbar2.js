import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Nav, Navbar } from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import mainLogo from '../mainLogo.png';


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

export default function Navbar2() {
    const classes = useStyles();

    return (
        <div>
            <Styles>
                <Navbar expand="lg">
                    <Navbar.Brand href="/" style={{ fontSize: 30, fontWeight: 'bold' }}>
                        <div style={{ display: 'inline-flex' }}>
                            <img src={mainLogo} alt="mainLogo" />&nbsp; Jomedic
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Item><Nav.Link href="/">About</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/about">Contact</Nav.Link></Nav.Item> */}
                        </Nav>

                        <Nav className="ml-auto">
                            <div style={{ position: 'absolute', left: '84%', top: '30%' }}>
                                <Dropdown>
                                    <Dropdown.Toggle style={{ backgroundColor: '#C4C4C4', color: 'black', borderColor: '#C4C4C4' }} id="dropdown-basic">
                                        Dr Stephen Strange
                                </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="PersonalInfo" style={{fontWeight:'bold' }}>Manage Personal Info</Dropdown.Item><Divider />
                                        <Dropdown.Item href="HealthCF" style={{fontWeight:'bold' }}>Manage Healthcare Facility</Dropdown.Item><Divider />
                                        <Dropdown.Item href="ClinicSchedule" style={{fontWeight:'bold' }}>Manage Clinic Schedule</Dropdown.Item><Divider /><br />
                                        <Dropdown.Item href="#/action-4" style={{fontWeight:'bold' }}>Sign Out <FontAwesomeIcon style={{ position: 'absolute', left: 200 }} icon={faChevronRight} /> </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

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
