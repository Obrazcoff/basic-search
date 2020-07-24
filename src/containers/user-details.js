import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
  render() {
    if (!this.props.user) {
      return <p>Choose user, please...</p>;
    }
    return (
      <div>
        <h2>{this.props.user.name}</h2>
        <br />
        <p>Some text about user...</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userActive,
  };
}

export default connect(mapStateToProps)(UserDetails);
