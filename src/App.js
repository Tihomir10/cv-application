import React, { useState } from 'react';

import { GeneralForm, General } from './components/General';
import { EducationForm, Education } from './components/Education';

function App() {
  const [ person, setPerson ] = useState({name: 'John Doe', email: 'johndoe@email.com', phone: '12345'});

  const [ submit, setSubmit] = useState(false);

  const [ education, setEducation ] = useState({school: 'University of Berlin', title: 'Master of None', date: '2011 - 2014'});

  function changePersonData(event) {
    setPerson({
      ...person,
      [event.target.name]: event.target.value
    })
  };

  function changeEducationData(event) {
    setEducation({
      ...education,
      [event.target.name]: event.target.value
    })
  }

  if (submit) {
    return (
      <div className="container">
        <General person={person} />
        <Education education={education} />
        <button onClick={() => setSubmit(false)}>Edit</button>
      </div>
    )
  } else {
    return (
      <div className='container'>
        <GeneralForm 
          person={person}
          changePersonData={changePersonData}
        />
        <EducationForm 
          education={education}
          changeEducationData={changeEducationData}
        />
        <button onClick={() => setSubmit(true)}>Submit</button>
      </div>
    )
  }
}

export default App;
