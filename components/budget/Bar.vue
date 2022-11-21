<template>
  <div class="bar-bg d-flex justify-content-between">
    <div class="right d-flex align-items-center">
      <div class="icon-bg d-flex justify-content-center align-items-center">
        <img :src="item.icon" alt="" />
      </div>
      <div class="area-name">
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div class="left d-flex align-items-center">
      <div class="number-bg d-flex justify-content-center align-items-center">
        <span>{{ item.number }}</span>
      </div>
      <div class="left-arrow">
        <img src="/icons/left-s-arrow.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.bar-bg {
  width: 100%;
  background: #ffffff;
  border: 1px solid #eff0f7;
  box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
  border-radius: 20px;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-inline: 23px;
  margin-bottom: 15px;
  cursor: pointer;
  .right {
    .icon-bg {
      background: rgba(7, 138, 251, 0.1);
      border-radius: 12.8947px;
      padding: 10.32px 11.61px 12.89px 11.6px;
    }
    .area-name {
      padding-inline: 15px;
      span {
        font-family: $main-font-family;
        color: $primary-text-color;
        font-size: 21px;
        font-style: normal;
        font-weight: 800;
        line-height: 27.49px;
      }
    }
  }
  .left {
    .number-bg {
      background: $primary-blue-color;
      box-shadow: 0px 2.96296px 11.8519px rgba(221, 221, 221, 0.5);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      span {
        font-family: $main-font-family;
        color: $secondary-text-color;
        font-size: 25.7143px;
        font-style: normal;
        font-weight: 800;
      }
    }
    .left-arrow {
      padding-inline-start: 23px;
    }
  }
}
</style>
