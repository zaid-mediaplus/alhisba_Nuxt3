<template>
  <div class="auction-item d-flex justify-content-between align-items-center">
    <div class="description d-flex">
      <div class="img">
        <img :src="icon" alt="" />
      </div>
      <div class="left-icon d-flex flex-column justify-content-center">
        <span class="title">{{ title }}</span>
        <span class="date">{{ date }}</span>
      </div>
    </div>
    <div class="arrow">
      <img src="/icons/leftarrow.svg" alt="" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  icon: String,
  date: String,
});
</script>

<style lang="scss">
@import "../../static/sass/variables.scss";
.auction-item {
  width: 100%;
  background-color: $secondary-text-color;
  height: 104px;
  border: 1px solid #eff0f7;
  box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
  border-radius: 20px;
  padding: 17px;
  margin-bottom: 15px;
  cursor: pointer;
  .description {
    .left-icon {
      padding-inline: 19px;
      .title {
        font-family: $main-font-family;
        color: $primary-text-color;
        font-weight: 800;
        font-size: 21px;
        line-height: 27.49px;
        @include inside-font-extra-lg;
        @include inside-font-lg;
        @include inside-font-medium;
        @include inside-font-small;
      }
      .date {
        font-family: $main-font-family;
        color: #8996a2;
        font-weight: 800;
        font-size: $font-size-6;
        line-height: 18.33px;
        padding-top: 10px;
        @include extra-large() {
          font-size: 12px;
        }
        @include large() {
          font-size: 10px;
        }
        @include medium() {
          font-size: 8px;
        }
        @include small() {
          font-size: 6px;
        }
      }
    }
  }
}
</style>
