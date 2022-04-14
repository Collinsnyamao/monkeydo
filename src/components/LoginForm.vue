<template>
  <div class="form shadow-2xl p-12 rounded bg-gray-200">
    <form class="w-full max-w-sm pr-8">
      <div class="md:flex sm:flex sm:items-center md:items-center mb-6 mt-4">
        <div class="md:w-1/3">
          <label
            class="
              block
              text-gray-500
              font-bold
              md:text-right
              mb-1
              md:mb-0
              pr-4
            "
            for="inline-full-name"
          >
            Full Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="
              bg-gray-200
              appearance-none
              border-2 border-gray-200
              rounded
              w-full
              py-2
              px-4
              text-gray-700
              leading-tight
              focus:outline-none focus:bg-white focus:border-purple-500
              placeholder:italic placeholder:text-slate-400
            "
            v-bind:class="hasEmailError ? 'border-red-500' : ''"
            id="inline-email"
            type="email"
            v-model="userEmail"
            placeholder="Enter you email"
            required
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="
              block
              text-gray-500
              font-bold
              md:text-right
              mb-1
              md:mb-0
              pr-4
            "
            for="inline-password"
          >
            Password
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="
              bg-gray-200
              appearance-none
              border-2 border-gray-200
              rounded
              w-full
              py-2
              px-4
              text-gray-700
              leading-tight
              focus:outline-none focus:bg-white focus:border-purple-500
              placeholder:italic placeholder:text-slate-400
            "
            v-bind:class="hasPasswordError ? 'border-red-500' : ''"
            id="inline-password"
            type="password"
            placeholder="Enter your password"
            v-model="userPassword"
            required
          />
        </div>
      </div>

      <div class="md:flex md:items-center">
        <span class="text-red-500 italic mb-2" v-if="hasEmailError"
          >{{ emailErrorMessage }}
        </span>
        <span class="text-red-500 italic mb-2" v-if="hasPasswordError">
          {{ passwordErrorMessage }}
        </span>
        <span class="text-red-500 italic mb-2" v-if="hasError">
          {{ errorMessage }}
        </span>
      </div>
      <!-- <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3"></div>
        <label class="md:w-2/3 block text-gray-500 font-bold">
          <input class="mr-2 leading-tight" type="checkbox" />
          <span class="text-sm"> Send me your newsletter! </span>
        </label>
      </div> -->
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            class="
              shadow
              bg-purple-500
              hover:bg-purple-400
              focus:shadow-outline focus:outline-none
              text-white
              font-bold
              py-2
              px-4
              rounded
            "
            @click="submitData"
            type="button"
          >
            Log In
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      userEmail: "",
      userPassword: "",
      hasError: false,
      errorMessage: "",
      hasEmailError: false,
      hasPasswordError: false,
      emailErrorMessage: "",
      passwordErrorMessage: "",
    };
  },
  methods: {
    submitData() {
      if (this.userEmail && this.userPassword) {
        this.hasError = false;
        if (
          this.validateEmail(this.userEmail) &&
          this.validatePassword(this.userPassword)
        ) {
          console.log("parameters passed");
          this.hasEmailError = false;
          this.hasPasswordError = false;

          this.$emit("login-verified", {
            email: this.userEmail,
            password: this.userPassword,
          });
        } else {
          if (!this.validateEmail(this.userEmail)) {
            console.log("email issue");
            this.hasEmailError = true;
            this.emailErrorMessage = "The email has an issue";
          }
          if (!this.validatePassword(this.userPassword)) {
            console.log("password issue");
            this.hasPasswordError = true;
            this.passwordErrorMessage =
              "The password does not meet the requirements";
          }
        }
      } else {
        console.log("make sure all fields are filled");
        this.hasError = true;
        this.errorMessage = "Make sure all fields are filled";
      }
    },
    validateEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validatePassword(password) {
      if (password.length > 7) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>