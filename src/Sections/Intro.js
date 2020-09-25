import React from 'react';
import './Section.css';
import { Container, Col, Row } from 'react-bootstrap';

class Intro extends React.Component {
  render() {
    return (
      <div className="Intro">
        <Container>
          <Row>
            <Col sm={3}><h3>Intro</h3></Col>
            <Col sm={9}>Hello! My name is Timothy Kim. I am a current Junior studying
                        computer science at the University of Michigan. I enjoy having
                        the flexibility of software and web development in order
                        to solve problems and create practical applications for personal
                        and public use. <b1>I am looking for a summer internship in 2021
                        to further my interests and get a better grasp of how I want
                        to apply my skills in the future!</b1></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Intro;
