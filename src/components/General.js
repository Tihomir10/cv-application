import '../index.css'

function GeneralForm(props) {
  return (
  <div>
    <h3>Basic Info</h3>
    <form>
      <div className="row">
        <label>Name:<br/>
          <input type="text" name="name" value={props.person.name} onChange={props.changePersonData} />
        </label>
        <label>Email:<br/>
          <input type="text" name="email" value={props.person.email} onChange={props.changePersonData} />
        </label>
      </div>
      <div className="row">
        <label>Phone number:<br/>
          <input type="text" name="phone" value={props.person.phone} onChange={props.changePersonData} />
        </label>
      </div>
    </form>
  </div>
  )
}

function General(props) {
  return (
    <div>
      <div className="row">
        <label>Name:<br/>
          <div>{props.person.name}</div>
        </label>
        <label>Email:<br/>
          <div>{props.person.email}</div>
        </label>
      </div>
      <div className="row">
        <label>Phone number:<br/>
          <div>{props.person.phone}</div>
        </label>
      </div>
    </div>
  )
}

export { General, GeneralForm }
