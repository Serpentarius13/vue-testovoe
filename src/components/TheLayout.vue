<template>
  <div class="layout">
    <div class="layout__sidebar"><the-sidebar-buttons /></div>

    <div class="layout__news-section">

        <router-view/>
    </div>
  </div>
</template>

<script setup>
import TheSidebarButtons from "./SidebarButtons/TheSidebarButtons.vue";
</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  display: flex;

  &__sidebar {
    min-width: 25rem;
    height: 100%;
    background: #eee;

    box-shadow: 3px 0 12px gray;
    z-index: 12;
  }

  &__news-section {
    flex: 1;
    background-color: red;
  }
}
</style>
