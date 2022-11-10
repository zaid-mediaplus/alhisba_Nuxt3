<template>
  <div class="checkbox" @click="onItemClicked(index)">
    <div class="check-box" :class="selected ? 'selected' : ''">
      <div class="image"><img :src="item.icon" alt="" /></div>
      <div class="title">{{ item.title }}</div>
      <div
        :class="
          'check d-flex justify-content-center d-flex align-items-center ' +
          [selected ? 'selected' : '']
        "
      >
        <div class="img-arrow">
          <img src="~/assets/icons/wSelect.svg" />
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
</script>

<style lang="scss">
@import "../../../static/sass/variables.scss";
.checkbox {
  cursor: pointer;
  .check-box {
    position: relative;
    width: 110px;
    height: 70px;
    border: 1.2px solid #d9dbe9;
    border-radius: 10px;
    margin: 13px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 10px;
    text-align: start;

    &.selected {
      border: 2px solid $primary-blue-color;
    }

    .image {
      padding-bottom: 7px;
    }

    .title {
      font-family: $main-font-family;
      font-size: $font-size-6;
      font-weight: 800;
      font-style: normal;
    }

    .check {
      position: absolute;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      left: calc(5% - 12.5px);
      top: calc(0% - 12.5px);
      border: 1.2px solid #d9dbe9;
      background-color: #fff;
      box-shadow: inset 0px -3px 7px rgba(20, 20, 43, 0.08);

      &.selected {
        background-color: $primary-blue-color;
      }
    }
  }
}
</style>
