let tracks = [];

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
