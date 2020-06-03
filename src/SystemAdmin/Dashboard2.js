import React from "react";
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Card } from "react-bootstrap";
import styled from 'styled-components';
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: -6em;
  margin-left: 25em;
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

function Dashboard2() {
    const [] = React.useState(false);


    return (
        <Styles>
            <div>
                <h6 style={{
                    fontWeight: 'bold',
                    fontSize: '24px'
                }}>Dashboard</h6><br />

                <Container>
                    <StyledNavItem>
                    <Row>
                        <Col sm>
                            <Card>
                                <NavLink to="/LTenant"><Card.Body>
                                    <div style={{ display: 'inline-flex' }}>
                                        <FontAwesomeIcon icon={faUserMd} size='2x' />
                                        <h5 style={{ fontSize: 24, fontWeight: 'bold' }}>&nbsp;53</h5>
                                        <h5 style={{
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                            position: 'absolute',
                                            top: 28,
                                            left: 80
                                        }}>&nbsp;Tenant</h5>
                                    </div>
                                </Card.Body></NavLink>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card>
                            <NavLink to="/LCustomer"><Card.Body>
                                    <div style={{ display: 'inline-flex' }}>
                                        <FontAwesomeIcon icon={faUser} size='2x' />
                                        <h5 style={{ fontSize: 24, fontWeight: 'bold' }}>&nbsp;42</h5>
                                        <h5 style={{
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                            position: 'absolute',
                                            top: 28,
                                            left: 80
                                        }}>&nbsp;Customer</h5>
                                    </div>
                                    
                                </Card.Body></NavLink>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card>
                                <Card.Body>
                                    <div style={{ display: 'inline-flex' }}>
                                        <FontAwesomeIcon icon={faBell} size='2x' />
                                        <h5 style={{ fontSize: 24, fontWeight: 'bold' }}>&nbsp;15</h5>
                                        <h5 style={{
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                            position: 'absolute',
                                            top: 28,
                                            left: 80
                                        }}>&nbsp;Online</h5>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    </StyledNavItem>
                </Container><br />
                <Container>
                    <Row>
                        <Col sm>
                            <Card>
                                <Card.Body>
                                    <h5 style={{ fontWeight: 'bold' }}>Sales</h5>
                                    <h6 style={{ color: '#979797' }}>calculate in month</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card>
                                <Card.Body>
                                    <h5 style={{ fontWeight: 'bold' }}>Video Chat Used</h5>
                                    <h6 style={{ color: '#979797' }}>calculate in month</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card>
                                <Card.Body>
                                    <h5 style={{ fontWeight: 'bold' }}>Chat Used</h5>
                                    <h6 style={{ color: '#979797' }}>calculate in month</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div >
        </Styles>

    );
}

Dashboard2.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.any
};

export default Dashboard2;
