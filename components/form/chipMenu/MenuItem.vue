<template>
  <div class="chipitem" @click="onItemClicked(index)">
    <div class="d-flex justify-content-between align-items-center">
      <div
        class="chip-item d-flex flex-fill justify-content-between align-items-center"
        :class="selected ? 'selected' : ''"
      >
        <div class="title" :class="selected ? 'selected' : ''">
          {{ item.title }}
        </div>
        <div>
          <img :src="selected ? check : plus" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
  selected: Boolean,
  index: Number,
  onItemClicked: Function,
});
import checkIcon from "~~/assets/icons/wSelect.svg";
import plusIcon from "~~/assets/icons/bplus.svg";

const check = ref(checkIcon);
const plus = ref(plusIcon);
</script>

<style lang="scss">
@import "../../../static/sass/variables.scss";
.chipitem {
  cursor: pointer;
  .chip-item {
    height: 40px;
    border: 1px solid #dddddd;
    border-radius: 42px;
    padding-inline: 18px;
    margin-left: 10px;
    margin-bottom: 9px;

    &.selected {
      background-color: $primary-blue-color;
    }

    .title {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: 17px;
      padding-left: 16px;
      font-style: normal;
      @include eighteen-font-extra-lg;
      @include eighteen-font-lg;
      @include eighteen-font-medium;
      @include eighteen-font-small;
      &.selected {
        color: $secondary-text-color;
      }
    }
  }
}
</style>
