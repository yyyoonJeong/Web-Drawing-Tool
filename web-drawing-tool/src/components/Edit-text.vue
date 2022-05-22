<template>
  <v-container>
    <p><b>글꼴</b></p>
    <v-row dense>
      <v-col cols = "6">
        <v-overflow-btn
          :items = "font" label = "글꼴" item-value = "text"
          dense rounded outlined
        >
        </v-overflow-btn>
      </v-col>

      <v-col cols = "6">
        <v-overflow-btn
          :items = "font_size" label = "크기"
          dense rounded outlined
        >
        </v-overflow-btn>
      </v-col>

    </v-row>
    <v-row dense>
      <v-col cols="6">
        <v-btn-toggle
          v-model = "toggle_multiple" multiple>   
          <v-btn>
            <v-icon>mdi-format-bold</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-format-italic</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-format-underline</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>
      <v-col cols="5" align = "center" class = "mt-7"><p>Vertical</p></v-col>
    </v-row>

    <v-row dense>
      <v-col cols="6">
        <v-btn-toggle v-model = "toggle_exclusive" mandatory>
          <v-btn>
            <v-icon>mdi-format-align-left</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-format-align-center</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-format-align-right</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>

      <v-col cols="6">
        <v-btn-toggle v-model = "toggle_exclusive" mandatory>
          <v-btn>
            <v-icon>mdi-format-vertical-align-bottom</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-format-vertical-align-center</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-format-vertical-align-top</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <v-divider class = "my-5"></v-divider>

    <v-row dense class = "ma-0"> <!-- dense 추가여부 선택-->
      <v-col cols = "4" class = "my-3">글꼴 색</v-col>
      <v-col cols = "8">
        <v-overflow-btn
          v-model = "color_of_font"
          :items = "font_color" label = "글꼴 색" item-value = "text"
          dense rounded outlined
          @change = "change_font_color()">
          <template v-slot:selection="{ item }">
            <v-chip :color = "item.color" label class = "chip_size"></v-chip>
          </template><template v-slot:item="{ item }">
            <v-chip :color = "item.color" label class = "chip_size"></v-chip>
          </template>
        </v-overflow-btn>
      </v-col>
    </v-row>

    <v-row dense class = "ma-0">
      <v-col cols="4" class = "my-3">글배경 색</v-col>
      <v-col cols="8">
        <v-overflow-btn
        :items = "font_background_color" label = "글배경 색" item-value = "text"
        dense rounded outlined
        @change = "change_font_background_color()">
          <template v-slot:selection="{ item }">
            <v-chip :color = "item.color" label class = "chip_size"></v-chip>
          </template><template v-slot:item="{ item }">
            <v-chip :color = "item.color" label class = "chip_size"></v-chip>
          </template>
        </v-overflow-btn>
      </v-col>
    </v-row>

    <v-row dense class = "ma-0">
      <v-col cols="4" class = "my-3">테두리 색</v-col>
      <v-col cols="8">
        <v-overflow-btn
        :items = "font_border_color" label = "테두리 색" item-value = "text"
        dense rounded outlined
        @change = "change_font_border_color()">
          <template v-slot:selection="{ item }">
            <v-chip :color = "item.color" label class = "chip_size"></v-chip>
          </template><template v-slot:item="{ item }">
            <v-chip :color = "item.color" label class = "chip_size"></v-chip>
          </template>
        </v-overflow-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Edit-text',
    
  data: () => ({
    color_of_font: [],
    font: [
      { text: '나눔고딕', callback: ()=> this.change_font('나눔고딕') },
      { text: '맑은고딕' },
      { text: '굴림' },
      { text: 'Arial' },
      { text: 'Calibri' },
      { text: 'Courier' },
    ],
      
    font_size: [
      '8pt', '9pt', '10pt', '11pt', '12pt', '13pt', '14pt', '15pt'
    ],

    font_color: [
      { color: '#FF0000' }, // Red
      { color: '#FFA500' }, // Orange
      { color: '#FFFF00' }, // Yellow
      { color: '#008000' }, // Green
      { color: '#0000FF' }, // Blue
      { color: '#000080' }, // Navy
      { color: '#800080' }, // Purple
      { color: '#000000' }, // Black 
      { color: '#FFFFFF' }, // White
    ],

    font_background_color: [
      { color: '#FF0000' },
      { color: '#FFA500' },
      { color: '#FFFF00' },
      { color: '#008000' },
      { color: '#0000FF' },
      { color: '#000080' },
      { color: '#800080' },
      { color: '#000000' },
      { color: '#FFFFFF' },
    ],

    font_border_color: [
      { color: '#FF0000' },
      { color: '#FFA500' },
      { color: '#FFFF00' },
      { color: '#008000' },
      { color: '#0000FF' },
      { color: '#000080' },
      { color: '#800080' },
      { color: '#000000' },
      { color: '#FFFFFF' },
    ],
  }),

  methods: {
    /*
      change_font(font){
          alert(font)
      },
      change_fontsize(){
          alert("test~")
      }, */
  }
}
</script>

<style scoped>
div {
    max-width: 400px;
}

.chip_size {
  width: 180px;
}
</style>
