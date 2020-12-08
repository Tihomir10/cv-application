import React from 'react';

class General extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'John Doe',
      email: 'JohnDoe@email.com',
      phone: '123-456-789',
      submitted: true
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    this.setState({submitted: true})
    event.preventDefault();
  }

  handleEdit() {
    this.setState({submitted: false})
  }

  render() {

    const viewTemplate = (
      <div>
        <div className="row">
          <label>Name:<br/>
            <div>{this.state.name}</div>
          </label>
        </div>
        <div className="row">
          <label>Email:<br/>
            <div>{this.state.email}</div>
          </label>
        </div>
        <div className="row">
          <label>Phone number:<br/>
            <div>{this.state.phone}</div>
          </label>
        </div>
        <div className="row">
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      </div>
    )

    const editTemplate = (
      <div>
        <form>
          <div className="row">
            <label>Name:<br/>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </label>
          </div>
          <div className="row">
            <label>Email:<br/>
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
            </label>
          </div>
          <div className="row">
            <label>Phone number:<br/>
              <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
            </label>
          </div>
          <div className="row">
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </div>
        </form>
      </div>
    )

    return (
    <div>{this.state.submitted ? viewTemplate : editTemplate}</div>
    )
  }
}

export default General;