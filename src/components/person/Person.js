import { useState } from 'react';

import PersonForm from './PersonForm';
import PersonInfo from './PersonInfo';

function Person() {
  const [ person, setPerson ] = useState({});

  const [ edit, setEdit ] = useState(false);

  function changePersonData(event) {
    setPerson({
      ...person,
      [event.target.name]: event.target.value
    })
  };

  if (edit) {
    return (
      <div className='btn-position'>
        <PersonForm 
          person={person}
          changePersonData={changePersonData}
        />
        <div className='delete-btn-div'>
          <button className='btn btn-primary' onClick={() => {setEdit(false)}}>Submit</button>
        </div>
      </div>
    )
  }

  if (Object.keys(person).length !== 0) {
    return (
      <div className='btn-position'>
        <PersonInfo person={person} />
        <div className='delete-btn-div'>
          <button className='btn btn-primary' onClick={() => {setEdit(true)}}>Edit</button>
        </div>     
      </div>
    )
  }

  return (
    <div>
      <h3>Basic Info</h3>
      <div className='btn-position'>
        <div className='delete-btn-div'>
          <button className='btn btn-primary' onClick={() => {setEdit(true)}}>Add Peronal Info</button>
        </div>     
      </div>
    </div>
  )

 
}

export default Person;