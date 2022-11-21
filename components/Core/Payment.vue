<template>
  <div class="payment">
    <CoreAppContainer>
      <CoreAppNavBar
        logo="/images/darkLogo.svg"
        login="/icons/dLogin.svg"
        color="#112347"
      />
    </CoreAppContainer>
    <div class="page-bg">
      <CoreAppContainer>
        <CoreInsideContainer>
          <!-- <div class="notification d-flex justify-content-center">
            <div
              class="
                notification-green-bg
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <div
                class="green d-flex justify-content-center align-items-center"
              >
                <img src="/icons/wSelect.svg" alt="" />
              </div>
              <div class="title d-flex flex-column">
                <span class="success-text">تمت العملية بنجاح</span>
                <span class="descrip-text"
                  >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</span
                >
              </div>
              <div
                class="
                  close-bg
                  d-flex
                  justify-content-center
                  align-items-center
                "
              >
                <img src="/icons/close.svg" alt="" />
              </div>
            </div>
          </div> -->
          <!-- <div class="notification d-flex justify-content-center">
            <div
              class="
                notification-red-bg
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <div class="red d-flex justify-content-center align-items-center">
                <img src="/icons/wSelect.svg" alt="" />
              </div>
              <div class="title d-flex flex-column">
                <span class="faild-text">نأسف، حدث خطأ ما!</span>
                <span class="descrip-text"
                  >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</span
                >
              </div>
              <div
                class="
                  close-bg
                  d-flex
                  justify-content-center
                  align-items-center
                "
              >
                <img src="/icons/close.svg" alt="" />
              </div>
            </div>
          </div> -->
          <div class="payment-form">
            <div class="payment-bg">
              <div class="property-status">
                <div class="property-title">معلومات البطاقة</div>
              </div>
              <div class="card-details d-flex">
                <div class="card-type">
                  <input
                    :class="cardNumber.length <= 0 ? 'input-rtl' : 'input-ltr'"
                    type="text"
                    placeholder="نوع البطاقة"
                    v-model="cardNumber"
                  />
                  <div class="line"></div>
                </div>
                <div class="card-information d-flex">
                  <div class="card-cvv">
                    <input type="text" placeholder="CVV" maxlength="3" />
                  </div>
                  <div class="date d-flex">
                    <input type="text" placeholder="YY" maxlength="2" />
                    <span>/</span>
                    <input type="text" placeholder="MM" maxlength="2" />
                  </div>
                </div>
              </div>
              <div class="text-feild">
                <input
                  class="estimated-value"
                  type="text"
                  placeholder="أدخل القيمة المقدّرة"
                />
              </div>
              <div class="specifications d-flex align-items-baseline">
                <span class="cost">تكلفة التقييم:</span>
                <span class="price">150</span>
                <div class="d-flex -align-items-end">
                  <span class="dk">د.ك</span>
                </div>
              </div>
              <div class="save-card d-flex align-items-center">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                </div>
                <span>حفظ هذه البطاقة</span>
              </div>
            </div>
            <div class="calc-btn d-flex justify-content-end">
              <NuxtLink to="/payment">
                <div
                  class="calc d-flex justify-content-center align-items-center"
                >
                  <span>ادفع الآن</span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </CoreInsideContainer>
      </CoreAppContainer>
    </div>
  </div>
</template>

<script setup>
const cardNumber = ref("");
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.payment {
  .page-bg {
    background: #0789fb10;
    padding-top: 200px;
    padding-bottom: 101px;
  }
  .notification {
    .notification-green-bg {
      background: rgba(35, 215, 160, 0.14);
      height: 101px;
      border-radius: 13px;
      width: 80%;
      padding: 18px;
      margin-bottom: 32px;
      .green {
        width: 48.79px;
        height: 48.79px;
        background: #0ac581;
        box-shadow: 0px 5.19084px 12.458px rgba(52, 224, 162, 0.25);
        border-radius: 50%;
      }
      .title {
        .success-text {
          font-family: $main-font-family;
          font-size: 24px;
          color: #0ac581;
          font-weight: 800;
          font-style: normal;
        }
      }
    }
    .notification-red-bg {
      background: rgba(255, 115, 92, 0.2);
      height: 101px;
      border-radius: 13px;
      width: 80%;
      padding: 18px;
      margin-bottom: 32px;
      .red {
        width: 48.79px;
        height: 48.79px;
        background: #ff735c;
        box-shadow: 0px 5.19084px 12.458px rgba(255, 115, 92, 0.25);
        border-radius: 50%;
      }
      .title {
        .faild-text {
          font-family: $main-font-family;
          font-size: 24px;
          color: #ff735c;
          font-weight: 800;
          font-style: normal;
        }
      }
    }
    .descrip-text {
      font-family: $main-font-family;
      font-size: $font-size-5;
      color: $primary-text-color;
      font-weight: 500;
      font-style: normal;
    }
    .close-bg {
      background: #00234514;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .payment-bg {
    width: 934px;
    background: $secondary-text-color;
    border: 1px solid #eff0f7;
    box-shadow: 0px 5px 90px rgba(8, 15, 52, 0.06);
    padding-right: 101px;
    padding-left: 102px;
    padding-top: 38px;
    padding-bottom: 50px;
    border-radius: 34px;
    .property-status {
      .property-title {
        font-family: $main-font-family;
        font-size: 24px;
        color: $primary-text-color;
        font-weight: 800;
        font-style: normal;
        text-align: start;
        padding-top: calc(58px - 13px);
        padding-bottom: 25px;
      }
    }
    .text-feild {
      margin-bottom: 17px;
      .estimated-value {
        width: 100%;
        background: #ffffff;
        border: 1.5px solid #dddddd;
        border-radius: 13px;
        padding: 24px;
        font-family: $main-font-family;
        color: rgba(17, 35, 71, 0.4);
        font-size: $font-size-4;
        font-style: normal;
        font-weight: 800;
        outline: none;
      }
    }
    .card-details {
      width: 100%;
      background: #ffffff;
      border: 1.5px solid #dddddd;
      border-radius: 13px;
      padding: 24px;
      margin-bottom: 17px;

      .card-type {
        width: 70%;
        position: relative;
        input {
          &.input-rtl {
            direction: rtl;
          }

          &.input-ltr {
            direction: ltr;
          }

          &::placeholder {
            font-family: $main-font-family;
            font-size: $font-size-4;
            font-weight: 800;
            font-style: normal;
            color: #a0a7b5;
            direction: rtl !important;
          }
          width: 90%;
          outline: none;
          border: none;
          /* direction: ltr; */
        }
        .line::after {
          content: "";
          width: 1px;
          height: 34px;
          background-color: #8996a2;
          position: absolute;
          left: 25px;
          top: 0;
        }
      }
      .card-information {
        width: 30%;
        font-family: $main-font-family;
        font-size: $font-size-4;
        font-weight: 800;
        font-style: normal;
        color: #a0a7b5;

        ::placeholder {
          text-align: center;
          font-family: $main-font-family;
          font-size: $font-size-4;
          font-weight: 800;
          font-style: normal;
          color: #a0a7b5;
        }
        .card-cvv {
          width: 40%;
          input {
            width: 100%;
            outline: none;
            border: none;
            direction: ltr;
          }
        }
        .date {
          width: 60%;
          ::placeholder {
            text-align: center;
            font-family: $main-font-family;
            font-size: $font-size-4;
            font-weight: 800;
            font-style: normal;
            color: #a0a7b5;
          }
          input {
            width: 30%;
            outline: none;
            border: none;
            direction: ltr;
          }
          span {
            width: 10%;
            color: #a0a7b5;
            text-align: center;
            font-weight: 800;
            font-size: $font-size-4;
            font-style: normal;
          }
        }
      }
    }
    .specifications {
      width: 100%;
      height: 66px;
      background-color: rgba(7, 138, 251, 0.1);
      border-radius: 15px;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-right: 16px;
      margin-bottom: 24px;

      .cost {
        font-family: $main-font-family;
        font-size: 24px;
        font-weight: 800;
        font-style: normal;
        color: $primary-blue-color;
      }
      .price {
        font-family: $main-font-family;
        font-size: 28px;
        font-weight: 900;
        font-style: normal;
        color: $primary-blue-color;
        padding-inline: 12px;
      }
      .dk {
        font-family: $main-font-family;
        font-size: 16.72px;
        font-weight: 800;
        font-style: normal;
        color: $primary-blue-color;
      }
    }
    .save-card {
      input {
        width: 46px;
        height: 28px;
        box-shadow: none;
      }
      span {
        font-family: $main-font-family;
        font-size: 18px;
        color: $primary-text-color;
        font-weight: 800;
        font-style: normal;
        padding-inline: 27px;
      }
    }
  }
  .calc {
    width: 165px;
    box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
    border-radius: 29px;
    background-color: $primary-blue-color;
    height: 58px;
    margin-bottom: 101px;
    margin-top: 40px;
    cursor: pointer;

    span {
      font-family: $main-font-family;
      color: $secondary-text-color;
      font-size: $font-size-4;
      font-weight: 800;
      font-style: normal;
    }
  }
}
</style>
