<script>
import { RouterView } from 'vue-router';
import Navbar from '@/components/global/Navbar.vue'
export default {
    data() {
        return {
            name: "Youssef",
        };
    },
    components:{
        Navbar
    }
};
</script>

<template>
  <div id="app" class="d-flex flex-column gap-4">
    <Navbar/>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
*{
  font-family: 'Ubuntu', sans-serif;

}
#app {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
