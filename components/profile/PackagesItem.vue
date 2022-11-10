<template>
  <div class="items">
    <div
      class="items-bg d-flex justify-content-between align-items-center"
      :style="{ background: packet.background }"
    >
      <div class="right d-flex align-items-center">
        <div class="image-bg d-flex justify-content-center align-items-center">
          <img src="~/assets/icons/profile/bloulogo.svg" alt="" />
        </div>
        <div class="midle">
          <div class="main-title">
            <span>{{ packet.title }}</span>
          </div>
          <div class="sub-title">
            <span
              >ينتهي اشتراك في<span>{{ packet.date }}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="left">
        <span>{{ packet.price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  packet: Object,
});
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.items {
  padding-bottom: 21px;
}
.items-bg {
  width: 100%;
  border-radius: 21px;
  background: rgba(7, 138, 251, 0.2);
  padding-top: 29px;
  padding-bottom: 26px;
  padding-inline: 21px;
  .right {
    .image-bg {
      width: 73px;
      height: 73px;
      background: linear-gradient(
        180deg,
        #edf7ff 50%,
        rgba(255, 255, 255, 0) 138.19%
      );
      border-radius: 103px;
    }
    .midle {
      padding-inline-start: 17px;
    }
    .main-title {
      span {
        font-family: $main-font-family;
        color: $primary-text-color;
        font-size: 21px;
        font-weight: 800;
        font-style: normal;
        @include inside-font-extra-lg;
        @include inside-font-lg;
        @include inside-font-medium;
        @include inside-font-small;
      }
    }
    .sub-title {
      span {
        font-family: $main-font-family;
        color: $primary-text-color;
        font-size: $font-size-5;
        font-weight: 500;
        font-style: normal;
      }
    }
  }
  .left {
    span {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: 21px;
      font-weight: 900;
      font-style: normal;
    }
  }
}
</style>
