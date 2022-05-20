<template>
  <div class = "wrap">
    <component 
    class="left-menu"
    v-bind:is="mode"
    @symbolClick="drawSymbol" @clickPen="pen_mode" @clickShapes="shapes_mode"
    @clickText="add_text" @clickImage="add_image"/>
      <v-container>
      <canvas class="canvas" ref="can" width="900" height="600"></canvas>
      <!--<v-btn @click = "mode_change">모드변경</v-btn>-->
      </v-container>
    <Menu_right/>

  </div>
</template>

<script>
import { fabric } from "fabric";
import { data } from "../data";
import Menu_left_d from './Menu-left-default.vue';
import Menu_left_fd from './Menu-left-free_drawing.vue';
import Menu_left_ecd from './Menu-left-electric_circuit_diagram.vue';
import Menu_right from './Menu-right.vue';
let canvas;
let clipboard = null;

export default {
  name: "Content-part",
  props: {
    canvas_mode: {
      default: "Menu_left_d",
      type: String
    },
    isSave:{
      default: false,
      type: Boolean
    },
    isLoad:{
      default: false,
      type:Boolean

    }
  },
  watch: {
    'canvas_mode': function(){
      console.log('모드 변경 감지');
      this.mode = this.canvas_mode;
    },
    'isSave' : function(){

      if(this.isSave){
        this.saveCanvas()
      }

    },
    'isLoad': function(){
      if(this.isLoad){
        this.loadCanvas()
      }

    }
  },

  components: {
    Menu_left_d,
    Menu_left_fd,
    Menu_left_ecd,
    Menu_right,
  },

  data(){
    return{
      mode: this.canvas_mode,
      saveData: null
    }
  },

  mounted() {
    const ref = this.$refs.can;
    canvas = new fabric.Canvas(ref, { isDrawingMode: false });
    canvas.add();
  },

  methods: {
    mode_change(){
      canvas.isDrawingMode = !canvas.isDrawingMode;
      canvas.renderAll();
    },
    
    export_to_png(){
      const dataURL = canvas.toDataURL({
        width: canvas.width,
        height: canvas.height,
        left: 0,
        top: 0,
        format: 'png',
      });
      const link = document.createElement('a');
      link.download = 'image.png';
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },

    drawSymbol(image){
      console.log(image);
      fabric.loadSVGFromURL(image, (objects) => {
        var obj = fabric.util.groupSVGElements(objects)
        obj.set({
          left: 100,
          top: 100
        })
        obj.scaleToHeight(100);
        obj.scaleToWidth(100);
        canvas.add(obj);
      });
      canvas.renderAll();
    },

    cutSymbol(){
      canvas.getActiveObject().clone(function(cloned) {
        clipboard = cloned;
      });
      var selected = canvas.getActiveObjects(),
      selGroup = new fabric.ActiveSelection(selected, {
        canvas: canvas
      });
      selGroup.forEachObject(function(obj) {
        canvas.remove(obj);
      });
      canvas.renderAll();
    },
    
    copySymbol(){
      canvas.getActiveObject().clone(function(cloned) {
        clipboard = cloned;
      });
    },

    pasteSymbol(){
      // clone again, so you can do multiple copies.
        clipboard.clone(function(clonedObj) {
          canvas.discardActiveObject();
          clonedObj.set({
            left: clonedObj.left + 10,
            top: clonedObj.top + 10,
            evented: true,
          });
          if (clonedObj.type === 'activeSelection') {
              // active selection needs a reference to the canvas.
              clonedObj.canvas = canvas;
              clonedObj.forEachObject(function (obj) {
                  canvas.add(obj);
              });
              // this should solve the unselectability
              clonedObj.setCoords();
          } else {
            canvas.add(clonedObj);
          }
          canvas.setActiveObject(clonedObj);
          canvas.requestRenderAll();
      });
    },

    deleteSymbol(){
      var selected = canvas.getActiveObjects(),
      selGroup = new fabric.ActiveSelection(selected, {
        canvas: canvas
      });

      if (selGroup){
        if (confirm('선택된 객체를 삭제할까요?')) {
          selGroup.forEachObject(function(obj) {
            canvas.remove(obj);
          });
        }
      }else{
        return false;
      }
      canvas.renderAll();
    },

    clearCanvas(){
      canvas.clear();
    },

    pen_mode(color){
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.color = color;
      canvas.renderAll();
    },

    shapes_mode(shape){
      canvas.isDrawingMode = false;
      if (shape == 'Circle'){
        let circle = new fabric.Circle({
          radius: 100, fill: 'green', left: 100, top: 100
        });
        canvas.add(circle);
      
      }else if(shape == 'Triangle'){ 
        let triangle = new fabric.Triangle({
          width: 100, height: 100, fill: 'blue', left: 100, top: 100
        });
        canvas.add(triangle);

      }else if(shape == 'Rect'){
        let rect = new fabric.Rect({
          width: 100, height: 100, fill: 'purple', left: 100, top: 100
        });
        canvas.add(rect);

      }else if(shape == 'Line'){
        var point1;
        canvas.on('mouse:down', function (options) {
          var x = options.e.clientX - canvas._offset.left;
          var y = options.e.clientY - canvas._offset.top;
          var circle = new fabric.Circle({
            left: x,
            top: y,
            fill: 'red',
            originX: 'center',
            originY: 'center',
            hasControls: false,
            hasBorders: false,
            lockMovementX: true,
            lockMovementY: true,
            radius: 1,
            hoverCursor: 'default'
          });
          canvas.add(circle);
          if (point1 === undefined) {
              point1 = new fabric.Point(x, y)
          } else {
            canvas.add(new fabric.Line([point1.x, point1.y, x, y], {
              stroke: 'black',
              hasControls: false,
              hasBorders: false,
              lockMovementX: true,
              lockMovementY: true,
              hoverCursor: 'default'
          }))
        point1 = undefined;
        }
      });
      }

      canvas.renderAll();
      canvas.on();
    },

    add_text(){
      let input = prompt('텍스트를 입력해주세요.', 'Sample_text');
      let textbox = new fabric.Textbox(input, { 
        editable: true,
        fontFamily: '굴림', 
        left: 100, 
        top: 100 
      });
      canvas.add(textbox);
      canvas.centerObjectH(textbox);
    },

    saveCanvas(){
      this.saveData = canvas.toJSON()
      console.log('save')

      this.$emit('afterSave')

    },

    loadCanvas(){
      console.log('load')
      if(this.saveData){
        canvas.loadFromJSON(this.saveData, canvas.renderAll.bind(canvas));
      }

      this.$emit('afterLoad')
    },
    

    add_image(url){
      //받은 url을 이용하여 캔버스에 이미지 객체 add. 크기조절 하세요
      fabric.Image.fromURL(url, function(myImg) {

        var img1 = myImg.set({                 
                angle: 0,
                padding: 10,
                cornersize:10,
                height:110,
                width:110,});
        canvas.add(img1); 
      });
      // var reader = new FileReader();
      // reader.onload = function (event){
      //   var imgObj = new Image();
      //   imgObj.src = event.target.result;
      //   imgObj.onload = function () {
      //     var image = new fabric.Image(imgObj);
      //     image.set({
      //           angle: 0,
      //           padding: 10,
      //           cornersize:10,
      //           height:110,
      //           width:110,
      //     });
      //     canvas.centerObject(image);
      //     canvas.add(image);
      //     canvas.renderAll();
      //   }
      // }
      // reader.readAsDataURL(e.target.files[0]);
    }
  },
};

setInterval(() => {
  canvas.setWidth(data.width);
  canvas.setHeight(data.height);
}, 100);
</script>

<style scoped>
div {
  flex: 4;
  background-color: #e0e0e0;
}
.canvas {
  background-color: white;
}

.left-menu{
  max-width: 450px;
}
</style>
>
