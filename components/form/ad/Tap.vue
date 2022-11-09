<template>
  <div
    class="tabs d-flex flex-column justify-content-center align-items-center"
    :class="selected ? 'selected' : ''"
  >
    <div class="icon">
      <img :src="tap.icon" alt="" />
    </div>
    <div class="title" :class="selected ? 'selected' : ''">
      <span>{{ tap.title }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tap: Object,
  selected: Boolean,
});
</script>

<style lang="scss" scoped>
@import "../../../static/sass/variables.scss";
.tabs {
  width: 135.33px;
  border-radius: 14.8732px;
  background-color: #0789fb20;
  padding-inline: 17px;
  position: relative;
  cursor: pointer;
  text-align: center;
  width: 135.33px;
  height: 129.05px;
  &.selected {
    border: 2.68864px solid #078afb;
    box-shadow: 0px 4.48107px 44.8107px rgba(130, 209, 253, 0.2);
    border-radius: 18.8205px;
  }
  .title {
    span {
      font-family: $main-font-family;
      font-weight: 800;
      font-size: $font-size-3;
      line-height: 27px;
      font-style: normal;
      color: $primary-blue-color;
    }
  }
}
img {
  width: 79px;
  height: 62px;
}
</style>
