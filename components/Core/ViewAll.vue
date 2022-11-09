<template>
  <div class="viewall">
    <div class="d-flex justify-content-center align-items-center">
      <span>عرض الجميع</span>
    </div>
  </div>
</template>

<style lang="scss">
@import "/static/sass/variables.scss";

.viewall {
  div {
    width: 106px;
    height: 32px;
    background-color: $secondary-text-color;
    box-shadow: 0px 4px 17px rgba(8, 15, 52, 0.05);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    cursor: pointer;

    span {
      font-family: $main-font-family;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 23px;
      color: #078afb;
    }
  }
}
</style>
