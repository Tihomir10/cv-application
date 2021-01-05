import { useState } from 'react'

import EducationInfo from './EducationInfo';
import EducationForm from './EducationForm';

function Education() {
  const [ education, setEducation ] = useState([]);

  const [ newEducation, setNewEducation ] = useState({});

  const [ showForm, setShowForm ] = useState(false)

  function updateEducationData(event) {
    var lastEduObjId = 0;
    if (education[0]) {
      lastEduObjId = education[education.length - 1].id
    }
    setEducation([...education,{
      id: lastEduObjId + 1,
      school: newEducation.school,
      title: newEducation.title,
      date: newEducation.date
    }]);
    setShowForm(false)
  } 

  function handleChange(event) {
    setNewEducation({...newEducation,
      [event.target.name]: event.target.value,
    })
  }

  function deleteEducation(event) {
    setEducation(education.filter(obj => obj.id != event.target.id))
  }

  if (showForm) {
    return (
      <div className='btn-position'>
        <div>
          <h3>Education Info</h3>
            {education.map(obj => {
            return (
              <div>
                <EducationInfo 
                  obj={obj} 
                  deleteEducation={deleteEducation}  
                />
              </div>
            )
          })}
        </div >
        <EducationForm 
          handleChange={handleChange}
        />
        <input type='submit' className='btn btn-primary' onClick={updateEducationData} />
        <button className='btn btn-primary' onClick={() => {setShowForm(false)}}>Close</button> 
      </div>
    )
  }

  return (
    <div>
      <h3>Education Info</h3>
        {education.map(obj => {
        return (
          <div>
            <EducationInfo 
              obj={obj} 
              deleteEducation={deleteEducation}  
            />
          </div>
        )
      })}
      <div className='buttons'>
        <button className='btn btn-primary' onClick={() => {setShowForm(true)}}>Add Education</button>
      </div>
    </div>
  )
}

export default Education;