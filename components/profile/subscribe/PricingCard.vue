<template>
  <div class="card-bg" :style="{ background: plan.background }">
    <div class="top-section d-flex align-items-center">
      <div class="image-bg d-flex justify-content-center align-items-center">
        <img src="/icons/profile/bloulogo.svg" alt="" />
      </div>
      <div class="left-top">
        <div class="top-title">
          <span>حزمة اشتراك </span>
        </div>
        <div class="bottom-title">
          <span>{{ plan.subscriptionPeriod }}</span>
        </div>
      </div>
    </div>
    <div class="price-section">
      <span class="price">{{ plan.price }}</span>
      <span class="kd">د.ك</span>
    </div>
    <div class="choose-type">
      <span>اختر نوع الحزمة</span>
    </div>
    <div
      class="packeges d-flex align-items-center"
      v-for="(item, index) in plan.packages"
      :key="index"
    >
      <ProfileCircleCheckBox />
      <span> هذا النص هو مثال لنص</span>
    </div>
    <div class="choose-package">
      <div class="choose-package-btn">
        <div
          class="btn-bg d-flex justify-content-center align-items-center"
          :style="{ background: plan.btnBackground, boxShadow: plan.boxShadow }"
        >
          <span>اختر الحزمة</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  plan: Object,
});
</script>

<style lang="scss" scoped>
@import "../../../static/sass/variables.scss";

.card-bg {
  padding-top: 50px;
  padding-bottom: 59px;
  padding-inline: 44px;
  /* background: rgba(7, 138, 251, 0.2); */
  border-radius: 24px;
  width: 394px;
  .top-section {
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
    .left-top {
      padding-inline-start: 17px;
      .top-title {
        font-family: $main-font-family;
        color: $primary-text-color;
        font-size: 22px;
        font-weight: 500;
        font-style: normal;
        line-height: 36px;
      }
      .bottom-title {
        font-family: $main-font-family;
        color: $primary-text-color;
        font-size: 35px;
        font-weight: 800;
        font-style: normal;
        line-height: 39px;
      }
    }
  }
  .price-section {
    padding-top: 26px;
    padding-inline: 9px;
    .price {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: 51.41px;
      font-weight: 900;
      font-style: normal;
      line-height: 67.3px;
    }
    .kd {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: 34.83px;
      font-weight: 800;
      font-style: normal;
      line-height: 45.59px;
    }
  }
  .choose-type {
    padding-top: 16px;
    padding-bottom: 28px;
    padding-inline: 15px;
    span {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: $font-size-4;
      font-weight: 800;
      font-style: normal;
      line-height: 23.56px;
    }
  }
  .packeges {
    padding-inline: 9px;
    span {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: $font-size-4;
      font-weight: 800;
      font-style: normal;
      line-height: 45.59px;
      padding-inline: 14px;
    }
  }
  .choose-package {
    .choose-package-btn {
      padding-top: 56.05px;
      .btn-bg {
        box-shadow: 0px 6.2069px 27.3103px rgba(130, 209, 253, 0.7);
        border-radius: 36px;
        padding-top: 17.38px;
        padding-bottom: 19.62px;
        cursor: pointer;
        span {
          line-height: 35px;
          font-family: $main-font-family;
          color: $secondary-text-color;
          font-size: $font-size-4;
          font-weight: 800;
          font-style: normal;
        }
      }
    }
  }
}
</style>
