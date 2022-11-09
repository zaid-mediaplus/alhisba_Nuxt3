<template>
  <div class="text-feild">
    <input
      class="estimated-value"
      type="text"
      :placeholder="title"
      :class="cardNumber.length <= 0 ? 'input-rtl' : 'input-ltr'"
      v-model="cardNumber"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
const cardNumber = ref("");
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.text-feild {
  margin-bottom: 15px;
  outline: none;
  border: none;
  .estimated-value {
    width: 358px;
    background: #ffffff;
    border: 1.5px solid #dddddd;
    border-radius: 13px;
    padding: 24px;
    font-family: $main-font-family;
    color: $primary-text-color;
    font-size: $font-size-4;
    font-style: normal;
    font-weight: 800;
  }
  input {
    outline: none;
    border: none;
    &.input-rtl {
      direction: rtl;
    }

    &.input-ltr {
      direction: ltr;
    }

    &::placeholder {
      font-family: $main-font-family;
      font-size: $font-size-4;
      font-weight: 800;
      font-style: normal;
      color: #a0a7b5;
      direction: rtl !important;
    }
  }
}
</style>
