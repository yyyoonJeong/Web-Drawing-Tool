<template>
  <div>
    <Header/>
    <div class = "wrap">
      <Menu_left/>
      <Content/>
      <Menu_right/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header-part";
import Menu_left from "./components/Menu-left";
import Content from "@/components/Content-part";
import Menu_right from "./components/Menu-right";

export default {
  name : "app",
  components: {
    Header,
    Menu_left,
    Content,
    Menu_right
  }
};
</script>

<style scoped>
h1 {
  color: #593273
}
.wrap {
  display : flex;
}
</style>

