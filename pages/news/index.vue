<template>
  <CoreInsideHeader title="الأخبار العقارية" :img="news" bottom="-135px" />
  <div class="page-bg">
    <CoreAppContainer>
      <div class="main-title">
        <span>آخر الأخبار العقارية</span>
      </div>
      <div class="news-card-section d-flex gap-4">
        <NuxtLink to="/news/1">
          <HomeAppNews :showDescription="false" />
        </NuxtLink>
        <NuxtLink to="/news/1">
          <HomeAppNews :showDescription="false" />
        </NuxtLink>
        <NuxtLink to="/news/1">
          <HomeAppNews :showDescription="false" />
        </NuxtLink>
        <NuxtLink to="/news/1">
          <HomeAppNews :showDescription="false" />
        </NuxtLink>
      </div>
      <div class="news-card-section d-flex gap-4">
        <NuxtLink to="/news/1">
          <HomeAppNews :showDescription="false" />
        </NuxtLink>
        <NuxtLink to="/news/1">
          <HomeAppNews :showDescription="false" />
        </NuxtLink>
        <NuxtLink to="/news/1">
          <HomeAppNews :showDescription="false" />
        </NuxtLink>
        <NuxtLink to="/news/1">
          <HomeAppNews :showDescription="false" />
        </NuxtLink>
      </div>
      <div class="news-card-section d-flex gap-4">
        <NuxtLink to="/news/1">
          <HomeAppNews :showDescription="false" />
        </NuxtLink>
        <NuxtLink to="/news/1">
          <HomeAppNews :showDescription="false" />
        </NuxtLink>
        <NuxtLink to="/news/1">
          <HomeAppNews :showDescription="false" />
        </NuxtLink>
        <NuxtLink to="/news/1">
          <HomeAppNews :showDescription="false" />
        </NuxtLink>
      </div>
      <div class="pagination-bar d-flex gap-4">
        <CorePagination />
      </div>
      <div class="border"></div>
    </CoreAppContainer>
  </div>
</template>

<script setup>
import newsIcon from "~/assets/icons/aboutus.svg";
const news = ref(newsIcon);
</script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";
.page-bg {
  background: #0789fb10;
  padding-top: 200px;
  padding-bottom: 121px;
  .main-title {
    padding-bottom: 13px;
    span {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: $font-size-2;
      font-weight: 800;
      font-style: normal;
      line-height: 49.98px;
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
  }
  .news-card-section {
    padding-bottom: 24px;
    @include large {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>
