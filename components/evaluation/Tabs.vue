<template>
  <div
    class="tab d-flex justify-content-between align-items-center"
    :class="selected ? 'selected' : ''"
  >
    <div class="title" :class="selected ? 'selected' : ''">{{ title }}</div>
    <div class="icon">
      <img :src="icon" alt="" />
    </div>
    <div class="bottom-line" :class="selected ? 'visible' : 'hidden'"></div>
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
@import "../../static/sass/variables.scss";

.tab {
  width: 224px;
  height: 85px;
  border-radius: 14.8732px;
  background-color: #0789fb20;
  padding-inline: 17px;
  position: relative;
  cursor: pointer;
  &.selected {
    background: rgba(7, 138, 251, 0.25);
    box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.2);
    border-radius: 15px;
  }
  .title {
    font-family: $main-font-family;
    font-size: $font-size-4;
    font-weight: 500;
    color: $primary-text-color;
    width: 55%;
    &.selected {
      font-weight: 800;
    }
  }
  .bottom-line {
    transition: all 0.4s;

    &.visible {
      opacity: 1;
    }

    &.hidden {
      opacity: 0;
    }
  }

  .bottom-line::after {
    content: "";
    width: 136px;
    height: 5px;
    border-radius: 29px;
    background-color: $primary-blue-color;
    position: absolute;
    bottom: 0;
    right: 40px;
  }
}
</style>
