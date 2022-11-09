<template>
  <div
    class="previous-page-btn d-flex justify-content-center align-items-center"
  >
    <span>السابق</span>
  </div>
  <div class="number d-flex justify-content-around align-items-center gap-4">
    <span class="selected">1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span>...</span>
    <span>19</span>
  </div>
  <div class="next-page-btn d-flex justify-content-center align-items-center">
    <span>التالي</span>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.number {
  width: 30%;
  @include extra-large {
    flex-wrap: wrap;
  }
  span {
    font-family: $main-font-family;
    font-size: $font-size-6;
    font-weight: 800;
    font-style: normal;
    color: #8996a2;
    cursor: pointer;
  }
}
.previous-page-btn {
  width: 76px;
  height: 36px;
  background: rgba(7, 138, 251, 0.1);
  border-radius: 11px;
  cursor: pointer;
  span {
    font-family: $main-font-family;
    font-size: $font-size-6;
    font-weight: 500;
    font-style: normal;
    color: #8996a2;
  }
}
.next-page-btn {
  width: 76px;
  height: 36px;
  border: 1px solid rgba(137, 150, 162, 0.25);
  border-radius: 11px;
  cursor: pointer;
  span {
    font-family: $main-font-family;
    font-size: $font-size-6;
    font-weight: 500;
    font-style: normal;
    color: #8996a2;
  }
}
/* .selected {
      background-color: #078afb;
      width: 44px;
      height: 36px;
      box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
      border-radius: 12px;
    } */
</style>
