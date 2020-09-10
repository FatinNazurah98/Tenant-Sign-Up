import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { postAPI } from './ConnAPI';
import { getTodayDate } from '../util/getDate';

export default function HFOperation(props) {
    const [state] = useState(props);
    const [startTime, setStartTime] = useState('08:00');
    const [endTime, setEndTime] = useState('22:00');

    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {

            const email = localStorage.getItem('myData');

            if (email === null) {
                window.location = '/SignIn';
                return;
            }

            const datas = {
                txn_cd: "MEDPRO25", //get jlk_working_day
                tstamp: getTodayDate(),
                data: {
                    tenantId: email,
                    workingDay: "Monday",
                    startTime: "08:00",
                }
            }

            postAPI(datas, (success) => {
                console.log(success);
                setProfile(success.status[0])
                setLoading(false);
            }, (error) => {
                alert(error.message)

            });
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div style={{ textAlign: 'center' }}>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>

        )
    }

    return <Card style={{ width: '800px', height: '800px', margin: 'auto' }}>
        <Card.Body>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={3}><br />
                        <Form.Control
                            as="view"
                            name="monDay"
                            defaultValue={profile.working_day}
                            onChange={props.handleInput}
                        >
                            <option value="monday">Monday</option>
                        </Form.Control>
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridStart">
                                <Form.Label>Start</Form.Label>
                                <Form.Control
                                    name="monStart"
                                    type="time"
                                    placeholder="Start time"
                                    // value={startTime}
                                    defaultValue={profile.start_time}
                                    onChange={props.handleInput}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEnd">
                                <Form.Label>End</Form.Label>
                                <Form.Control
                                    name="monEnd"
                                    type="time"
                                    placeholder="End time"
                                    // value={endTime}
                                    defaultValue={profile.end_time}
                                    onChange={props.handleInput}
                                >
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={3}><br />
                        <Form.Control
                            as="view"
                            name="tueDay"
                            defaultValue={state.tueDay}
                            onChange={props.handleInput}
                        >
                            <option value="tuesday">Tuesday</option>
                        </Form.Control>
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridStart">
                                <Form.Label>Start</Form.Label>
                                <Form.Control
                                    name="tueStart"
                                    type="time"
                                    placeholder="Start time"
                                    // value={startTime}
                                    defaultValue={state.tueStart}
                                    onChange={props.handleInput}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEnd">
                                <Form.Label>End</Form.Label>
                                <Form.Control
                                    name="tueEnd"
                                    type="time"
                                    placeholder="End time"
                                    // value={endTime}
                                    defaultValue={state.tueEnd}
                                    onChange={props.handleInput}
                                >
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={3}><br />
                        <Form.Control
                            as="view"
                            name="wedDay"
                            defaultValue={state.wedDay}
                            onChange={props.handleInput}
                        >
                            <option value="wednesday">Wednesday</option>
                        </Form.Control>
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridStart">
                                <Form.Label>Start</Form.Label>
                                <Form.Control
                                    name="wedStart"
                                    type="time"
                                    placeholder="Start time"
                                    // value={startTime}
                                    defaultValue={state.wedStart}
                                    onChange={props.handleInput}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEnd">
                                <Form.Label>End</Form.Label>
                                <Form.Control
                                    name="wedEnd"
                                    type="time"
                                    placeholder="End time"
                                    // value={endTime}
                                    defaultValue={state.wedEnd}
                                    onChange={props.handleInput}
                                >
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={3}><br />
                        <Form.Control
                            as="view"
                            name="thuDay"
                            defaultValue={state.thuDay}
                            onChange={props.handleInput}
                        >
                            <option value="thursday">Thursday</option>
                        </Form.Control>
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridStart">
                                <Form.Label>Start</Form.Label>
                                <Form.Control
                                    name="thuStart"
                                    type="time"
                                    placeholder="Start time"
                                    // value={startTime}
                                    defaultValue={state.thuStart}
                                    onChange={props.handleInput}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEnd">
                                <Form.Label>End</Form.Label>
                                <Form.Control
                                    name="thuEnd"
                                    type="time"
                                    placeholder="End time"
                                    // value={endTime}
                                    defaultValue={state.thuEnd}
                                    onChange={props.handleInput}
                                >
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={3}><br />
                        <Form.Control
                            as="view"
                            name="friDay"
                            defaultValue={state.friDay}
                            onChange={props.handleInput}
                        >
                            <option value="friday">Friday</option>
                        </Form.Control>
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridStart">
                                <Form.Label>Start</Form.Label>
                                <Form.Control
                                    name="friStart"
                                    type="time"
                                    placeholder="Start time"
                                    // value={startTime}
                                    defaultValue={state.friStart}
                                    onChange={props.handleInput}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEnd">
                                <Form.Label>End</Form.Label>
                                <Form.Control
                                    name="friEnd"
                                    type="time"
                                    placeholder="End time"
                                    // value={endTime}
                                    defaultValue={state.friEnd}
                                    onChange={props.handleInput}
                                >
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={3}><br />
                        <Form.Control
                            as="view"
                            name="satDay"
                            defaultValue={state.satDay}
                            onChange={props.handleInput}
                        >
                            <option value="saturday">Saturday</option>
                        </Form.Control>
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridStart">
                                <Form.Label>Start</Form.Label>
                                <Form.Control
                                    name="satStart"
                                    type="time"
                                    placeholder="Start time"
                                    // value={startTime}
                                    defaultValue={state.satStart}
                                    onChange={props.handleInput}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEnd">
                                <Form.Label>End</Form.Label>
                                <Form.Control
                                    name="satEnd"
                                    type="time"
                                    placeholder="End time"
                                    // value={endTime}
                                    defaultValue={state.satEnd}
                                    onChange={props.handleInput}
                                >
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={3}><br />
                        <Form.Control
                            as="view"
                            name="sunDay"
                            defaultValue={state.sunDay}
                            onChange={props.handleInput}
                        >
                            <option value="sunday">Sunday</option>
                        </Form.Control>
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridStart">
                                <Form.Label>Start</Form.Label>
                                <Form.Control
                                    name="sunStart"
                                    type="time"
                                    placeholder="Start time"
                                    // value={startTime}
                                    defaultValue={state.sunStart}
                                    onChange={props.handleInput}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEnd">
                                <Form.Label>End</Form.Label>
                                <Form.Control
                                    name="sunEnd"
                                    type="time"
                                    placeholder="End time"
                                    // value={endTime}
                                    defaultValue={state.sunEnd}
                                    onChange={props.handleInput}
                                >
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </Col>
                </Form.Group>

            </Form>
        </Card.Body>
    </Card>
}