<template>
  <v-container>
      <v-text-field
        v-model = "search"
        outlined
        label = "검색"
        background-color = "#FFFFFF"
        type = "text"
        append-icon = "mdi-magnify"
      ></v-text-field>
      <v-list>
        <v-list-group
          v-for = "item in items"
          :key = "item.title"
          v-model = "item.active"
          :prepend-icon = "item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text = "item.title"></v-list-item-title>
              <v-img :src = "item.image"></v-img>
            </v-list-item-content>
          </template>

         <v-list-item
            v-for = "child in item.items"
            :key = "child.title"
          >
            <v-list-item-content>
              <v-list-item-title v-text = "child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-group>
      </v-list>
  </v-container>
</template>

<script>
export default {

  data: () => ({
    items: [
      {
        action: "mdi-play",
        items: [{ title: "sample" }],
        title: "Wire",
      },
      {
        action: "mdi-play",
        items: [{ title: "sample" }],
        title: "Power Supply",
      },
      {
        action: "mdi-play",
        title: "Transistors",
      },
      {
        action: "mdi-play",
        title: "Meters",
      },
      {
        action: "mdi-play",
        title: "Diodes",
      },
      {
        action: "mdi-play",
        title: "Capacitors",
      },
      {
        action: "mdi-play",
        title: "Resistors",
      },
      {
        action: "mdi-play",
        title: "Switches",
      },
      {
        action: "mdi-play",
        title: "Output Device",
      },
      {
        action: "mdi-play",
        title: "Input Device",
      },
      {
        action: "mdi-play",
        title: "Miscellaneous",
      },
      {
        action: "mdi-play",
        title: "Logic Gates",
      },
    ],
  }),
  

};
</script>

<style scoped>
div {
  flex: 1;
  background-color: #EEEEEE;
}

</style>>