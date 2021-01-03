import { useState } from 'react'

import EducationInfo from './EducationInfo';
import EducationForm from './EducationForm';

function Education() {
  const [ education, setEducation ] = useState([{id: 0, school: 'University of Berlin', title: 'Master of None', date: '2011 - 2014'}]);

  const [ school, setSchool ] = useState('');

  const [ title, setTitle ] = useState('');

  const [ date, setDate ] = useState('');

  const [ newEducation, setNewEducation ] = useState(false);

  const [ schoolError, setSchoolError ] = useState('');

  const [ titleError, setTitleError ] = useState('');

  const validate = () => {
    if (school.length < 3) {
      setSchoolError('Must be longer than 3 characters')
      return false;
    }

    if (title.length < 3) {
      setTitleError('Must be longer than 3 characters')
      return false;
    }

    return true;
  }

  function updateEducationData() {
    const isValid = validate();
    if (isValid) {
      setEducation([...education,{
        id: Math.random(),
        school: school,
        title: title,
        date: date
      }]);
      setNewEducation(false);
      setSchoolError('');
      setTitleError('')
    }
    
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
    setEducation(education.filter(obj => obj.id != event.target.id))
  }

  if (newEducation) {
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
          school={school}
          schoolError={schoolError}
          title={title}
          titleError={titleError}
          date={date}
          handleSchoolChange={handleSchoolChange}
          handleTitleChange={handleTitleChange}
          handleDateChange={handleDateChange}
          updateEducationData={updateEducationData}
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
        <button className='btn btn-primary' onClick={() => {setNewEducation(true)}}>Add Education</button>
      </div>
    </div>
  )
}

export default Education;