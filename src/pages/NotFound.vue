<script>
export default {
    data() {
        return {
 
        }
    }
}

</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 m-auto">
                <img class="w-100" src="@/assets/404.svg" alt="error 404 not found">
                <h2 class="text-center text-danger mt-4"> Oops, page not found</h2>
                <router-link to="/" class="d-block text-center text-secondary mt-4">go home</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>