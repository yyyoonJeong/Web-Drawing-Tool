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
            <v-card-title>카테고리
              <v-spacer></v-spacer>
              <v-btn
                icon
                @click = "close()"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <fieldset class = "category">
              <v-card-actions>
                <v-row align = "center">
                  <v-col align = "center">
                    <v-btn
                      class = "ma-5"
                      @click = "dialog = false"
                    >
                      Free Drawing
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-divider></v-divider>
                    <v-btn
                      class = "ma-5"
                      @click = "close"
                    >
                      electric circuit diagram
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-divider></v-divider>
                    <v-btn
                      class = "ma-5"
                      @click = "dialog = false"
                    >
                      Sample category 
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-col>
                </v-row>
              </v-card-actions>
            </fieldset>
          </v-card>
        </v-dialog>
      </div>

      <div class = "a">
      <v-btn
        text
      > 
        <span class = "font1">불러오기</span>
        <v-file-input
          prepend-icon = ""
          clearable = False
          hide-input
          text
          @click = "upload"
        ></v-file-input>
        <div
          v-if = "preview">
          <img v-bind:src = "preview">
        </div>
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
    preview: ""
  }),

  methods: {
    close: function () {
      this.dialog = false
    }
  },
    upload: function (event) {
      var file = event.target.files[0]
      if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        this.preview = window.URL.createObjectURL(this.file)
      }
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

.category{
  text-align: center;
  width: 400px;
  margin: auto;
}


</style>