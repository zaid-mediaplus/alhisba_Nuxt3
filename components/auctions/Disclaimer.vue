<template>
  <div class="disclaimer">
    <div class="bg d-flex align-items-center">
      <div class="icon-bg d-flex justify-content-center align-items-center">
        <img src="~/assets/icons/Disclaimer.svg" alt="" />
      </div>
      <div class="title">
        <span>اضغط هنا لمعرفة الشروط و الأحكام</span>
      </div>
    </div>
  </div>
</template>

<script setuo></script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.disclaimer {
  width: 48%;
  margin-bottom: 30px;
  .bg {
    background: rgba(7, 138, 251, 0.1);
    border-radius: 13px;
    padding: 11px;
    cursor: pointer;
    .icon-bg {
      background: $primary-blue-color;
      width: 55px;
      height: 55px;
      border-radius: 50%;
    }
    .title {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-weight: 800;
      font-size: 21px;
      line-height: 27.49px;
      padding-left: 13px;
      padding-inline: 34px;
      padding-inline-start: 34px;
      @include inside-font-extra-lg;
      @include inside-font-lg;
      @include inside-font-medium;
      @include inside-font-small;
    }
  }
}
</style>
