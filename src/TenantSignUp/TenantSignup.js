import React, { useState } from 'react';
import { getTodayDate } from '../util/getDate';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from 'react-bootstrap/Button';
import Typography from '@material-ui/core/Typography';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen3a from './Screen3a';
import Screen3b from './Screen3b';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
import Screen6 from './Screen6';
import { postAPI } from './ConnAPI';

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


export default function TenantSignup() {
  const classes = useStyles();
  const [, setActiveStep] = React.useState(0);
  const [state, setState] = useState({

    // screen 1 form data
    activeStep: 5,
    firstName:"",
    lastName:"",
    email: "",
    password: "",
    passwordConfirm: "",

    // screen 2 form data
    phoneNo: "",
    dateOfBirth: "",
    gender: "",
    billingAddress: "",
    state: "",
    postcode: "",
    icNo: "",
    icUpload: "",

    // screen 3 form data
    healthFacility: "",
    buildingNo: "",
    streetName: "",
    postcodeProvider: "",
    stateProvider: "",
    country: "",
    providerPhoneNo: "",
    providerEmail: "",
    longitude: "",
    latitude: "",

    // screen 3a form data
    medicalSpecialties: "",

    // screen 3b form data
    placeGraduate: "",
    yearExperience: "",
    preferedLanguage: "",

    // screen 4 form data
    monDay: "",
    monStart: "",
    monEnd: "",

    tueDay: "",
    tueStart: "",
    tueEnd: "",

    wedDay: "",
    wedStart: "",
    wedEnd: "",

    thuDay: "",
    thuStart: "",
    thuEnd: "",

    friDay: "",
    friStart: "",
    friEnd: "",

    satDay: "",
    satStart: "",
    satEnd: "",

    sunDay: "",
    sunStart: "",
    sunEnd: "",

    //screen 5 form data
    apc: "",
    blc: "",


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
    if (state.activeStep === 0) { //screen1 create jomedic id
      if (state.firstName === "") {
        errMsg = 'Please fill first name';
      } else if (state.lastName === "") {
        errMsg = 'Please fill last name';
      } else if (state.email === "") {
        errMsg = 'Please fill email address';
      } else if (state.password === "") {
        errMsg = 'Please fill password';
      } else if (state.passwordConfirm === "") {
        errMsg = 'Please fill confirm pasword';
      } else if (state.password !== state.passwordConfirm) {
        errMsg = 'Password does not match';
      }
    } else if (state.activeStep === 1) { //screen2 personal info
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
    } else if (state.activeStep === 2) { //screen3 provider info
      if (state.healthFacility === "") {
        errMsg = 'Please fill health facility';
      } else if (state.buildingNo === "") {
        errMsg = 'Please fill building number';
      } else if (state.streetName === "") {
        errMsg = 'Please fill street name';
      } else if (state.postcodeProvider === "") {
        errMsg = 'Please fill postcode';
      } else if (state.stateProvider === "") {
        errMsg = 'Please fill state';
      } else if (state.country === "") {
        errMsg = 'Please fill country';
      } else if (state.tenantPhoneNo === "") {
        errMsg = 'Please fill tenant phone number';
      } else if (state.tenantEmail === "") {
        errMsg = 'Please fill tenant email';
      } else if (state.longitude === "") {
        errMsg = 'Please fill longitude';
      } else if (state.latitude === "") {
        errMsg = 'Please fill latitude';
      }
    } else if (state.activeStep === 3) { //screen3a specialties
      if (state.medicalSpecialties === "") {
        errMsg = 'Please fill medical specialties';
      }
    } else if (state.activeStep === 4) { //screen3b qualification&language
      if (state.placeGraduate === "") {
        errMsg = 'Please fill place of graduate';
      } else if (state.yearExperience === "") {
        errMsg = 'Please fill year of experience';
      } else if (state.preferedLanguage === "") {
        errMsg = 'Please fill prefered language';
      }
    } else if (state.activeStep === 5) { //screen4 operation hour
      if (state.monDay === "") {
        errMsg = 'Please select day (monday)';
      } else if (state.monStart === "") {
        errMsg = 'Please fill monday start time';
      } else if (state.monEnd === "") {
        errMsg = 'Please fill monday end time';
      } else if (state.tueDay === "") {
        errMsg = 'Please select day (tuesday)';
      } else if (state.tueStart === "") {
        errMsg = 'Please fill tuesday start time';
      } else if (state.tueEnd === "") {
        errMsg = 'Please fill tuesday end time';
      } else if (state.wedDay === "") {
        errMsg = 'Please select day (wednesday)';
      } else if (state.wedStart === "") {
        errMsg = 'Please fill wednesday start time';
      } else if (state.wedEnd === "") {
        errMsg = 'Please fill wednesday end time';
      } else if (state.thuDay === "") {
        errMsg = 'Please select day (thursday)';
      } else if (state.thuStart === "") {
        errMsg = 'Please fill thursday start time';
      } else if (state.thuEnd === "") {
        errMsg = 'Please fill thursday end time';
      } else if (state.friDay === "") {
        errMsg = 'Please select day (friday)';
      } else if (state.friStart === "") {
        errMsg = 'Please fill friday start time';
      } else if (state.friEnd === "") {
        errMsg = 'Please fill friday end time';
      } else if (state.satDay === "") {
        errMsg = 'Please select day (saturday)';
      } else if (state.satStart === "") {
        errMsg = 'Please fill saturday start time';
      } else if (state.satEnd === "") {
        errMsg = 'Please fill saturday end time';
      } else if (state.sunDay === "") {
        errMsg = 'Please select day (sunday)';
      } else if (state.sunStart === "") {
        errMsg = 'Please fill sunday start time';
      } else if (state.sunEnd === "") {
        errMsg = 'Please fill sunday end time';
      }
    } else if (state.activeStep === 6) { //screen5 apc&blc
      if (state.apc === "") {
        errMsg = 'Please upload annual practicing certificate';
      } else if (state.blc === "") {
        errMsg = 'Please upload business license certificate';
      }
    }

    // connect ke database
    if (state.activeStep === 0) {
      // screen1 table `jlk_users`

      let datas = {
        txn_cd: 'MEDPRO02',
        tstamp: getTodayDate(),
        data: {
          userID: state.email,
          userName: state.firstName,
          title: state.lastName,
          password: state.password,
          question: "",
          answer: "",
          motherName: "",
          userStatus: "001",
          loginStatus: "001",
          idCategory: "001",
          remoteCount: "0",
          userType: "001",
          userCategory: "001",
          userClasificationCd: "001",
          status: "1",
          roomNo: "01",
          startDate: "",
          endDate: "",
          remoteLogoutDate: "",
        },
      };

      postAPI(datas, (success) => {
        console.log(success);
      }, (error) => {
        errMsg = error.message;
      });
    }

    else if (state.activeStep === 1) {
      // screen2 table jlk_user_profile

      let datas2 = {
        txn_cd: 'MEDPRO03',
        tstamp: getTodayDate(),
        data: {
          userID: state.email,
          userName: state.firstName,
          title: state.lastName,
          gender: state.gender,
          DOB: state.dateOfBirth,
          occupation: "",
          homeAddress1: state.billingAddress,
          homeAddress2: "",
          homeAddress3: "",
          district: "",
          state: state.state,
          country: state.country,
          email: state.email,
          postcode: state.postcode,
          mobileNo: state.phoneNo,
          picture: state.icUpload,
          idNumber: state.icNo,
          idImg: "",
          nationality: ""
        },
      };

      postAPI(datas2, (success) => {
        console.log(success);
      }, (error) => {
        errMsg = error.message;
      });
    }

    else if (state.activeStep === 2) {
      //screen3 table jlk_tenant

      let datas3 = {
        txn_cd: 'MEDPRO07',
        tstamp: getTodayDate(),
        data: {
          tenantId: state.email,
          tenantName: state.firstName,
          tenantType: "0001",
          userID: state.email,
          directorName: "",
          address1: state.buildingNo,
          address2: state.streetName,
          address3: "",
          townCd: "",
          districtCd: "",
          stateCd: state.stateProvider,
          countryCd: state.country,
          postcode: state.postcodeProvider,
          phone: state.providerPhoneNo,
          email: state.providerEmail,
          packageType: "",
          startDate: "",
          endDate: "",
          status: "1",
          organisationName: state.healthFacility,
          longitude: state.longitude,
          latitude: state.latitude
        },
      };

      // console.log(datas3)

      postAPI(datas3, (success) => {
        console.log(success);
      }, (error) => {
        errMsg = error.message;
      });
    }

    else if (state.activeStep === 3) {
      //screen3a jlk_jomedic_specialty

      let datas4 = {
        txn_cd: 'MEDPRO17',
        tstamp: getTodayDate(),
        data: {
          tenantId: state.email,
          specialtyCd: [state.medicalSpecialties],
          status: "1",
          createdBy: "",
        },
      };

      // console.log(datas4)

      postAPI(datas4, (success) => {
        console.log(success);
      }, (error) => {
        errMsg = error.message;
      });
    }

    else if (state.activeStep === 4) {
      //screen3b table jlk_qualification

      let datas5 = {
        txn_cd: 'MEDPRO13',
        tstamp: getTodayDate(),
        data: {
          tenantId: state.email,
          qualificationCd: state.preferedLanguage,
          fieldStudy: state.yearExperience,
          universityName: state.placeGraduate,
          graduationYear: "2019-04-20",
          createdBy: "",
        },
      };

      postAPI(datas5, (success) => {
        console.log(success);
      }, (error) => {
        errMsg = error.message;
      });
    }

    else if (state.activeStep === 5) {
      //screen4 table jlk_working_day

      let datas6 = {
        txn_cd: 'MEDPRO21',
        tstamp: getTodayDate(),
        data: {
          workingDays: [
            {
              tenantId: state.email,
              workingDay: "Monday",
              startTime: state.monStart,
              endTime: state.monEnd,
              createdBy: ""
            }, {
              tenantId: state.email,
              workingDay: "Tuesday",
              startTime: state.tueStart,
              endTime: state.thuEnd,
              createdBy: ""
            }, {
              tenantId: state.email,
              workingDay: "Wednesday",
              startTime: state.wedStart,
              endTime: state.wedEnd,
              createdBy: ""
            }, {
              tenantId: state.email,
              workingDay: "Thursday",
              startTime: state.thuStart,
              endTime: state.thuEnd,
              createdBy: ""
            }, {
              tenantId: state.email,
              workingDay: "Friday",
              startTime: state.friStart,
              endTime: state.friEnd,
              createdBy: ""
            }, {
              tenantId: state.email,
              workingDay: "Saturday",
              startTime: state.satStart,
              endTime: state.satEnd,
              createdBy: ""
            }, {
              tenantId: state.email,
              workingDay: "Sunday",
              startTime: state.sunStart,
              endTime: state.sunEnd,
              createdBy: ""
            },
          ]

        },
      };

      console.log(datas6)

      // postAPI(datas6, (success) => {
      //   console.log(success);
      // }, (error) => {
      //   errMsg = error.message;
      // });
    }

    else if (state.activeStep === 6) {
      //screen5 table jlk_jomedic_master

      let datas7 = {
        txn_cd: 'MEDPRO09',
        tstamp: getTodayDate(),
        data: {
          tenantId: state.email,
          tenantType: "0001",
          hfc: "",
          serviceFee: "0.0",
          deposit: "0.0",
          discount: "0.0",
          tax: "0.0",
          BLC: state.blc,
          APC: state.apc,
          createdBy: ""
        },
      };

      postAPI(datas7, (success) => {
        console.log(success);
      }, (error) => {
        errMsg = error.message;
      });
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

      //screen1
      activeStep: 0,
      firstName:"",
      lastName:"",
      email: "",
      password: "",
      passwordConfirm: "",

      // screen2
      phoneNo: "",
      dateOfBirth: "",
      gender: "",
      billingAddress: "",
      state: "",
      postcode: "",
      icNo: "",
      icUpload: "",

      //screen3
      tenantName: "",
      healthFacility: "",
      buildingNo: "",
      streetName: "",
      postcodeProvider: "",
      stateProvider: "",
      country: "",
      tenantPhoneNo: "",
      tenantEmail: "",

      //screen3a
      medicalSpecialties: "",

      //screen3b
      placeGraduate: "",
      yearExperience: "",
      preferedLanguage: "",

      //screen4
      monDay: "",
      monStart: "",
      monEnd: "",

      tueDay: "",
      tueStart: "",
      tueEnd: "",

      wedDay: "",
      wedStart: "",
      wedEnd: "",

      thuDay: "",
      thuStart: "",
      thuEnd: "",

      friDay: "",
      friStart: "",
      friEnd: "",

      satDay: "",
      satStart: "",
      satEnd: "",

      sunDay: "",
      sunStart: "",
      sunEnd: "",

      //screen5
      apc: "",
      blc: "",

    });
  };



  function getSteps() {
    return ['Login Details', 'Personal Information', 'Provider Information', 'Specialties', 'Qualification & Language', 'Operation Hour', 'License Upload', 'E-Wallet'];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Screen1 handleInput={handleInput} {...state} />
      case 1:
        return <Screen2 handleInput={handleInput} {...state} />
      case 2:
        return <Screen3 handleInput={handleInput} {...state} />
      case 3:
        return <Screen3a handleInput={handleInput} {...state} />
      case 4:
        return <Screen3b handleInput={handleInput} {...state} />
      case 5:
        return <Screen4 handleInput={handleInput} {...state} />
      case 6:
        return <Screen5 handleInput={handleInput} {...state} />
      case 7:
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
                  {getStepContent(state.activeStep)}
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
