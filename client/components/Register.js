import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newUser } from '../store/User';

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userPassword: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.newUser({ ...this.state });
    this.setState({ userName: '', userPassword: '' });
  };

  render() {
    const { userName, userPassword } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userName">Username:</label>
          <input name="userName" onChange={handleChange} value={userName} />
          <label htmlFor="userPassword">Password:</label>
          <input
            name="userPassword"
            onChange={handleChange}
            value={userPassword}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { newUser: (user) => dispatch(newUser(user)) };
};

export default connect(null, mapDispatchToProps)(Register);
