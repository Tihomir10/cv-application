function WorkExperienceInfo(props) {
  return (
    <div>
      <h3>Work Experience</h3>
      {props.experience.map(obj => {
        return (
            <div className="info">
              <div className="delete-span-div">
                <span onClick={props.deleteExperience} id={obj.id}>X</span>
              </div>
              <div className="row">
                <label>Company:<br/>
                <div>{obj.company}</div>
                </label>
                <label>Position:<br/>
                <div>{obj.position}</div>
                </label>
              </div>
              <div className="row">
                <label>Date:<br/>
                <div>{obj.date}</div>
                </label>
              </div>
            </div>
        )
      })}
    </div>
  )
}

export default WorkExperienceInfo; 