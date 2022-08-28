<script lang="ts" setup>
  import CButton from '~/components/CButton.vue';
</script>

<template>
  <div class="wrapper-div">
    <h2>Buttons</h2>
    <div class="button-group">
      <CButton
        label="Primary"
        variant="primary"
      />
      <CButton
        label="Secondary"
        variant="secondary"
      />
      <CButton
        label="Outline"
        variant="outline"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .wrapper-div {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .button-group {
    display: flex;
    gap: 16px;
  }
</style>
