<template>
  <div>
    <div v-if="this.$route.name !== 'login'" class="h-screen mr-0 mx-0 flex">
      <div class="box-border flex-initial bg-gray-50 h-screen w-1/5 p-2">
        <SideBar />
      </div>
      <div class="box-border h-screen w-4/5 p-4 bg-gray-200">
        <router-view />
      </div>
    </div>
    <div v-if="this.$route.name === 'login'" class="h-screen mr-0">
      <router-view />
    </div>
  </div>
</template>

<script>
import { feather } from "feather-icons";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

export default {
  components: {
    NavBar,
    SideBar,
  },
  data() {
    return {};
  },
  computed: {
    currentRouteName() {
      console.log("this.$route.name: ", this.$route.name);
      return this.$route.name;
    },
  },
  mounted() {
    feather.replace();
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
