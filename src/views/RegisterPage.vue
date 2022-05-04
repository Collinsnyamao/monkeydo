<template>
  <div class="mx-auto h-screen bg-gradient-to-t from-cyan-200 to-red-300">
    <div class="flex justify-center items-center h-screen">
      <RegisterPage />
    </div>
  </div>
</template>

<script>
import router from "@/router";
import RegisterForm from "../components/RegisterForm";
export default {
  name: "RegisterPage",
  components: {
    RegisterForm,
  },
  data() {
    return {};
  },
};
</script>
