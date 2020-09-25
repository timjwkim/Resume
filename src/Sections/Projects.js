import React from 'react';
import './Section.css';
import { Container, Col, Row } from 'react-bootstrap';
import { FiExternalLink } from 'react-icons/fi'

class Projects extends React.Component {
  render() {
    return (
      <div className="Projects">
        <Container>
          <Row>
            <Col sm={3}><h3>Projects</h3></Col>
            <Col sm={7}>
              <a href="https://github.com/timjwkim/3HAMPodcast" target="_blank" rel="noopener noreferrer">
                <h1>Three and Half Asian Men Podcast Website</h1>
              </a>
              <h2>React, CSS</h2>
            </Col>
            <Col sm={2}  style={{textAlign: "right"}}>
              <a href="https://timjwkim.github.io/3HAMPodcast/" target="_blank" rel="noopener noreferrer">
                <FiExternalLink size="1.5rem"/>
              </a>
            </Col>
          </Row>
          <Row>
            <Col sm={3}></Col>
            <Col sm={9}>
              <ul>
                <li>Front-end web application deployed using GitHub pages for my
                    personal podcast to display basic web content with the intention
                    of learning the basics of React</li>
              </ul>
          </Col>
          </Row>
          <Row style={{marginTop: "3%"}}>
            <Col sm={3}></Col>
            <Col sm={9}>
              <a href="https://github.com/timjwkim/CDLStats2020" target="_blank" rel="noopener noreferrer">
                <h1>Call of Duty League 2020 Stats</h1>
              </a>
              <h2>React, CSS, Next.js, Node.js, Google Sheets API</h2>
              <ul>
                <li>Clean and filterable table of stats for the Activision
                    Call of Duty League using Google Sheets API and Next.js framework</li>
              </ul>
            </Col>
          </Row>
          <Row style={{marginTop: "3%"}}>
            <Col sm={3}></Col>
            <Col sm={9}>
              <a href="https://github.com/timjwkim/Resume" target="_blank" rel="noopener noreferrer">
                <h1>Personal Resume Website</h1>
              </a>
              <h2>React, CSS, Bootstrap</h2>
              <ul>
                <li>Website to display my resume and showcase my personal projects
                using Bootstrap</li>
              </ul>
            </Col>
          </Row>
          <Row style={{marginTop: "3%"}}>
            <Col sm={3}></Col>
            <Col sm={9}>
              <h1>Insta485</h1>
              <h2>HTML, CSS, Python, Flask, SQL</h2>
              <ul>
                <li>Full-stack web application containing static and server-side
                    dynamic pages that emulate social media app Instagram built
                    for my web systems course</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Projects;
