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
import PersonalInfo from './PersonalInfo';

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

export default function SignIn() {
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
    <Card style={{ width: '500px', height: '500px', borderColor: '#E5E5E5', margin: 'auto' }}>
      <Card.Body>
        <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Sign In</h1><br />
        <h4 style={{ textAlign: 'center', fontWeight: 'normal', fontSize:20}}>Enter your email address and password</h4><br/>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Nav.Link href="/forgotPassword">
          <h6 style={{ fontSize:16, color:'#FCA20A'}}>Forgot Password?</h6><br/>
          </Nav.Link>
          <Nav.Link href="/PersonalInfo">
          <Button style={{
                    color: 'white',
                    backgroundColor: '#FBB03B',
                    borderColor:'#FBB03B',
                    borderRadius:30,
                    width: 179.54,
                    height: 47,
                    float: 'right'
                  }}>Sign In
                  </Button>
                  </Nav.Link>
        </Form>
      </Card.Body>
    </Card>

    );
}
