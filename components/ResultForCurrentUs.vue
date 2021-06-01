<template>
  <v-col cols="12" sm="4">
    <v-sheet rounded="lg" height="40vh">
      <v-list height="100%" color="transparent" class="overflow-y-auto">
        <v-list-item
          v-for="memberItem in memberListDisplay"
          :key="memberItem.Id"
        >
          <v-list-item-content>
            <v-list-item-title>{{ memberItem.MemberName }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-spacer></v-spacer>
            <v-responsive max-width="100">
              <v-text-field
                filled
                rounded
                dense
                hide-details
                v-model="memberItem.Result"
              ></v-text-field>
            </v-responsive>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  name: "ResultForCurrentUs",
  props: {
    memberListDetail: {
      type: Array,
    },
  },
  data() {
    return {
      memberList: [],
    };
  },
  computed: {
    memberListDisplay() {
      return this.memberList.filter((x) => x.IsActive);
    },
  },
  methods: {},
  created() {
    this.memberList = [...this.memberListDetail];
  },
  mounted() {},
};
</script>