import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Register extends Component {
  render() {
    return <div>REGISTER</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
