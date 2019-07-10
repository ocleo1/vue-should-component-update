import React from 'react';
import ReactDOM from 'react-dom';

import Parent from './Parent';
import Track from './Track';

import { addTrack } from './TrackContext';

/**
 * https://reactjs.org/docs/react-component.html
 */
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this._countClick = this.countClick.bind(this);
    this._trackRef = React.createRef();

    addTrack('Main constructor');
  }
  static getDerivedStateFromProps() {
    addTrack('Main getDerivedStateFromProps');
    return null;
  }
  componentDidMount() {
    addTrack('Main componentDidMount');

    this._trackRef.current.updateTracks();
  }
  componentWillUnmount() {
    addTrack('Main componentWillUnmount');
  }
  getSnapshotBeforeUpdate() {
    addTrack('Main getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate() {
    addTrack('Main componentDidUpdate');

    this._trackRef.current.updateTracks();
  }
  shouldComponentUpdate() {
    addTrack('Main shouldComponentUpdate');
    return true;
  }
  countClick() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }
  render() {
    addTrack('Main render');

    return (
      <div>
        <div style={Style.main}>
          <div style={Style.text}>{`Main - ${this.state.count}`}</div>
          <Parent count={this.state.count}/>
        </div>
        <button style={Style.button} onClick={this._countClick}>Update</button>
        <Track ref={this._trackRef} />
      </div>
    );
  }
}

const Style = {
  main: {
    position: 'relative',
    width: 300,
    height: 300,
    border: '3px solid red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  button: {
    marginTop: 10
  }
};

ReactDOM.render(
  <Main />,
  document.getElementById('react'),
);
