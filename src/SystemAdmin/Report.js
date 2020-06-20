import React from 'react';
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import styled from 'styled-components';
import { Divider } from '@material-ui/core';
import Button from 'react-bootstrap/Button'


const Styles = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: -6em;
  margin-left: 25em;
  margin-right: 6em;
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




function Report() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    const theme = useTheme();

    return (
        <Styles>
            <div>
                <h6 style={{
                    fontWeight: 'bold',
                    fontSize: '24px'
                }}>Report & Statistics</h6><br />

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
                            <Container>
                                <Row style={{ fontSize: 21 }}>
                                    <Col sm={6}>Total Tenant : 10</Col>
                                    <Col sm={6}>Total Customer : 25</Col>
                                </Row>
                            </Container>
                            <br />
                            <Divider style={{ backgroundColor: 'black' }} /><br />
                            <Container>
                                <Row style={{ fontSize: 21 }}>
                                    <Col sm={6}>
                                        <Form.Group as={Row}>
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
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group as={Row}>
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
                                    </Col>
                                </Row>
                            </Container><br />
                            <Container>
                                <h5>Date : </h5>
                                <Row>
                                    <Col sm={6} style={{ display: 'inline-flex' }}>
                                        <Typography style={{ fontSize: 21 }}>From</Typography>&nbsp;&nbsp;&nbsp;
                                        <Form.Control
                                            name="fromDate"
                                            type="date"
                                            defaultValue=""
                                            onChange=""
                                        />
                                    </Col>
                                    <Col sm={6} style={{ display: 'inline-flex' }}>
                                        <Typography style={{ fontSize: 21 }}>To</Typography>&nbsp;&nbsp;&nbsp;
                                        <Form.Control
                                            name="toDate"
                                            type="date"
                                            defaultValue=""
                                            onChange=""
                                        />
                                    </Col>
                                </Row>
                            </Container><br /><br />
                            <div style={{alignContent: 'center', display: 'flex', justifyContent: 'center'}}>
                                <Button style={{backgroundColor: '#FBB03B', width: 169, height: 45 }}>View</Button>
                            </div><br/><br/>
                            <div style={{alignContent: 'center', display: 'flex', justifyContent: 'center'}}>
                                <Typography style={{fontSize:21}}>Statistics of Jomedic Sales</Typography>
                            </div>
                            
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <div>
                        <Container>
                                <Row style={{ fontSize: 21 }}>
                                    <Col sm={6}>Total Tenant : 10</Col>
                                    <Col sm={6}>Total Customer : 25</Col>
                                </Row>
                            </Container>
                            <br />
                            <Divider style={{ backgroundColor: 'black' }} /><br />
                            <Container>
                                <Row style={{ fontSize: 21 }}>
                                    <Col sm={6}>
                                        <Form.Group as={Row}>
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
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group as={Row}>
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
                                    </Col>
                                </Row>
                            </Container><br />
                            <Container>
                                <h5>Date : </h5>
                                <Row>
                                    <Col sm={6} style={{ display: 'inline-flex' }}>
                                        <Typography style={{ fontSize: 21 }}>From</Typography>&nbsp;&nbsp;&nbsp;
                                        <Form.Control
                                            name="fromDate"
                                            type="date"
                                            defaultValue=""
                                            onChange=""
                                        />
                                    </Col>
                                    <Col sm={6} style={{ display: 'inline-flex' }}>
                                        <Typography style={{ fontSize: 21 }}>To</Typography>&nbsp;&nbsp;&nbsp;
                                        <Form.Control
                                            name="toDate"
                                            type="date"
                                            defaultValue=""
                                            onChange=""
                                        />
                                    </Col>
                                </Row>
                            </Container><br /><br />
                            <div style={{alignContent: 'center', display: 'flex', justifyContent: 'center'}}>
                                <Button style={{backgroundColor: '#FBB03B', width: 169, height: 45 }}>View</Button>
                            </div><br/><br/>
                            <div style={{alignContent: 'center', display: 'flex', justifyContent: 'center'}}>
                                <Typography style={{fontSize:21}}>Statistics of Video Consultation Used</Typography>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <div>
                        <Container>
                                <Row style={{ fontSize: 21 }}>
                                    <Col sm={6}>Total Tenant : 10</Col>
                                    <Col sm={6}>Total Customer : 25</Col>
                                </Row>
                            </Container>
                            <br />
                            <Divider style={{ backgroundColor: 'black' }} /><br />
                            <Container>
                                <Row style={{ fontSize: 21 }}>
                                    <Col sm={6}>
                                        <Form.Group as={Row}>
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
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group as={Row}>
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
                                    </Col>
                                </Row>
                            </Container><br />
                            <Container>
                                <h5>Date : </h5>
                                <Row>
                                    <Col sm={6} style={{ display: 'inline-flex' }}>
                                        <Typography style={{ fontSize: 21 }}>From</Typography>&nbsp;&nbsp;&nbsp;
                                        <Form.Control
                                            name="fromDate"
                                            type="date"
                                            defaultValue=""
                                            onChange=""
                                        />
                                    </Col>
                                    <Col sm={6} style={{ display: 'inline-flex' }}>
                                        <Typography style={{ fontSize: 21 }}>To</Typography>&nbsp;&nbsp;&nbsp;
                                        <Form.Control
                                            name="toDate"
                                            type="date"
                                            defaultValue=""
                                            onChange=""
                                        />
                                    </Col>
                                </Row>
                            </Container><br /><br />
                            <div style={{alignContent: 'center', display: 'flex', justifyContent: 'center'}}>
                                <Button style={{backgroundColor: '#FBB03B', width: 169, height: 45 }}>View</Button>
                            </div><br/><br/>
                            <div style={{alignContent: 'center', display: 'flex', justifyContent: 'center'}}>
                                <Typography style={{fontSize:21}}>Statistics of Live Chat Used</Typography>
                            </div>
                        </div>
                    </TabPanel>
                </SwipeableViews>



            </div >
        </Styles>

    );
}

Report.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.any
};

export default Report;
