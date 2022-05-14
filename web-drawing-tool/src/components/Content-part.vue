<template>
  <v-container>
    <canvas class ="canvas" ref="can" width="900" height="600"></canvas>
  </v-container>
</template>

<script>

import {fabric} from "fabric"

//const myCanvas;

export default {
  name: 'Content-part',
  mounted() {
    const ref = this.$refs.can;
    const canvas = new fabric.Canvas(ref , { isDrawingMode: true});
    canvas.add();
  }
};

</script>

<style scoped>
div {
  flex: 3;
  background-color: #E0E0E0;
}
.canvas {
  background-color: white;

}
</style>>