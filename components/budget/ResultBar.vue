<template>
  <div class="result-bar-bg d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img src="/icons/black-address.svg" alt="" />
      <span>{{ property.street }}</span>
    </div>
    <div class="d-flex align-items-center">
      <img src="/icons/place.svg" alt="" />
      <span>{{ property.place }}</span>
    </div>
    <div class="d-flex align-items-center" s>
      <img src="/icons/cardIcon/area.svg" alt="" />
      <span>{{ property.area }}</span>
    </div>
    <div class="d-flex align-items-center border-right">
      <span>{{ property.price }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  property: Object,
});
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.result-bar-bg {
  background: $secondary-text-color;
  border: 1px solid #eff0f7;
  box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
  border-radius: 20px;
  padding-top: 37px;
  padding-bottom: 34px;
  padding-inline-start: 35px;
  padding-inline-end: 80px;
  span {
    padding-inline: 11px;
    font-family: $main-font-family;
    color: $primary-blue-color;
    font-size: 21px;
    line-height: 32.8px;
    font-weight: 800;
  }
}
.border-right {
  border-right: 1px solid #eff0f6;
}
</style>
