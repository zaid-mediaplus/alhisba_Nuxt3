<template>
  <div>
    <div class="border"></div>
    <div class="title">
      <span>صور</span>
    </div>
    <div class="photo d-flex flex-wrap gap-3">
      <img class="position-relative" src="~/assets/images/sell.png" alt="" />

      <img class="position-relative" src="~/assets/images/sell.png" alt="" />
      <img class="position-relative" src="~/assets/images/sell.png" alt="" />
      <img class="position-relative" src="~/assets/images/sell.png" alt="" />
      <img class="position-relative" src="~/assets/images/sell.png" alt="" />
      <img class="position-relative" src="~/assets/images/sell.png" alt="" />
      <img class="position-relative" src="~/assets/images/sell.png" alt="" />
      <img class="position-relative" src="~/assets/images/sell.png" alt="" />
      <img class="position-relative" src="~/assets/images/sell.png" alt="" />
    </div>
    <div
      class="delete-bg position-absolute d-flex justify-content-center align-items-center"
    >
      <img src="~/assets/icons/Delete.svg" alt="" />
    </div>
    <div class="border"></div>
    <div class="d-flex justify-content-between">
      <div class="title">
        <span>فيديو</span>
      </div>
      <img src="~/assets/icons/Delete.svg" alt="" />
    </div>
    <video class="position-relative" width="100%" height="479.96px" controls>
      Your browser does not support the video tag.
    </video>
    <div
      class="video-player position-absolute d-flex justify-content-center align-items-center"
    >
      <img src="~/assets/icons/Polygon1.svg" alt="" />
    </div>
    <div class="border"></div>
    <div class="title">
      <span>مستندات</span>
    </div>
    <div
      class="attachment-bg d-flex justify-content-between align-items-center"
    >
      <div class="d-flex align-items-center">
        <img src="~/assets/icons/document.svg" alt="" />
        <span>اسم الملف </span>
      </div>
      <img src="~/assets/icons/Delete.svg" alt="" />
    </div>
    <div
      class="attachment-bg d-flex justify-content-between align-items-center"
    >
      <div class="d-flex align-items-center">
        <img src="~/assets/icons/document.svg" alt="" />
        <span>اسم الملف </span>
      </div>
      <img src="~/assets/icons/Delete.svg" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.border {
  margin-top: 40px;
  margin-bottom: 40px;
}
.title {
  font-family: $main-font-family;
  font-weight: 800;
  font-size: 24px;
  font-style: normal;
  color: $primary-text-color;
  line-height: 37px;
  padding-bottom: 16px;
}
.video-player {
  top: 62%;
  left: 49%;
  background: #ffffff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
}
.attachment-bg {
  background: #f3f7fb;
  border-radius: 13px;
  padding: 11px 15px;
  cursor: pointer;
  margin-bottom: 15px;

  span {
    font-family: $main-font-family;
    font-weight: 800;
    font-size: 18px;
    font-style: normal;
    color: $primary-blue-color;
  }
}
.delete-bg {
  background: #ffffff;
  border: 1px solid #eff0f6;
  box-shadow: 0px 2px 4px rgba(8, 15, 52, 0.1);
  width: 34px;
  height: 34px;
  border-radius: 50%;
  top: 34%;
  right: 20%;
}
img {
  cursor: pointer;
}
</style>
