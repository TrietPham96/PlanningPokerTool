<template>
  <v-navigation-drawer app clipped right>
    <v-list rounded>
      <v-list-item v-for="memberItem in memberList" :key="memberItem.Id" link>
        <v-list-item-content>
          <v-list-item-title>{{ memberItem.MemberName }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch
            inset
            color="success"
            input-value="memberItem.IsActive"
            @change="updateStatus(memberItem)"
          ></v-switch>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "MemberList",
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
  watch: {
    memberList(value) {
      this.$emit("updatedMemberList", value);
    },
  },
  computed: {
    // ...mapGetters([
    //   'name',
    //   'avatar',
    //   'roles'
    // ])
  },
  mounted() {
    this.memberList = [...this.memberListDetail];
  },
  methods: {
    updateStatus(item) {
      item.IsActive = !item.IsActive;
      let idx = this.memberList.findIndex((x) => x.Id == item.Id);
      this.$set(this.memberList, idx, item);
    },
  },
};
</script>