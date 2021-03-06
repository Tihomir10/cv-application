function EducationInfo(props) {
  return (
    <div>
      <div className="info">
        <div className="delete-span-div">
          <span onClick={props.deleteEducation} id={props.obj.id}>X</span>
        </div>
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

export default EducationInfo; 