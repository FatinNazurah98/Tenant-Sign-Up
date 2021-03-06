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
import Screen3c from './Screen3c';
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
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [state, setState] = useState({

    // screen 1 form data
    activeStep: 0,
    firstName: "",
    lastName: "",
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
    cityProvider: "",
    stateProvider: "",
    country: "",
    providerPhoneNo: "",
    providerEmail: "",
    longitude: "",
    latitude: "",

    // screen 3a form data
    medicalSpecialties: "",

    // screen 3b form data
    qualification: "",
    placeGraduated: "",
    major: "",
    yearGraduated: "",

    //screen3c form data
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

  const isStepOptional = (step) => {
    if (step === 4) {
      return step === 4;
    }
    else if (step === 5) {
      return step === 5;
    }
    else if (step === 6) {
      return step === 6;
    }
  };

  const handleInput = (obj) => {
    setState({
      ...state,
      [obj.target.name]: obj.target.value
    })
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(state.activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(state.activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);

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
      if (state.phoneNo === "") {
        errMsg = 'Please fill phone number';
      } else if (state.dateOfBirth === "") {
        errMsg = 'Please choose date of birth';
      } else if (state.gender === "") {
        errMsg = 'Please choose gender';
      } else if (state.billingAddress === "") {
        errMsg = 'Please fill billing address';
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
      } else if (state.cityProvider === "") {
        errMsg = 'Please fill city';
      } else if (state.stateProvider === "") {
        errMsg = 'Please choose state';
      } else if (state.country === "") {
        errMsg = 'Please choose country';
      } else if (state.tenantPhoneNo === "") {
        errMsg = 'Please fill provider phone number';
      } else if (state.tenantEmail === "") {
        errMsg = 'Please fill provider email';
      } else if (state.longitude === "") {
        errMsg = 'Please fill longitude';
      } else if (state.latitude === "") {
        errMsg = 'Please fill latitude';
      }
    } else if (state.activeStep === 3) { //screen3a specialties
      if (state.medicalSpecialties === "") {
        errMsg = 'Please choose medical specialties';
      }
    } else if (state.activeStep === 4) { //screen3b qualification
      // if (state.qualification === "") {
      //   errMsg = 'Please fill qualification';
      // } else if (state.major === "") {
      //   errMsg = 'Please fill major';
      // } else if (state.placeGraduated === "") {
      //   errMsg = 'Please fill place of graduated';
      // } else if (state.yearGraduated === "") {
      //   errMsg = 'Please fill year of graduated';
      // }
    } else if (state.activeStep === 5) { //screen3c language
      // if (state.preferedLanguage === "") {
      //   errMsg = 'Please fill prefered language';
      // }
    } else if (state.activeStep === 6) { //screen4 operation hour
      // if (state.monDay === "") {
      //   errMsg = 'Please select day (monday)';
      // } else if (state.monStart === "") {
      //   errMsg = 'Please fill monday start time';
      // } else if (state.monEnd === "") {
      //   errMsg = 'Please fill monday end time';
      // } else if (state.tueDay === "") {
      //   errMsg = 'Please select day (tuesday)';
      // } else if (state.tueStart === "") {
      //   errMsg = 'Please fill tuesday start time';
      // } else if (state.tueEnd === "") {
      //   errMsg = 'Please fill tuesday end time';
      // } else if (state.wedDay === "") {
      //   errMsg = 'Please select day (wednesday)';
      // } else if (state.wedStart === "") {
      //   errMsg = 'Please fill wednesday start time';
      // } else if (state.wedEnd === "") {
      //   errMsg = 'Please fill wednesday end time';
      // } else if (state.thuDay === "") {
      //   errMsg = 'Please select day (thursday)';
      // } else if (state.thuStart === "") {
      //   errMsg = 'Please fill thursday start time';
      // } else if (state.thuEnd === "") {
      //   errMsg = 'Please fill thursday end time';
      // } else if (state.friDay === "") {
      //   errMsg = 'Please select day (friday)';
      // } else if (state.friStart === "") {
      //   errMsg = 'Please fill friday start time';
      // } else if (state.friEnd === "") {
      //   errMsg = 'Please fill friday end time';
      // } else if (state.satDay === "") {
      //   errMsg = 'Please select day (saturday)';
      // } else if (state.satStart === "") {
      //   errMsg = 'Please fill saturday start time';
      // } else if (state.satEnd === "") {
      //   errMsg = 'Please fill saturday end time';
      // } else if (state.sunDay === "") {
      //   errMsg = 'Please select day (sunday)';
      // } else if (state.sunStart === "") {
      //   errMsg = 'Please fill sunday start time';
      // } else if (state.sunEnd === "") {
      //   errMsg = 'Please fill sunday end time';
      // }
    } else if (state.activeStep === 7) { //screen5 apc&blc
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
          townCd: state.cityProvider,
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
          qualificationCd: state.qualification,
          fieldStudy: state.major,
          universityName: state.placeGraduated,
          graduationYear: state.yearGraduated,
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
      //screen3c table jlk_language

      let datas5a = {
        txn_cd: 'MEDPRO15',
        tstamp: getTodayDate(),
        data: {
          tenantId: state.email,
          languageCd:state.preferedLanguage,
          createdBy: state.email,
        },
      };

      // console.log(datas5a);

      postAPI(datas5a, (success) => {
        console.log(success);
      }, (error) => {
        errMsg = error.message;
      });
    }

    else if (state.activeStep === 6) {
      //screen4 table jlk_working_day

      let datas6 = {
        txn_cd: 'MEDPRO21',
        tstamp: getTodayDate(),
        data: {
          workingDays: [
            {
              tenantId: state.email,
              workingDay: "Monday",
              startTime: "08:00",
              endTime: "22:00",
              createdBy: ""
            }, {
              tenantId: state.email,
              workingDay: "Tuesday",
              startTime: "08:00",
              endTime: "22:00",
              createdBy: ""
            }, {
              tenantId: state.email,
              workingDay: "Wednesday",
              startTime: "08:00",
              endTime: "22:00",
              createdBy: ""
            }, {
              tenantId: state.email,
              workingDay: "Thursday",
              startTime: "08:00",
              endTime: "22:00",
              createdBy: ""
            }, {
              tenantId: state.email,
              workingDay: "Friday",
              startTime: "08:00",
              endTime: "22:00",
              createdBy: ""
            }, {
              tenantId: state.email,
              workingDay: "Saturday",
              startTime: "08:00",
              endTime: "22:00",
              createdBy: ""
            }, {
              tenantId: state.email,
              workingDay: "Sunday",
              startTime: "08:00",
              endTime: "22:00",
              createdBy: ""
            },
          ]

        },
      };

      // console.log(datas6);

      postAPI(datas6, (success) => {
        console.log(success);
      }, (error) => {
        errMsg = error.message;
      });
    }

    else if (state.activeStep === 7) {
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

  const handleSkip = () => {
    if (!isStepOptional(state.activeStep)) {
      throw new Error("You can not skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(state.activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setState({
      ...state,

      //screen1
      activeStep: 0,
      firstName: "",
      lastName: "",
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
      cityProvider: "",
      stateProvider: "",
      country: "",
      tenantPhoneNo: "",
      tenantEmail: "",

      //screen3a
      medicalSpecialties: "",

      //screen3b
      qualification: "",
      placeGraduated: "",
      major: "",
      yearGraduated: "",

      //Screen3c
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
    return ['Login Details', 'Personal Information', 'Provider Information', 'Specialties', 'Qualification', 'Language', 'Operation Hour', 'License Upload'];
  }

  function getStepContent(step) {
    switch (step) {
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
        return <Screen3c handleInput={handleInput} {...state} />
      case 6:
        return <Screen4 handleInput={handleInput} {...state} />
      case 7:
        return <Screen5 handleInput={handleInput} {...state} />
      default:
        return 'Unknown stepIndex';
    }
  }

  const max_width = 550; // mobile view
  let stepperAttr = { orientation: 'vertical' };
  if (window.innerWidth >= max_width) {
    stepperAttr = { alternativeLabel: 'alternativeLabel' };
  }

  return (
    <div>
      <div className={classes.root}>
        <Stepper activeStep={state.activeStep} {...stepperAttr}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed. Sign up successful!</Typography>
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
                    width: '248px',
                    height: '63.03px',
                    borderRadius: '50px',
                    margin: 10
                  }}
                    disabled={state.activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
              </Button>
                  {/* {isStepOptional(state.activeStep) && (
                    <Button style={{
                      color: 'white',
                      backgroundColor: '#FBB03B',
                      width: '248px',
                      height: '63.03px',
                      borderRadius: '50px',
                    }}
                      variant="contained"
                      color="primary"
                      onClick={handleSkip}
                      className={classes.button}
                    >
                      Skip
                    </Button>
                  )} */}
                  <Button style={{
                    color: 'white',
                    backgroundColor: '#FBB03B',
                    width: '248px',
                    height: '63.03px',
                    borderRadius: '50px',
                    margin: 10

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
