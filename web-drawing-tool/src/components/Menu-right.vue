<template>
  <v-container>
    <canvas id="c" width = "500" height = "800">
    <img src="@/assets/전기설계심볼/Power_Supply/AC_Supply.png" id = "my-image">
    </canvas>
  </v-container>  
</template>

<script>

import {fabric} from 'fabric';

export default {
  mounted (){
    var canvas = new fabric.Canvas('c');
    var imgElement = document.getElementById('my-image');
    
    var imgInstance = new fabric.Image(imgElement, {
      left: 100,
      top: 100,
      angle: 0,
      opacity: 100
    });
    canvas.add(imgInstance);
  }
};
</script>

<style scoped>
div {
  flex: 1; 
  background-color: #EEEEEE;
}
</style>