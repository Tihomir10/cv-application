import React, { useState } from 'react';

import { GeneralForm, General } from './components/General';
import EducationForm from './components/EducationForm';
import './index.css'

function App() {
  const [ person, setPerson ] = useState({name: 'John Doe', email: 'johndoe@email.com', phone: '12345'});

  const [ submit, setSubmit] = useState(false);

  function changePersonData(event) {
    setPerson({
      ...person,
      [event.target.name]: event.target.value
    })
  };

  if (submit) {
    return (
      <div className="container">
        <General person={person} />
        <EducationForm submit={submit} />
        <div className="row">
          <button onClick={() => setSubmit(false)} className='btn btn-primary'>Edit</button>
        </div>
      </div>
    )
  } 
  return (
    <div className='container'>
      <GeneralForm 
        person={person}
        changePersonData={changePersonData}
      />
      <EducationForm submit={submit} />
      <div className="row">
        <button onClick={() => setSubmit(true)} className='btn btn-primary'>Submit</button>
      </div>
    </div>
  )
}

export default App;
