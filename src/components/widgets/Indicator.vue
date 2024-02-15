<template>
    <span :style="{ backgroundColor: indicatorColor }" class="flex w-3 h-3 rounded-full">
      <slot></slot>
    </span>
  </template>
  
  <script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
  
  @Component
  export default class Indicator extends Vue {
    @Prop({ type: String, default: undefined }) readonly indicatorColor?: string;
  }
  </script>
  