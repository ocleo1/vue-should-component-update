<template>
  <div>
    <div class="main">
      <div class="text">{{ text }}</div>
      <template v-if="count < 4">
        <Parent :count="count"/>
      </template>
      <template v-else>
        <Parent v-once :count="count"/>
      </template>
    </div>
    <button @click="countClick">Update</button>
    <Track ref="track" />
  </div>
</template>

<script>
import Parent from './Parent.vue';
import Track from './Track.vue';

import { addTrack } from './TrackContext';

export default {
  name: 'Main',
  components: {
    Parent,
    Track
  },
  data() {
    return {
      count: 0
    };
  },
  computed: {
    text() {
      return `Main - ${this.count}`;
    }
  },
  methods: {
    countClick() {
      this.count += 1;
    }
  },
  beforeCreate() {
    addTrack('Main beforeCreate');
  },
  created() {
    addTrack('Main created');
  },
  beforeMount() {
    addTrack('Main beforeMount');
  },
  mounted() {
    addTrack('Main mounted');
    this.$refs.track.updateTracks();
  },
  beforeUpdate() {
    addTrack('Main beforeUpdate');
  },
  updated() {
    addTrack('Main updated');
    this.$refs.track.updateTracks();
  }
}
</script>

<style scoped>
.main {
  position: relative;
  width: 300px;
  height: 300px;
  border: 3px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  position: absolute;
  top: 0;
  left: 0;
}
button {
  margin-top: 10px;
}
</style>
