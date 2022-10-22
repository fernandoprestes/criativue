<template>
  <header class="header">
    <div class="header-logo">
      <div>Logo</div>
    </div>
    <div class="header-user-bar">User-bar</div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    padding: 18px 32px;
    border-bottom: 1px solid color(border);
  }
</style>
