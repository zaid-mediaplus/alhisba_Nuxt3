<template>
  <div class="notfication-bar">
    <div
      class="bar-bg d-flex justify-content-between"
      :style="{ background: notification.background }"
    >
      <div class="right d-flex align-items-center">
        <div class="icon-bg d-flex justify-content-center align-items-center">
          <img src="~/assets/icons/profile/b-notification.svg" alt="" />
        </div>
        <div class="mid d-flex flex-column">
          <span class="top">{{ notification.title }}</span>
          <span class="gray-text">{{ notification.description }}</span>
        </div>
      </div>
      <div class="left">
        <span class="gray-text">{{ notification.date }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  notification: Object,
});
</script>

<style lang="scss" scoped>
@import "../../../static/sass/variables.scss";
.notfication-bar {
  padding-bottom: 14px;
  .bar-bg {
    width: 100%;
    background: rgba(7, 138, 251, 0.1);
    border-radius: 16px;
    padding-top: 24px;
    padding-bottom: 17px;
    padding-inline-start: 19px;
    padding-inline-end: 22px;
    cursor: pointer;
    .right {
      .icon-bg {
        width: 38px;
        height: 38px;
        background: rgba(7, 138, 251, 0.15);
        border-radius: 6px;
      }
      .mid {
        padding-inline: 16px;
        .top {
          font-family: $main-font-family;
          color: $primary-text-color;
          font-size: $font-size-4;
          font-weight: 800;
          line-height: 23.56px;
          font-style: normal;
        }
      }
    }
    .gray-text {
      font-family: $main-font-family;
      color: $theard-text-color;
      font-size: $font-size-6;
      font-weight: 800;
      line-height: 23.56px;
      font-style: normal;
    }
  }
}
</style>
