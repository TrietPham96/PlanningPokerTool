<template>
  <v-col cols="12" sm="8">
    <v-sheet height="40vh" rounded="lg" class="main-content">
      <div class="selector">
        <ul>
          <li v-for="memberItem in memberListDisplay" :key="memberItem.Id">
            <input
              id="memberItem.Id"
              type="checkbox"
              :checked="memberItem.IsTurn"
            />
            <label for="memberItem.Id">{{ memberItem.MemberName }}</label>
          </li>
        </ul>
        <button @click="openxxx">Click here</button>
      </div>
    </v-sheet>
  </v-col>
</template>

<script>
const angleStart = -360;

export default {
  name: "MainPoker",
  props: {
    memberListDetail: {
      type: Array,
    },
  },
  data() {
    return {
      isOpen: false,
      memberList: [],
      turnDetail: { MemberId: 0, MemberName: "", CardId: 0 },
    };
  },
  computed: {
    memberListDisplay() {
      return this.memberList.filter((x) => x.IsActive);
    },
  },
  created() {},
  methods: {
    rotate(li, d) {
      $({ d: angleStart }).animate(
        { d: d },
        {
          step: function (now) {
            $(li)
              .css({ transform: "rotate(" + now + "deg)" })
              .find("label")
              .css({ transform: "rotate(" + -now + "deg)" });
          },
          duration: 0,
        }
      );
    },
    toggleOptions(s) {
      $(s).toggleClass("open");
      let li = $(s).find("li");
      let deg = $(s).hasClass("half") ? 180 / (li.length - 1) : 360 / li.length;
      for (let i = 0; i < li.length; i++) {
        let d = $(s).hasClass("half") ? i * deg - 90 : i * deg;
        $(s).hasClass("open")
          ? this.rotate(li[i], d)
          : this.rotate(li[i], angleStart);
      }
    },
    openxxx() {
      this.toggleOptions($(".selector"));
    },
    shuffleList(array) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      return array;
    },
  },
  watch: {
    memberList() {
      this.toggleOptions($(".selector"));
    },
  },
  created() {
    let tempList = [...this.memberListDetail];
    this.memberList = this.shuffleList(tempList);
    this.memberList[0].IsTurn = true;
    this.$bus.$on("selectedCard", (data) => {
      let idx = this.memberList.findIndex((x) => x.IsTurn);
      this.memberList[idx].Result = data.CardId;
    });
  },
  mounted() {
    this.toggleOptions($(".selector"));
    setTimeout(this.toggleOptions(".selector"), 100);
    if (this.memberList) {
      let idx = this.memberList.findIndex((x) => x.IsTurn);
      this.turnDetail = {
        MemberId: this.memberList[idx].MemberId,
        MemberName: this.memberList[idx].MemberName,
        CardId: 0,
      };
      this.$bus.$emit("turnDetailCurrent", this.turnDetail);
    }
  },
};
</script>
<style>
.main-content {
  background: linear-gradient(#eee, #ccc);
}

.selector {
  position: absolute;
  left: 30%;
  top: 20%;
  width: 140px;
  height: 140px;
  margin-top: -70px;
  margin-left: -70px;
}

.selector,
.selector button {
  font-family: "Oswald", sans-serif;
  font-weight: 300;
}

.selector button {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #428bca;
  border-radius: 50%;
  border: 0;
  color: white;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.1s;
}

.selector button:hover {
  background: #3071a9;
}

.selector button:focus {
  outline: none;
}

.selector ul {
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;
  top: -20px;
  right: -20px;
  bottom: -20px;
  left: -20px;
}

.selector li {
  position: absolute;
  width: 0;
  height: 100%;
  margin: 0 50%;
  -webkit-transform: rotate(-360deg);
  transition: all 0.8s ease-in-out;
}

.selector li input {
  display: none;
}

.selector li input + label {
  position: absolute;
  left: 50%;
  bottom: 100%;
  width: 0;
  height: 0;
  line-height: 1px;
  margin-left: 0;
  background: #fff;
  border-radius: 50%;
  text-align: center;
  font-size: 1px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: none;
  transition: all 0.8s ease-in-out, color 0.1s, background 0.1s;
}

.selector li input + label:hover {
  background: #f0f0f0;
}

.selector li input:checked + label {
  background: #5cb85c;
  color: white;
}

.selector li input:checked + label:hover {
  background: #449d44;
}

.selector.open li input + label {
  width: 80px;
  height: 80px;
  line-height: 80px;
  margin-left: -40px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  font-size: 14px;
}
</style>