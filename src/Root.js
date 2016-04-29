import React from 'react';
import Button from './Button';
import { Link } from 'react-router';

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 10
    };
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decreaseCount() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/about/1'}>Pelle</Link></li>
          <li><Link to={'/about/2'}>Stefan</Link></li>
          <li><Link to={'/about/3'}>Olle</Link></li>
        </ul>

        <Button onClick={this.decreaseCount.bind(this)} text={'Decrease'} />
        <Button onClick={this.increaseCount.bind(this)} text={'Increase'} />
        {this.state.count}

        {this.props.children}
      </div>
    )
  }
}