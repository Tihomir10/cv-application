import React from 'react';

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      school: 'University of Berlin',
      title: 'Master of None',
      date: '2011 - 2014 ',
      submitted: true
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
            <label>School name:<br/>
              <div>{this.state.school}</div>
            </label>
          </div>
          <div className="row">
            <label>Title of the study:<br/>
              <div>{this.state.title}</div>
            </label>
          </div>
          <div className="row">
            <label>Date of the study:<br/>
              <div>{this.state.date}</div>
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
              <label>School name:<br/>
                <input type="text" name="school" value={this.state.school} onChange={this.handleChange} />
              </label>
            </div>
            <div className="row">
              <label>Title of the study:<br/>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
              </label>
            </div>
            <div className="row">
              <label>Date of study:<br/>
                <input type="text" name="date" value={this.state.date} onChange={this.handleChange} />
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

export default Education;