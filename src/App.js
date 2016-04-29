import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 10
    };
  }

  render() {
    return (
      <div>Test {this.state.count}</div>
    )
  }
}
