<template>
  <v-app>
    <Header/>
  </v-app>
</template>

<script>
import Header from './components/Header-part.vue';

export default {
  name: 'Web-Drawing-Tool',

  components: {
    Header,
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