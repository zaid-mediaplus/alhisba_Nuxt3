<template>
  <div class="tap-bg d-flex">
    <div class="icon-bg d-flex justify-content-center align-items-center">
      <img :src="icon" alt="" />
    </div>
    <span>{{ title }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  icon: String,
  selected: Boolean,
});
</script>

<style lang="scss" scoped>
@import "../../../static/sass/variables.scss";

.tap-bg {
  padding-inline: 10px;
  padding-bottom: 15px;
  padding-top: 13px;
  width: 100%;
  cursor: pointer;
  .exit-text {
    padding-inline: 15px;
    font-family: $main-font-family;
    color: #ff735c;
    font-size: $font-size-4;
    font-weight: 800;
    font-style: normal;
  }
  .icon-bg {
    width: 29px;
    height: 29px;
    background: #8897a424;
    border-radius: 6px;
  }
  span {
    padding-inline: 15px;
    font-family: $main-font-family;
    color: #8996a2b4;
    font-size: $font-size-4;
    font-weight: 800;
    font-style: normal;
  }
  .exit-bg {
    width: 29px;
    height: 29px;
    background: #ff725c30;
    border-radius: 6px;
  }
}
</style>
