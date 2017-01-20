import React from 'react';

export default class Demo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Visitor',
      age: '20'
    };
  }
  handleChangeName(e) {
    let name = e.target.value;
    this.setState({
      name: name
    });
  }
  handleChangeAge(e) {
    let age = e.target.value;
    this.setState({
      age: age
    });
  }
  render() {
    return (
      <div>
        <div className="form-field">
          <label>Your Name:</label>
          <input type="text" onChange={this.handleChangeName.bind(this)} />
        </div>
        <div className="form-field">
          <label>Your Age:</label>
          <input type="text" onChange={this.handleChangeAge.bind(this)} />
          <p>Hello {this.state.name}, you are {this.state.age} years old.</p>
        </div>
      </div>
    )
  }
}