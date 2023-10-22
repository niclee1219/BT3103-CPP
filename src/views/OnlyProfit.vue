<script>
import WelcomeCPP from "../components/WelcomeCPP.vue";
import ProfitDisplay from "../components/ProfitDisplay.vue";
import NavBar from "../components/NavBar.vue";
import LogOut from '../components/LogOut.vue';

export default {
  name: "App",
  components: {
    WelcomeCPP,
    ProfitDisplay,
    NavBar,
    LogOut
},
  data() {
    return {
      refreshComp: 0,
    };
  },
  methods: {
    change() {
      this.refreshComp++;
    },
  },
};
</script>

<template>
  <NavBar />
  <WelcomeCPP />
  <ProfitDisplay :key="refreshComp" />
  <LogOut />
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  background-color: white;
}

#bg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}
</style>
