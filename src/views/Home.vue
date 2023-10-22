<script>
import WelcomeCPP from "../components/WelcomeCPP.vue";
import AddCoin from "../components/AddCoin.vue";
import ProfitDisplay from "../components/ProfitDisplay.vue";
import NavBar from "../components/NavBar.vue";
import LogOut from '../components/LogOut.vue';

export default {
  name: "App",
  components: {
    WelcomeCPP,
    AddCoin,
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
  <AddCoin @added="change" />
  <ProfitDisplay :key="refreshComp" />
  <img
    id="bg"
    src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2969&q=80"
    alt="background image"
  />
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
