function EducationForm(props) {
  return (
    <div className="container">
      <div>
        <h3>Education Form</h3>
        <form>
          <div className="row">
            <label>School:<br/>
              <input type="text" name="school" value={props.school} onChange={props.handleSchoolChange} />
            </label>
            <label>Title:<br/>
              <input type="text" name="title" value={props.title} onChange={props.handleTitleChange} />
            </label>
          </div>
          <div className="row">
            <label>Date:<br/>
              <input type="text" name="date" value={props.date} onChange={props.handleDateChange} />
            </label>
          </div>
        </form>
        <button className="btn btn-primary" onClick={props.updateEducationData}>Add Education</button>
      </div>
    </div>
  )
}

export default EducationForm;