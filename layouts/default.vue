<template>
  <v-app id="inspire">
    <v-app-bar app flat clipped-left clipped-right height="72">
      <v-spacer></v-spacer>
      <v-responsive max-width="156">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-app-bar>
    
    <us-list />

    <v-main class="grey lighten-3">
      <main-poker />
    </v-main>

    <member-list />

    <v-footer app color="transparent" height="72" inset>
      <v-text-field
        background-color="grey lighten-1"
        dense
        flat
        hide-details
        rounded
        solo
      ></v-text-field>
    </v-footer>
  </v-app>
</template>

<script>
import UsList from "../components/UsList";
import MemberList from "../components/MemberList";
import MainPoker from "../components/MainPoker";

export default {
  components: {
    UsList,
    MemberList,
    MainPoker,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
