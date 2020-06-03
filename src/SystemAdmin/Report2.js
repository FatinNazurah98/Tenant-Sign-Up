import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import Table from 'react-bootstrap/Table'
import styled from 'styled-components';
import { Divider } from '@material-ui/core';

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
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

const Styles = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: -8em;
  margin-left: 21em;
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

function Report2(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    // const [dataSet] = React.useState(sampleData);

    return (
        <Styles>
            <main className={classes.content}>
                <div className={classes.toolbar} />

                    <h6 style={{
                    textIndent:30,
                    fontWeight: 'bold',
                    fontSize: '24px'
                }}>Report & Statistics</h6><br />
                <br />

                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab textColor="inherit" label="Sales"  {...a11yProps(0)} />
                    <Tab textColor="inherit" label="Video Consultation" {...a11yProps(1)} />
                    <Tab textColor="inherit" label="Live Chat" {...a11yProps(2)} />
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <div>
                        <div style={{ display: 'inline-flex' }}>
                                <h5 style={{ position: 'absolute', left: '20%' }}>Total Tenant: 10</h5>
                                <h5 style={{ position: 'absolute', left: '50%' }}>Total Customer: 25</h5>
                            </div><br /><br /><br />
                            <Divider style={{ backgroundColor: 'black' }} /><br />
                            <div style={{ display: 'inline-flex' }}>
                                    <Form.Group as={Row} style={{position: 'absolute', left: '20%', fontSize:20}}>
                                            <Form.Label as="legend">
                                                Type : 
                                        </Form.Label>
                                            <Col>
                                                <Form.Check
                                                    type="radio"
                                                    label="Customer"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="Tenant"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios2"
                                                />
                                            </Col>
                                        </Form.Group>
                        
                                <Form.Group as={Row} style={{position: 'absolute', left: '50%', fontSize:20}}>
                                            <Form.Label as="legend">
                                                Sort By : 
                                        </Form.Label>
                                            <Col>
                                                <Form.Check
                                                    type="radio"
                                                    label="Gender"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="Age range"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios2"
                                                />
                                            </Col>
                                        </Form.Group>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <div>
                            
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <div>
                            
                        </div>
                    </TabPanel>
                </SwipeableViews>
                <Button style={{
                    position: 'absolute',
                    width: '169px',
                    height: '45px',
                    left: '1300px',
                    top: '650px',
                    backgroundColor: '#FBB03B',
                    borderRadius: '6px'
                }}>Save</Button>
            </main>
        </Styles>
    );
}

Report2.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.any
};

export default Report2;
