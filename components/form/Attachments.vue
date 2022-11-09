<template>
  <div class="attachment">
    <div class="attachments-bg">
      <label for="file-upload" class="d-flex justify-content-center">
        <div
          class="attachments-content d-flex flex-column justify-content-center align-items-center"
        >
          <span><img :src="icon" alt="" /></span>
          <span class="title">{{ title }}</span>
        </div>
      </label>
    </div>
  </div>
  <input multiple id="file-upload" type="file" />
</template>

<script setup>
const props = defineProps({
  title: String,
  icon: String,
});
</script>

<style lang="scss">
@import "../../static/sass/variables.scss";
.attachment {
  .attachments-bg {
    width: auto;
    height: 144px;
    margin-top: 18px;
    cursor: pointer;

    background: linear-gradient(
      180deg,
      #edf7ff 50%,
      rgba(255, 255, 255, 0) 138.19%
    );
    border: 2px dashed #dddddd;
    border-radius: 13px;
  }
  .title {
    font-family: $main-font-family;
    font-size: $font-size-4;
    font-weight: 800;
    font-style: normal;
    color: rgba(7, 138, 251, 0.6);
  }
}
input[type="file"] {
  display: none;
  width: 0.1;
  height: 0.1;
}
</style>
