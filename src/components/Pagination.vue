<template>
     <div class="flex justify-between text-sm p-2">
            <span>Page <b>1</b> of <b>2</b></span>
            <span>Sort by <b>Sort Order</b></span>
            <span class="flex items-center gap-0.5"><b>10</b> <DownArrow /></span>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import DownArrow from "@/components/svg/DownArrow.vue";

@Component({
  components:{
    DownArrow
  }
})
export default class Pagination extends Vue {
    
}
</script>