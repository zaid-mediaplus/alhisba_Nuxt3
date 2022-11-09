<template>
  <NuxtLink :to="path">
    <div class="back-btn">
      <img src="/static/icons/rightArrow.svg" alt="" />
      <span class="title">{{ title }}</span>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  title: String,
  path: String,
});
</script>

<style lang="scss" scoped>
@import "/static/sass/variables.scss";
img {
  padding-inline-end: 16px;
}
.title {
  font-family: $main-font-family;
  color: $primary-blue-color;
  font-size: 12px;
  font-weight: 800;
  font-style: normal;
  line-height: 53px;
  cursor: pointer;
  text-decoration: none;
}
span {
  text-decoration: none;
}
.back-btn {
  padding-bottom: 109px;
}
</style>
