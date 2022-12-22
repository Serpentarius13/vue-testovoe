<template>
  <div class="sidebar__menu-button">
    <img :src="image" :alt="text" class="sidebar__menu-button-image" />
    <p class="sidebar__menu-button-text">{{ text }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// eslint-disable-next-line vue/no-setup-props-destructure
const { image, text } = defineProps(["image", "text"]);
</script>

<style lang="scss" scoped>
.sidebar__menu-button {
  padding: 12px 16px;
  height: 48px;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 12px;

  border-top: 1px rgba(128, 128, 128, 0.363) solid;

  &:hover {
    .sidebar__menu-button-text,
    .sidebar__menu-button-image {
      filter: invert(37%) sepia(96%) saturate(887%) hue-rotate(205deg)
        brightness(95%) contrast(103%);
    }
  }

  &-image {
    width: 24px;
    height: 24px;
  }

  &-text {
    font-weight: bold;
    font-size: 18px;
  }
}
</style>
