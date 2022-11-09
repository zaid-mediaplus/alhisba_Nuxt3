<template>
  <div class="service">
    <div
      class="service-bg d-flex align-items-center justify-content-between"
      :class="selectToggle() ? 'selected' : ''"
      @click="selectToggle()"
    >
      <div class="right d-flex">
        <ProfileCircleCheckBox />
        <span>{{ service.serviceName }}</span>
      </div>
      <div class="left">
        <span>{{ service.price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  selected: Boolean,
  service: Object,
});
const select = ref(false);
const selectToggle = () => (select.value = !select.value);
</script>

<style lang="scss" scoped>
@import "../../../static/sass/variables.scss";
.service {
  padding-bottom: 18px;
  .service-bg {
    background: #ffffff;
    border: 1px solid #eff0f7;
    box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
    border-radius: 20px;
    padding-top: 39px;
    padding-bottom: 39px;
    padding-inline-start: 35px;
    padding-inline-end: 26px;
    cursor: pointer;
    &.selected {
      background: rgba(7, 138, 251, 0.06);
      border: 1.5px solid #078afb;
    }
    .right {
      span {
        padding-inline: 14px;
        font-family: $main-font-family;
        color: $primary-text-color;
        font-size: $font-size-4;
        font-weight: 800;
        font-style: normal;
        line-height: 23.56px;
      }
    }
    .left {
      font-family: $main-font-family;
      color: $primary-blue-color;
      font-size: 21px;
      font-weight: 900;
      font-style: normal;
      line-height: 23.56px;
    }
  }
}
</style>
