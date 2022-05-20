<template>
<div>
  <v-app-bar app color="#EEEEEE">
    <div class="program_name">Web Drawing Tool</div>

    <v-spacer></v-spacer>

    <div class="toolbars">
      <input
        type="text"
        name="width"
        class="width_height_box"
        value="900"
        @change="changeWidth"
        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
      />
      <v-icon>mdi-alpha-x</v-icon>
      <input
        type="text"
        name="height"
        class="width_height_box"
        value="600"
        @change="changeHeight"
        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
      />
      |
      <v-btn icon @click = "click_undo"><v-icon>mdi-undo</v-icon></v-btn>
      <v-btn icon @click = "click_redo"><v-icon>mdi-redo</v-icon></v-btn>
      <v-btn icon @click = "click_cut"><v-icon>mdi-content-cut</v-icon></v-btn>
      <v-btn icon @click = "click_paste"><v-icon>mdi-content-paste</v-icon></v-btn>
      <v-btn icon @click = "click_copy"><v-icon>mdi-content-copy</v-icon></v-btn>
      <v-btn icon @click = "click_delete"><v-icon>mdi-delete</v-icon></v-btn>
      |
      <v-btn icon><v-icon>mdi-magnify-minus-outline</v-icon></v-btn>
      <input type="text" name="ratio" value="100%" class="canvas_ratio_box" />
      <v-btn icon><v-icon>mdi-magnify-plus-outline</v-icon></v-btn>
    </div>

    <v-spacer></v-spacer>

      <div class="wrap">

        <div class = "button_style">
          <v-dialog 
            v-model = "make_new_file_dialog"
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
            <v-card-title>카테고리<v-spacer></v-spacer>
              <v-btn icon @click = "close_make_button"><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-actions>
              <v-row align = "center">
                <v-col align = "center">
                  <fieldset class = "ma-10">
                    <v-btn class = "ma-7" @click = "create_new_free_drawing">
                    Free Drawing
                    </v-btn>
                    <v-divider></v-divider>
                    <v-btn class = "ma-7" @click = "create_new_clectric_circuit">
                    electric circuit diagram
                    </v-btn>
                    <v-divider></v-divider>
                  </fieldset>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <div class = "button_style" >
        <v-btn
          @click="isLoad=true" 
          text
        >
          <span class = "font1">불러오기</span>
        </v-btn>
      </div>

      <div class = "button_style">
      <v-btn
        @click="isSave=true"
        text
      >
        <span class = "font1">저장하기</span>
      </v-btn>
      </div>

      <div class = "button_style">
        <v-dialog 
            v-model = "export_file_dialog"
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
              <span class = "font1">내보내기</span>
            </v-btn>
          </template>
          
          <v-card>
            <v-card-title>내보내기 방식<v-spacer></v-spacer>
              <v-btn icon @click = "close_export_button"><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-actions>
              <v-row align = "center">
                <v-col align = "center">
                  <fieldset class = "ma-10">
                    <v-btn class = "ma-7" @click = "click_save_png">
                    PNG로 내보내기
                    </v-btn>
                    <v-divider></v-divider>
                  </fieldset>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      </div>

    <div class = "preview">
      <img v-if = "url" :src = "url" />
    </div>
  </v-app-bar>
  <v-main>
    <Content 
    ref="childComponent" 
    :canvas_mode="canvas_mode" 
    :isSave="isSave" 
    :isLoad="isLoad"
    @afterSave="isSave=false"
    @afterLoad="isLoad=false"
    
    />
  </v-main>
</div>
</template>

<script>
import { data } from "../data";
import Content from './Content-part.vue';

export default {
  name: 'Header-part',

  components: {
    Content,
  },

  data: () => ({
    canvas_mode: 'Menu_left_d',
    make_new_file_dialog: false,
    export_file_dialog: false,
    url: null, 
    isSave: false,
    isLoad: false
  }),

  methods: {
    close_make_button() {
      this.make_new_file_dialog = false;
    },
    close_export_button() {
      this.export_file_dialog = false;
    },
    onFileChange(event) {
      const file = event.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    changeWidth(event) {
      data.width = event.target.value;
    },
    changeHeight(event) {
      data.height = event.target.value;
    },
    click_undo(){
      console.log('click undo');
      this.$refs.childComponent.undo();
    },
    click_redo(){
      console.log('click redo');
      this.$refs.childComponent.redo();
    },
    click_cut(){
      console.log('click paste');
      this.$refs.childComponent.cutSymbol();
    },
    click_paste(){
      console.log('click paste');
      this.$refs.childComponent.pasteSymbol();
    },
    click_copy(){
      console.log('click copy');
      this.$refs.childComponent.copySymbol();
    },
    click_delete(){
      console.log('click delete');
      this.$refs.childComponent.deleteSymbol();
    },

    create_new_free_drawing(){
      console.log("FREE DRAWING"); 
      this.canvas_mode = "Menu_left_fd";
      this.make_new_file_dialog = false;
      this.$refs.childComponent.clearCanvas();
    },
    create_new_clectric_circuit(){
      console.log("ELECTRIC CIRCUIT DIAGRAM");
      this.canvas_mode = "Menu_left_ecd";
      this.make_new_file_dialog = false;
      this.$refs.childComponent.clearCanvas();
    },

    click_save_png(){
      console.log('png로 내보내기');
      this.$refs.childComponent.export_to_png();
    },

  },
};
</script>

<style scoped>
.program_name {
  margin: 5%;
  font-size: 20px;
}

.toolbars {
  white-space: nowrap;
  justify-content: center;
  padding-left: 3%;
  padding-right: 3%;

  border-radius: 5px;
  background-color: #e0e0e0;
}

.width_height_box {
  width: 50px;
  border-radius: 5px;
  background-color: #ffffff;
  text-align: center;
}
.canvas_ratio_box {
  width: 50px;
  border: 1px solid;
  text-align: center;
}

.button_style {
  margin: 1%;
  border-radius: 5px;
  background-color: #f1c40f;
  color: #ffffff;
}

.font1 {
  color: #ffffff;
}

.wrap {
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
