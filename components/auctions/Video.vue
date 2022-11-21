<template>
  <div class="learn-video">
    <div
      class="bg d-flex justify-content-between align-items-center"
      @click="showModal = !showModal"
    >
      <div class="icon-bg d-flex justify-content-center align-items-center">
        <img src="/icons/videoBg.svg" alt="" />
      </div>
      <div class="title">
        <span>شاهد هذا الفيديو لمعرفة كيفية المشاركة</span>
      </div>
      <CoreModal :show="showModal" :close="() => (showModal = false)">
        <div class="modal-bg d-flex justify-content-center">
          <div class="modal-top d-flex">
            <div
              class="modal-close-bg d-flex justify-content-center align-items-center"
              @click="showModal = false"
            >
              <img src="/icons/close.svg" alt="close" />
            </div>
          </div>
          <iframe
            width="736px"
            height="392px"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          >
          </iframe>
        </div>
      </CoreModal>
    </div>
  </div>
</template>

<script setup>
const showModal = ref(false);

let toggleModal = () => (showModal = !showModal);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.learn-video {
  margin-bottom: 30px;
  width: 48%;
  .bg {
    background: rgba(7, 138, 251, 0.1);
    border-radius: 13px;
    padding: 11px;
    cursor: pointer;
    .icon-bg {
      background: $primary-blue-color;
      width: 55px;
      height: 55px;
      border-radius: 50%;
    }
    .title {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-weight: 800;
      font-size: 21px;
      font-style: normal;
      line-height: 27.49px;
      padding-left: 13px;
      padding-inline-start: 34px;
      @include inside-font-extra-lg;
      @include inside-font-lg;
      @include inside-font-medium;
      @include inside-font-small;
    }
  }
}

.modal-bg {
  width: 100%;
  min-height: 100%;
  background: #ffffff;
  box-shadow: 0px 25px 50px rgba(17, 35, 71, 0.2);
  border-radius: 26px;
  .modal-top {
    .modal-close-bg {
      width: 32px;
      height: 32px;
      background: #8996a2;
      opacity: 0.12;
      border-radius: 50%;
      margin-inline: 15px;
      margin-left: 36%;
      cursor: pointer;
      position: absolute;
      z-index: 10;
      top: 20px;
    }
  }
  iframe {
    border-radius: 26px;
  }
}
</style>
