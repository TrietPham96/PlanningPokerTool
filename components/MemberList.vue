<template>
  <v-navigation-drawer app clipped right>
    <v-list rounded>
      <v-list-item v-for="memberItem in memberList" :key="memberItem.id" link>
        <v-list-item-content>
          <v-list-item-title>{{ memberItem.memberName }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch
            inset
            color="success"
            v-model="memberItem.isActive"
          ></v-switch>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "MemberList",
  data() {
    return {
      memberList: [
        { id: "1", memberName: "David", isActive: true },
        { id: "2", memberName: "John", isActive: true },
        { id: "3", memberName: "Tom", isActive: true },
        { id: "4", memberName: "Evan", isActive: true },
        { id: "5", memberName: "Robin", isActive: true },
        { id: "6", memberName: "Alex", isActive: true },
        { id: "7", memberName: "Cathy", isActive: true },
        { id: "8", memberName: "Adam", isActive: true },
        { id: "9", memberName: "Johnson", isActive: true },
        { id: "10", memberName: "Chris", isActive: true },
      ],
    };
  },
  computed: {
    // ...mapGetters([
    //   'name',
    //   'avatar',
    //   'roles'
    // ])
  },
  created() {},
  methods: {},
};
</script>