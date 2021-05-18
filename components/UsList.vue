<template>
  <v-navigation-drawer app clipped left>
    <v-list rounded>
      <v-list-item>
        <v-text-field
          label="US Name"
          filled
          rounded
          dense
          hide-details
          v-model="usName"
        ></v-text-field>
      </v-list-item>
      <v-list-item>
        <v-btn color="success" @click="addNewUS">Add US</v-btn>
      </v-list-item>
      <v-list-item v-for="usItem in usList" :key="usItem" link>
        <v-list-item-content>
          <v-list-item-title>{{ usItem }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "UsList",
  data() {
    return {
      usList: [],
      usName: "",
    };
  },
  computed: {},
  created() {},
  methods: {
    addNewUS() {
      if (this.usName) {
        this.usList.push(this.usName);
        this.usName = "";
      }
    },
  },
};
</script>