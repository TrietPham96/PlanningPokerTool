<template>
  <v-container>
    <v-row>
      <v-col v-for="n in 30" :key="n" cols="auto">
        <v-card
          height="100"
          width="100"
          color="light-blue lighten-2"
          rounded="xl"
          @click="selectCard(n)"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            v-text="n"
          ></v-row>
        </v-card>
      </v-col>
    </v-row>
    <confirm-dialog v-model="dialog" :turnDetailFromChild="turnDetail" />
  </v-container>
</template>

<script>
import ConfirmDialog from "../components/ConfirmDialog";
export default {
  name: "PokerList",
  components: {
    ConfirmDialog,
  },
  data() {
    return {
      dialog: false,
      turnDetail: { MemberId: 0, MemberName: "", CardId: 0 },
    };
  },
  methods: {
    selectCard(idx) {
      this.dialog = true;
      this.turnDetail.CardId = idx;
    },
  },
  created() {
    this.$bus.$on("turnDetailCurrent", (turnDetailData) => {
      this.turnDetail = {...turnDetailData};
    });
  },
};
</script>