import { useState } from 'react';

import PersonForm from './PersonForm';
import PersonInfo from './PersonInfo';

function Person() {
  const [ person, setPerson ] = useState({name: 'John Doe', email: 'johndoe@email.com', phone: '12345'});

  const [ edit, setEdit ] = useState(false);

  function changePersonData(event) {
    setPerson({
      ...person,
      [event.target.name]: event.target.value
    })
  };

  if (edit) {
    return (
      <div className='info-edit'>
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
  return (
    <div className='info-edit'>
      <PersonInfo person={person} />
      <div className='delete-btn-div'>
        <button className='btn btn-primary' onClick={() => {setEdit(true)}}>Edit</button>
      </div>     
    </div>
  )
}

export default Person;