import React from 'react';
import './Resume.css';
import Intro from '../Sections/Intro.js';
import Education from '../Sections/Education.js';
import Experience from '../Sections/Experience.js';
import Projects from '../Sections/Projects.js';
import Skills from '../Sections/Skills.js';

class Resume extends React.Component {
  render() {
    return (
      <div className="Resume">
        <div className="Section">
          <Intro/>
        </div>
        <div className="Section">
          <Education/>
        </div>
        <div className="Section">
          <Experience/>
        </div>
        <div className="Section">
          <Projects/>
        </div>
        <div className="Section">
          <Skills/>
        </div>
      </div>
    )
  }
}

export default Resume;
