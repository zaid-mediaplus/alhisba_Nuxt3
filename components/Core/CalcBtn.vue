<template>
  <div class="calc d-flex justify-content-center align-items-center">
    <span>إحسب</span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.calc {
  width: 165px;
  box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
  border-radius: 29px;
  background-color: $primary-blue-color;
  height: 58px;
  margin-bottom: 101px;
  cursor: pointer;

  span {
    font-family: $main-font-family;
    color: $secondary-text-color;
    font-size: $font-size-4;
    font-weight: 800;
    font-style: normal;
  }
}
</style>
