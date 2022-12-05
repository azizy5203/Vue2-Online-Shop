<script>
import ProductCard from "@/components/local/ProductCard.vue";
import axios from "axios";
export default {
  mounted() {
    this.getProducts();
  },
  data() {
    return {
      productsList: [], // stores all products on page load
      searchList:[],// stores search results
      viewList:[],// the middle man list to be viewed, gets pupulated with search results or all products
      search:'',
      searched:false,
    };
  },
  methods: {
    async getProducts() {
      return await axios
        .get(`https://61922b19aeab5c0017105dfb.mockapi.io/product/`)
        .then(
          ({ data }) => (this.productsList = this.viewList =  data),
          (err) => console.log(err)
        );
    },
    async searchProducts(){
        this.searched = true
        await axios(`https://61922b19aeab5c0017105dfb.mockapi.io/product?name=${this.search}`)
        .then(({data})=>this.searchList = this.viewList = data,err=>console.log(err))
    },
    searchReset(){
    this.viewList = this.productsList
    this.searchList.length=0
    this.search = ''
    this.searched=false
  },
  },
  computed:{
    searchResultsNumber(){
        return this.searchList.length
    }
  },
  components: {
    ProductCard,
  },
};
</script>

<template>
  <div class="container">
    <div class="row mb-4">
        <div class="col-md-8">
            <h1>Products</h1>
        </div>
        <div class="col-md-4">
            <span v-if="(searchResultsNumber>0&&searched)">found {{searchResultsNumber}} matches </span>
            <span v-if="(searched||this.searchList.length>0)" @click="searchReset" class="reset link-danger">reset</span>
            <form class="d-flex m-md-0 mt-2" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="press Enter to search"
                aria-label="Search"
                v-model.trim="search"
              />
              <button @click.prevent="searchProducts" class="btn btn-outline-danger">search</button>
            </form>
        </div>
    </div>
    <h1 v-if="searched&&searchList.length==0" class="text-center">Didn't find any match try again</h1>
    <main v-else class="cards-wrapper row pb-4">
      <div v-for="prod in viewList">
        <ProductCard
          :id="prod.id"
          :name="prod.name"
          :imgPath="prod.image"
          :description="prod.description"
          :price="prod.price"
          :type="prod.type"
        />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.reset{
        cursor:pointer;
        text-decoration: underline;
    }
.cards-wrapper {
  row-gap: 1.4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

@media (max-width: 390px) {
    
  .cards-wrapper {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
