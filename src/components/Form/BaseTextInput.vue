<template>
  <div>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="label"
      :class="type + '-input'"
      v-if="type === 'text'"
    />
    <div v-else>
      <p :style="{ textAlign: 'end', paddingBottom: '2px' }">
        Total symbols: {{ modelValue.length }}
      </p>
      <textarea
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="label"
        :class="type + '-input'"
      />
    </div>
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
