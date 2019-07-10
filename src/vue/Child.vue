<template>
  <div class="child">
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
import { addTrack } from './TrackContext';

export default {
  name: 'Child',
  props: ['count'],
  data() {
    return {};
  },
  computed: {
    text() {
      return `Child - ${this.count}`;
    }
  },
  beforeCreate() {
    addTrack('Child beforeCreate');
  },
  created() {
    addTrack('Child created');
  },
  beforeMount() {
    addTrack('Child beforeMount');
  },
  mounted() {
    addTrack('Child mounted');
  },
  beforeUpdate() {
    addTrack('Child beforeUpdate');
  },
  updated() {
    addTrack('Child updated');
  }
}
</script>

<style scoped>
.child {
  position: relative;
  width: 100px;
  height: 100px;
  border: 3px solid orange;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
