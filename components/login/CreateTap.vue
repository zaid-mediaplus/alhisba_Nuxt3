<template>
  <div
    class="tap-bg d-flex flex-column align-items-center"
    :class="selectToggle() ? 'selected' : ''"
    @click="selectToggle()"
  >
    <div class="icon-bg d-flex justify-content-center align-items-center">
      <img :src="item.icon" alt="" />
    </div>
    <div class="tap-title">
      <span :class="selectToggle() ? '' : 'selected'">{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
  selected: Boolean,
});
const selected = ref(true);
const selectToggle = () => (selected.value = !selected.value);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.tap-bg {
  background: #ffffff;
  border: 1.5px solid #dddddd;
  box-shadow: 0px 8px 35px rgba(130, 209, 253, 0.21);
  border-radius: 13px;
  padding-inline: 40px;
  padding-top: 17px;
  padding-bottom: 24px;
  &.selected {
    border: 1.5px solid #078afb;
    box-shadow: 0px 8px 35px rgba(130, 209, 253, 0.21);
  }
  .icon-bg {
    width: 73px;
    height: 73px;
    background: linear-gradient(
      180deg,
      #edf7ff 50%,
      rgba(255, 255, 255, 0) 138.19%
    );
    border-radius: 103px;
    img {
      width: 27.53px;
      height: 30.08px;
    }
  }
  .tap-title {
    padding-top: 14px;
    span {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-weight: 800;
      font-size: $font-size-4;
      line-height: 23.56px;
      font-style: normal;
      &.selected {
        color: $primary-blue-color;
      }
    }
  }
}
</style>
