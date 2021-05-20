import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!<br/>
          {this.props.users.map(user => <li key={user.username}>{user.username}</li>)}<br/>
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.users, userCount: state.users.length}
}


export default connect(mapStateToProps)(Users)
