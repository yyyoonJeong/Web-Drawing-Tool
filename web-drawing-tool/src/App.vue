<template>
  <v-app>
    <v-app-bar
      app
      color="#EEEEEE"
    >
      <div class="program_name">
      Web Drawing Tool
      </div>

      <v-spacer></v-spacer>
      
      <div class="toolbars">
      <input type = "text" name = "width" class = "width_height_box">
      <v-icon>mdi-alpha-x</v-icon>
      <input type = "text" name = "height" class = "width_height_box">
      |
      <v-icon>mdi-undo</v-icon>
      <v-icon>mdi-redo</v-icon>
      <v-icon>mdi-content-cut</v-icon>
      <v-icon>mdi-content-paste</v-icon>
      <v-icon>mdi-content-copy</v-icon>
      <v-icon>mdi-delete</v-icon>
      |
      <v-icon>mdi-magnify-minus-outline</v-icon>
      <input type = "text" name = "ratio" value = "100%" class = "canvas_ratio_box">
      <v-icon>mdi-magnify-plus-outline</v-icon>
      </div>

      <v-spacer></v-spacer>

      <div class="wrap">

      <div class = "a">
        <v-dialog 
          v-model = "dialog"
          scrollable
          max-width = "500px"
        >
          <template v-slot:activator = "{ on, attrs }">
            <v-btn 
              color = "#F1C40F"
              text
              v-bind = "attrs"
              v-on = "on"
            >
              <span class = "font1">새로 만들기</span>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              카테고리
              <v-spacer></v-spacer>
              <v-btn icon @click = "close_dialog">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-actions>
              <v-row align = "center">
                <v-col align = "center">
                  <fieldset class = "ma-10">
                    <v-btn class = "ma-7" @click = "sample">
                    Free Drawing
                    </v-btn>
                    <v-divider></v-divider>
                    <v-btn class = "ma-7" @click = "sample">
                    electric circuit diagram
                    </v-btn>
                    <v-divider></v-divider>
                    <v-btn class = "ma-7" @click = "sample">
                    Sample category 
                    </v-btn>
                  </fieldset>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <div class = "a">
      <v-btn text>
        <span class = "font1">불러오기</span>
        <input type = "file" @change = "onFileChange" />
        <!-- <v-file-input clearable = False hide-input text accept=".draw"></v-file-input> -->
      </v-btn>
      </div>

      <div class = "a">
      <v-btn
        href="저장하기 링크"
        target="_blank"
        text
      >
        <span class = "font1">저장하기</span>
      </v-btn>
      </div>

      <div class = "a">
      <v-btn
        href="내보내기 링크"
        target="_blank"
        text
      >
        <span class = "font1">내보내기</span>
      </v-btn>
      </div>

      </div>


    </v-app-bar>

    <div class = "preview">
      <img v-if = "url" :src = "url" />
    </div>

    <v-main>
      <div class = "wrap">
        <Menu_left/>
        <Content/>
        <Menu_right/>
      </div>
    </v-main>

  </v-app>
</template>

<script>
import Menu_left from './components/Menu-left.vue';
import Menu_right from './components/Menu-right.vue';
import Content from './components/Content-part.vue';

export default {
  name: 'Web-Drawing-Tool',

  components: {
    Menu_left,
    Menu_right,
    Content
  },

  data: () => ({
    dialog: false,
    url: null,
  }),

  methods: {
    close_dialog() {
      this.dialog = false;
    },
    onFileChange(event) {
      const file = event.target.files[0];
      this.url = URL.createObjectURL(file);
    },
  },
};
</script>

<style scoped>

.program_name{
  margin: 5%;
  font-size: 20px;
}

.toolbars{
  white-space : nowrap;
  justify-content: center;
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  
  border-radius: 5px;
  background-color: #E0E0E0;
}

.width_height_box{
  width: 50px;
  border-radius: 5px;
  background-color: #FFFFFF;
  text-align: center;
}
.canvas_ratio_box{
  width: 50px;
  border: 1px solid;
  text-align: center;
}

.a{
  margin: 1%;
  border-radius: 5px;
  background-color: #F1C40F; 
  color: #FFFFFF;
}

.font1{
  color: #FFFFFF;
}

.wrap{
  margin-right: 3%;
  display: flex;
}

.preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview img {
  max-width: 900px;
  max-height: 600px;
}
</style>