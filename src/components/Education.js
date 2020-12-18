function Education(props) {
  return (
    <div>
      <div className="info">
        <div className="row">
          <label>School name:<br/>
          <div>{props.obj.school}</div>
          </label>
          <label>Title of the study:<br/>
          <div>{props.obj.title}</div>
          </label>
        </div>
        <div className="row">
          <label>Date of the study:<br/>
          <div>{props.obj.date}</div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Education; 