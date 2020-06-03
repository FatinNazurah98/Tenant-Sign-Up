import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../util/provider';
import { getTodayDate } from '../util/getDate';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
import Button from 'react-bootstrap/Button';
import Typography from '@material-ui/core/Typography';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import { Nav, Navbar, Form } from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import Dropdown from 'react-bootstrap/Dropdown';
import 'datatables.net-dt/css/jquery.dataTables.css';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Screen1 from './Screen1';

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

export default function Screen5(props) {
    const classes = useStyles();
    const [state, setState] = useState(props);
    
    return <Card style={{ width: 900, height: 900, borderColor: '#E5E5E5', margin: 'auto' }}>
      <Card.Body>
        <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Upload Certificate</h1>
        <br />

        <Card style={{ alignItems: 'center', width: '600px', height: '157px', borderColor: '#000000', borderStyle: 'dashed', borderWidth: '1px', margin: 'auto' }}>
          <br />
          <div>
            <h5 style={{ fontSize: "18px" }}>Upload annual practicing certificate</h5>
            <h3 style={{
              position: 'absolute',
              fontWeight: "bold",
              fontSize: "18px",
              left: '180px',
              top: '70px',
            }}>Select a file or drag here</h3><br />
            <div className={classes.root}>
              <input style={{
                position: 'absolute',
                left: '190px',
                top: '110px'
              }}
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
            </div>
          </div>

        </Card>
        <br />

        <Card style={{ alignItems: 'center', width: '600px', height: '157px', borderColor: '#000000', borderStyle: 'dashed', borderWidth: '1px', margin: 'auto' }}>
          <br />
          <div>
            <h4 style={{ fontSize: "18px" }}>Upload Business License certificate</h4>
            <h3 style={{
              fontWeight: "bold",
              fontSize: "18px",
              position: 'absolute',
              left: '180px',
              top: '70px',
            }}>Select a file or drag here</h3><br />
            <div className={classes.root}>
              <input style={{
                position: 'absolute',
                left: '190px',
                top: '110px'
              }}
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
            </div>
          </div>

        </Card>
      </Card.Body>

    </Card>
  }