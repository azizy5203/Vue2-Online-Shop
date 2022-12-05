<script>
import Navbar from "@/components/global/Navbar.vue";
import { RouterView } from "vue-router";
import 'animate.css';

export default {
  data() {
    return {
      name: "Youssef",
    };
  },
  components: {
    Navbar,
  },
};
</script>

<template>
  <div id="app" class="d-flex flex-column gap-4">
    <Navbar class="animate__animated animate__fadeIn" />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
* {
  font-family: "Ubuntu", sans-serif;
  scroll-behavior: smooth;
}
body{
  &::-webkit-scrollbar {
    width: .8rem;
    height: 1rem;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background-color: #2e2d2d;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: #FF4057;
  }
}
</style>
