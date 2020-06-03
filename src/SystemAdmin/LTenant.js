import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";
import 'datatables.net-dt/css/jquery.dataTables.css';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from 'react-bootstrap/Table'
import styled from 'styled-components';

import $ from 'jquery';
// import { NavLink } from 'react-bootstrap';
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
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

const Styles = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: -6em;
  margin-left: 25em;
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

function LTenant(props) {
    const sampleData = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": "Spain",
            "phone": "1-770-736-8031",
            "status": "New",
            "website": "hildegard.org",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": "America",
            "phone": "010-692-6593",
            "website": "anastasia.net",
        },
    ]

    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [dataSet] = React.useState(sampleData);



    useEffect(() => {
        $("#myTable").DataTable();
    });

    return (
        <Styles>
            <h6 style={{
                fontWeight: 'bold',
                fontSize: '24px'
            }}>List Of Tenant</h6><br />
            <div>
                <Container style={{ left: '330px', position: 'absolute' }}>
                    <Row>
                        <Col sm>Keywords
                        <AppBar position="static" style={{ backgroundColor: 'white', borderRadius: '6px', boxSizing: 'border-box' }}>
                                <div className={classes.search} style={{ backgroundColor: 'white', width: '477px', height: '45px', borderRadius: '6px', boxSizing: 'border-box' }}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon />

                                    </div>
                                    <InputBase style={{
                                        left: '50px',
                                        top: '7px',
                                        width: '400px',
                                        position: 'absolute'
                                    }}
                                        placeholder="Type in keywords"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                    <br />
                                </div>
                            </AppBar>
                        </Col>

                        <Col sm>Type
                        <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" style={{ width: '300px', height: '45px', backgroundColor: 'white', color: 'black', borderColor: '#9E9E9E' }}>
                                    All
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">New</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Pending</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Approved</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>

                        <Col sm>
                            <Button style={{
                                position: 'absolute',
                                bottom: 0,
                                width: '169px',
                                height: '45px',
                                backgroundColor: '#FBB03B',
                                color: 'white'
                            }}>Filter</Button>
                        </Col>
                    </Row>
                    <br /> <br />
                    <Divider />
                    <div>
                        <div style={{ paddingTop: 20 }}>
                            <Table className="display" width="100%" id="myTable">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Phone No</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataSet.map((item, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.address}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.status}</td>
                                                <td>
                                                    <StyledNavItem>
                                                    <NavLink to="/UpdateTenant"><FontAwesomeIcon icon={faEdit} /></NavLink>
                                                    </StyledNavItem>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Container>
            </div>
        </Styles>
    );
}

LTenant.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.any
};



export default LTenant;
