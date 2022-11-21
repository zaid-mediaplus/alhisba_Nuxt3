<template>
  <div class="faild-section">
    <div class="faild-bg">
      <div class="close">
        <img src="/icons/close.svg" alt="" />
      </div>
      <div class="content">
        <div class="green d-flex justify-content-center align-items-center">
          <div
            class="faild-bg-out d-flex justify-content-center align-items-center"
          >
            <div
              class="faild-bg-in d-flex justify-content-center align-items-center"
            >
              <img src="/icons/w2select.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="faild-text">
          <span>نأسف، حدث خطأ ما</span>
        </div>
        <div class="body-text">
          <span>هذا النص هو مثال لنص يمكن أن يستبدل في نفس </span>
        </div>
        <div class="body-text">
          <span>المساحة، لقد تم توليد هذا النص من مولد النص العربى.</span>
        </div>
      </div>
      <div class="next-btn d-flex justify-content-center">
        <div
          class="next-btn-bg d-flex justify-content-center align-items-center"
        >
          <span>حاول مرة أخرى</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";
.next-btn {
  padding-inline: 34px;
  padding-top: 33px;
  .next-btn-bg {
    width: 100%;
    background: $primary-blue-color;
    box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
    border-radius: 29px;
    padding-top: 14px;
    padding-bottom: 16px;
    cursor: pointer;
    span {
      font-family: $main-font-family;
      color: $secondary-text-color;
      font-weight: 800;
      font-size: $font-size-4;
      line-height: 28.12px;
      font-style: normal;
    }
  }
}
.faild-bg {
  width: 444px;
  background: #ffffff;
  box-shadow: 0px 25px 50px rgba(17, 35, 71, 0.2);
  border-radius: 12px;
  padding-bottom: 47px;
  overflow: hidden;
  .close {
    padding-inline: 19px;
    padding-top: 23px;
    img {
      cursor: pointer;
    }
  }
  .content {
    padding-inline: 44px;
    padding-top: 25px;
    .faild-bg-out {
      width: 131px;
      height: 131px;
      border-radius: 50%;
      background: rgba(255, 115, 92, 0.2);
      .faild-bg-in {
        width: 94px;
        height: 94px;
        box-shadow: 0px 10px 24px rgba(255, 115, 92, 0.25);
        border-radius: 50%;
        background: #ff735c;
        img {
          width: 32px;
          height: 20px;
        }
      }
    }
    .body-text {
      text-align: center;
      span {
        font-family: $main-font-family;
        color: $theard-text-color;
        font-weight: 800;
        font-size: $font-size-6;
        line-height: 18.33px;
        font-style: normal;
      }
    }
    .faild-text {
      text-align: center;
      padding-top: 55px;
      padding-bottom: 15px;
      span {
        font-family: $main-font-family;
        color: #ff735c;
        font-weight: 800;
        font-size: 24px;
        line-height: 37.49px;
        font-style: normal;
      }
    }
  }
}
</style>
