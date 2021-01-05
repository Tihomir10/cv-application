import { useState } from 'react';

import WorkExperienceInfo from './WorkExperienceInfo';
import WorkExperienceForm from './WorkExperienceForm'

function WorkExperience() {
  const [ experience, setExperience ] = useState([]);

  const [ newExperience, setNewExperience ] = useState({});

  const [ showForm, setShowForm ] = useState(false)

  function handleChange(event) {
    setNewExperience({...newExperience,
      [event.target.name]: event.target.value,
    })
  }

  function updateExperienceData() {
    var lastExpObjId = 0;
    if (experience[0]) {
      lastExpObjId = experience[experience.length - 1].id
    }
    setExperience([...experience,{
      id: lastExpObjId + 1,
      company: newExperience.company,
      position: newExperience.position,
      date: newExperience.date
    }]);
    setShowForm(false)
  } 

  function deleteExperience(event) {
    setExperience(experience.filter(obj => obj.id != event.target.id))
  }

  if (showForm) {
    return (
      <div className='btn-position'>
          <WorkExperienceInfo 
            experience={experience}
            />
        <WorkExperienceForm 
          handleChange={handleChange}
        />
        <input type='submit' className='btn btn-primary' onClick={updateExperienceData} />
        <button className='btn btn-primary' onClick={() => {setShowForm(false)}}>Close</button> 
      </div>
    )
  }

  return ( 
    <div>
      <div className='btn-position'>
        <div>
          <WorkExperienceInfo 
            experience={experience}
            deleteExperience={deleteExperience}
            />
        </div>
        <button className='btn btn-primary' onClick={() => {setShowForm(true)}}>Add Work</button>
      </div>
    </div>
  )
}

export default WorkExperience;