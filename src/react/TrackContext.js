import React from 'react';

let tracks = [];

export const TrackContext = React.createContext({
  collectTracks: () => {},
});

export function getTracks() {
  return tracks;
}

export function addTrack(track) {
  tracks.push(track);
  console.log(track);
}

export function resetTracks() {
  tracks = [];
}
