<template>
  <div class="account-type-container d-flex justify-content-around">
    <div class="account-type" v-for="(item, index) in items" :key="index">
      <LoginCreateTap :item="item" />
    </div>
  </div>
</template>

<script setup>
const items = ref([
  {
    id: 1,
    title: "حساب شخصي",
    icon: "/static/icons/lg-profile.svg",
  },
  {
    id: 2,
    title: "حساب تجاري",
    icon: "/static/icons/b-login-2.svg",
  },
]);
</script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";
.account-type {
  padding-bottom: 74px;
}
.next-btn {
  padding-inline: 34px;
  padding-bottom: 32px;
  padding-top: 74px;
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
</style>
