<template>
  <v-dialog
    :value="value"
    @input="$emit('input')"
    persistent
    max-width="290"
    v-if="Object.keys(turnDetailFromChild).length !== 0"
  >
    <v-card>
      <v-card-title class="headline">
        {{ turnDetailFromChild.CurrentUser }} choose
        <v-chip class="ma-2" color="success" text-color="white">
          {{ turnDetailFromChild.CardInfo }}
        </v-chip>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click.native="$emit('input')">Close</v-btn>
        <v-btn
          color="success"
          @click="confirmCard(turnDetailFromChild.CardInfo)"
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
    return {};
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
      this.$bus.emit('increaseCounter', this.counter)
    },
  },
  mounted() {},
};
</script>