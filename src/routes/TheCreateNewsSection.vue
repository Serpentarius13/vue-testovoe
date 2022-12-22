<template>
  <div>
    <base-input v-model="text" />
    {{ text }}
  </div>
</template>

<script setup>
import BaseInput from "./../components/Form/BaseInput.vue";
import { ref } from "vue";
// eslint-disable-next-line no-unused-vars
const text = ref("");
</script>

<style lang="scss" scoped></style>
