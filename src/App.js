import React from 'react';

import General from './components/General';
import Education from './components/Education';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'John Doe',
      email: 'JohnDoe@email.com',
      phone: '123-456-789',
      school: 'University of Berlin',
      title: 'Master of None',
      date: '2011 - 2014',
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

    const funcProps = {
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      handleEdit: this.handleEdit,
      submitted: this.state.submitted
    }

    return (
      <div className="container">
        <div className="row pt-3 pl-4">
          <General 
            name={this.state.name} 
            email={this.state.email}
            phone={this.state.phone}
            {...funcProps}
          />
        </div>
        <div className="row pl-4">
          <Education 
            school={this.state.school}
            title={this.state.title}
            date={this.state.date}
            {...funcProps}
          />
        </div>
        <div className="row pl-4">
        {this.state.submitted ? 
          <button onClick={this.handleEdit}>Edit</button> :
          <button onClick={this.handleSubmit}>Submit</button>
        }
        </div>
      </div>
    );
  }
}


export default App;
