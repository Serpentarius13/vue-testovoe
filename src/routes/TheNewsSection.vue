<template>
  <div>
    <h1>News section</h1>

    <ul v-if="data">
      <li v-for="post in data" :key="post.id">{{ post.id }}</li>
    </ul>
    <h2 v-else>Loading...</h2>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const data = ref(null);

onMounted(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();
  data.value = json;
});
</script>

<style lang="scss" scoped></style>
