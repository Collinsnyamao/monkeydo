<template>
  <div class="w-100 h-screen" aria-label="Sidebar">
    <div class="flex middle p-2 mb-2">
      <img src="monkey.png" class="h-6 mr-3 sm:h-7" alt="Logo" />
      <span
        class="
          self-center
          text-xl
          font-semibold
          whitespace-nowrap
          dark:text-white
        "
        >MonkeyDo</span
      >
    </div>
    <div class="py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul class="space-y-8">
        <li
          v-for="(page, key, index) in pages"
          :key="key"
          @click="switchActive(key, index)"
        >
          <router-link
            :to="page.route"
            :class="[page.active ? 'active' : '']"
            class="
              flex
              items-center
              p-2
              text-base
              font-normal
              !active:text-gray-900
              rounded-lg
              dark:text-white
              hover:bg-gray-100
              dark:hover:bg-gray-700
              active:bg-gray-700
            "
          >
            <vue-feather
              class="
                flex-shrink-0
                w-6
                h-6
                text-gray-500
                transition
                duration-75
                dark:text-gray-400
                group-hover:text-gray-900
                dark:group-hover:text-white
              "
              :type="page.icon"
            ></vue-feather>
            <span class="ml-3">{{ page.name }}</span>
          </router-link>
        </li>
        <!-- <li>
          <a
            href="#"
            class="
              flex
              items-center
              p-2
              text-base
              font-normal
              text-gray-900
              rounded-lg
              dark:text-white
              hover:bg-gray-100
              dark:hover:bg-gray-700
            "
          >
            <vue-feather
              class="
                flex-shrink-0
                w-6
                h-6
                text-gray-500
                transition
                duration-75
                dark:text-gray-400
                group-hover:text-gray-900
                dark:group-hover:text-white
              "
              type="credit-card"
            ></vue-feather>
            <span class="flex-1 ml-3 whitespace-nowrap">Bank statements</span>
            <span
              class="
                inline-flex
                justify-center
                items-center
                px-2
                ml-3
                text-sm
                font-medium
                text-gray-800
                bg-gray-200
                rounded-full
                dark:bg-gray-700 dark:text-gray-300
              "
              >Pro</span
            >
          </a>
        </li>
        <li>
          <a
            href="#"
            class="
              flex
              items-center
              p-2
              text-base
              font-normal
              text-gray-900
              rounded-lg
              dark:text-white
              hover:bg-gray-100
              dark:hover:bg-gray-700
            "
          >
            <vue-feather
              class="
                flex-shrink-0
                w-6
                h-6
                text-gray-500
                transition
                duration-75
                dark:text-gray-400
                group-hover:text-gray-900
                dark:group-hover:text-white
              "
              type="tablet"
            ></vue-feather>
            <span class="flex-1 ml-3 whitespace-nowrap">M-Pesa</span>
            >
          </a>
        </li> -->
      </ul>

      <div class="bottom-0 absolute w-32" @click="logOut">
        <button
          class="
            flex
            items-center
            p-2
            text-base
            font-normal
            text-gray-900
            rounded-lg
            dark:text-white
            hover:bg-gray-100
            dark:hover:bg-gray-700
          "
        >
          <svg
            class="
              flex-shrink-0
              w-6
              h-6
              text-gray-500
              transition
              duration-75
              dark:text-gray-400
              group-hover:text-gray-900
              dark:group-hover:text-white
            "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="flex-1 ml-3 whitespace-nowrap">{{
            $store.state.userLoggedIn.loggedIn ? "Log Out" : "Log out"
          }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { feather } from "feather-icons";
import router from "../router";
import { signOut } from "firebase/auth";
import { auth } from "../main";

export default {
  name: "SideBar",
  components: {},
  mounted() {
    //feather.replace();
  },
  data() {
    return {
      pages: [
        {
          name: "Dashboard",
          route: "/home",
          icon: "home",
          id: 1,
          active: true,
        },
        {
          name: "Bank Statements",
          route: "/bankstatements",
          icon: "credit-card",
          id: 2,
          active: false,
        },
        {
          name: "M-PESA",
          route: "/mpesa",
          icon: "tablet",
          id: 3,
          active: false,
        },
        {
          name: "Inventory",
          route: "/inventory",
          icon: "save",
          id: 4,
          active: false,
        },
        {
          name: "Upload",
          route: "/upload",
          icon: "upload-cloud",
          id: 5,
          active: false,
        },
      ],
    };
  },
  methods: {
    logOut() {
      //router.push("/");
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          router.replace({ path: "/" });
        })
        .catch((error) => {
          // An error happened.
        });
    },
    switchActive(key, index) {
      console.log("key, index: ", key, index);
      this.pages.forEach((page, index) => {
        if (this.pages.indexOf(page) !== key) {
          page.active = false;
        } else {
          page.active = true;
        }
      });
    },
  },
};
</script>

<style scoped>
.middle {
  justify-content: center;
}
</style>