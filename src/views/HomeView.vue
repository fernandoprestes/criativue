<script lang="ts" setup>
  import CButton from '@/components/CButton.vue';
</script>

<template>
  <div class="wrapper-main">
    <div class="wrapper-div">
      <h2>Buttons</h2>
      <div class="button-group">
        <CButton>Primary</CButton>
        <CButton variant="secondary">Secondary</CButton>
        <CButton variant="outline">Outline</CButton>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .wrapper-main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }

  .wrapper-div {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .button-group {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px 16px;
  }
</style>
