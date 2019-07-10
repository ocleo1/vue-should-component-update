import React from 'react';

import { getTracks, resetTracks } from './TrackContext';

/**
 * https://reactjs.org/docs/react-component.html
 */
export default class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    };
  }
  updateTracks() {
    const tracks = getTracks();
    this.setState({ tracks }, () => {
      resetTracks();
    });
  }
  render() {
    return (
      <div style={Style.track}>
      {
        this.state.tracks.map((track) => {
          return <div style={Style.trackItem} key={Math.random()}>{track}</div>
        })
      }
      </div>
    );
  }
}

const Style = {
  track: {
    marginTop: 20
  },
  trackItem: {
    marginBottom: 5
  }
};
