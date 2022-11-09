<template>
  <CoreInsideHeader title="المكاتب" :img="officeIcon" bottom="-135px" />
  <div class="page-bg">
    <CoreAppContainer>
      <div class="right d-flex align-items-baseline">
        <span class="title"> عقارات للتبادل</span>
        <span class="result">68,444 نتيجة</span>
      </div>
      <div class="office-card-section d-flex gap-4">
        <CoreRealStateOffice />
        <CoreRealStateOffice />
        <CoreRealStateOffice />
        <CoreRealStateOffice />
      </div>
      <div class="office-card-section d-flex gap-4">
        <CoreRealStateOffice />
        <CoreRealStateOffice />
        <CoreRealStateOffice />
        <CoreRealStateOffice />
      </div>
      <div class="office-card-section d-flex gap-4">
        <CoreRealStateOffice />
        <CoreRealStateOffice />
        <CoreRealStateOffice />
        <CoreRealStateOffice />
      </div>
      <div class="pagination-bar d-flex gap-4">
        <CorePagination />
      </div>
      <div class="border"></div>
    </CoreAppContainer>
  </div>
</template>

<script setup>
import officeIcon from "/static/icons/aboutus.svg";
const office = ref(officeIcon);
</script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";
.page-bg {
  background: #0789fb10;
  padding-top: 85px;
  padding-bottom: 121px;
}
.right {
  padding-bottom: 14px;
  .title {
    font-family: $main-font-family;
    color: $primary-text-color;
    font-size: $font-size-2;
    font-weight: 800;
    font-style: normal;
    @include extra-large() {
      font-size: 28px;
    }
    @include large() {
      font-size: 24px;
    }
    @include medium() {
      font-size: $font-size-3;
    }
    @include small() {
      font-size: $font-size-4;
    }
  }
  .result {
    font-family: $main-font-family;
    color: $primary-text-color;
    font-size: 15px;
    font-weight: 800;
    font-style: normal;
    padding-inline: 31px;
    @include extra-large() {
      font-size: 12px;
    }
    @include large() {
      font-size: 10px;
    }
    @include medium() {
      font-size: 8px;
    }
    @include small() {
      font-size: 6px;
    }
  }
}
.office-card-section {
  padding-bottom: 24px;
  @include large {
    flex-wrap: wrap;
    justify-content: center;
  }
}
.pagination-bar {
  margin-top: 50px;
  margin-bottom: 49px;
}
</style>
