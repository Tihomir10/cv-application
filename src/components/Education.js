function EducationForm(props) {
  return (
    <div>
      <form>
        <div className="row">
          <label>School name:<br/>
            <input type="text" name="school" value={props.education.school} onChange={props.changeEducationData} />
          </label>
        </div>
        <div className="row">
          <label>Title of the study:<br/>
            <input type="text" name="title" value={props.education.title} onChange={props.changeEducationData} />
          </label>
        </div>
        <div className="row">
          <label>Date of study:<br/>
            <input type="text" name="date" value={props.education.date} onChange={props.changeEducationData} />
          </label>
        </div>
      </form>
    </div>
  )
}

function Education(props) {
  return (
    <div>
      <div className="row">
        <label>School name:<br/>
          <div>{props.education.school}</div>
        </label>
      </div>
      <div className="row">
        <label>Title of the study:<br/>
          <div>{props.education.title}</div>
        </label>
      </div>
      <div className="row">
        <label>Date of the study:<br/>
          <div>{props.education.date}</div>
        </label>
      </div>
    </div>
  )
}

export { EducationForm, Education }