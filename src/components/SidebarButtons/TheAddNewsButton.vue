<template>
  <base-sidebar-button v-bind="buttonProps" />
</template>

<script setup>
import BaseSidebarButton from "../Reusable/BaseSidebarButton.vue";

const buttonProps = { img: "/create.svg", text: "Добавить запись" };
</script>

<style lang="scss" scoped></style>
