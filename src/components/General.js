import React from 'react';

class General extends React.Component {

  render() {
    const viewTemplate = (
      <div>
        <div className="row">
          <label>Name:<br/>
            <div>{this.props.name}</div>
          </label>
        </div>
        <div className="row">
          <label>Email:<br/>
            <div>{this.props.email}</div>
          </label>
        </div>
        <div className="row">
          <label>Phone number:<br/>
            <div>{this.props.phone}</div>
          </label>
        </div>
      </div>
    )

    const editTemplate = (
      <div>
        <form>
          <div className="row">
            <label>Name:<br/>
              <input type="text" name="name" value={this.props.name} onChange={this.props.handleChange} />
            </label>
          </div>
          <div className="row">
            <label>Email:<br/>
              <input type="text" name="email" value={this.props.email} onChange={this.props.handleChange} />
            </label>
          </div>
          <div className="row">
            <label>Phone number:<br/>
              <input type="text" name="phone" value={this.props.phone} onChange={this.props.handleChange} />
            </label>
          </div>
        </form>
      </div>
    )

    return (
    <div>{this.props.submitted ? viewTemplate : editTemplate}</div>
    )
  }
}

export default General;