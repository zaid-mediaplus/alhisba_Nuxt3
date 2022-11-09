<template>
  <div class="login-text d-flex justify-content-center">
    <span>تسجيل الدخول إلى حسابك</span>
  </div>
  <div class="text-field d-flex justify-content-center">
    <FormNumberDropDown />
  </div>
  <div class="confirm">
    <span>سنرسل لك رسالة لتأكيد رقمك</span>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.login-text {
  span {
    font-family: $main-font-family;
    color: $primary-text-color;
    font-weight: 800;
    font-size: 22px;
    line-height: 34px;
    font-style: normal;
  }
  padding-bottom: 41px;
}
.confirm {
  padding-inline: 44px;
  padding-bottom: 93px;
  span {
    font-family: $main-font-family;
    color: $primary-text-color;
    font-weight: 500;
    font-size: $font-size-6;
    line-height: 18.33px;
    font-style: normal;
  }
}
.next-btn {
  padding-inline: 34px;
  padding-bottom: 32px;

  .next-btn-bg {
    width: 100%;
    background: $primary-blue-color;
    box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
    border-radius: 29px;
    padding-top: 14px;
    padding-bottom: 16px;
    cursor: pointer;
    span {
      font-family: $main-font-family;
      color: $secondary-text-color;
      font-weight: 800;
      font-size: $font-size-4;
      line-height: 28.12px;
      font-style: normal;
    }
  }
}
.text-field {
  padding-inline: 43px;
}
</style>
