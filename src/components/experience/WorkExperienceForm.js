function WorkExperienceForm(props) {
  return (
    <div className='btn-position'>
      <div className="container">
        <div>
          <form>
            <div className="row">
              <label>Company:<br/>
                <input type="text" name="company" onChange={props.handleChange}  />
                <div class='err-msg'></div>
              </label>
              <label>Position:<br/>
                <input type="text" name="position" onChange={props.handleChange}  />
                <div class='err-msg'></div>
              </label>
            </div>
            <div className="row">
              <label>Date:<br/>
                <input type="text" name="date" onChange={props.handleChange} />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WorkExperienceForm;