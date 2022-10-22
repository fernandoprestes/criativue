<template>
  <div class="sidebar">
    <router-link
      to="/"
      class="sidebar-item"
    >
      <span>Home</span>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 268px;
    height: calc(100vh - 86px);
    padding: 50px 22px 0;
    border-right: 1px solid color(border);
  }

  .sidebar-item {
    display: flex;
    gap: 8px;
    align-items: center;
    width: 100%;
    padding: 12px 16px;
    color: color(primary);
    text-decoration: none;
    border-radius: $radius-medium;
    transition: all $transition-duration $easing;

    &.router-link-active {
      color: color(accent);
      background: color(primary);
    }

    &:hover {
      background: color(secondary);
    }
  }
</style>
