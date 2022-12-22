<template>
  <div :style="{ display: 'flex', alignItems: 'center' }">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="label"
      :type="type"
      :class="type + '-input'"
    />
    <label
      :style="{ marginLeft: '12px', fontSize: '14px' }"
      v-if="type === 'checkbox'"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin field {
  border: 1px solid gray;
  width: 100%;
  padding: 8px 16px;
}
.text-input {
  @include field;

  height: 24px;
}

.textarea-input {
  @include field;

  height: 240px;
}
</style>
