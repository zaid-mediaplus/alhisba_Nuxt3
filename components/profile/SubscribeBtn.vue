<template>
  <div class="Subscribe">
    <div class="Subscribe-bg">
      <img src="~/assets/icons/pro.svg" alt="" />
      <span>اشترك في "الحسبة برو"</span>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.Subscribe {
  cursor: pointer;
  .Subscribe-bg {
    background: $primary-yellow-color;
    box-shadow: 0px 5px 22px rgba(243, 175, 52, 0.24);
    border-radius: 12px;
    padding: 14.16px 0 13.17px 0;
    cursor: pointer;
    padding-inline-start: 20.9px;
    span {
      font-family: $main-font-family;
      color: $secondary-text-color;
      font-size: $font-size-4;
      font-weight: 800;
      font-style: normal;
      padding-inline: 13px;
    }
  }
}
</style>
