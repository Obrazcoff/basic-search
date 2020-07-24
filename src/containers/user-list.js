import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index';

class UsersList extends Component {
  showUsersList() {
    return this.props.users.map((user) => {
      if (
        user.name
          .toLowerCase()
          .includes(this.props.searchFlags.searchString.toLowerCase())
      ) {
        return (
          <div
            className="card"
            onClick={() => this.props.selectUser(user)}
            key={user.name}
          >
            <div className="card-details">
              <span>{user.name}</span>
              <div>
                {(function (rows, i, len) {
                  while (++i <= len) {
                    rows.push(<span class="fa fa-star checked" />);
                  }
                  return rows;
                })([], 0, user.rate)}{' '}
              </div>
            </div>
          </div>
        );
      } else return null;
    });
  }
  render() {
    return <div className="list">{this.showUsersList()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    searchFlags: state.searchFlags,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser: selectUser }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UsersList);
