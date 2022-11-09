<template>
  <div class="app-container">
    <slot />
  </div>
</template>

<style lang="scss">
@import "../../static/sass/variables.scss";
.app-container {
  padding-inline: 160px;
  position: relative;

  @include extra-extra-extra-large() {
    padding-inline: 160px;
  }
  @include extra-extra-large() {
    padding-inline: 130px;
  }
  @include extra-high-large() {
    padding-inline: 90px;
  }
  @include extra-large() {
    padding-inline: 50px;
  }
  @include large() {
    padding-inline: 100px;
  }
  @include medium() {
    padding-inline: 60px;
  }
  @include small() {
    padding-inline: 20px;
  }
}
</style>
