// import React, { useEffect, useState } from 'react';
// import { BASE_URL } from '../util/provider';
// import { getTodayDate } from '../util/getDate';
// import { NavLink } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// // import Button from '@material-ui/core/Button';
// import Button from 'react-bootstrap/Button';
// import Typography from '@material-ui/core/Typography';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import styled from 'styled-components';
// import { Nav, Navbar, Form } from 'react-bootstrap';
// import { Divider } from '@material-ui/core';
// import Dropdown from 'react-bootstrap/Dropdown';
// import 'datatables.net-dt/css/jquery.dataTables.css';
// import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Table from 'react-bootstrap/Table'

// import $ from 'jquery';
// $.DataTable = require('datatables.net')

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//   },
//   backButton: {
//     marginRight: theme.spacing(1),
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
// }));

// const Styles = styled.div`
//   .navbar { 
//     background-color: white;
//     position:'absolute';
//     width:'1440px';
//     height:'94px';
//     left:'0px';
//     top:'0px';
//   }
//   a, 
//   .navbar-nav, .navbar-light .nav-link {
//     color: black;
//     &:hover { color: #FBB03B; }
//   }
//   .navbar-brand {
//     font-size: 1.4em;
//     color: black;
//     &:hover { color: #FBB03B; } 
//   }
// `;


// export default class TenantSignup extends React.Component {
//     state = {
//         step:1,
//         email:'',
//         userid:'',
//         password:'',
//         confirmPassword:''
//     };

//     handleNext = () => {
//         const {prevActiveStep} = this.state;
//         this.setState({
//             prevActiveStep: prevActiveStep + 1
//         });
//     };

//     handleBack = () => {
//         const {prevActiveStep} = this.state;
//         this.setState({
//             prevActiveStep: prevActiveStep - 1
//         });
//     };

//     handleChange = input => e => {
//         this.setState({ [input]: e.target.value });
//     };

//   const classes = useStyles();

//   steps = () => {
//       getSteps
//   }
//   const steps = getSteps();


//   const handleReset = () => {
//     setActiveStep(0);
//   };



//   function getSteps() {
//     return ['Login Details', 'Personal Information', 'Provider Info', 'Specialties', 'Qualification & Language', 'Operation Hour', 'License Upload', 'E-Wallet'];
//   }

//   function getStepContent(stepIndex) {
//     switch (stepIndex) {
//       case 0:
//         return <Screen1 />
//       case 1:
//         return <Screen2 />
//       case 2:
//         return <Screen3 />
//       case 3:
//         return <Screen3a />
//       case 4:
//         return <Screen3b />
//       case 5:
//         return <Screen4 />
//       case 6:
//         return <Screen5 />
//       case 7:
//         return <Screen6 />
//       default:
//         return 'Unknown stepIndex';
//     }
//   }

//   function Screen1() {
//     const [userEmailAddress, setUserEmailAddress] = useState('');
//     const [userID, setUserID] = useState('');
//     const [userPassword, setUserPassword] = useState('');
//     const [userConfirmPassword, setUserConfirmPassword] = useState('');

//     const submitValue = () => {
//       if (userEmailAddress === "") {
//         alert('Please fill email address');
//       } else if (userID === "") {
//         alert('Please fill userid');
//       } else if (userPassword === "") {
//         alert('Please fill password');
//       } else if (userConfirmPassword === "") {
//         alert('Please fill econfirm pasword');
//       } else if (userPassword !== userConfirmPassword) {
//         alert('Password does not match');
//       } else {
//         handleNext();
//       }
//     };

//     return <Card style={{ width: 900, height: 900, borderColor: '#E5E5E5', margin: 'auto' }}>
//       <Card.Body>
//         <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Create Jomedic ID</h1>
//         <br />
//         <Form>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Email Address"
//               defaultValue={userEmailAddress}
//               onChange={e => setUserEmailAddress(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group controlId="formBasicUserID">
//             <Form.Label>User ID</Form.Label>
//             <Form.Control type="userID" placeholder="User ID" defaultValue={userID} onChange={e => setUserID(e.target.value)} />
//           </Form.Group>

//           <Form.Group controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Password" defaultValue={userPassword} onChange={e => setUserPassword(e.target.value)} />
//           </Form.Group>

//           <Form.Group controlId="formBasicPassword2">
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control type="password" placeholder="confirm password" defaultValue={userConfirmPassword} onChange={e => setUserConfirmPassword(e.target.value)} />
//           </Form.Group>
//           <button onClick={submitValue}>Submit</button>
//         </Form>
//       </Card.Body>
//     </Card>
//   }

//   function Screen2() {
//     const classes = useStyles();
//     return <Card style={{ width: 900, height: 900, borderColor: '#E5E5E5', margin: 'auto' }}>
//       <Card.Body>
//         <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Personal Information</h1>
//         <br />

//         <Form>
//           <Form.Row>
//             <Form.Group as={Col} controlId="formGridFName">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control />
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridLName">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control />
//             </Form.Group>

//           </Form.Row>

//           <Form.Row>
//             <Form.Group as={Col} controlId="formGridFName">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control />
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridLName">
//               <Form.Label>Date Of Birth</Form.Label>
//               <Form.Control placeholder='dd/mm/yyyy' />
//             </Form.Group>
//           </Form.Row>

//           <Form.Row>
//             <Form.Group controlId="formBasicUpload">
//               <Form.Label>Gender</Form.Label>
//               <Dropdown>
//                 <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '325px' }}>
//                   Select Gender
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                   <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
//                   <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </Form.Group>
//           </Form.Row>

//           <Form.Group controlId="formBasicUpload">
//             <Form.Label>Billing Address</Form.Label>
//             <Form.Control />
//           </Form.Group>

//           <Form.Row>
//             <Form.Group as={Col} controlId="formGridFName">
//               <Form.Label>State</Form.Label>
//               <Dropdown>
//                 <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '325px' }}>
//                   Select State
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                   <Dropdown.Item href="#/action-1">1</Dropdown.Item>
//                   <Dropdown.Item href="#/action-2">2</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridLName">
//               <Form.Label>Postcode</Form.Label>
//               <Form.Control />
//             </Form.Group>
//           </Form.Row>

//           <Form.Row>
//             <Form.Group as={Col} controlId="formGridFName">
//               <Form.Label>IC/ Passport Number</Form.Label>
//               <Form.Control />
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridLName">
//               <Form.Label>Upload NRIC/ID</Form.Label>
//               <div className={classes.root}>
//                 <input
//                   className={classes.input}
//                   id="contained-button-file"
//                   multiple
//                   type="file"
//                 />
//               </div>
//             </Form.Group>
//           </Form.Row>

//         </Form>
//       </Card.Body>
//     </Card>
//   }

//   function Screen3() {
//     return <Card style={{ width: 900, height: 900, borderColor: '#E5E5E5', margin: 'auto' }}>
//       <Card.Body>
//         <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Provider Information</h1>
//         <br />

//         <Form>
//           <Form.Group controlId="formBasicProviderName">
//             <Form.Label>Healthcare Facility</Form.Label>
//             <Form.Control />
//           </Form.Group>

//           <Form.Row>
//             <Form.Group as={Col} controlId="formGridBldNum">
//               <Form.Label>Building Number</Form.Label>
//               <Form.Control />
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridStreetName">
//               <Form.Label>Street Name</Form.Label>
//               <Form.Control />
//             </Form.Group>
//           </Form.Row>

//           <Form.Row>
//             <Form.Group as={Col} controlId="formGridPostcode">
//               <Form.Label>Postcode</Form.Label>
//               <Form.Control />
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridState">
//               <Form.Label>State</Form.Label>
//               <Dropdown>
//                 <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '325px' }}>
//                   Select State
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                   <Dropdown.Item href="#/action-1">1</Dropdown.Item>
//                   <Dropdown.Item href="#/action-2">2</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </Form.Group>
//           </Form.Row>

//           <Form.Group controlId="formBasicCountry">
//             <Form.Label>Country</Form.Label>
//             <Dropdown>
//               <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '100%' }}>
//                 Select Country
//                 </Dropdown.Toggle>

//               <Dropdown.Menu>
//                 <Dropdown.Item href="#/action-1">1</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">2</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Form.Group>

//           <Form.Group controlId="formBasicPPhoneNum">
//             <Form.Label>Provider Phone Number</Form.Label>
//             <Form.Control />
//           </Form.Group>

//           <Form.Group controlId="formBasicProviderEmail">
//             <Form.Label>Provider Email</Form.Label>
//             <Form.Control type="email" placeholder="info@princecourt.com" />
//           </Form.Group>
//         </Form>
//       </Card.Body>
//     </Card>
//   }

//   function Screen3a() {
//     const sampleData = [
//       {
//         "id": 1,
//         "medicalSpecialties": "General Medicine",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": "Spain",
//         "phone": "1-770-736-8031",
//         "status": "New",
//         "website": "hildegard.org",
//       },
//       {
//         "id": 2,
//         "medicalSpecialties": "Cardiologist",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": "America",
//         "phone": "010-692-6593",
//         "website": "anastasia.net",
//       },
//       {
//         "id": 3,
//         "medicalSpecialties": "Nefrology",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": "America",
//         "phone": "010-692-6593",
//         "website": "anastasia.net",
//       },
//     ]
//     const [dataSet] = React.useState(sampleData);

//     useEffect(() => {
//       $("#myTable").DataTable();
//     });

//     return <Card style={{ width: 900, height: 900, borderColor: '#E5E5E5', margin: 'auto' }}>
//       <Card.Body>
//         <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Specialties</h1>
//         <br />

//         <Form>
//           <Form.Row>
//             <Form.Group as={Col} controlId="formGridBldNum">
//               <Form.Label>Medical Specialties</Form.Label>
//               <Dropdown>
//                 <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '500px' }}>
//                   Select Specialties
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                   <Dropdown.Item href="#/action-1">1</Dropdown.Item>
//                   <Dropdown.Item href="#/action-2">2</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridStreetName">
//               <Form.Label></Form.Label><br />
//               <Button style={{
//                 position: 'absolute',
//                 left: '5%',
//                 top: '45%',
//                 backgroundColor: '#025586'
//               }}>+ Add Specialties</Button>

//             </Form.Group>
//           </Form.Row>
//           <div>
//             <div style={{ paddingTop: 20 }}>
//               <Table className="display" width="100%" id="myTable">
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Medical Specialties</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {dataSet.map((item, key) => {
//                     return (
//                       <tr key={key}>
//                         <td>{item.id}</td>
//                         <td>{item.medicalSpecialties}</td>
//                         <td>
//                           <FontAwesomeIcon icon={faTrashAlt} onClick={() => alert(item.medicalSpecialties)} />
//                         </td>
//                       </tr>
//                     )
//                   })}
//                 </tbody>
//               </Table>
//             </div>
//           </div>
//         </Form>
//       </Card.Body>
//     </Card>
//   }

//   function Screen3b() {
//     return <Card style={{ width: 900, height: 900, borderColor: '#E5E5E5', margin: 'auto' }}>
//       <Card.Body>
//         <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Qualification & Language</h1>
//         <br />

//         <Form>
//           <Form.Group controlId="formBasicProviderName">
//             <Form.Label>Place Of Graduate</Form.Label>
//             <Form.Control />
//           </Form.Group>

//           <Form.Row>
//             <Form.Group as={Col} controlId="formGridBldNum">
//               <Form.Label>Year Of Experience</Form.Label>
//               <Form.Control />
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridStreetName">
//               <Form.Label>Prefered Language</Form.Label>
//               <Dropdown>
//                 <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ borderColor: '#ced4da', alignItems: 'right', width: '100%' }}>
//                   Select Language
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                   <Dropdown.Item href="#/action-1">1</Dropdown.Item>
//                   <Dropdown.Item href="#/action-2">2</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </Form.Group>
//           </Form.Row>

//         </Form>
//       </Card.Body>
//     </Card>

//   }
//   function Screen4() {
//     return <Card style={{ width: 900, height: 900, borderColor: '#E5E5E5', margin: 'auto' }}>
//       <Card.Body>
//         <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Operation Hour</h1>
//         <br />

//         <Form>
//           <Form.Group as={Row} controlId="formHorizontalEmail">
//             <Form.Label column sm={3}>
//               Monday
//                           </Form.Label>
//             <Col sm={9}>
//               <Form.Row>
//                 <Form.Group as={Col} controlId="formGridStart">
//                   <Form.Label>Start</Form.Label>
//                   <Form.Control />
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formGridEnd">
//                   <Form.Label>End</Form.Label>
//                   <Form.Control />
//                 </Form.Group>
//               </Form.Row>
//             </Col>
//           </Form.Group>

//           <Form.Group as={Row} controlId="formHorizontalEmail">
//             <Form.Label column sm={3}>
//               Tuesday
//                           </Form.Label>
//             <Col sm={9}>
//               <Form.Row>
//                 <Form.Group as={Col} controlId="formGridStart">
//                   <Form.Label>Start</Form.Label>
//                   <Form.Control />
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formGridEnd">
//                   <Form.Label>End</Form.Label>
//                   <Form.Control />
//                 </Form.Group>
//               </Form.Row>
//             </Col>
//           </Form.Group>

//           <Form.Group as={Row} controlId="formHorizontalEmail">
//             <Form.Label column sm={3}>
//               Wednesday
//                           </Form.Label>
//             <Col sm={9}>
//               <Form.Row>
//                 <Form.Group as={Col} controlId="formGridStart">
//                   <Form.Label>Start</Form.Label>
//                   <Form.Control />
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formGridEnd">
//                   <Form.Label>End</Form.Label>
//                   <Form.Control />
//                 </Form.Group>
//               </Form.Row>
//             </Col>
//           </Form.Group>

//           <Form.Group as={Row} controlId="formHorizontalEmail">
//             <Form.Label column sm={3}>
//               Thursday
//                           </Form.Label>
//             <Col sm={9}>
//               <Form.Row>
//                 <Form.Group as={Col} controlId="formGridStart">
//                   <Form.Label>Start</Form.Label>
//                   <Form.Control />
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formGridEnd">
//                   <Form.Label>End</Form.Label>
//                   <Form.Control />
//                 </Form.Group>
//               </Form.Row>
//             </Col>
//           </Form.Group>

//           <Form.Group as={Row} controlId="formHorizontalEmail">
//             <Form.Label column sm={3}>
//               Friday
//                           </Form.Label>
//             <Col sm={9}>
//               <Form.Row>
//                 <Form.Group as={Col} controlId="formGridStart">
//                   <Form.Label>Start</Form.Label>
//                   <Form.Control />
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formGridEnd">
//                   <Form.Label>End</Form.Label>
//                   <Form.Control />
//                 </Form.Group>
//               </Form.Row>
//             </Col>
//           </Form.Group>

//           <Form.Group as={Row} controlId="formHorizontalEmail">
//             <Form.Label column sm={3}>
//               Saturday
//                           </Form.Label>
//             <Col sm={9}>
//               <Form.Row>
//                 <Form.Group as={Col} controlId="formGridStart">
//                   <Form.Label>Start</Form.Label>
//                   <Form.Control />
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formGridEnd">
//                   <Form.Label>End</Form.Label>
//                   <Form.Control />
//                 </Form.Group>
//               </Form.Row>
//             </Col>
//           </Form.Group>

//           <Form.Group as={Row} controlId="formHorizontalEmail">
//             <Form.Label column sm={3}>
//               Sunday
//                           </Form.Label>
//             <Col sm={9}>
//               <Form.Row>
//                 <Form.Group as={Col} controlId="formGridStart">
//                   <Form.Label>Start</Form.Label>
//                   <Form.Control />
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formGridEnd">
//                   <Form.Label>End</Form.Label>
//                   <Form.Control />
//                 </Form.Group>
//               </Form.Row>
//             </Col>
//           </Form.Group>

//         </Form>
//       </Card.Body>
//     </Card>
//   }

//   function Screen5() {
//     const classes = useStyles();
//     return <Card style={{ width: 900, height: 900, borderColor: '#E5E5E5', margin: 'auto' }}>
//       <Card.Body>
//         <h1 style={{ textAlign: 'center', fontWeight: '600' }}>Upload Certificate</h1>
//         <br />

//         <Card style={{ alignItems: 'center', width: '600px', height: '157px', borderColor: '#000000', borderStyle: 'dashed', borderWidth: '1px', margin: 'auto' }}>
//           <br />
//           <div>
//             <h5 style={{ fontSize: "18px" }}>Upload annual practicing certificate</h5>
//             <h3 style={{
//               position: 'absolute',
//               fontWeight: "bold",
//               fontSize: "18px",
//               left: '180px',
//               top: '70px',
//             }}>Select a file or drag here</h3><br />
//             <div className={classes.root}>
//               <input style={{
//                 position: 'absolute',
//                 left: '190px',
//                 top: '110px'
//               }}
//                 className={classes.input}
//                 id="contained-button-file"
//                 multiple
//                 type="file"
//               />
//             </div>
//           </div>

//         </Card>
//         <br />

//         <Card style={{ alignItems: 'center', width: '600px', height: '157px', borderColor: '#000000', borderStyle: 'dashed', borderWidth: '1px', margin: 'auto' }}>
//           <br />
//           <div>
//             <h4 style={{ fontSize: "18px" }}>Upload Business License certificate</h4>
//             <h3 style={{
//               fontWeight: "bold",
//               fontSize: "18px",
//               position: 'absolute',
//               left: '180px',
//               top: '70px',
//             }}>Select a file or drag here</h3><br />
//             <div className={classes.root}>
//               <input style={{
//                 position: 'absolute',
//                 left: '190px',
//                 top: '110px'
//               }}
//                 className={classes.input}
//                 id="contained-button-file"
//                 multiple
//                 type="file"
//               />
//             </div>
//           </div>

//         </Card>
//       </Card.Body>

//     </Card>
//   }

//   function Screen6() {
//     return <Card style={{ width: 900, height: 900, borderColor: '#E5E5E5', margin: 'auto' }}>
//       <Card.Body>
//         <h1 style={{ textAlign: 'center', fontWeight: '600' }}>E-Wallet</h1>
//         <br />

//         <Form>

//         </Form>
//       </Card.Body>
//     </Card>
//   }

//   return (
//     <div>
//       <div className={classes.root}>
//         <Stepper activeStep={activeStep} alternativeLabel>
//           {steps.map(label => (
//             <Step key={label}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </Stepper>
//         <div>
//           {activeStep === steps.length ? (
//             <div>
//               <Typography className={classes.instructions}>All steps completed</Typography>
//               <Button style={{ color: 'white', backgroundColor: '#FBB03B' }} onClick={handleReset}>Reset</Button>
//             </div>
//           ) : (
//               <div>
//                 <div>
//                   <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
//                 </div>
//                 <div style={{ textAlign: 'center' }}>
//                   <Button style={{
//                     color: 'white',
//                     backgroundColor: '#FBB03B',
//                     borderColor: '#FBB03B',
//                     position: 'absolute',
//                     width: '248px',
//                     height: '63.03px',
//                     borderRadius:'50px',
//                     left: 330,
//                     top: 1050,
//                   }}
//                     disabled={activeStep === 0}
//                     onClick={handleBack}
//                     className={classes.backButton}
//                   >
//                     Back
//               </Button>
//                   <Button style={{
//                     color: 'white',
//                     backgroundColor: '#FBB03B',
//                     position: 'absolute',
//                     width: '248px',
//                     height: '63.03px',
//                     borderRadius:'50px',
//                     top: 1050,
//                     left: 950,
//                   }} variant="contained" onClick={handleNext}>
//                     {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                   </Button>
//                 </div>
//               </div>
//             )}
//         </div>
//       </div>
//     </div>

//   );
// }
