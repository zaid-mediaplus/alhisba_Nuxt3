<template>
  <div class="header-container">
    <div class="navbar-bg">
      <CoreAppContainer>
        <CoreAppNavBar :logo="logo" :login="login" color="#112347" />
      </CoreAppContainer>
    </div>
    <div class="bg"></div>
    <CoreAppContainer>
      <CoreInsideHeaderContainer>
        <div class="bread-crumb position-relative">
          <span>الرئيسية </span>
          <img src="/static/icons/ledt-g-arrow.svg" alt="" />
          <span>خدمات الحسبة</span>
          <img src="/static/icons/ledt-g-arrow.svg" alt="" />
          <span class="last">التقييم الفوري</span>
        </div>
        <div class="content">
          <p class="mainTitle">{{ title }}</p>
          <p class="description">
            {{ description }}
          </p>
          <img
            class="left-img position-absolute"
            :src="img"
            v-if="showimg"
            :style="{ bottom: bottom }"
          />
          <div class="d-flex justify-content-end" v-if="showBtn">
            <CoreBankBanner />
          </div>
        </div>
      </CoreInsideHeaderContainer>
    </CoreAppContainer>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  img: String,
  description: String,
  bottom: String,

  showBtn: {
    type: Boolean,
    default: false,
  },
  showimg: {
    type: Boolean,
    default: true,
  },
});

import logoIcon from "@/static/images/darkLogo.svg";
import loginIcon from "@/static/icons/dLogin.svg";

const logo = ref(logoIcon);
const login = ref(loginIcon);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.header-container {
  position: relative;
  height: 400px;

  .navbar-bg {
    background-color: $secondary-text-color;
  }

  .bg {
    position: absolute;
    width: 100%;
    height: 315px;
    background-color: rgba(7, 138, 251, 0.1);
  }

  .content {
    /* padding-bottom: 40px; */

    .mainTitle {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-weight: 800;
      font-size: 65px;
      font-style: normal;
      padding-top: 25px;
      margin-bottom: 36px;

      @include extra-large() {
        font-size: $font-size-1;
      }

      @include large() {
        font-size: $font-size-2;
      }

      @include medium() {
        font-size: $font-size-3;
      }

      @include small() {
        font-size: $font-size-4;
      }
    }

    .description {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-weight: 500;
      font-size: $font-size-5;
      font-style: normal;
      line-height: 24px;
      width: 50%;

      @include extra-large() {
        font-size: $font-size-6;
      }

      @include large() {
        font-size: 12px;
      }

      @include medium() {
        font-size: 10px;
      }
    }

    .left-img {
      /* width: 348px;
      height: 279px; */
      left: 0;
      /* bottom: -80px; */

      @include extra-large {
        display: none !important;
      }
    }
  }
}
.bread-crumb {
  padding-top: 46px;

  img {
    padding-inline-start: 33px;
    padding-inline-end: 28px;
  }
  span {
    font-family: $main-font-family;
    color: $theard-text-color;
    font-weight: 800;
    font-size: 12px;
    font-style: normal;
    line-height: 24px;
    cursor: pointer;
  }
  .last {
    font-family: $main-font-family;
    color: $primary-blue-color;
    font-weight: 800;
    font-size: 12px;
    font-style: normal;
    line-height: 24px;
  }
}
</style>
