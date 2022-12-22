<template>
  <base-sidebar-button v-bind="buttonProps" />
</template>

<script setup>
import BaseSidebarButton from "./Reusable/BaseSidebarButton.vue";

const buttonProps = { img: "/home.svg", text: "Все новости" };
</script>

<style lang="scss" scoped></style>
