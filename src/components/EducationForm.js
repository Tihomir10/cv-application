import { useState } from 'react'

import Education from './Education'

function EducationForm(props) {
  const [ education, setEducation ] = useState([{id: 0, school: 'University of Berlin', title: 'Master of None', date: '2011 - 2014'}]);

  const [ school, setSchool ] = useState('');

  const [ title, setTitle ] = useState('');

  const [ date, setDate ] = useState('');

  function changeEducationData(event) {
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
  }

  return (
    <div className="container">
      <div>
        <h3>Education</h3>
        <form>
          <div className="row">
            <label>School:<br/>
              <input type="text" name="school" value={school} onChange={handleSchoolChange} />
            </label>
            <label>Title:<br/>
              <input type="text" name="title" value={title} onChange={handleTitleChange} />
            </label>
          </div>
          <div className="row">
            <label>Date:<br/>
              <input type="text" name="date" value={date} onChange={handleDateChange} />
            </label>
          </div>
        </form>
        <button className="btn btn-primary" onClick={changeEducationData}>Add Education</button>
      </div>
    </div>
  )
}

export default EducationForm;