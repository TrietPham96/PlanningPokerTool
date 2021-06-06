<template>
  <v-dialog
    :value="value"
    @input="$emit('input')"
    persistent
    max-width="290"
    v-if="Object.keys(turnDetailData).length !== 0"
  >
    <v-card>
      <v-card-title class="headline">
        {{ turnDetailData.MemberName }} choose
        <v-chip class="ma-2" color="success" text-color="white">
          {{ turnDetailData.CardId }}
        </v-chip>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click.native="$emit('input')">Close</v-btn>
        <v-btn color="success" @click="confirmCard(turnDetailData.CardId)"
          >Confirm</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ConfirmDialog",
  data() {
    return {
      turnDetailData: Object,
    };
  },
  props: {
    value: {
      type: Boolean,
    },
    turnDetailFromChild: {
      type: Object,
    },
  },
  methods: {
    confirmCard(id) {
      this.turnDetailData.CardId = id;
      this.$bus.$emit("selectedCard", this.turnDetailData);
    },
  },
  created() {
    this.turnDetailData = { ...this.turnDetailFromChild };
  },
  mounted() {},
};
</script>