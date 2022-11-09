<template>
  <div class="result">
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
                    <img src="/static/icons/Disclaimer.svg" alt="" />
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
                            <img src="/static/icons/close.svg" alt="close" />
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
              <div class="specifications">
                <span class="text">مواصفات العقار</span>
              </div>
              <div class="specifications-items">
                <div class="item d-flex justify-content-between">
                  <span class="right">مهندس معماري</span>
                  <span class="left">ك.د 2,500</span>
                </div>
                <div
                  class="progres-percentage d-flex justify-content-between align-items-center"
                >
                  <div class="progres-bar position-relative">
                    <div class="blue position-absolute"></div>
                    <div class="gray"></div>
                  </div>
                  <span>9%</span>
                </div>
                <div class="border"></div>
                <div class="item d-flex justify-content-between">
                  <span class="right">إعداد الموقع </span>
                  <span class="left">ك.د 2,500</span>
                </div>
                <div
                  class="progres-percentage d-flex justify-content-between align-items-center"
                >
                  <div class="progres-bar position-relative">
                    <div class="blue position-absolute"></div>
                    <div class="gray"></div>
                  </div>
                  <span>9%</span>
                </div>
                <div class="border"></div>
                <div class="item d-flex justify-content-between">
                  <span class="right">أعمال مدنية</span>
                  <span class="left">ك.د 2,500</span>
                </div>
                <div
                  class="progres-percentage d-flex justify-content-between align-items-center"
                >
                  <div class="progres-bar position-relative">
                    <div class="blue position-absolute"></div>
                    <div class="gray"></div>
                  </div>
                  <span>23%</span>
                </div>
                <div class="border"></div>
                <div class="item d-flex justify-content-between">
                  <span class="right">العزل</span>
                  <span class="left">ك.د 2,500</span>
                </div>
                <div
                  class="progres-percentage d-flex justify-content-between align-items-center"
                >
                  <div class="progres-bar position-relative">
                    <div class="blue position-absolute"></div>
                    <div class="gray"></div>
                  </div>
                  <span>4%</span>
                </div>
                <div class="border"></div>
                <div class="item d-flex justify-content-between">
                  <span class="right">الخرسانة والطوب </span>
                  <span class="left">ك.د 2,500</span>
                </div>
                <div
                  class="progres-percentage d-flex justify-content-between align-items-center"
                >
                  <div class="progres-bar position-relative">
                    <div class="blue position-absolute"></div>
                    <div class="gray"></div>
                  </div>
                  <span>0%</span>
                </div>
                <div class="border"></div>
                <div class="item d-flex justify-content-between">
                  <span class="right"> التشطيب</span>
                  <span class="left">ك.د 2,500</span>
                </div>
                <div
                  class="progres-percentage d-flex justify-content-between align-items-center"
                >
                  <div class="progres-bar position-relative">
                    <div class="blue position-absolute"></div>
                    <div class="gray"></div>
                  </div>
                  <span>37%</span>
                </div>
                <div class="border"></div>
                <div class="item d-flex justify-content-between">
                  <span class="right"> الميكانيك والكهرباء</span>
                  <span class="left">ك.د 2,500</span>
                </div>
                <div
                  class="progres-percentage d-flex justify-content-between align-items-center"
                >
                  <div class="progres-bar position-relative">
                    <div class="blue position-absolute"></div>
                    <div class="gray"></div>
                  </div>
                  <span>9%</span>
                </div>
                <div class="border"></div>
                <div class="item d-flex justify-content-between">
                  <span class="right"> تشطيب الرصيف </span>
                  <span class="left">ك.د 2,500</span>
                </div>
                <div
                  class="progres-percentage d-flex justify-content-between align-items-center"
                >
                  <div class="progres-bar position-relative">
                    <div class="blue position-absolute"></div>
                    <div class="gray"></div>
                  </div>
                  <span>6%</span>
                </div>
              </div>
            </div>
            <div class="bottons d-flex justify-content-end">
              <div
                class="share d-flex justify-content-center align-items-center"
              >
                <img src="/static/icons/share.svg" />
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
              <img src="/static/icons/Bank.svg" />
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
        <!-- <div class="sggested-section d-flex justify-content-between pb-4">
          <div class="sections-main-title">
            <span class="sections-title">عقارات مقترحة للبيع</span>
            <span class="sub-title">- نفس المنطقة</span>
          </div>
          <CoreViewAll />
        </div>
        <div class="SuggestedRealState d-flex">
          <CoreSuggestedRealState />
          <CoreSuggestedRealState />
          <CoreSuggestedRealState />
          <CoreSuggestedRealState />
        </div> -->
        <div class="information d-flex justify-content-center">
          <span>
            * هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
            هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
            العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
            التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
            العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء
            لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث
            يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم
            الموقع.</span
          >
        </div>
        <!-- <div class="sggested-section d-flex justify-content-between pb-4">
          <div class="sections-main-title">
            <span class="sections-title">مكاتب عقارية مقترحة</span>
          </div>
          <CoreViewAll />
        </div>
        <div class="SuggestedRealState d-flex">
          <CoreRealStateOffice />
          <CoreRealStateOffice />
          <CoreRealStateOffice />
          <CoreRealStateOffice />
          <CoreRealStateOffice />
          <CoreRealStateOffice />
          <CoreRealStateOffice />
        </div> -->

        <div class="ads-section">
          <div class="ads d-flex justify-content-center">
            <img src="/static/images/L-AD-4.png" />
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
.result {
  .page-bg {
    background: #0789fb10;
    padding-bottom: 101px;
    padding-top: 46px;
  }
  .result-bg {
    width: 100%;
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
      top: -17%;
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

          .note-icon {
            background: $secondary-text-color;
            border-radius: 50%;
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

      .progres-percentage {
        padding-left: 15px;
        padding-right: 15px;

        .progres-bar {
          height: 8px;
          width: 70%;
          .gray {
            width: 100%;
            background-color: rgba(137, 150, 162, 0.21);
            height: 8px;
            border-radius: 12px;
          }
          .blue {
            height: 8px;
            background: $primary-blue-color;
            width: 9%;
            border-radius: 12px;
          }
        }

        span {
          font-family: $main-font-family;
          font-size: $font-size-4;
          font-weight: 500;
          font-style: normal;
          color: #8996a2;
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
        width: 80%;
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
      margin-top: 19px;
      margin-bottom: 16px;
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

  .bottons {
    margin-bottom: 33px;

    span {
      font-family: $main-font-family;
      color: $secondary-text-color;
      font-size: $font-size-4;
      font-weight: 800;
      font-style: normal;
      padding-right: 15px;
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
      }
    }
  }

  .information {
    width: 100%;
    padding-top: 51px;
    padding-bottom: 55px;
    span {
      width: 80%;
      color: $primary-text-color;
      font-family: $main-font-family;
      font-size: 20px;
      font-weight: 500;
      font-style: normal;
      line-height: 30px;
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
  }

  .sggested-section {
    margin-top: 54px;

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
    }
  }

  .SuggestedRealState {
    margin-bottom: 73px;
    gap: 33px;
    width: 100%;
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
