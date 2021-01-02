import { useState } from 'react'

import EducationInfo from './EducationInfo';
import EducationForm from './EducationForm';

function Education() {
  const [ education, setEducation ] = useState([{id: 0, school: 'University of Berlin', title: 'Master of None', date: '2011 - 2014'}, {
    id: 1, school: 'University of Lisbon', title: 'Alpinist', date: '2004 - 2013'
  }]);

  const [ school, setSchool ] = useState('');

  const [ title, setTitle ] = useState('');

  const [ date, setDate ] = useState('');

  const [ edit, setEdit ] = useState(false);

  const [ newEducation, setNewEducation ] = useState(false)

  function updateEducationData(event) {
    setEducation([...education,{
      id: education.length,
      school: school,
      title: title,
      date: date
    }]);
    setNewEducation(false)
    event.preventDefault()
  } 

  function handleSchoolChange(event) {
    setSchool(event.target.value)
  }

  function handleTitleChange(event) {
    setTitle(event.target.value)
  }

  function handleDateChange(event) {
    setDate(event.target.value)
  }

  function deleteEducation(event) {
    console.log(event.target.id)
    setEducation(education.filter(obj => obj.id != event.target.id))
  }

  if (edit) {
    return (
      <div className='info-edit'>
        <h3>Education Form</h3>
        {education.map(obj => {
          return (
            <div> 
                <EducationInfo 
                  obj={obj}
                />
              <div className='delete-btn-div'>
                 <button className='btn btn-primary' id={obj.id} onClick={deleteEducation}>Delete</button>
              </div>
            </div>
          )
        })}
          <button className='btn btn-primary' onClick={() => {setEdit(false)}}>Submit</button>
      </div>
    )
  }

  if (newEducation) {
    return (
      <div className='info-edit'>
        <h3>Education Form</h3>
        <EducationForm 
          school={school}
          title={title}
          date={date}
          handleSchoolChange={handleSchoolChange}
          handleTitleChange={handleTitleChange}
          handleDateChange={handleDateChange}
        />
        <button className='btn btn-primary' onClick={updateEducationData}>Submit</button>
      </div>
    )
  }

  return (
    <div>
      <h3>Education Info</h3>
        {education.map(obj => {
        return (
          <div>
            <EducationInfo obj={obj} />
          </div>
        )
      })}
      <div className='buttons'>
        <button className='btn btn-primary' onClick={() => {setEdit(true)}}>Edit</button>
        <button className='btn btn-primary' onClick={() => {setNewEducation(true)}}>Add Education</button>
      </div>
    </div>
  )
}

export default Education;