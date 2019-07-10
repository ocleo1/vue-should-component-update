import React from 'react';

import Child from './Child';

import { addTrack } from './TrackContext';

/**
 * https://reactjs.org/docs/react-component.html
 */
export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    addTrack('Parent constructor');
  }
  static getDerivedStateFromProps() {
    addTrack('Parent getDerivedStateFromProps');
    return null;
  }
  componentDidMount() {
    addTrack('Parent componentDidMount');
  }
  componentWillUnmount() {
    addTrack('Parent componentWillUnmount');
  }
  getSnapshotBeforeUpdate() {
    addTrack('Parent getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate() {
    addTrack('Parent componentDidUpdate');
  }
  shouldComponentUpdate() {
    addTrack('Parent shouldComponentUpdate');

    if (this.props.count > 3) {
      return false;
    }
    return true;
  }
  render() {
    addTrack('Parent render');
    return (
      <div style={Style.parent}>
        <div style={Style.text}>{`Parent - ${this.props.count}`}</div>
        <Child count={this.props.count}/>
      </div>
    );
  }
}

const Style = {
  parent: {
    position: 'relative',
    width: 200,
    height: 200,
    border: '3px solid blue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    position: 'absolute',
    top: 0,
    left: 0
  }
};
