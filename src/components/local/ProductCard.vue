<script>
export default {
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
      default: "Product name",
    },
    imgPath: {
      type: String,
      default: "http://placeimg.com/640/480/cats",
    },
    description: {
      type: String,
      default: `This is a product description to behave a placeholder 
        This is a product description to behave a placeholder 
        This is a product description to behave a placeholder 
        This is a product description to behave a placeholder`,
    },
    price: {
      type: String,
      default: "280.00",
    },
    type: {
      type: String,
      default: "Movies",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div class="wrapper d-flex flex-column gap-3 w-fit py-4 rounded rounded-3">
    <div class="visuals">
      <span class="effect-wrapper">
        <router-link :to="'/products/' + this.id">
          <img :src="this.imgPath" class="w-100" :alt="this.name" />
        </router-link>
      </span>
    </div>
    <main class="product-info container-fluid">
      <div class="row">
        <div class="col-12">
          <span class="fw-bold text-danger">{{ this.type }}</span>
          <h5 class="text-light">{{ this.name }}</h5>
        </div>
      </div>
      <div class="row">
        <div class="row">
          <p class="text-light description">{{ this.description }}</p>
        </div>
        <div class="row px-md-2 m-auto ">
          <div class=" m-auto flex-col-reverse d-md-flex justify-content-between">
            <span class="text-light ms-3 mx-md-0 my-auto fw-bold">Price: {{this.price}}</span>
            <router-link :to="'/products/' + this.id" class="btn ms-4 mt-4 m-md-0 btn-danger rounded rounded-pill">more</router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>

.wrapper {
  background-color: #2e2d2d;
  overflow: hidden;
    min-height: 100%;
  .visuals {
    overflow: hidden;
    .effect-wrapper {
      display: grid;
      transition: 0.2s;
      &:hover {
        scale: 1.5;
        rotate: 20deg;
      }
    }
  }
  .product-info {
    overflow: hidden;
    text-overflow: ellipsis;
    .description {
    font-size: .9rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
