import { useState } from 'react'

import EducationInfo from './EducationInfo';
import EducationForm from './EducationForm';

function Education() {
  const [ education, setEducation ] = useState([{id: 0, school: 'University of Berlin', title: 'Master of None', date: '2011 - 2014'}]);

  const [ newEducation, setNewEducation ] = useState({});

  const [ showForm, setShowForm ] = useState(false)

  function updateEducationData(event) {
    var lastEduObj = education[education.length - 1]
    console.log(newEducation)
    setEducation([...education,{
      id: lastEduObj.id + 1,
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
      <div>
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
        </div>
        <EducationForm 
          updateEducationData={updateEducationData}
          handleChange={handleChange}
        />
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