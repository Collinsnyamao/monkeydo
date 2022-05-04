<template>
  <div class="container">
    <NavBar />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import store from "../store/index";

export default {
  name: "HomeView",
  components: {
    NavBar,
  },
  methods: {
    currentRouteName() {
      console.log("this.$route.name: ", this.$route.name);
      let currentRouteName = this.$route.path;
      console.log("currentRouteName: ", currentRouteName);
      if (currentRouteName === "/" || currentRouteName === "/register") {
        console.log("match path");
        this.$store.commit("disallowSideBar");
      } else {
        console.log("mismatch");
        this.$store.commit("allowSidebar");
      }
      console.log("sidebarAllowed: ", this.sidebarAllowed);
      return this.$route.name;
    },
  },
  mounted() {
    //feather.replace();
    this.currentRouteName();
  },
};
</script>
