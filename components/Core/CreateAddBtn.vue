<template>
  <div class="addadbtn">
    <div class="btn-bg d-flex justify-content-center align-items-center">
      <img src="~/assets/icons/plus2.svg" alt="" />
      <span>أضف إعلان</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({});
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.addadbtn {
  .btn-bg {
    background: $primary-blue-color;
    box-shadow: 0px 5px 22px rgba(0, 34, 69, 0.06);
    border-radius: 12px;
    padding-top: 13px;
    padding-bottom: 13px;
    padding-inline: 16px;
    cursor: pointer;
    span {
      font-family: $main-font-family;
      color: $secondary-text-color;
      font-style: normal;
      font-size: $font-size-4;
      font-weight: 800;
      padding-inline-start: 10px;
    }
  }
}
</style>
