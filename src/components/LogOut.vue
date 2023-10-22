<template>
  <button id="btn" @click="signout" v-if="user">Logout</button>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: "LogOut",
  data() {
    return {
      user: false,
    };
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user; 
      }
    });
  },
  methods: {
    async signout() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        try {
          await signOut(auth);
          this.user = null; // Update the user status
          alert("You have successfully signed out.");
          this.$router.push("/"); // Redirect to the home page
        } catch (error) {
          console.error("Error signing out: ", error);
        }
      }
    },
  },
};
</script>

<style scoped>
#btn {
  text-align: center;
  margin: auto;
}
#btn:hover {
  color: rgb(243, 236, 236);
  background-color: rgb(255, 94, 0);
  box-shadow: 5px 5px rebeccapurple;
}
</style>
