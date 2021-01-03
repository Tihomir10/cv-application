function EducationForm(props) {
  return (
    <div className='edu-edit'>
      <h3>Education Form</h3>
      <div className="container">
        <div>
          <form>
            <div className="row">
              <label>School:<br/>
                <input type="text" name="school" value={props.school} onChange={props.handleSchoolChange} />
                <div class='err-msg'>{props.schoolError}</div>
              </label>
              <label>Title:<br/>
                <input type="text" name="title" value={props.title} onChange={props.handleTitleChange} />
                <div class='err-msg'>{props.titleError}</div>
              </label>
            </div>
            <div className="row">
              <label>Date:<br/>
                <input type="text" name="date" value={props.date} onChange={props.handleDateChange} />
              </label>
            </div>
          </form>
        </div>
      </div>
      <button className='btn btn-primary' onClick={props.updateEducationData}>Submit</button>
    </div>
  )
}

export default EducationForm;