import React from 'react';

import { addTrack } from './TrackContext';

/**
 * https://reactjs.org/docs/react-component.html
 */
export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    addTrack('Child constructor');
  }
  static getDerivedStateFromProps() {
    addTrack('Child getDerivedStateFromProps');
    return null;
  }
  componentDidMount() {
    addTrack('Child componentDidMount');
  }
  componentWillUnmount() {
    addTrack('Child componentWillUnmount');
  }
  getSnapshotBeforeUpdate() {
    addTrack('Child getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate() {
    addTrack('Child componentDidUpdate');
  }
  shouldComponentUpdate() {
    addTrack('Child shouldComponentUpdate');
    return true;
  }
  render() {
    addTrack('Child render');

    return (
      <div style={Style.child}>
        <div style={Style.text}>{`Child - ${this.props.count}`}</div>
      </div>
    );
  }
}

const Style = {
  child: {
    position: 'relative',
    width: 100,
    height: 100,
    border: '3px solid orange',
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
