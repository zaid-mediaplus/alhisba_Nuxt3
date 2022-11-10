<template>
  <CoreModal :show="showModal" :close="() => (showModal = false)">
    <div class="login-section">
      <div class="login-bg position-relative">
        <div class="close">
          <img
            src="~/assets/icons/close.svg"
            alt="close"
            @click="showModal = false"
          />
        </div>
        <div class="logo d-flex justify-content-center">
          <img src="~/assets/images/darkLogo.svg" alt="" />
        </div>
        <div class="header-bg position-absolute"></div>
        <!-- <LoginVerification /> -->
        <LoginPhoneNumber />
        <div
          class="create-account d-flex justify-content-center align-items-center"
        >
          <span class="title">ليس لديك حساب؟</span>
          <span class="link">انشئ حساب</span>
        </div>
      </div>
    </div>
  </CoreModal>
</template>

<script setup>
const showModal = ref(false);

let toggleModal = () => (showModal = !showModal);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.login-bg {
  width: 444px;
  background: #ffffff;
  box-shadow: 0px 25px 50px rgba(17, 35, 71, 0.2);
  border-radius: 12px;
  padding-bottom: 41px;
  overflow: hidden;
  .close {
    padding-inline: 19px;
    padding-top: 23px;
    img {
      cursor: pointer;
    }
  }
  .logo {
    padding-bottom: 93px;
  }
  .header-bg {
    width: 795px;
    height: 795px;
    background: rgba(7, 138, 251, 0.1);
    border-radius: 50%;
    top: -100%;
    right: -40%;
    pointer-events: none;
  }
}
</style>
