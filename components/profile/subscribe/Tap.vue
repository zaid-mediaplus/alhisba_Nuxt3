<template>
  <div class="taps-bg d-flex justify-content-around">
    <div class="tap-bg" :class="selected ? 'selected' : ''">
      <span>خدمات فردية</span>
    </div>
    <div class="tap-bg" :class="selected ? 'selected' : ''">
      <span>باقات</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  selected: Boolean,
});
</script>

<style lang="scss" scoped>
@import "../../../static/sass/variables.scss";

.taps-bg {
  background: #ffffff;
  border: 1px solid #eff0f6;
  box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
  border-radius: 29.5px;
  padding-top: 18px;
  padding-bottom: 19px;
  width: 295px;
  .tap-bg {
    span {
      font-family: $main-font-family;
      color: $theard-text-color;
      font-size: 17px;
      font-weight: 800;
      font-style: normal;
    }
  }
}
</style>
