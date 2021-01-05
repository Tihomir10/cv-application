import React, { useState } from 'react';

import Person from './components/person/Person';
import Education from './components/education/Education';
import WorkExperience from './components/experience/WorkExperience'
import './index.css'

function App() {
  return (
    <div className='container'>
      <Person />
      <Education />
      <WorkExperience />
    </div>
  )
}

export default App;
