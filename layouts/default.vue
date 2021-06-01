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
      <v-container>
        <v-row>
          <main-poker :memberListDetail="memberList" :key="uniqueId" />
          <result-for-current-us :memberListDetail="memberList" />
        </v-row>
      </v-container>
      <poker-list />
    </v-main>

    <member-list
      :memberListDetail="memberList"
      @updatedMemberList="childrenUpdatedMemberList"
    />
  </v-app>
</template>

<script>
import UsList from "../components/UsList";
import MemberList from "../components/MemberList";
import MainPoker from "../components/MainPoker";
import PokerList from "../components/PokerList";
import ResultForCurrentUs from "../components/ResultForCurrentUs";

export default {
  components: {
    UsList,
    MemberList,
    MainPoker,
    PokerList,
    ResultForCurrentUs,
  },
  data() {
    return {
      drawer: false,
      memberList: [
        {
          Id: "1",
          MemberName: "David",
          IsActive: true,
          Result: 0,
          IsTurn: true,
        },
        {
          Id: "2",
          MemberName: "John",
          IsActive: true,
          Result: 0,
          IsTurn: false,
        },
        {
          Id: "3",
          MemberName: "Tom",
          IsActive: true,
          Result: 0,
          IsTurn: false,
        },
        {
          Id: "4",
          MemberName: "Evan",
          IsActive: true,
          Result: 0,
          IsTurn: false,
        },
        {
          Id: "5",
          MemberName: "Robin",
          IsActive: true,
          Result: 0,
          IsTurn: false,
        },
        {
          Id: "6",
          MemberName: "Alex",
          IsActive: true,
          Result: 0,
          IsTurn: false,
        },
        {
          Id: "7",
          MemberName: "Cathy",
          IsActive: true,
          Result: 0,
          IsTurn: false,
        },
        {
          Id: "8",
          MemberName: "Adam",
          IsActive: true,
          Result: 0,
          IsTurn: false,
        },
        {
          Id: "9",
          MemberName: "Johnson",
          IsActive: true,
          Result: 0,
          IsTurn: false,
        },
        {
          Id: "10",
          MemberName: "Chris",
          IsActive: true,
          Result: 0,
          IsTurn: false,
        },
      ],
      uniqueId: 1,
    };
  },
  methods: {
    childrenUpdatedMemberList(val) {
      this.memberList = val;
      this.uniqueId++;
    },
    
  },
  created() {
  },
};
</script>
