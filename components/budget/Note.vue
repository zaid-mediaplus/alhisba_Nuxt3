<template>
  <div class="notification-bg d-flex justify-content-center align-items-center">
    <div class="icon-bg d-flex justify-content-center align-items-center">
      <img src="/icons/exclamation.svg" alt="" />
    </div>
    <div class="notification-content">
      <span>هذه النتيجة تعرض لك نتيجة 20٪ فقط من ميزانيتك</span>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.notification-bg {
  width: 100%;
  border-radius: 13px;
  padding: 37px 0 31px 0;
  background: rgba(7, 138, 251, 0.1);
  .icon-bg {
    width: 40.99px;
    height: 40.99px;
    background: rgba(7, 138, 251, 0.2);
    border-radius: 50%;
  }
  .notification-content {
    padding-inline: 19px;
    font-family: $main-font-family;
    color: $primary-blue-color;
    font-size: 21px;
    font-style: normal;
    font-weight: 800;
  }
}
</style>
