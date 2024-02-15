<template>
    <div>
      <label>
        <slot name="title">
          <p class="font-semibold text-sm text-gray-600">{{ title }}</p>
        </slot>
      </label>
      <input
        :class="inputClasses"
        :id="id"
        :value="value"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
  
  @Component
  export default class FormInput extends Vue {
    @Prop({ type: String, default: undefined }) readonly title?: string;
    @Prop({ type: String, default: undefined }) readonly id?: string;
    @Prop({ type: [String, Number], default: undefined }) readonly value?: string | number;
    @Prop({ type: String, default: undefined }) readonly name?: string;
    @Prop({ type: String, default: undefined }) readonly placeholder?: string;
    @Prop({ type: String, default: "text" }) readonly type!: string;
    @Prop({ type: Boolean, default: false }) readonly invalid!: boolean;
    @Prop({ type: Boolean, default: false }) readonly disabled!: boolean;
    @Prop({ type: Boolean, default: false }) readonly required!: boolean;
    @Prop({ type: String, default: "" }) readonly InputCss!: string;
  
    defaultInputClasses = "form-input md:w-60 w-48 h-10 border mt-1 rounded-md px-4 bg-gray-50 bg-white w-auto block";
  
    get inputClasses() {
      return `${this.defaultInputClasses} ${this.InputCss}`;
    }
  }
  </script>
  