<template>
  <the-profile-button />
  <router-link to="/">
    <base-sidebar-button v-bind="NewsButtonProps" />
  </router-link>
  <router-link to="/create">
    <base-sidebar-button v-bind="CreateButtonProps" />
  </router-link>
</template>

<script setup>
import BaseSidebarButton from "./BaseSidebarButton.vue";
import TheProfileButton from "./TheProfileButton.vue";
const NewsButtonProps = {
  text: "Все новости",
  image: "/home.svg",
};

const CreateButtonProps = {
  text: "Создать запись",
  image: "/create.svg",
};
</script>

<style lang="scss" scoped></style>
