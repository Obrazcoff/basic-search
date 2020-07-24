import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeSearchString } from '../actions/index';

class UserSearch extends Component {
  constructor(props) {
    super(props);
    if (props.searchLink) {
      console.log('Search from link:', props.searchLink);
      props.changeSearchString(props.searchLink);
    }
  }
  render() {
    return (
      <div>
        <h2>Search user:</h2>
        <input
          type="text"
          placeholder="Search user by name..."
          ref="search_string_value"
          onChange={() =>
            this.props.changeSearchString(this.refs.search_string_value.value)
          }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchFlags: state.searchFlags,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeSearchString: changeSearchString,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
