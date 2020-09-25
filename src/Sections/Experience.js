import React from 'react';
import './Section.css';
import { Container, Col, Row } from 'react-bootstrap';

class Experience extends React.Component {
  render() {
    return (
      <div className="Experience">
        <Container>
          <Row>
            <Col sm={3}><h3>Experience</h3></Col>
            <Col sm={7}>
              <a href="https://its.umich.edu" target="_blank" rel="noopener noreferrer">
                <h1>University of Michigan Information and Technology Services</h1>
              </a>
              <h2>Tech Consultant</h2>
            </Col>
            <Col sm={2} style={{textAlign: "right"}}><b2>Nov 2019 - Present</b2></Col>
          </Row>
          <Row>
            <Col sm={3}></Col>
            <Col sm={9}>
              <ul>
                <li>Provided technical support to customers, troubleshooting any
                    hardware and software problems</li>
                <li>Performed maintenance to network devices and other technical
                    equipment deployed at the university facilities</li>
              </ul>
            </Col>
          </Row>
          <Row style={{marginTop: "3%"}}>
            <Col sm={3}></Col>
            <Col sm={7}>
              <a href="https://rfa.com" target="_blank" rel="noopener noreferrer">
                <h1>Richard Fleischman and Associates</h1>
              </a>
              <h2>Client Development Intern</h2>
            </Col>
            <Col sm={2} style={{textAlign: "right"}}><b2>Summer 2019</b2></Col>
          </Row>
          <Row>
            <Col sm={3}></Col>
            <Col sm={9}>
              <ul>
                <li>Led the effort in organizing the firm’s client ConnectWise database,
                    prioritizing the Microsoft Windows 10 operating system upgrade
                    and migration projects</li>
                <li>Engaged in numerous conference calls and meetings to identify
                    and isolate technical issues and limitations regarding the application
                    and migration of the Windows 10 OS upgrades</li>
                <li>Collaborated with the client development team in strategic planning
                    to set short term and long term business goals</li>
              </ul>
            </Col>
          </Row>
          <Row style={{marginTop: "3%"}}>
            <Col sm={3}></Col>
            <Col sm={7}>
              <h1>Basketball Planet</h1>
              <h2>Intern</h2>
            </Col>
            <Col sm={2} style={{textAlign: "right"}}><b2>July 2017 - March 2018</b2></Col>
          </Row>
          <Row>
            <Col sm={3}></Col>
            <Col sm={9}>
              <ul>
                <li>Managed a Jimdo website documenting and tracking statistics and
                    multimedia content for private basketball league for player and executive use</li>
                <li>Mediated communications between my executive and semi-professional
                    basketball players over email and over social media outlets such as LinkedIn</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Experience;
