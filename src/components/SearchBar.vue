<template>
    <div class="md:flex gap-2 py-4">
      <div v-for="(buttonData, index) in buttonDataArray" :key="index" >
        <div class="flex gap-1">
        <FormInput :placeholder="buttonData.placeholder"/>
        <Button :buttonText="buttonData.buttonText" :buttonCss="buttonData.buttonCss" />
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import {Vue, Component} from "vue-property-decorator";
  import FormInput from "@/components/widgets/FormInput.vue";
  import Button from "@/components/widgets/Button.vue";
  
  @Component({
    components:{
      Button, 
      FormInput
    }
  })
  export default class SearchBar extends Vue {
    buttonDataArray = [
      { placeholder: "Find a Product",  buttonText: "Search", buttonCss: "mt-1 bg-blue" },
      { placeholder: "Product Name",  buttonText: "Add Product", inputCss:"w-48 h-10", buttonCss: "mt-1 bg-green" }
    ];
  }
  </script>
  