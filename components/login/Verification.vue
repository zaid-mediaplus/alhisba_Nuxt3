<template>
  <div class="header-bg position-absolute"></div>
  <div class="verification-text">
    <span>أدخل رمز التحقق اللذي أرسلناه إلى</span>
  </div>
  <div class="phone-number">
    <span>+965 1234 567 89</span>
  </div>
  <div class="input-code-area d-flex justify-content-around">
    <div class="input-code-field">
      <input type="text" maxlength="1" />
    </div>
    <div class="input-code-field">
      <input type="text" maxlength="1" />
    </div>
    <div class="input-code-field">
      <input type="text" maxlength="1" />
    </div>
    <div class="input-code-field">
      <input type="text" maxlength="1" />
    </div>
  </div>
  <div class="resend-code">
    <span class="resend-code-title">لم يصلك رمز التحقق؟</span>
    <span class="resend-code-link">إعادة إرسال</span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.verification-text {
  text-align: center;
  padding-bottom: 4px;
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
.login-btn {
  padding-inline: 34px;
  padding-bottom: 32px;

  .login-btn-bg {
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
</style>
