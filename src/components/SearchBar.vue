<template>
  <div class="md:flex gap-8 py-4">
    <div class="flex gap-1">
      <FormInput placeholder="Find a Product" @input="onSearchInput" :inputCss="'w-64'" />
      <Button buttonText="Search" buttonCss="mt-1 bg-customBlue" @click="search" />
    </div>
    <div class="flex gap-1">
      <FormInput placeholder="Product Name" />
      <Button buttonText="Add Product" buttonCss="mt-1 bg-customGreen" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
import FormInput from "@/components/widgets/FormInput.vue";
import Button from "@/components/widgets/Button.vue";

@Component({
  components: {
    Button,
    FormInput
  }
})
export default class SearchBar extends Vue {
  searchText: string = "";

  onSearchInput(searchText: string) {
    this.searchText = searchText;
  }

  @Emit("search")
  search() {
    return this.searchText;
  }
}
</script>
