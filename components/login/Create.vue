<template>
  <div class="login-section">
    <div class="login-bg position-relative">
      <div class="close">
        <img src="/icons/close.svg" alt="" />
      </div>
      <div class="logo d-flex justify-content-center">
        <img src="/images/darkLogo.svg" alt="" />
      </div>
      <div class="header-bg position-absolute"></div>
      <div class="create-account-title">
        <span>إنشاء حساب</span>
      </div>
      <!-- <LoginAccountType /> -->
      <LoginCreateField />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";
.login-bg {
  width: 444px;
  background: #ffffff;
  box-shadow: 0px 25px 50px rgba(17, 35, 71, 0.2);
  border-radius: 12px;
  padding-bottom: 41px;
  overflow: hidden;
  .close {
    padding-inline: 19px;
    padding-top: 23px;
    img {
      cursor: pointer;
    }
  }
  .logo {
    padding-bottom: 93px;
  }
  .header-bg {
    width: 795px;
    height: 795px;
    background: rgba(7, 138, 251, 0.1);
    border-radius: 50%;
    top: -100%;
    right: -40%;
    pointer-events: none;
  }
  .create-account-title {
    text-align: center;
    padding-bottom: 4px;
    padding-bottom: 51px;
    span {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-weight: 800;
      font-size: 22px;
      line-height: 34px;
      font-style: normal;
    }
  }
  .phone-number {
    text-align: center;
    direction: ltr;
    padding-bottom: 35px;
    span {
      font-family: $main-font-family;
      color: $primary-blue-color;
      font-weight: 800;
      font-size: 22px;
      line-height: 34.36px;
      font-style: normal;
    }
  }
  .input-code-area {
    width: 100%;
    padding-inline: 44px;
    .input-code-field {
      width: 20%;
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 13px;
      padding-top: 12px;
      padding-bottom: 11px;
      input {
        direction: ltr;
        border: none;
        outline: none;
        text-align: center;
        width: 100%;
        font-family: $main-font-family;
        color: $primary-text-color;
        font-weight: 800;
        font-size: 28px;
        line-height: 36.65px;
        font-style: normal;
      }
    }
  }

  .resend-code {
    text-align: center;
    padding-top: 35px;
    padding-bottom: 52px;
    .resend-code-title {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-weight: 800;
      font-size: $font-size-6;
      line-height: 18.33px;
      font-style: normal;
    }
    .resend-code-link {
      font-family: $main-font-family;
      color: $primary-blue-color;
      font-weight: 800;
      font-size: $font-size-6;
      line-height: 18.33px;
      font-style: normal;
      padding-inline: 8px;
      cursor: pointer;
    }
  }

  .confirm {
    padding-inline: 44px;
    padding-bottom: 93px;
    span {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-weight: 500;
      font-size: $font-size-6;
      line-height: 18.33px;
      font-style: normal;
    }
  }
  .next-btn {
    padding-inline: 34px;
    padding-bottom: 32px;
    padding-top: 74px;
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
  .create-account {
    .title {
      font-family: $main-font-family;
      color: $theard-text-color;
      font-weight: 800;
      font-size: $font-size-5;
      line-height: 20.94px;
      font-style: normal;
    }
    .link {
      font-family: $main-font-family;
      color: $primary-blue-color;
      font-weight: 800;
      font-size: $font-size-5;
      line-height: 20.94px;
      font-style: normal;
      padding-inline: 8px;
      cursor: pointer;
    }
  }
}
</style>
