function PersonInfo(props) {
  return (
    <div>
      <h3>Basic Info</h3>
      <div class="info">
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
    </div>
  )
}

export default PersonInfo;