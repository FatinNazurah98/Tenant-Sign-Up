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
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen3a from './Screen3a';
import Screen3b from './Screen3b';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
import Screen6 from './Screen6';

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

export default function TenantSignup() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [state, setState] = useState({

    // screen 1 form data
    activeStep: 0,
    email: "",
    userID: "",
    password: "",
    passwordConfirm: "",

    // screen 2 form data
    firstName: "",
    lastName: "",
    phoneNo: "",
    dateOfBirth: "",
    gender: "",
    billingAddress: "",
    state: "",
    postcode: "",
    icNo: "",
    icUpload: "",

    // screen 3 form data
    healthcareFacility: "",
    buildingNo: "",
    streetName: "",
    postcode: "",
    state: "",
    country: "",
    providerPhoneNo: "",
    providerEmail: "",

    // screen 3a form data
    medicalSpecialties: "",

    // screen 3b form data
    placeGraduate:"",
    yearExperince: "",
    preferedLanguage: "",

    // screen 4 form data
    monStart:"",
    monEnd:"",
    tueStart: "",
    tueEnd: "",
    wedStart: "",
    wedEnd: "",
    thuStart: "",
    thuEnd: "",
    friStart: "",
    friEnd: "",
    satStart: "",
    satEnd: "",
    sunStart: "",
    sunEnd: "",

    //screen 5 form data
    uploadAnnualPracticing: "",
    uploadBusinessLicense: "",


  });
  const steps = getSteps();

  const handleInput = (obj) => {
    setState({
      ...state,
      [obj.target.name]: obj.target.value
    })
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    let errMsg = '';
    if (state.activeStep === 0) {
      if (state.email === "") {
        errMsg = 'Please fill email address';
      } else if (state.userID === "") {
        errMsg = 'Please fill userid';
      } else if (state.password === "") {
        errMsg = 'Please fill password';
      } else if (state.passwordConfirm === "") {
        errMsg = 'Please fill econfirm pasword';
      } else if (state.password !== state.passwordConfirm) {
        errMsg = 'Password does not match';
      }
    } else if (state.activeStep === 1) {
      if (state.firstName === "") {
        errMsg = 'Please fill first name';
      } else if (state.lastName === "") {
        errMsg = 'Please fill last name';
      } else if (state.phoneNo === "") {
        errMsg = 'Please fill phone number';
      } else if (state.dateOfBirth === "") {
        errMsg = 'Please choose date of birth';
      } else if (state.gender === "") {
        errMsg = 'Please choose gender';
      } else if (state.billingAddress === "") {
        errMsg = 'Please fill last name';
      } else if (state.state === "") {
        errMsg = 'Please choose state';
      } else if (state.postcode === "") {
        errMsg = 'Please fill postcode';
      } else if (state.icNo === "") {
        errMsg = 'Please fill ic number';
      } else if (state.icUpload === "") {
        errMsg = 'Please upload ic';
      }
    } else if (state.activeStep === 2){
      if (state.healthcareFacility ===""){
        errMsg = 'Please fill healthcare facility';
      }  else if (state.buildingNo === ""){
        errMsg = 'Please fill building number';
      } else if (state.streetName === ""){
        errMsg = 'Please fill street name';
      } else if (state.postcode === ""){
        errMsg = 'Please fill postcode';
      } else if (state.state === ""){
        errMsg = 'Please fill state';
      } else if (state.country === ""){
        errMsg = 'Please fill country';
      } else if (state.providerPhoneNo === ""){
        errMsg = 'Please fill provider phone number';
      } else if (state.providerEmail){
        errMsg = 'Please fill provider email';
      }
    } else if (state.activeStep === 3){
      if (state.medicalSpecialties){
        errMsg = 'Please fill medical specialties';
      }
    } else if (state.activeStep === 4){
      if (state.placeGraduate = ""){
        errMsg = 'Please fill place of graduate';
      } else if (state.yearExperince){
        errMsg = 'Please fill year of experience';
      } else if (state.preferedLanguage){
        errMsg = 'Please fill prefered language';
      }
    } else if (state.activeStep === 5){
      if (state.monStart === ""){
        errMsg = 'Please fill start time';
      } else if (state.monEnd === ""){
        errMsg = 'Please fill end time';
      } else if (state.tueStart === ""){
        errMsg = 'Please fill start time';
      } else if (state.tueEnd === ""){
        errMsg = 'Please fill end time';
      } else if (state.wedStart === ""){
        errMsg = 'Please fill start time';
      } else if (state.wedEnd === ""){
        errMsg = 'Please fill end time';
      } else if (state.thuStart === ""){
        errMsg = 'Please fill start time';
      } else if (state.thuEnd === ""){
        errMsg = 'Please fill end time';
      } else if (state.friStart === ""){
        errMsg = 'Please fill start time';
      } else if (state.friEnd === ""){
        errMsg = 'Please fill end time';
      } else if (state.satStart === ""){
        errMsg = 'Please fill start time';
      } else if (state.satEnd === ""){
        errMsg = 'Please fill end time';
      } else if (state.sunStart === ""){
        errMsg = 'Please fill start time';
      } else if (state.sunEnd === ""){
        errMsg = 'Please fill end time';
      }
    } else if (state.activeStep === 6){
      if (state.uploadAnnualPracticing === ""){
        errMsg = 'Please upload annual practicing certificate';
      } else if (state.uploadBusinessLicense === ""){
        errMsg = 'Please upload business license certificate';
      }
    } else if (state.activeStep === 7){
      // ready untuk submit ke database!
    }



    if (errMsg !== '') {
      alert(errMsg);
      return;
    }
    setState({
      ...state,
      activeStep: state.activeStep + 1
    });
  };

  const handleBack = () => {
    setState({
      ...state,
      activeStep: state.activeStep - 1
    });
  };

  const handleReset = () => {
    setState({
      ...state,
      activeStep: 0
    });
  };



  function getSteps() {
    return ['Login Details', 'Personal Information', 'Provider Info', 'Specialties', 'Qualification & Language', 'Operation Hour', 'License Upload', 'E-Wallet'];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Screen1 />
        return <Screen1 handleInput={handleInput} {...state} />
      case 1:
        return <Screen2 />
        return <Screen2 handleInput={handleInput} {...state} />
      case 2:
        return <Screen3 />
        return <Screen3 handleInput={handleInput} {...state} />
      case 3:
        return <Screen3a />
        return <Screen3a handleInput={handleInput} {...state} />
      case 4:
        return <Screen3b />
        return <Screen3b handleInput={handleInput} {...state} />
      case 5:
        return <Screen4 />
        return <Screen4 handleInput={handleInput} {...state} />
      case 6:
        return <Screen5 />
        return <Screen5 handleInput={handleInput} {...state} />
      case 7:
        return <Screen6 />
        return <Screen6 handleInput={handleInput} {...state} />
      default:
        return 'Unknown stepIndex';
    }
  }

  return (
    <div>
      <div className={classes.root}>
        <Stepper activeStep={state.activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button style={{ color: 'white', backgroundColor: '#FBB03B' }} onClick={handleReset}>Reset</Button>
            </div>
          ) : (
              <div>
                <div>
                  <Typography className={classes.instructions}>{getStepContent(state.activeStep)}</Typography>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Button style={{
                    color: 'white',
                    backgroundColor: '#FBB03B',
                    borderColor: '#FBB03B',
                    position: 'absolute',
                    width: '248px',
                    height: '63.03px',
                    borderRadius: '50px',
                    left: 330,
                    top: 1050,
                  }}
                    disabled={state.activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
              </Button>
                  <Button style={{
                    color: 'white',
                    backgroundColor: '#FBB03B',
                    position: 'absolute',
                    width: '248px',
                    height: '63.03px',
                    borderRadius: '50px',
                    top: 1050,
                    left: 950,
                  }} variant="contained" onClick={handleNext}>
                    {state.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>

  );
}
