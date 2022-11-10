<template>
  <div class="rentResult">
    <CoreAppContainer>
      <CoreAppNavBar :logo="logo" :login="login" color="#112347" />
    </CoreAppContainer>
    <div class="page-bg">
      <CoreAppContainer>
        <CoreInsideContainer>
          <CoreBackButton title="التقييم الفوري " path="/evaluation" />
          <div class="result-form">
            <div class="result-bg position-relative">
              <div
                class="total-cost position-absolute d-flex flex-column justify-content-center align-items-center"
              >
                <span class="title">قيمة الإيجار الشهري</span>
                <span class="value">477 د.ك </span>
                <div class="bottom d-flex justify-content-between">
                  <div class="date">
                    <span>تاريخ اخر تحديث نوفمبر 2022</span>
                  </div>
                  <div
                    class="note d-flex justify-content-center align-items-center"
                    @click="showModal = !showModal"
                  >
                    <img src="~/assets/icons/Disclaimer.svg" alt="" />
                    <span>إخلاء مسؤولية الحسبة</span>
                    <CoreModal
                      :show="showModal"
                      :close="() => (showModal = false)"
                    >
                      <div class="modal-bg">
                        <div class="modal-top d-flex">
                          <div
                            class="modal-close-bg d-flex justify-content-center align-items-center"
                            @click="showModal = false"
                          >
                            <img src="~/assets/icons/close.svg" alt="close" />
                          </div>
                        </div>
                        <div
                          class="modal-mid d-flex flex-wrap justify-content-between"
                        >
                          <p>
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،
                            لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك
                            أن تولد. هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                            المساحة، لقد تم توليد هذا النص من مولد النص العربى،
                            حيث يمكنك أن تولد. أن تولد. هذا النص هو مثال لنص
                            يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص
                            من مولد النص العربى، حيث يمكنك أن تولد.
                          </p>
                        </div>
                      </div>
                    </CoreModal>
                  </div>
                </div>
              </div>
              <div
                class="location d-flex justify-content-center align-items-center"
              >
                <img src="~/assets/icons/b-address.svg" alt="" />
                <div class="address">
                  <span>المنطقة:</span>
                  <span class="address-name">الجابرية</span>
                </div>
              </div>
              <div class="specifications">
                <span class="text">مواصفات العقار</span>
              </div>
              <div class="specifications-items">
                <div class="item d-flex justify-content-between">
                  <span class="right">المنطقة</span>
                  <span class="left">المهبولة</span>
                </div>
                <div class="border"></div>
                <div class="item d-flex justify-content-between">
                  <span class="right">المساحة </span>
                  <span class="left">375</span>
                </div>
                <div class="border"></div>
                <div class="item d-flex justify-content-between">
                  <span class="right">عدد الغرف</span>
                  <span class="left">غرفتين</span>
                </div>
                <div class="border"></div>
                <div class="item d-flex justify-content-between">
                  <span class="right">الإرتداد</span>
                  <span class="left">15 - 20 متر</span>
                </div>
                <div class="border"></div>
                <div class="item d-flex justify-content-between">
                  <span class="right">عدد الحمامات</span>
                  <span class="left">2</span>
                </div>
                <div class="border"></div>
                <div class="item d-flex justify-content-between">
                  <span class="right">الجودة</span>
                  <div class="quality d-flex">
                    <div
                      class="select-quality-bg d-flex justify-content-center align-items-center"
                    >
                      <img src="~/assets/icons/wSelect.svg" />
                    </div>
                    <span class="selected-quality">متوسط</span>
                  </div>
                </div>
                <div class="border"></div>
                <div class="padding-top"></div>
                <div class="specifications">
                  <span class="text">مواصفات الموقع </span>
                </div>
                <div class="padding-bottom"></div>
                <div class="item d-flex">
                  <span class="right spic">خدمات العقار </span>
                  <span class="left"> موقف سيارات</span>
                </div>
              </div>
            </div>
            <div class="bottons d-flex justify-content-end">
              <div
                class="share d-flex justify-content-center align-items-center"
              >
                <img src="~/assets/icons/share.svg" />
                <span>مشاركة</span>
              </div>
            </div>
          </div>
        </CoreInsideContainer>

        <div class="border"></div>
        <div class="bank-loan-calc d-flex justify-content-center">
          <div
            class="bank-loan-bg d-flex justify-content-center align-items-center"
          >
            <div class="top d-flex justify-content-center align-items-center">
              <span class="calc-text">احسب القرض الخاص بك مع</span>
              <img src="~/assets/icons/Bank.svg" />
            </div>
            <div>
              <div
                class="clac-now d-flex justify-content-center align-items-center"
              >
                <span>طلب تقييم رسمي</span>
              </div>
            </div>
          </div>
        </div>
        <div class="border"></div>
        <div class="sggested-section d-flex justify-content-between pb-4">
          <div class="sections-main-title">
            <span class="sections-title">عقارات مقترحة للبيع</span>
            <span class="sub-title">- نفس المنطقة</span>
          </div>
          <NuxtLink to="/advertisement">
            <CoreViewAll />
          </NuxtLink>
        </div>
        <div class="SuggestedRealState d-flex">
          <CoreSuggestedRealState />
          <CoreSuggestedRealState />
          <CoreSuggestedRealState />
          <CoreSuggestedRealState />
        </div>
        <div class="border"></div>
        <div class="sggested-section d-flex justify-content-between pb-4">
          <div class="sections-main-title">
            <span class="sections-title">مكاتب عقارية مقترحة</span>
          </div>
          <NuxtLink to="/offices">
            <CoreViewAll />
          </NuxtLink>
        </div>
        <div class="SuggestedRealState d-flex">
          <CoreRealStateOffice />
          <CoreRealStateOffice />
          <CoreRealStateOffice />
          <CoreRealStateOffice />
          <CoreRealStateOffice />
          <CoreRealStateOffice />
          <CoreRealStateOffice />
        </div>

        <div class="ads-section">
          <div class="ads d-flex justify-content-center">
            <img src="~/assets/images/L-AD-4.png" />
          </div>
        </div>
      </CoreAppContainer>
    </div>
  </div>
</template>

<script setup>
import logoIcon from "@/static/images/darkLogo.svg";
import loginIcon from "@/static/icons/dLogin.svg";

const logo = ref(logoIcon);
const login = ref(loginIcon);
const showModal = ref(false);

let toggleModal = () => (showModal = !showModal);
</script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";
.rentResult {
  .page-bg {
    background: #0789fb10;
    padding-top: 46px;
    padding-bottom: 101px;
  }
  .result-bg {
    width: 100%;
    background-color: #ffffff;
    border-radius: 34px;
    box-shadow: 0px 5px 90px rgba(8, 15, 52, 0.06);
    padding-left: 84px;
    padding-right: 87px;
    padding-top: 85px;
    padding-bottom: 18px;
    margin-bottom: 35px;

    .total-cost {
      width: 32.344vw;
      box-shadow: 0px 5px 22px rgba(243, 175, 52, 0.24);
      border-radius: 15px;
      background-color: $primary-yellow-color;
      top: -18%;
      right: 50%;
      transform: translate(50%, 50%);

      .title {
        font-family: $secondary-text-color;
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
      .bottom {
        padding-bottom: 17px;

        .date {
          span {
            font-family: $main-font-family;
            font-size: $font-size-6;
            font-weight: 800;
            font-style: normal;
            color: $secondary-text-color;
            padding-inline: 31.905px;
            @include extra-large {
              font-size: 12px;
            }
            @include large {
              font-size: 10px;
            }
            @include medium {
              font-size: 8px;
            }
            @include small {
              font-size: 6px;
            }
          }
        }
        .note {
          padding-inline: 31.905px;
          cursor: pointer;
          img {
            width: 15.81px;
            height: 15.81px;
          }
          span {
            font-family: $main-font-family;
            font-size: $font-size-6;
            font-weight: 800;
            font-style: normal;
            color: $secondary-text-color;
            text-decoration: underline;
            padding-inline: 7.37px;
          }
        }
      }
    }
    .location {
      padding-bottom: 20px;
      img {
        padding-inline: 12px;
      }
      .address {
        span {
          font-family: $main-font-family;
          font-size: 24px;
          font-weight: 800;
          font-style: normal;
          color: $primary-blue-color;
          @include extra-large {
            font-size: $font-size-3;
          }
          @include large {
            font-size: $font-size-4;
          }
          @include medium {
            font-size: $font-size-5;
          }
          @include small {
            font-size: $font-size-6;
          }
        }
        .address-name {
          padding-inline: 8px;
        }
      }
    }
    .costs {
      // margin-top: 96px;
      padding-bottom: 30px;
      @include extra-large {
        flex-wrap: wrap;
      }
      .cost {
        width: 369px;
        height: 85px;
        background-color: rgba(7, 138, 251, 0.1);
        padding: 18px;
        border-radius: 15px;
        @include medium {
          flex-wrap: wrap;
        }
        .text {
          font-family: $main-font-family;
          font-size: 24px;
          font-weight: 800;
          font-style: normal;
          color: $primary-text-color;
          @include extra-large {
            font-size: $font-size-3;
          }
          @include large {
            font-size: $font-size-4;
          }
          @include medium {
            font-size: $font-size-5;
          }
          @include small {
            font-size: $font-size-6;
          }
        }

        .number {
          font-family: $main-font-family;
          font-size: 24px;
          font-weight: 800;
          font-style: normal;
          color: $primary-blue-color;
          @include extra-large {
            font-size: $font-size-3;
          }
          @include large {
            font-size: $font-size-4;
          }
          @include medium {
            font-size: $font-size-5;
          }
          @include small {
            font-size: $font-size-6;
          }
        }
      }
    }

    .specifications {
      width: 100%;
      height: 61px;
      background-color: rgba(7, 138, 251, 0.1);
      border-radius: 15px;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-right: 16px;

      .text {
        font-family: $main-font-family;
        font-size: 24px;
        font-weight: 800;
        font-style: normal;
        color: $primary-text-color;
        @include extra-large {
          font-size: $font-size-3;
        }
        @include large {
          font-size: $font-size-4;
        }
        @include medium {
          font-size: $font-size-5;
        }
        @include small {
          font-size: $font-size-6;
        }
      }
    }

    .specifications-items {
      padding-top: 22px;

      .item {
        padding-left: 15px;
        padding-right: 15px;

        .right {
          font-family: $main-font-family;
          font-size: $font-size-4;
          font-weight: 800;
          font-style: normal;
          color: $primary-text-color;
          line-height: 28px;
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

        .left {
          font-family: $main-font-family;
          font-size: $font-size-4;
          font-weight: 800;
          font-style: normal;
          color: $primary-blue-color;
          line-height: 28px;
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
        .quality {
          .select-quality-bg {
            background-color: $primary-yellow-color;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            margin-left: 10px;
          }
          span {
            font-family: $main-font-family;
            font-size: $font-size-5;
            color: $primary-yellow-color;
            font-weight: 800;
            font-style: normal;
            line-height: 28px;
          }
        }
      }

      .border {
        border: 1px solid rgba(137, 150, 162, 0.13);
        margin-top: 22px;
        margin-bottom: 14px;
      }

      .padding-top {
        padding-top: 26px;
      }

      .padding-bottom {
        padding-top: 32px;
      }

      .spic {
        width: 30%;
      }
    }
  }

  .bottons {
    margin-bottom: 33px;

    .share {
      width: 192px;
      height: 58px;
      border: 2px solid #078afb;
      border-radius: 29px;
      padding: 22px;
      cursor: pointer;

      span {
        font-family: $main-font-family;
        font-size: $font-size-4;
        font-weight: 800;
        font-style: normal;
        color: $primary-blue-color;
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

  .bank-loan-calc {
    padding-top: 43px;
    margin-bottom: 51px;

    .bank-loan-bg {
      width: 100%;
      background-color: #ffffff;
      border: 1px solid #dfdfdf;
      box-shadow: 0px 64px 194px rgba(0, 0, 0, 0.1);
      border-radius: 22px;
      padding-top: 36px;
      padding-bottom: 40px;
      margin-bottom: 51px;
      @include large() {
        flex-wrap: wrap;
      }
      .top {
        @include small {
          flex-wrap: wrap;
        }
        .calc-text {
          color: $primary-text-color;
          font-family: $main-font-family;
          font-size: 21px;
          font-weight: 800;
          font-style: normal;
          line-height: 33px;
          padding-left: 16px;
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
        img {
          padding-inline-end: 133px;
          @include medium {
            padding-inline-end: 0;
          }
        }
      }
      .clac-now {
        width: 205px;
        height: 58px;
        box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
        border-radius: 29px;
        background-color: $primary-blue-color;
        height: 58px;
        cursor: pointer;

        span {
          color: $secondary-text-color;
          font-family: $main-font-family;
          font-size: $font-size-4;
          font-weight: 800;
          font-style: normal;
          line-height: 28px;
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
  }

  .sggested-section {
    margin-top: 54px;
    @include small() {
      display: flex;
      flex-wrap: wrap;
    }
    .sections-title {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: $font-size-2;
      line-height: 50px;
      font-weight: 800;
      padding-left: 13px;
      @include extra-large {
        font-size: 28px;
      }
      @include large {
        font-size: 24px;
      }
      @include medium {
        font-size: 20px;
      }
      @include small {
        font-size: 18px;
      }
    }

    .sub-title {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: 19px;
      line-height: 29px;
      font-weight: 500;
      font-style: normal;
      @include extra-large {
        font-size: 16px;
      }
      @include large {
        font-size: 14px;
      }
      @include medium {
        font-size: 12px;
      }
      @include small {
        font-size: 10px;
      }
    }
  }

  .SuggestedRealState {
    margin-bottom: 73px;
    gap: 33px;
    width: 100%;
    @include extra-large() {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .share {
    img {
      padding-inline: 15px;
    }
    span {
      padding-inline: 15px;
    }
  }
}
.ads-section {
  .ads {
    img {
      @include extra-large {
        width: 700px;
      }
      @include medium {
        width: 300px;
        height: 250px;
        object-fit: cover;
      }
    }
  }
}
.modal-bg {
  width: 539px;
  background: #ffffff;
  box-shadow: 0px 25px 50px rgba(17, 35, 71, 0.2);
  border-radius: 26px;
  padding-top: 20px;
  padding-inline: 40px;
  height: 258px;
}
.modal-top {
  width: 100%;
  padding-bottom: 20px;
  .modal-close-bg {
    width: 32px;
    height: 32px;
    background: #8996a2;
    opacity: 0.12;
    border-radius: 50%;
    cursor: pointer;
  }
}
.modal-mid {
  p {
    font-family: $main-font-family;
    color: $primary-text-color;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    font-style: normal;
  }
}
</style>
