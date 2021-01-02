import React, { useState } from 'react';

import Person from './components/person/Person';
import Education from './components/education/Education';
import './index.css'

function App() {
  return (
    <div className='container'>
      <Person />
      <Education />
    </div>
  )
}

export default App;
