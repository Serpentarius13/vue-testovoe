<template>
  <div class="form">
    <base-input v-model="formState.name" label="Name" type="text" />
    <base-input v-model="formState.email" label="Email" type="text" />
    <base-input v-model="formState.message" label="Name" type="textarea" />
    <base-input v-model="formState.agree" label="Name" type="checkbox" />
    {{ JSON.stringify(formState) }}
  </div>
</template>

<script setup>
import BaseInput from "./../components/Form/BaseInput.vue";
import { reactive } from "vue";
// eslint-disable-next-line no-unused-vars
const formState = reactive({
  name: "",
  email: "",
  message: "",
  agree: false,
});
</script>

<style lang="scss" scoped>
.form {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
