<template>
  <div class="d-flex flex-column align-items-center">
    <div class="header-img">
      <img src="/icons/Bank.svg" alt="" />
    </div>
    <NuxtLink to="/finance">
      <div class="bank-baner-container d-flex justify-content-end">
        <div class="bank-baner-bg d-flex justify-content-center">
          <span>هل تريد تقديم طلب تمويل؟</span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.bank-baner-container {
  width: 251px;
}
.bank-baner-bg {
  width: 100%;
  background: $secondary-text-color;
  box-shadow: 0px 6px 20px rgba(7, 138, 251, 0.11);
  border-radius: 12px;
  line-height: 28px;
  padding-top: 13px;
  padding-bottom: 9px;
  padding-inline-start: 23px;
  padding-inline-end: 20px;
  span {
    font-family: $main-font-family;
    color: $primary-text-color;
    font-weight: 800;
    font-size: $font-size-4;
    font-style: normal;
    line-height: 28.12px;
  }
}
.header-img {
  img {
    width: 250px;
    height: 110.45px;
  }
}
</style>
