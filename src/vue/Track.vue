<template>
  <div class="track">
    <template v-for="track in tracks">
      <div class="trackItem" :key="Math.random()">{{ track }}</div>
    </template>
  </div>
</template>

<script>
import { getTracks, resetTracks } from './TrackContext';

export default {
  name: "Track",
  data() {
    return {
      tracks: []
    }
  },
  methods: {
    getTracks,
    resetTracks,
    updateTracks() {
      this.tracks = this.getTracks();
      this.$nextTick(() => {
        this.resetTracks();
      });
    }
  }
}
</script>

<style scoped>
.track {
  margin-top: 20px;
}
.trackItem {
  margin-bottom: 5px;
}
</style>
