<template>
  <div class="successful-section">
    <div class="successful-bg">
      <div class="close">
        <img src="~/assets/icons/close.svg" alt="" />
      </div>
      <div class="content">
        <div class="green d-flex justify-content-center align-items-center">
          <div
            class="successful-bg-out d-flex justify-content-center align-items-center"
          >
            <div
              class="successful-bg-in d-flex justify-content-center align-items-center"
            >
              <img src="~/assets/icons/w2select.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="successful-text">
          <span>تم انشاء حسابك بنجاح!</span>
        </div>
      </div>
      <div class="next-btn d-flex justify-content-center">
        <div
          class="next-btn-bg d-flex justify-content-center align-items-center"
        >
          <span>اذهب للصفحة الرئيسية</span>
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
  padding-top: 88px;
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
.successful-bg {
  width: 444px;
  background: #ffffff;
  box-shadow: 0px 25px 50px rgba(17, 35, 71, 0.2);
  border-radius: 12px;
  padding-bottom: 48px;
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
    .successful-bg-out {
      width: 131px;
      height: 131px;
      border-radius: 50%;
      background: rgba(35, 215, 160, 0.1);
      .successful-bg-in {
        width: 94px;
        height: 94px;
        box-shadow: 0px 10px 24px rgba(52, 224, 162, 0.25);
        border-radius: 50%;
        background: $primary-green-color;
        img {
          width: 32px;
          height: 20px;
        }
      }
    }
    .successful-text {
      text-align: center;
      padding-top: 55px;
      span {
        font-family: $main-font-family;
        color: $primary-blue-color;
        font-weight: 800;
        font-size: 24px;
        line-height: 37.49px;
        font-style: normal;
      }
    }
  }
}
</style>
