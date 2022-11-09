<template>
  <CoreInsideHeader
    title="حسبة القرض العقاري"
    :showimg="false"
    :showBtn="true"
  />
  <div class="page-bg">
    <CoreAppContainer>
      <CoreInsideContainer>
        <div class="result-form">
          <div class="result-bg position-relative">
            <div
              class="total-cost position-absolute d-flex flex-column justify-content-center align-items-center"
            >
              <span class="title">مبلغ القسط د.ك</span>
              <span class="value">344,28 د.ك</span>
            </div>
            <div class="specifications">
              <span class="text">تفاصيل القرض</span>
            </div>
            <div class="specifications-items">
              <div class="item d-flex justify-content-between">
                <span class="right">قيمة العقار </span>
                <span class="left">د.ك2,500 </span>
              </div>
              <div class="border"></div>
              <div class="item d-flex justify-content-between">
                <span class="right">مبلغ القسط </span>
                <span class="left">د.ك2,500 </span>
              </div>
              <div class="border"></div>
              <div class="item d-flex justify-content-between">
                <span class="right">الدفعة المقدمة</span>
                <span class="left">د.ك2,500 </span>
              </div>
              <div class="border"></div>
              <div class="item d-flex justify-content-between">
                <span class="right">نسبة الربح السنوية</span>
                <span class="left">د.ك2,500 </span>
              </div>
              <div class="border"></div>
              <div class="item d-flex justify-content-between">
                <span class="right">ربح البنك </span>
                <span class="left">د.ك2,500 </span>
              </div>
              <div class="border"></div>
              <div class="item d-flex justify-content-between">
                <span class="right">إجمالي قيمة شراء العقار</span>
                <span class="left">د.ك2,500 </span>
              </div>
              <div class="border"></div>
              <div class="item d-flex justify-content-between">
                <span class="right">مدة القرض </span>
                <span class="left">د.ك2,500 </span>
              </div>
              <div class="border"></div>
              <div class="padding-top"></div>
              <div class="specifications">
                <span class="text">تفاصيل أخرى </span>
              </div>
              <div class="padding-bottom"></div>
              <div class="item d-flex justify-content-between">
                <span class="right">فترة السماح </span>
                <span class="left">د.ك2,500 </span>
              </div>
              <div class="border"></div>
              <div class="item d-flex justify-content-between">
                <span class="right">تفاصيل أخرى </span>
                <span class="left">د.ك2,500 </span>
              </div>
              <div class="border"></div>
              <div class="item d-flex justify-content-between">
                <span class="right">الدفعة المقدمة </span>
                <span class="left">د.ك2,500 </span>
              </div>
              <div class="border"></div>
              <div class="item d-flex justify-content-between">
                <span class="right">فترة السداد </span>
                <span class="left">د.ك2,500 </span>
              </div>
              <div class="border"></div>
              <div class="item d-flex justify-content-between">
                <span class="right">عدد الدفعات </span>
                <span class="left">د.ك2,500 </span>
              </div>
              <div class="border"></div>
              <div class="item d-flex justify-content-between">
                <span class="right">نوع الدفعات </span>
                <span class="left">د.ك2,500 </span>
              </div>
            </div>
          </div>
        </div>
      </CoreInsideContainer>
    </CoreAppContainer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";
.page-bg {
  background: #0789fb10;
  padding-top: 200px;
  padding-bottom: 101px;
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

  .total-cost {
    width: 32.344vw;
    box-shadow: 0px 5px 22px rgba(243, 175, 52, 0.24);
    border-radius: 15px;
    background-color: $primary-yellow-color;
    top: -10%;
    right: 50%;
    transform: translate(50%, 50%);

    .title {
      font-family: $secondary-text-color;
      font-size: 20px;
      font-weight: 800;
      font-style: normal;
      color: $secondary-text-color;
      padding-top: 25px;
    }

    .value {
      font-family: $main-font-family;
      font-size: 36px;
      font-weight: 900;
      font-style: normal;
      color: $secondary-text-color;
      padding-bottom: 17px;
    }
  }

  .costs {
    /* margin-top: 96px; */
    padding-bottom: 30px;

    .cost {
      width: 369px;
      height: 85px;
      background-color: rgba(7, 138, 251, 0.1);
      padding: 18px;
      border-radius: 15px;

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
</style>
