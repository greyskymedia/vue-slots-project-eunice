<template>
  <div class="font-Inter bg-gray-100 md:h-screen h-full md:p-4 p-4">
    <h1 class="text-2xl font-semibold mb-3">Products</h1>
    <div class="px-4 md:px-10 md:py-5 bg-white rounded">
      <ProductCard :productsData="products" />
    </div>
    <Pagination />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductsData from "@/services/ProductsData.json";
import ProductCard from "@/components/ProductCard.vue";
import DownArrow from "@/components/svg/DownArrow.vue";
import Pagination from "@/components/Pagination.vue";

@Component({
  components: {
    ProductCard,
    DownArrow,
    Pagination
  }
})
export default class App extends Vue {
  products = ProductsData;
}
</script>