<template>
  <div class="text-feild">
    <input type="text" :placeholder="title" id="text-color" />
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.text-feild {
  width: 100%;
  margin-bottom: 15px;
  input {
    border: none;
    outline: none;
    width: 100%;
    background: #ffffff;
    border: 1.5px solid #dddddd;
    border-radius: 13px;
    padding-top: 22px;
    padding-bottom: 17px;
    padding-inline: 16px;
    font-family: $main-font-family;
    color: $primary-text-color;
    font-size: $font-size-4;
    font-style: normal;
    font-weight: 800;
    @include extra-large {
      font-size: $font-size-5;
    }
    @include large {
      font-size: $font-size-6;
    }
    @include medium {
      font-size: 12px;
    }
    @include small() {
      font-size: 10px;
    }
  }

  input::placeholder {
    font-family: $main-font-family;
    font-size: $font-size-4;
    font-style: normal;
    font-weight: 800;
    color: rgba(17, 35, 71, 0.4);
    @include extra-large {
      font-size: $font-size-5;
    }
    @include large {
      font-size: $font-size-6;
    }
    @include medium {
      font-size: 12px;
    }
    @include small() {
      font-size: 10px;
    }
  }
}
</style>
