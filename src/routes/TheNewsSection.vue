<template>
  <div class="news-section">
    <h1 class="heading" >News section</h1>

    <ul v-if="data" class="news-section__list">
      <the-list-component :data="data" />
    </ul>
    <h2 v-else>Loading...</h2>
  </div>
</template>

<script setup>
import TheListComponent from "./../components/List/TheListComponent.vue";
import { onMounted, ref } from "vue";

const data = ref(null);

onMounted(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();
  data.value = json;
  console.log(data);
});
</script>

<style lang="scss" scoped>

</style>
