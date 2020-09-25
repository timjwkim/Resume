import React from 'react';
import './Profile.css';
import { GrGithub, GrLinkedin, GrMail } from 'react-icons/gr';
import { AiOutlineFilePdf } from 'react-icons/ai';
import File from './resume.pdf';

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <div className="Name">
          Timothy Kim
        </div>
        <div className="Description">
          aspiring software engineer and web developer
        </div>
        <div className="Icons">
          <a href={File} target="_blank" rel="noopener noreferrer">
            <AiOutlineFilePdf size="2rem" />
          </a>
          <a href="https://github.com/timjwkim" target="_blank" rel="noopener noreferrer">
            <GrGithub size="2rem" />
          </a>
          <a href="http://www.linkedin.com/in/timothy-kim-b6b18a176" target="_blank" rel="noopener noreferrer">
            <GrLinkedin size="2rem" />
          </a>
          <a href="mailto:timjwkim@umich.edu">
            <GrMail size="2rem" />
          </a>
        </div>
      </div>
    )
  }
}

export default Profile;
