<template>
  <div class="social-media-tap">
    <div class="tap-bg d-flex align-itens-center">
      <img src="/static/icons/profile/plus.svg" alt="" />
      <span>أضف حساب آخر</span>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.tap-bg {
  width: 100%;
  padding-inline-end: 15px;
  padding-top: 20px;
  padding-bottom: 23.14px;
  margin-bottom: 17px;
  background: #ffffff;
  border: 1.5px solid #dddddd;
  border-radius: 13px;
  cursor: pointer;

  img {
    padding-inline: 11px;
  }
  span {
    font-family: $main-font-family;
    color: rgba(17, 35, 71, 0.4);
    font-size: $font-size-4;
    font-weight: 800;
    font-style: normal;
  }
}
</style>
