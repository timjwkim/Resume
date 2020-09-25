import React from 'react';
import './Section.css';
import { Container, Col, Row } from 'react-bootstrap';

class Education extends React.Component {
  render() {
    return (
      <div className="Education">
        <Container>
          <Row>
            <Col sm={3}><h3>Education</h3></Col>
            <Col sm={7}>
              <h1>University of Michigan</h1>
              <h2>School of Literature, Science, and the Arts</h2>
              <b1>Major:</b1> Computer Science
            </Col>
            <Col sm={2} style={{textAlign: "right"}}><b2>Sept 2018 - May 2022</b2></Col>
          </Row>
          <Row>
            <Col sm={3}></Col>
            <Col sm={7}>
              <b1>Relevant Coursework:</b1> Discrete Math, Data Structures and Algorithms, Foundations
                  of Computer Science, Introduction to Computer Organization
          </Col>
          </Row>
          <Row>
            <Col sm={3}></Col>
            <Col sm={7}>
              <b1>Current Coursework:</b1> Software Engineering, Web Systems
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Education;
