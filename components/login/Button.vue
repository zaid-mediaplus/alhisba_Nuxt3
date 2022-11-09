<template>
  <div class="next-btn d-flex justify-content-center">
    <div class="next-btn-bg d-flex justify-content-center align-items-center">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";

.next-btn {
  padding-inline: 34px;
  padding-bottom: 32px;

  .next-btn-bg {
    width: 100%;
    background: $primary-blue-color;
    box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
    border-radius: 29px;
    padding-top: 14px;
    padding-bottom: 16px;
    cursor: pointer;
    span {
      font-family: $main-font-family;
      color: $secondary-text-color;
      font-weight: 800;
      font-size: $font-size-4;
      line-height: 28.12px;
      font-style: normal;
    }
  }
}
</style>
