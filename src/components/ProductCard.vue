<template>
    <div>
    <SearchBar />
      <div  class="grid md:grid-cols-2 gap-x-20 md:gap-y-8 gap-y-1">
        <div v-for="(product, index) in productsData" :key="index" type="button" class="flex items-center justify-between w-full md:py-5 py-3 font-medium rtl:text-right text-gray-800 border-b border-gray-200 gap-3">
          <div class="flex items-center gap-2">
            <span v-if="product.image"><img :src="product.image" alt="" class="h-7 w-7 rounded" /></span>
            <span v-else class="h-7 w-7 rounded bg-gray-200"></span>
            <Indicator :indicatorColor="getIndicatorColor(product.status)" />
            <span>{{ product.name }}</span>
          </div>
          <div class="flex gap-3 items-center">
            <span v-if="product.date">{{ formatDate(product.date) }}</span>
            <DownArrow />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
  import DownArrow from "@/components/svg/DownArrow.vue";
  import Indicator from "@/components/widgets/Indicator.vue";
import SearchBar from "@/components/SearchBar.vue";
  
  @Component({
    components: {
      DownArrow,
      Indicator,
      SearchBar
    }
  })
  export default class ProductCard extends Vue {
    @Prop(Array) readonly productsData!: any[];
  
  
    formatDate(date: any) {
      if (date) {
        return new Date(date).toLocaleDateString();
      } else {
        return 'N/A';
      }
    }
  
    getIndicatorColor(status: string) {
      switch (status) {
        case 'red':
          return 'red';
        case 'green':
          return 'green';
        case 'yellow':
          return 'yellow';
        default:
          return ''; 
      }
    }
  }
  </script>
  