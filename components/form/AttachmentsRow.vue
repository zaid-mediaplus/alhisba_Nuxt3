<template>
  <div class="attachment-bg d-flex justify-content-between align-items-center">
    <div class="right d-flex align-items-center">
      <img src="/icons/document.svg" alt="" />
      <span>{{ title }} </span>
    </div>
    <div class="left">
      <span>DOC, DOCX, PDF (5 MB)</span>
    </div>
    <input multiple id="file-upload" type="file" />
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style lang="scss">
@import "../../static/sass/variables.scss";

.attachment-bg {
  width: 100%;
  padding-inline: 17px;
  cursor: pointer;
  background: linear-gradient(
    180deg,
    #edf7ff 50%,
    rgba(255, 255, 255, 0) 138.19%
  );
  border: 2px dashed #dddddd;
  border-radius: 13px;
  .right {
    span {
      color: rgba(7, 138, 251, 0.6);
      font-family: $main-font-family;
      font-size: $font-size-5;
      line-height: 20.94px;
      font-style: normal;
      font-weight: 800;
    }
  }
  .left {
    color: rgba(7, 138, 251, 0.6);
    font-family: $main-font-family;
    font-size: 13px;
    line-height: 17.02px;
    font-style: normal;
    font-weight: 800;
  }
}
input[type="file"] {
  display: none;
  width: 0.1px;
  height: 0.1px;
}
</style>
