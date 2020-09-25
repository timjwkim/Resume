import React from 'react';
import './App.css';
import Profile from './Profile/Profile.js';
import Resume from './Resume/Resume.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="Left">
        <Profile/>
      </div>
      <div className="Right">
        <Resume/>
      </div>
    </div>
  );
}

export default App;
