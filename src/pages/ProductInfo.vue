<script>
import axios from "axios";
export default {
  data() {
    return {
      details: {},
    };
  },
  mounted() {
    axios(
      `https://61922b19aeab5c0017105dfb.mockapi.io/product/${this.$route.params.id}`
    ).then(
      ({ data }) => (this.details = data),
      (err) => alert("err:", err)
    );
  },
};
</script>

<template>
  <div class="container-fluid px-5">
    <main class="row flex-column flex-md-row">
      <div class="col-12 col-md-6 py-3 px-3">
        <img
          :src="details.image"
          :alt="details.name"
          class="w-100 h-100 rounded rounded-2"
        />
      </div>
      <div class="col-12 col-md-6 pb-4">
        <h1 >{{ details.name }}</h1>
        <div class="h5 mb-5 d-flex flex-row gap-1">
          <span
            class="text-success border border-2 border-success rounded rounded-pill px-2"
            >{{ details.price }}$</span
          >
          <span
            class="text-danger border border-2 border-danger rounded rounded-pill px-2"
            >{{ details.type }}</span
          >
        </div>
        <h2 class="border-bottom border-3 border-danger w-fit d-inline-block pb-1 mb-4">Description</h2>
        <p class="fs-5 mb-md-4">{{details.description}}</p>
        <span class="fs-5 mb-2 fw-bold d-block">Seller: <span class="text-danger">Amazon.eg</span></span>
        <span class="fs-5 mb-4 fw-bold d-block">Purchased: <span class="text-danger">450<sub>times</sub></span></span>
        <div class="row">
            <div class="col-12 mt-md-5">
                <router-link to="/products" class="btn btn-outline-danger rounded rounded-2 mt-md-5">All products</router-link>
            </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
