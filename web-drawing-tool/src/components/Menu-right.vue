<template>
  <v-container>
    <v-tabs
      v-model="tab"
      grow
    >
      <v-tab
        v-for="item in tabs"
        :key="item.id"
        @click="move_page(item.id)"
        v-show="item.enable === 'Y'"
      >{{ item.name }}</v-tab>
    </v-tabs>

    <component :is="currentView" :mainId = "data.mainId" :keyId="data.keyId" />
  </v-container>  
</template>

<script>
import Edit_text from './Edit-text.vue';
import Edit_design from './Edit-design.vue';

export default {
  name: 'Menu-right',

  components: {
    Edit_text,
    Edit_design,
  },

  data: () => ({
    currentView: 'Edit_design',
    tabs:[ 
      {id: 'Edit_design', name: '디자인', enable:'Y'},
      {id: 'Edit_text', name: '글꼴', enable:'Y'},
      {id: 'objectList', name: '객체 리스트', enable:'Y'},
    ],
    data:{
      mainId: '',
      keyId: '',
      seletedTab: 'Edit_design',
    },
    tab: 0,
  }),
  async created(){
    this.currentView = 'Edit_design';
  },
  mounted(){
    this.tab = 0;
  },
  methods: {
    move_page(id){
      this.currentView = id;
    },
  }
};
</script>

<style scoped>
div {
  flex: 1; 
  max-width: 600px;
  background-color: #EEEEEE;
}
</style>