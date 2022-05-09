<template>
  <div>
    <div v-if="$store.state.sidebarAllowed" class="h-screen mr-0 mx-0 flex">
      <div class="box-border flex-initial bg-gray-50 h-screen w-1/6 p-2">
        <SideBar />
      </div>
      <div class="box-border h-screen w-5/6 p-4 bg-gray-200">
        <router-view />
      </div>
    </div>
    <div v-if="!$store.state.sidebarAllowed" class="h-screen mr-0">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import store from "./store/index";

export default {
  components: {
    NavBar,
    SideBar,
  },
  data() {
    return {
      sidebarAllowed: true,
    };
  },
  computed: {
    /* currentRouteName() {
      console.log("this.$route.name: ", this.$route.name);
      let currentRouteName = this.$route.name;
      this.sidebarAllowed =
        currentRouteName === "login" || currentRouteName === "register"
          ? false
          : true;
      return this.$route.name;
    }, */
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
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
