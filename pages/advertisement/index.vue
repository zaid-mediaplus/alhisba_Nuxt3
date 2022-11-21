<template>
  <div>
    <CoreInsideHeader title="الإعلانات" :img="header" bottom="-130px" />
    <div class="filter-container">
      <CoreFilter showBtn="true" />
    </div>
    <CoreAppContainer>
      <div class="main-title d-flex justify-content-between align-items-center">
        <div class="right">
          <span class="title"> عقارات للبيع</span>
          <span class="dote">.</span>
          <span class="result">68,444 نتيجة</span>
        </div>
        <div class="left d-flex justify-content-between">
          <div class="list-icon d-flex gap-3">
            <img
              :src="!isRowLayoutEnabled ? grayRow : blouRow"
              @click="isRowLayoutEnabled = true"
            />
            <img
              :src="!isRowLayoutEnabled ? blouColumn : grayColumn"
              @click="isRowLayoutEnabled = false"
            />
          </div>
          <div class="left-border"></div>
          <div class="sort-by d-flex">
            <span class="sort">ترتيب بحسب:</span>
            <div class="by d-flex">
              <!-- <span>الأحدث إلى الأقدم </span>
            <img src="~/assets/icons/downarrow.svg" alt="" /> -->
              <CoreAdSorting
                title="الأحدث إلى الأقدم"
                :items="['الأقدم الى الأحدث', 'TEST', 'TEST', 'TEST', 'TEST']"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="lands-card-section d-flex flex-wrap gap-4"
        :class="!isRowLayoutEnabled ? 'flex-row' : 'flex-column'"
      >
        <NuxtLink to="/advertisement/1">
          <div class="d-flex flex-wrap gap-4">
            <div v-for="index in 12" :key="index" v-show="!isRowLayoutEnabled">
              <CoreSuggestedRealState />
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/advertisement/1">
          <div v-for="index in 7" :key="index" v-show="isRowLayoutEnabled">
            <CoreRealStateRow />
          </div>
        </NuxtLink>
      </div>
      <div class="pagination d-flex">
        <CorePagination />
      </div>
      <div class="ads-border"></div>
    </CoreAppContainer>
  </div>
</template>

<script setup>
const isRowLayoutEnabled = ref(true);
// const blouColumn = "~/assets/icons/list-2.svg";
// const grayColumn = "~/assets/icons/glist-1.svg";
// const blouRow = "~/assets/icons/blist-2.svg";
// const grayRow = "~/assets/icons/list-1.svg";
const toggleLayout = () =>
  (isRowLayoutEnabled.value = !isRowLayoutEnabled.value);

import haederIcon from "~/assets/icons/advertisement.svg";

import blouColumnIcon from "~/assets/icons/list-2.svg";
const blouColumn = ref(blouColumnIcon);
import grayColumnIcon from "~/assets/icons/glist-1.svg";
const grayColumn = ref(grayColumnIcon);
import blouRowIcon from "~/assets/icons/blist-2.svg";
const blouRow = ref(blouRowIcon);
import grayRowIcon from "~/assets/icons/list-1.svg";
const grayRow = ref(grayRowIcon);

const header = ref(haederIcon);
</script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";

.filter-container {
  padding-inline: 250px;
}
.pagination {
  margin-top: 77px;
  margin-bottom: 49px;
}
.main-title {
  padding-bottom: 12px;
  width: 100%;
  .right {
    .title {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: $font-size-2;
      font-weight: 800;
      font-style: normal;
    }
    .result,
    .dote {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: 15px;
      font-weight: 800;
      font-style: normal;
    }
  }
  .left {
    width: 25%;
    .list-icon {
      img {
        cursor: pointer;
        width: 21.79px;
        height: 22px;
      }
    }
    .sort {
      font-family: $main-font-family;
      color: #a0a7b5;
      font-size: 15px;
      font-weight: 500;
      font-style: normal;
    }
    .by {
      cursor: pointer;
      span {
        font-family: $main-font-family;
        color: $primary-blue-color;
        font-size: 15px;
        font-weight: 500;
        font-style: normal;
        padding-inline: 10px;
      }
    }
  }
}
.ads-border {
  margin-bottom: 59px;
  border: 1px solid rgba(137, 150, 162, 0.13);
}
.dote {
  padding-inline: 28px;
}
a {
  text-decoration: none;
}
</style>
