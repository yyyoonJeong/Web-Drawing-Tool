<template>
  <v-container fluid>
    <v-text-field
        v-model = "search"
        outlined
        label = "검색"
        background-color = "#FFFFFF"
        type = "text"
        append-icon = "mdi-magnify"
      ></v-text-field>

  <v-list style="max-height: 500px; " class="overflow-y-auto"
  background-color = "#EEEEEE">
    <v-subheader>Free Drawing</v-subheader>
        <v-list-group 
          v-for = "item in items" :key = "item.title" 
          v-model = "item.active" :prepend-icon = "item.icon"
          no-action
          >

      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text = "item.title"></v-list-item-title>
        </v-list-item-content>
      </template>

      <div class="d-flex flex-wrap overflow-x-auto">
      <v-list-item
        class="list-item"
        v-for = "item in item.items" :key = "item.color"
        @click="click_menu(item.action, item.color, item.shape)"
        >
        <v-icon :color = "item.color">{{item.icon}}</v-icon>
        {{item.text}}
      </v-list-item>
      </div>
    </v-list-group>
  </v-list>
    <input type = "file" 
    id = "imageUpload" 
    style = "display : none" 
    @change = "onFileChange" />
  </v-container>
  
  
</template>

<script>

export default {

  data: () => ({
    search: 'esr',
    items: [
      {
        icon: "mdi-play",
        title: "Pen",
        items: [
          { action: "pen", color: "red", icon: "mdi-circle" },
          { action: "pen", color: "orange", icon: "mdi-circle" },
          { action: "pen", color: "yellow", icon: "mdi-circle" },
          { action: "pen", color: "green", icon: "mdi-circle" },
          { action: "pen", color: "blue", icon: "mdi-circle" },
          { action: "pen", color: "navy", icon: "mdi-circle" },
          { action: "pen", color: "purple", icon: "mdi-circle" },
          { action: "pen", color: "black", icon: "mdi-circle" }, 
        ],
      },
      {
        icon: "mdi-play",
        title: "Shapes",
        items: [
          { action: "shapes", shape: "Circle", icon: "mdi-circle-outline" }, // Circle
          { action: "shapes", shape: "Triangle", icon: "mdi-triangle-outline" }, // Tri
          { action: "shapes", shape: "Rect", icon: "mdi-rectangle-outline" }, // Rect
          { action: "shapes", shape: "Line", icon: "mdi-vector-line" }, // Line
        ]
      },
      {        
        icon: "mdi-play",
        title: "Text",
        items: [
          { action: "text", text: "Add Textbox" }
        ]
      },
      {
        icon: "mdi-play",
        title: "Image",
        items: [
          { action: "image", text: "Add Image" }
        ]
      },
    ],
  }
  
  ),
  methods: {
    clickSymbol(image){
      this.$emit('symbolClick', image)
    },
    click_menu(action, color, shape){
      console.log(action);
      if (action == "pen"){
        console.log("click " + color);
        this.$emit('clickPen', color);
      }else if (action == "shapes"){
        console.log("click " + shape)
        this.$emit('clickShapes', shape)
      }else if (action == "text"){
        console.log('text')
        this.$emit('clickText')
      }else if (action == "image"){
        
        console.log('image')

        //add image 클릭시 filedialog 불러오기
        document.getElementById('imageUpload').click();
        //this.$emit('clickImage')
      }
    },
    onFileChange(event) {
      //파일을 열었을때 url 생성 후 상위컴포넌트로 emit
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
            console.log(url)
      this.$emit('clickImage', url)

      
    },
  }
  

};
</script>

<style scoped>
div {
  flex: 1;
  background-color: #EEEEEE;
}

.image_size {
  width: 100px;
  height: 100px;
} 

.list-item{
  min-width:50px;
}


</style>
