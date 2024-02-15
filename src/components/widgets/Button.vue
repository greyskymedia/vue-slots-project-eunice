<template>
    <button :class="buttonClasses"
            :id="id"
            :name="name"
            :type="type"
            :disabled="disabled"
            @click="$emit('click')">
      <slot>{{ buttonText }}</slot>
    </button>
  </template>
  
  <script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
  
  @Component
  export default class Button extends Vue {
    @Prop({ type: String, default: undefined }) readonly buttonText?: string;
    @Prop({ type: String, default: undefined }) readonly id?: string;
    @Prop({ type: String, default: undefined }) readonly name?: string;
    @Prop({ type: String, default: "text" }) readonly type!: string;
    @Prop({ type: Boolean, default: false }) readonly disabled!: boolean;
  @Prop({ type: String, default: "" }) readonly buttonCss!: string;
  
    defaultButtonClasses = "text-white bg-indigo-500 md:font-medium font-xs rounded text-sm px-5 h-10 text-center";
  
    get buttonClasses() {
        return `${this.defaultButtonClasses} ${this.buttonCss}`;
    }
  }
  </script>
  