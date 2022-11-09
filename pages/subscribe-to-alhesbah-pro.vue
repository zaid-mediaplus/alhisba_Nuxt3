<template>
  <CoreAppContainer>
    <CoreAppNavBar :logo="logo" :login="login" color="#112347" />
  </CoreAppContainer>
  <div class="page-bg">
    <div class="subscribe-taps d-flex justify-content-center">
      <!-- <ProfileSubscribeTap :selected="currentTapIndex == index" /> -->
      <div class="taps-bg d-flex justify-content-around position-relative">
        <div
          class="active-tap position-absolute"
          :class="currentTapIndex == 1 ? 'selected' : ''"
        ></div>
        <div
          class="tap-bg d-flex justify-content-center"
          :class="currentTapIndex == 1 ? 'selected' : ''"
          @click="currentTapIndex = 1"
        >
          <span :class="currentTapIndex == 1 ? 'selected' : ''"
            >خدمات فردية</span
          >
        </div>
        <div
          class="tap-bg d-flex justify-content-center"
          :class="currentTapIndex == 0 ? 'selected' : ''"
          @click="currentTapIndex = 0"
        >
          <span :class="currentTapIndex == 0 ? 'selected' : ''">باقات</span>
        </div>
      </div>
    </div>
    <div class="main-title d-flex justify-content-center">
      <span>اشترك في "الحسبة برو"</span>
    </div>
    <div v-if="currentTapIndex == 0">
      <ProfileSubscribeCardsContainer>
        <div class="pricing-card-container d-flex justify-content-center">
          <ProfileSubscribePricingCards />
        </div>
      </ProfileSubscribeCardsContainer>
    </div>
    <div v-if="currentTapIndex == 1">
      <CoreAppContainer>
        <CoreItemContainer>
          <ProfileSubscribeServices />
        </CoreItemContainer>
      </CoreAppContainer>
    </div>
  </div>
</template>

<script setup>
import logoIcon from "@/static/images/darkLogo.svg";
import loginIcon from "@/static/icons/dLogin.svg";

const logo = ref(logoIcon);
const login = ref(loginIcon);

const currentTapIndex = ref(0);
const showTap = ref(false);
</script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";
.page-bg {
  background: #0789fb10;
  padding-top: 121px;
  padding-bottom: 101px;
}
.subscribe-taps {
}
.main-title {
  padding-top: 91px;
  padding-bottom: 116px;
  span {
    font-family: $main-font-family;
    color: $primary-text-color;
    font-size: $font-size-1;
    font-weight: 800;
    font-style: normal;
    line-height: 53px;
  }
}
.pricing-card-container {
  width: 100%;
}
.taps-bg {
  background: #ffffff;
  border: 1px solid #eff0f6;
  box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
  border-radius: 29.5px;
  padding-top: 18px;
  padding-bottom: 19px;
  width: 295px;
  .active-tap {
    width: 148.84px;
    height: 59px;
    box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
    border-radius: 29.5px;
    background: $primary-blue-color;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.2ms;
    &.selected {
      right: 0;
    }
  }
  .tap-bg {
    z-index: 10;
    cursor: pointer;
    width: 40%;
    span {
      font-family: $main-font-family;
      color: $theard-text-color;
      font-size: 17px;
      font-weight: 800;
      font-style: normal;
      &.selected {
        color: white;
      }
    }
  }
}
</style>
