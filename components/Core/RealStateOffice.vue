<template>
  <div class="office">
    <div class="card">
      <img class="card-img" src="~/assets/images/office.png" />
      <div class="border"></div>
      <span>اسم المكتب</span>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.office {
  .card {
    cursor: pointer;
    width: auto;
    background: #ffffff;
    border: 1px solid #dfdfdf;
    box-shadow: 0px 64px 194px rgba(0, 0, 0, 0.1);
    border-radius: 22px;

    .card-img {
      padding: 12px;
    }

    span {
      padding: 12px;
      color: $primary-text-color;
      font-family: $main-font-family;
      font-size: $font-size-4;
      font-weight: 800;
      font-style: normal;
      line-height: 28px;
    }
  }
}
</style>
