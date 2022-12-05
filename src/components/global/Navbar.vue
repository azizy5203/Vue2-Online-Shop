<script>
import { useUserStore } from "@/store/UserStore";
import { mapActions,mapStores, mapWritableState } from "pinia";
import 'animate.css';

export default {
    data() {
        return {
            
        }
    },
    methods:{
        ...mapActions(useUserStore, ["logout"]),
        handleLogout(){
            this.logout()
            if (this.storeToken===null){
                this.$router.push('/')
            }
        }
    },
    computed: {
    ...mapStores(useUserStore),
    ...mapWritableState(useUserStore, {
      storeName: "Name",
      storeToken: "Token",
      storeId: "Id",
      storeEmail: "Email",
    }),
    username(){
        return this.storeName
    }
  },
}

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-dark px-4 d-flex flex-row justify-content-between">
        <router-link class="navbar-brand" to="/"><img src="@/assets/logo.svg" alt="BuyStore" width="150"></router-link>
        <span v-if="username" class="d-flex flex-row justify-content-between gap-5">
            <span class="text-secondary d-none d-md-block h6 m-auto animate__animated animate__fadeInDown">logged in as <span class="text-danger">{{storeEmail}}</span></span>
            <button @click="handleLogout" class="btn btn-danger rounded rounded-pill animate__animated animate__fadeInRight animate__flash">logout</button>
        </span>
    </nav>
</template>

<style lang="scss" scoped></style>