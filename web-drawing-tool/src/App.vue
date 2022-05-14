<template>
  <v-app>
    <Header/>
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
import Header from './components/Header-part.vue';
import Menu_left from './components/Menu-left.vue';
import Menu_right from './components/Menu-right.vue';
import Content from './components/Content-part.vue';

export default {
  name: 'Web-Drawing-Tool',

  components: {
    Header,
    Menu_left,
    Menu_right,
    Content,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.wrap{
  margin-right: 3%;
  display: flex;
}
</style>