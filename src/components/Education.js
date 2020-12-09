import React from 'react';

class Education extends React.Component {

  render() {
      const viewTemplate = (
        <div>
          <div className="row">
            <label>School name:<br/>
              <div>{this.props.school}</div>
            </label>
          </div>
          <div className="row">
            <label>Title of the study:<br/>
              <div>{this.props.title}</div>
            </label>
          </div>
          <div className="row">
            <label>Date of the study:<br/>
              <div>{this.props.date}</div>
            </label>
          </div>
        </div>
      )

      const editTemplate = (
        <div>
          <form>
            <div className="row">
              <label>School name:<br/>
                <input type="text" name="school" value={this.props.school} onChange={this.props.handleChange} />
              </label>
            </div>
            <div className="row">
              <label>Title of the study:<br/>
                <input type="text" name="title" value={this.props.title} onChange={this.props.handleChange} />
              </label>
            </div>
            <div className="row">
              <label>Date of study:<br/>
                <input type="text" name="date" value={this.props.date} onChange={this.props.handleChange} />
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

export default Education;