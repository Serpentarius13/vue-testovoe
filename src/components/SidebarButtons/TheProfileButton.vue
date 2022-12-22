<template>
  <div class="sidebar__profile">
    <img class="sidebar__profile-image" src="/profilePic.png" />
    <div class="sidebar__profile-text-section">
      <p :style="{ fontSize: '18px', color: '#111' }">Nameee</p>
      <p :style="{ fontSize: '14px', color: '#aaa' }">emailllll@mail.ru</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sidebar__profile {
  padding: 10px 12px;

  display: flex;
  gap: 12px;
  align-items: center;

  &-image {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
}
</style>
