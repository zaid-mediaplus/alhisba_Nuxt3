<template>
  <div class="item-container">
    <slot />
  </div>
</template>

<style lang="scss">
@import "../../static/sass/variables.scss";

.item-container {
  padding-inline: 151px;
  position: relative;
  @include extra-large() {
    padding-inline: 110px;
  }
  @include large() {
    padding-inline: 90px;
  }
  @include medium() {
    padding-inline: 50px;
  }
  @include small() {
    padding-inline: 30px;
  }
}
</style>
