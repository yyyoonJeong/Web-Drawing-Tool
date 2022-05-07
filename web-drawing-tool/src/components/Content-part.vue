<template>
  <v-container>
    <canvas id="canvas" width="1200" height="800"></canvas>
  </v-container>
</template>

<script>
export default {
    name: 'Content-part',
    data() {
      return {
        canvas: null,
        ctx: null,
      }
    },
    mounted() {
      this.canvas = document.getElementById('canvas')
      this.ctx = this.canvas.getContext('2d')
      this.ctx.lineWidth = 2
      this.ctx.strokeStyle = 'black'
      this.canvas.addEventListener('mousemove', this.move)
      this.canvas.addEventListener('mousedown', this.down)
      this.canvas.addEventListener('mouseup', this.up)
      this.canvas.addEventListener('mouseout', this.out)
    },
    methods: {
      draw(curX, curY){
        this.ctx.beginPath(); // 경로를 시작 설정
        this.ctx.moveTo(this.startX, this.startY);
        this.ctx.lineTo(curX, curY);
        this.ctx.stroke();
      },

      move(e){
        if(!this.dragging) return;  //dragging : false => return , dragging: true => move
        var curX = e.offsetX, curY = e.offsetY;
        this.draw(curX, curY);
        this.startX = curX;
        this.startY = curY;
      },

      down(e){
        this.startX = e.offsetX;
        this.startY = e.offsetY;
        this.dragging = true;
      },
      up(){
        this.dragging = false;            
      },
      out(){
        this.dragging = false;
      },
    },
};
</script>

<style scoped>
div {
  flex: 3;
  background-color: #E0E0E0;
}
</style>>