<template>
  <label class="container">
    {{ label }}
    <input
      @change="$emit('update:modelValue', $event.target.checked)"
      :value="modelValue"
      :checked="modelValue"
      type="checkbox"
      id="terms"
    />
    <span class="mark" />
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
