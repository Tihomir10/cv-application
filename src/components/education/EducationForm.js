function EducationForm(props) {
  return (
    <div className='edu-edit'>
      <h3>Education Form</h3>
      <div className="container">
        <div>
          <form>
            <div className="row">
              <label>School:<br/>
                <input type="text" name="school" onChange={props.handleChange}  />
                <div class='err-msg'></div>
              </label>
              <label>Title:<br/>
                <input type="text" name="title" onChange={props.handleChange}  />
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
      <input type='submit' className='btn btn-primary' onClick={props.updateEducationData} />
    </div>
  )
}

export default EducationForm;