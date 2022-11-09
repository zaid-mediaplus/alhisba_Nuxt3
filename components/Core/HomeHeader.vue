<template>
  <div class="headerContainer">
    <div class="bg">
      <img src="/static/images/home-bg.png" />
    </div>
    <div class="bgGradient"></div>
    <CoreAppContainer>
      <CoreAppNavBar
        :showBtn="false"
        background="#fff"
        paddingTop="27px"
        :logo="logo"
        :login="login"
      />
    </CoreAppContainer>
    <div
      class="content d-flex flex-column justify-content-center align-items-center"
    >
      <p class="mainTitle">كل ما تحتاجه في السوق العقاري الكويتي</p>
      <HomeHeaderFilter />
    </div>
  </div>
</template>

<script setup>
import logoIcon from "@/static/images/Logo.svg";
import loginIcon from "@/static/icons/Login.svg";

const logo = ref(logoIcon);
const login = ref(loginIcon);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.headerContainer {
  position: relative;
  height: 70vh;
  @include extra-extra-extra-large() {
    height: 60vh;
  }
  @include extra-extra-large() {
    height: 55vh;
  }
  .bg {
    position: absolute;
    width: 100%;
    img {
      height: 70vh;
      width: 100%;
      object-fit: cover;
      @include extra-extra-extra-large() {
        height: 60vh;
      }
      @include extra-extra-large() {
        height: 55vh;
      }
    }
  }

  .bgGradient {
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      180deg,
      #0a1429 -17.43%,
      rgba(17, 35, 71, 0) 67.92%
    );
  }

  .content {
    position: absolute;
    height: 100%;
    width: 100%;

    .mainTitle {
      font-family: $main-font-family;
      font-weight: 800;
      font-size: 40px;
      font-style: normal;
      color: $secondary-text-color;
      margin-bottom: 60px;
      text-align: center;

      @include extra-large {
        font-size: 35px;
      }
      @include large {
        font-size: 30px;
      }
      @include medium {
        font-size: 25px;
      }
      @include small() {
        font-size: 22px;
      }
    }
  }
}
</style>
