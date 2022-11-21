<template>
  <div class="inheritance">
    <CoreAppContainer>
      <CoreAppNavBar :logo="logo" :login="login" color="#112347" />
    </CoreAppContainer>
    <div class="page-bg">
      <CoreAppContainer>
        <CoreInsideContainer>
          <CoreBackButton title="التقييم الفوري" path="/evaluation" />
          <div class="result-form">
            <div class="result-bg position-relative">
              <div
                class="content d-flex justify-content-center align-items-center"
              >
                <span>Content Not Available</span>
              </div>
              <div
                class="total-cost position-absolute d-flex flex-column justify-content-center align-items-center"
              >
                <span class="title">قيمة الميراث</span>
                <span class="value">ك.د 500,000</span>
              </div>
            </div>
          </div>
          <div class="bottons d-flex justify-content-end">
            <div class="share d-flex justify-content-center align-items-center">
              <img src="/icons/share.svg" />
              <span>مشاركة</span>
            </div>
          </div>
          <!-- <div class="d-flex number align-items-center">
            <FormNumberSelect />
            <input type="text" placeholder="رقم الهاتف" />
          </div> -->
        </CoreInsideContainer>
      </CoreAppContainer>
    </div>
  </div>
</template>
<script setup>
import logoIcon from "@/static/images/darkLogo.svg";
import loginIcon from "@/static/icons/dLogin.svg";

const logo = ref(logoIcon);
const login = ref(loginIcon);
</script>
<style lang="scss" scoped>
@import "static/sass/variables.scss";
.number {
  background: #ffffff;
  border: 1.5px solid #dddddd;
  border-radius: 13px;
  width: 358px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-inline: 17px;
}
input {
  border: none;
  outline: none;
  padding-inline: 14px;
  border-right: 1px solid #dddddd;
}
input::placeholder {
  font-family: $main-font-family;
  font-size: 18px;
  font-weight: 800;
  font-style: normal;
  color: #a0a7b5;
  line-height: 23.56px;
}

.inheritance {
  .page-bg {
    background: #0789fb10;
    padding-top: 46px;
    padding-bottom: 101px;
  }
  .content {
    font-family: $main-font-family;
    font-size: 42px;
    font-weight: 900;
    font-style: normal;
    color: #d1dde3;
  }
  .result-bg {
    width: 100%;
    height: 688px;
    background-color: #ffffff;
    border-radius: 34px;
    box-shadow: 0px 5px 90px rgba(8, 15, 52, 0.06);
    padding-left: 84px;
    padding-right: 87px;
    padding-top: 100px;
    margin-bottom: 35px;
    padding-bottom: 31px;

    .total-cost {
      width: 32.344vw;
      box-shadow: 0px 5px 22px rgba(243, 175, 52, 0.24);
      border-radius: 15px;
      background-color: $primary-yellow-color;
      top: -21%;
      right: 50%;
      transform: translate(50%, 50%);

      .title {
        font-family: $main-font-family;
        font-size: 20px;
        font-weight: 800;
        font-style: normal;
        color: $secondary-text-color;
        padding-top: 25px;
        @include extra-large {
          font-size: $font-size-4;
        }
        @include large {
          font-size: $font-size-5;
        }
        @include medium {
          font-size: $font-size-6;
        }
        @include small {
          font-size: 12px;
        }
      }

      .value {
        font-family: $main-font-family;
        font-size: 36px;
        font-weight: 900;
        font-style: normal;
        color: $secondary-text-color;
        padding-bottom: 40px;
        @include extra-large {
          font-size: $font-size-2;
        }
        @include large {
          font-size: 28px;
        }
        @include medium {
          font-size: 24px;
        }
        @include small {
          font-size: $font-size-3;
        }
      }
    }
  }

  .share {
    width: 192px;
    height: 58px;
    border: 2px solid #078afb;
    border-radius: 29px;
    padding: 22px;
    margin-bottom: 102px;
    cursor: pointer;
    padding-inline: 15px;

    span {
      font-family: $main-font-family;
      font-size: $font-size-4;
      font-weight: 800;
      font-style: normal;
      color: $primary-blue-color;
      padding-inline: 15px;
      @include extra-large {
        font-size: $font-size-5;
      }
      @include large {
        font-size: $font-size-6;
      }
      @include medium {
        font-size: 12px;
      }
      @include small {
        font-size: 10px;
      }
    }
  }
}
</style>
