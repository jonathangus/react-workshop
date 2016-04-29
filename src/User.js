import React from 'react';

export default class User extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({
        user: {
          name: 'name' + this.props.params.userID
        }
      })
    }, 2000);
  }
  render() {
    return (
      <div>User page
        {this.state.user ? this.state.user.name : null}
      </div>
    )
  }
}