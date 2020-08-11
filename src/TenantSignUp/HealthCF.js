import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'datatables.net-dt/css/jquery.dataTables.css';
import { postAPI } from './ConnAPI';
import { getTodayDate } from '../util/getDate';
import HFInfo from './HFInfo';
import HFOperation from './HFOperation';
import HFQualification from './HFQualification';
import HFLanguage from './HFLanguage';
import HFSpecialties from './HFSpecialties';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function HealthCF(props) {
    const [] = useState(props);
    const [value, setValue] = React.useState(0);
    const [state, setState] = useState({

        //HFInfo
        healthFacility: "",
        streetName: "",
        cityProvider: "",
        stateProvider: "",
        providerPhoneNo: "",
        buildingNo: "",
        postcodeProvider: "",
        country: "",
        providerEmail: "",

        //HFSpecialties
        medicalSpecialties: "",

        //HFQualification
        placeGraduate: "",
        yearExperience: "",
        preferedLanguage: "",

        //OperationHour
        monStart: "",
        monEnd: "",
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
    });

    const handleInput = (obj) => {
        setState({
            ...state,
            [obj.target.name]: obj.target.value
        })
    };

    function saveBtn() {
        let errMsg = '';

        if (value === 0) {
            //jlk_tenant
            let datas = {
                txn_cd: "MEDPRO08",
                tstamp: getTodayDate(),
                data: {
                    tenantId: state.email,
                    tenantName: "Nazurah",
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
            }

            postAPI(datas, (success) => {
                console.log(success);
            }, (error) => {
                errMsg = error.message;
            });

            alert('Data has been updated');

        } else if (value === 1) {
            //jlk_jomedic_specialty
            let datas2 = {
                txn_cd: "MEDPRO18",
                tstamp: getTodayDate(),
                data: {
                    tenantId: state.email,
                    specialtyCd: [state.medicalSpecialties],
                    status: "1",
                    createdBy: ""
                },
            }

            postAPI(datas2, (success) => {
                console.log(success);
            }, (error) => {
                errMsg = error.message;
            });

            alert('Data has been updated');

        } else if (value === 2) {
            //jlk_qualification
            let datas3 = {
                txn_cd: "MEDPRO14",
                tstamp: getTodayDate(),
                data: {
                    tenantId: state.email,
                    qualificationCd: state.preferedLanguage,
                    fieldStudy: state.yearExperience,
                    universityName: state.placeGraduate,
                    graduationYear: "2019-04-20",
                    createdBy: "",
                },
            }

            postAPI(datas3, (success) => {
                console.log(success);
            }, (error) => {
                errMsg = error.message;
            });

            alert('Data has been updated');

        } else {
            //jlk_working_day
            let datas4 = {
                txn_cd: "MEDPRO20",
                tstamp: getTodayDate(),
                data: {
                    tenantId: state.email,
                    workingDay: "Monday",
                    startTime: state.monStart,
                    endTime: state.monEnd,
                    createdBy: ""
                },
            }

            postAPI(datas4, (success) => {
                console.log(success);
            }, (error) => {
                errMsg = error.message;
            });

            alert('Data has been updated');
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    const theme = useTheme();

    return (
        <div>
            <div>
                <br />
                <h1 style={{
                    fontSize: 48,
                    position: 'absolute',
                    left: 158,
                }}>Healthcare Facility</h1>

                <div>
                    <Card style={{
                        position: 'absolute',
                        left: 100,
                        top: 200,
                        width: '90%',
                        height: '120%',
                        borderColor: '#E5E5E5'
                    }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab textColor="inherit" label="Information" {...a11yProps(0)} />
                            <Tab textColor="inherit" label="Specialties" {...a11yProps(1)} />
                            <Tab textColor="inherit" label="Qualification" {...a11yProps(2)} />
                            <Tab textColor="inherit" label="Language" {...a11yProps(3)} />
                            <Tab textColor="inherit" label="Operation Hour" {...a11yProps(4)} />
                        </Tabs>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <HFInfo handleInput={handleInput}{...state} />
                            </TabPanel>

                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <HFSpecialties handleInput={handleInput}{...state} />
                            </TabPanel>

                            <TabPanel value={value} index={2} dir={theme.direction}>
                                <HFQualification handleInput={handleInput}{...state} />
                            </TabPanel>

                            <TabPanel value={value} index={3} dir={theme.direction}>
                                <HFLanguage handleInput={handleInput}{...state} />
                            </TabPanel>

                            <TabPanel value={value} index={4} dir={theme.direction}>
                                <HFOperation handleInput={handleInput}{...state} />
                            </TabPanel>

                        </SwipeableViews>
                        <Button
                            onClick={() => saveBtn()}
                            style={{
                                position: 'absolute',
                                width: '169px',
                                height: '45px',
                                left: '1100px',
                                top: '850px',
                                backgroundColor: '#FBB03B',
                                borderColor: '#FBB03B',
                                color: 'white',
                                borderRadius: '6px'
                            }}>Save</Button>
                    </Card>
                </div>

            </div>

        </div>

    );
}
