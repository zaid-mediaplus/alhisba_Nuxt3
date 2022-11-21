<template>
  <div
    class="profile-text-field d-flex justify-content-between align-items-center"
  >
    <div class="text-field">
      <input :type="type" />
    </div>
    <div class="image">
      <img src="/icons/profile/edit.svg" alt="" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
});
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.profile-text-field {
  background: #ffffff;
  border: 1.5px solid #dddddd;
  border-radius: 13px;
  width: 100%;
  padding-inline: 17px;
  padding-top: 23px;
  padding-bottom: 23px;
  margin-bottom: 28px;
  .text-field {
    width: 90%;
  }
  input {
    border: none;
    outline: none;
    font-family: $main-font-family;
    color: $primary-text-color;
    font-size: $font-size-4;
    font-weight: 800;
    font-style: normal;
    width: 100%;
  }
  .image {
    cursor: pointer;
  }
}
</style>
