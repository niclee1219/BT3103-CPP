<template>
  <div style="text-align: center;" v-if="user">
    <NavBar/>  
    <h3>This is an About Page</h3>
    <h2>Welcome to CPP</h2>
    <h3>
      CPP Description: Welcome to Group 6's CPP project! may our prices be stonks and to the mooon we go <br><br>
      #tothemoon #stonks #cpp #group6 #group6cpp #cppgroup6 #cppgroup6project #cppgroup6projectstonks #cppgroup6projecttothemoon
    </h3>
    <LogOut /> <br><br>
  </div>
</template>

<script>
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import firebaseApp from '../firebase';
import NavBar from '../components/NavBar.vue';
import LogOut from '../components/LogOut.vue';

export default {
  name: 'about',
  components: {
    NavBar,
    LogOut,
  },
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
  },
};
</script>
