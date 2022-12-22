<template>
  <li
    v-for="post in data"
    :key="post.id"
    :style="{
      display: 'flex',
      flexDirection: 'column',
      borderBottom: '1px gray solid',
    }"
  >
    <the-list-item :item="post" />

  </li>
</template>

<script setup>
import TheListItem from "./TheListItem";
import { defineProps } from "vue";
// eslint-disable-next-line vue/no-setup-props-destructure
const { data } = defineProps(["data"]);
</script>

<style lang="scss" scoped>

</style>
