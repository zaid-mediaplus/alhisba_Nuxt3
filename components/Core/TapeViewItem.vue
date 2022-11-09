<template>
  <div class="item">
    <div class="title">
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
.title {
  span {
    font-family: $main-font-family;
    color: $primary-text-color;
    font-size: $font-size-4;
    font-weight: 800;
    font-style: normal;
    line-height: 27px;
  }
}
</style>
