import React from 'react';
import './Section.css';
import { Container, Col, Row } from 'react-bootstrap';

class Skills extends React.Component {
  render() {
    return (
      <div className="Skills">
        <Container>
          <Row>
            <Col sm={3}><h3>Skills</h3></Col>
            <Col sm={9}>
              <b1>Proficient:</b1> C++, GitHub
            </Col>
          </Row>
          <Row>
            <Col sm={3}></Col>
            <Col sm={9}>
              <b1>Familiar:</b1> C, Python, React, Node.js, HTML, CSS
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Skills;
