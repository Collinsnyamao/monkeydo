<template>
  <div class="mx-auto h-screen bg-gradient-to-t from-cyan-200 to-red-300">
    <div class="flex justify-center items-center h-screen">
      <LoginForm @login-verified="logIn" />
    </div>
  </div>
</template>

<script>
import router from "@/router";
import LoginForm from "../components/LoginForm";
import { logInExistingUser } from "../firebase";
export default {
  name: "LoginPage",
  components: {
    LoginForm,
  },
  methods: {
    logIn(e) {
      console.log("e: ", e);
      logInExistingUser(e.email, e.password);
      console.log(logInExistingUser(e.email, e.password));
    },
    referLoggedInUser() {
      console.log("referring: ");
      setTimeout(() => {
        router.go("home");
      }, 100);
    },
  },
  mounted() {
    console.log("mounted");
    //this.$store.state.loggedInUser
    console.log("this.$store: ", this.$store.state.userLoggedIn.user);
    this.$store.state.userLoggedIn.loggedIn
      ? router.replace({ path: "/home" })
      : router.replace({ path: "/" });
  },
};
</script>