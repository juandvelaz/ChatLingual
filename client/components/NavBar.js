import React, { Component } from 'react';
import { connect } from 'react-redux';

export class NavBar extends Component {
  render() {
    return <div>NAVBAR</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
