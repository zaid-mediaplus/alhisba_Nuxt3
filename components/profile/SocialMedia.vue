<template>
  <div class="social-media-tap">
    <div
      class="tap-bg d-flex justify-content-between align-itens-center"
      :style="[
        bgcolor
          ? {
              background: bgcolor,
            }
          : { background: 'none' },
      ]"
    >
      <div class="right d-flex align-items-center">
        <img :src="icon" alt="" />
        <span>{{ title }}</span>
      </div>
      <div>
        <img :src="select" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  icon: String,
  path: String,
  select: String,
  bgcolor: String,
});
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.tap-bg {
  width: 100%;
  padding-inline-end: 15px;
  padding-top: 20px;
  padding-bottom: 23.14px;
  border-radius: 13px;
  margin-bottom: 17px;
  .right {
    img {
      padding-inline: 11px;
    }
    span {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: $font-size-4;
      font-weight: 800;
      font-style: normal;
    }
  }
}
</style>
