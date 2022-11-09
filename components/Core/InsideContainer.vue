<template>
  <div class="inside-container">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../static/sass/variables.scss";
.inside-container {
  padding-inline: 219px;
  position: relative;
  @include extra-extra-extra-large() {
    padding-inline: 227px;
  }
  @include extra-extra-large() {
    padding-inline: 180px;
  }
  @include extra-high-large() {
    padding-inline: 140px;
  }
  @include extra-large() {
    padding-inline: 110px;
  }
  @include large() {
    padding-inline: 30px;
  }
  @include medium() {
    padding-inline: 25px;
  }
  @include small() {
    padding-inline: 20px;
  }
}
</style>
