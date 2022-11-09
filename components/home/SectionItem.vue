<template>
  <NuxtLink :to="path">
    <div class="item">
      <div
        class="section-container d-flex justify-content-center align-items-stretch"
      >
        <div class="items d-flex flex-column justify-content-around">
          <div class="d-flex justify-content-center">
            <img class="icon" :src="icon" />
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <span>{{ title }}</span>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  title: String,
  path: String,
  icon: String,
});
</script>

<style lang="scss">
@import "/static/sass/variables.scss";

.item {
  .section-container {
    /* width: 192px;
    height: 216px; */
    padding-top: 20px;
    padding-bottom: 20px;
    /* padding-top: 50px;
    padding-bottom: 38px; */
    padding-inline: 47px;
    background-color: rgba(7, 138, 251, 0.1);
    cursor: pointer;
    border-radius: 21px;
    /* @include extra-large {
      width: 200px;
      height: 224px;
    }
    @include large {
      width: 170px;
      height: 190px;
    }
    @include medium() {
      width: 140px;
      height: 170px;
    }
    @include small() {
      width: 100px;
      height: 130px;
    } */
    .icon {
      width: 96px;
      height: 96px;
      /* @include extra-large {
        width: 85px;
        height: 85px;
      }
      @include large {
        width: 75px;
        height: 75px;
      }
      @include medium() {
        width: 65px;
        height: 65px;
      }
      @include small() {
        width: 50px;
        height: 50px;
      } */
    }

    span {
      font-family: $main-font-family;
      font-size: $font-size-3;
      color: $primary-blue-color;
      line-height: 27px;
      padding-top: 30px;
      @include card-title-extra-lg;
      @include card-title-lg;
      @include card-title-medium;
      @include card-title-small;
      text-align: center;
      max-width: 100px;
      height: 84px;
    }
  }
  a {
    text-decoration: none;
  }
}
</style>
