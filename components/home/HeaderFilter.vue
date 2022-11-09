<template>
  <div class="home-filter">
    <div class="filter-bg d-flex align-items-center">
      <div class="dropdown-list d-flex align-items-center">
        <div class="items-dropdown">
          <FormDropDown
            title="نوع الإعلان"
            :icon="arrow"
            :showBorder="false"
            padding="0"
            marginBottom="0"
          />
        </div>
        <div class="line"></div>
        <div class="items-dropdown">
          <FormDropDown
            :items="[
              'الشامية',
              'السالمية',
              'صباح السالم',
              'الفروانية',
              'الفروانية',
              'الأندلس',
              'جابر الأحمد',
              'الأحمدي',
            ]"
            title="المنطقة"
            :icon="arrow"
            :showBorder="false"
            padding="0"
            marginBottom="0"
          />
        </div>
        <div class="line"></div>
        <div class="items-dropdown">
          <FormDropDown
            title="المساحة"
            :icon="arrow"
            :showBorder="false"
            padding="0"
            marginBottom="0"
          />
        </div>
      </div>
      <div class="search-btn d-flex">
        <div class="btn-bg d-flex justify-content-center align-items-center">
          <img class="search-icon" src="/static/icons/filterIcons/search.svg" />
          <span>بحث</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import arrowIcon from "/static/icons/filterIcons/arrow.svg";

const arrow = ref(arrowIcon);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.home-filter {
  padding-bottom: 8%;
  .filter-bg {
    width: 100%;
    padding: 10px 21px 10px 10px;
    background: #ffffff;
    box-shadow: 0px 25px 50px rgba(17, 35, 71, 0.2);
    border-radius: 12px;
    @include small() {
      flex-wrap: wrap;
    }
    /* @media (max-width: 1228px) {
      width: 80%;
    }
    @media (max-width: 769px) {
      flex-wrap: wrap;
    } */
    .dropdown-list {
      /* @media (max-width: 769px) {
        flex-wrap: wrap;
      } */
      @include small() {
        width: 100%;
        justify-content: center;
      }
      .items-dropdown {
        width: 218px;
        @include large {
          width: 165px;
        }
        @include medium {
          width: 125px;
        }
        @include small() {
          width: 90px;
        }
        & > div {
          height: 48px;
        }
      }
      .line {
        width: 1px;
        height: 32px;
        background-color: #8996a2;
        margin-inline: 5px;
      }
    }
    .search-btn {
      padding-inline-start: 19px;
      @include small() {
        width: 100%;
        justify-content: center;
      }
      .btn-bg {
        width: 138px;
        height: 48px;
        background-color: $primary-blue-color;
        box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
        border-radius: 12px;
        cursor: pointer;
        .search-icon {
          width: 15px;
          height: 15px;
        }
        span {
          font-family: $main-font-family;
          color: $secondary-text-color;
          font-size: $font-size-4;
          font-weight: 800;
          font-style: normal;
          padding-right: 11px;
        }
      }
    }
  }
}
</style>
