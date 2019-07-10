<template>
  <div class="parent">
    <div class="text">{{ text }}</div>
    <Child :count="count"/>
  </div>
</template>

<script>
import Child from './Child.vue';

import { addTrack } from './TrackContext';

export default {
  name: 'Parent',
  props: ['count'],
  components: {
    Child,
  },
  data() {
    return {
      text: `Parent - ${this.count}`
    };
  },
  watch: {
    count(val, oldVal) {
      if (val > 4) {
        return;
      }
      this.text = `Parent - ${val}`;
    }
  },
  beforeCreate() {
    addTrack('Parent beforeCreate');
  },
  created() {
    addTrack('Parent created');
  },
  beforeMount() {
    addTrack('Parent beforeMount');
  },
  mounted() {
    addTrack('Parent mounted');
  },
  beforeUpdate() {
    addTrack('Parent beforeUpdate');
  },
  updated() {
    addTrack('Parent updated');
  }
}
</script>

<style scoped>
.parent {
  position: relative;
  width: 200px;
  height: 200px;
  border: 3px solid blue;
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
