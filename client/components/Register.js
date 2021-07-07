import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Register extends Component {
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form>
          <h2>Username</h2>
          <input />
          <h2>Password</h2>
          <input />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
