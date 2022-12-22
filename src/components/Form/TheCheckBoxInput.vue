<template>
  <div class="checkbox-box">
    <input
      @change="$emit('update:modelValue', $event.target.checked)"
      :value="modelValue"
      type="checkbox"
      id="terms"
    />
    <label>  {{ label }} </label>
  </div>
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

<style lang="scss" scoped>
.checkbox-box {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
