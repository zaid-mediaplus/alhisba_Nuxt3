<template>
  <textarea class="additional-details" :placeholder="title"></textarea>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.additional-details {
  width: 100%;
  height: 132px;
  resize: none;
  background: #ffffff;
  border: 1.5px solid #dddddd;
  border-radius: 13px;
  padding: 24px 18px 0 0;
  textarea {
    font-family: $main-font-family;
    font-size: $font-size-4;
    font-style: normal;
    color: $primary-text-color;
    font-weight: 800;
    outline: none;
    outline: none;
  }
  textarea::placeholder {
    font-family: $main-font-family;
    font-weight: 800;
    font-size: $font-size-4;
    font-style: normal;
    color: rgba(17, 35, 71, 0.4);
    font-weight: 800;
  }
}
</style>
