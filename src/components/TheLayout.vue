<template>
  <div class="layout">
    <div class="layout__sidebar"><the-sidebar-buttons /></div>

    <div class="layout__news-section"><router-view /></div>
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
  overflow: hidden;


  &__sidebar {
    min-width: 25%;
    height: 100%;
    background: #eee;

    // position: fixed; //! Может, лучше по клику это делать?
  

    box-shadow: 3px 0 12px gray;
    z-index: 12;
    padding: 12px;
  }

  &__news-section {
    flex: 1;
    overflow-y: scroll;
    padding: 20px 36px;
  }
}
</style>
