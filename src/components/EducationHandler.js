import { useState } from 'react'

import Education from './Education';
import EducationForm from './EducationForm';

function EducationHandler(props) {
  const [ education, setEducation ] = useState([{id: 0, school: 'University of Berlin', title: 'Master of None', date: '2011 - 2014'}]);

  const [ school, setSchool ] = useState('');

  const [ title, setTitle ] = useState('');

  const [ date, setDate ] = useState('');

  function updateEducationData(event) {
    setEducation([...education,{
      id: education.length,
      school: school,
      title: title,
      date: date
    }])
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

  if (props.submit) {
    return (
      <div>
        <h3>Education Info</h3>
        {education.map(obj => {
        return (
          <div>
            <Education obj={obj} />
          </div>
        )
      })}
      </div>
    )
  } else {
    return (
      <div>
        <EducationForm 
          school={school} 
          title={title}
          date={date}
          handleSchoolChange={handleSchoolChange}
          handleTitleChange={handleTitleChange}
          handleDateChange={handleDateChange}
          updateEducationData={updateEducationData}
        />
      </div>
    )
  }
}

export default EducationHandler;