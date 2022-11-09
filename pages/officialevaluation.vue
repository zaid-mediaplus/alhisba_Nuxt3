<template>
  <CoreInsideHeader
    title="التقييم الرسمي"
    :img="header"
    description="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.
"
    bottom="-70px"
  />
  <div class="page-bg">
    <CoreAppContainer>
      <CoreInsideContainer
        ><div class="offical-form">
          <div class="form-bg">
            <div class="property-status">
              <div class="property-title">حالة العقار</div>
              <div class="chose-property d-flex">
                <div class="form-check d-flex felx-row">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" htmlFor="flexRadioDefault1">
                    أرض
                  </label>
                </div>
                <div class="form-check d-flex felx-row">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" htmlFor="flexRadioDefault2">
                    مبنى
                  </label>
                </div>
              </div>
            </div>
            <div class="choose-status d-flex flex-wrap justify-content-between">
              <div class="items-dropdown">
                <FormDropDown title="نوع العقار" />
              </div>
              <div class="items-dropdown">
                <FormDropDown title="المنطقة" />
              </div>
              <div class="items-dropdown">
                <FormDropDown title="هل التقييم موجه إلى بنك؟" />
              </div>
              <div class="items-dropdown">
                <FormDropDown title="اختر البنك" />
              </div>
              <div class="items-dropdown-full">
                <FormDropDown title="قائمة المثمنين المعتمدين" />
              </div>
              <!-- <div
                class="dropdown-full d-flex justify-content-between align-items-center"
              >
                <span>قائمة المثمنين المعتمدين </span>
                <img src="/static/icons/downarrow.svg" alt="arrow" />
              </div> -->
            </div>
            <div class="specifications d-flex align-items-baseline">
              <span class="cost">تكلفة التقييم:</span>
              <span class="price">150</span>
              <div class="d-flex -align-items-end">
                <span class="dk">د.ك</span>
              </div>
            </div>
            <div class="extra-status">
              <div
                class="choose-status d-flex flex-wrap justify-content-between"
              >
                <div class="items-dropdown">
                  <FormDropDown title="مساحة العقار" />
                </div>
                <div class="items-dropdown">
                  <FormDropDown title="عنوان العقار" />
                </div>
              </div>
              <!-- <textarea
                class="additional-details"
                placeholder="تفاصيل إضافية"
              ></textarea> -->
              <FormTextArea title="تفاصيل إضافية" />
            </div>
            <div class="border"></div>
            <div class="property-status">
              <div class="property-title">معلومات مقدم الطلب</div>
            </div>
            <div class="choose-status d-flex flex-wrap justify-content-between">
              <div class="text-field-container">
                <FormTextFeild title="اسم مقدم الطلب" />
              </div>
              <div class="items-dropdown">
                <FormNumberDropDown />
              </div>
              <div class="text-field-container">
                <FormTextFeild title="البريد الإلكتروني" />
              </div>
              <div class="items-dropdown">
                <FormDropDown title="صفة مقدم الطلب" />
              </div>
              <textarea
                class="additional-details"
                placeholder="تفاصيل إضافية"
              ></textarea>
            </div>
            <div class="border"></div>
            <div class="property-status">
              <div class="property-title">إرفاق المستندات</div>
            </div>
            <div class="d-flex flex-wrap justify-content-between">
              <div
                class="attachments"
                v-for="(item, index) in items"
                :key="index"
              >
                <FormAttachments
                  :title="item.title"
                  :icon="item.icon"
                  :area="item.area"
                  :price="item.price"
                />
              </div>
            </div>
            <div class="privacy-policy d-flex align-items-center">
              <input class="right" type="checkbox" />
              <div class="left">
                أوافق على<NuxtLink to="/"><span> شروط وأحكام </span></NuxtLink
                >الحسبة
              </div>
            </div>
          </div>
          <div class="calc-btn d-flex justify-content-end">
            <NuxtLink to="/payment">
              <div
                class="calc d-flex justify-content-center align-items-center"
              >
                <span>أكمل للدفع</span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </CoreInsideContainer>
    </CoreAppContainer>
  </div>
</template>

<script setup>
const items = ref([
  { id: 1, icon: "/static/icons/document.svg", title: "وثيقة الملكية" },
  { id: 2, icon: "/static/icons/document.svg", title: "البطاقة المدنية" },
  { id: 3, icon: "/static/icons/photo.svg", title: " صورة العقار" },
  { id: 3, icon: "/static/icons/document.svg", title: " مستند آخر" },
]);

import haederIcon from "/static/images/insideHeader/off-evaluation-page.png";

const header = ref(haederIcon);
</script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";
.page-bg {
  background: #0789fb10;
  padding-top: 99px;
  padding-bottom: 101px;
  .items-dropdown {
    width: 358px;
    @include extra-high-large() {
      width: 305px;
    }
    @include extra-large() {
      width: 295px;
    }
    @include large() {
      width: 224px;
    }
    @include medium() {
      width: 100%;
    }
  }
  .items-dropdown-full {
    width: 100%;
  }
  .offical-form {
    .form-bg {
      width: 100%;
      background: $secondary-text-color;
      border: 1px solid #eff0f7;
      box-shadow: 0px 5px 90px rgba(8, 15, 52, 0.06);
      padding-right: 101px;
      padding-left: 102px;
      padding-bottom: 50px;
      border-radius: 34px;
      max-width: 934px;
      margin: 0 auto;
      @include extra-extra-extra-large() {
        padding-inline-start: 111px;
        padding-inline-end: 92px;
      }
      @include extra-extra-large() {
        padding-left: 80px;
        padding-right: 80px;
      }
      @include extra-high-large() {
        padding-left: 60px;
        padding-right: 60px;
      }
      /* @include min-extra-large() {
      padding-right: 45px;
      padding-left: 35px;
    } */
      @include extra-large() {
        padding-left: 40px;
        padding-right: 40px;
      }
      @include large() {
        padding-left: 30px;
        padding-right: 30px;
      }
      @include small() {
        padding-left: 25px;
        padding-right: 25px;
      }
      .property-status {
        .chose-property {
          .form-check {
            margin-left: 47px;

            .form-check-input {
              box-shadow: none;
              width: 24.7px;
              height: 24.7px;
              margin-bottom: 20px;
            }

            .form-check-label {
              font-family: $main-font-family;
              font-size: $font-size-4;
              font-weight: 800;
              font-style: normal;
              color: rgba(17, 35, 71, 0.4);
              padding-bottom: 50px;
              margin-right: 30px;
              @include eighteen-font-extra-lg;
              @include eighteen-font-lg;
              @include eighteen-font-medium;
              @include eighteen-font-small;
            }
          }
        }

        .property-title {
          font-family: $main-font-family;
          font-size: 24px;
          color: $primary-text-color;
          font-weight: 800;
          font-style: normal;
          text-align: start;
          padding-top: calc(58px - 13px);
          padding-bottom: 25px;
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
      .choose-status {
        .dropdown-full {
          width: 100%;
          background: #ffffff;
          border: 1.5px solid #dddddd;
          border-radius: 13px;
          padding: 24px;
          margin-bottom: 15px;
          cursor: pointer;

          span {
            font-family: $main-font-family;
            font-weight: 800;
            font-size: $font-size-4;
            font-style: normal;
            color: rgba(17, 35, 71, 0.4);
            font-weight: 800;
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

        .cost {
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
        .price {
          font-family: $main-font-family;
          font-size: 28px;
          font-weight: 900;
          font-style: normal;
          color: $primary-blue-color;
          padding-inline: 12px;
          @include extra-large {
            font-size: 24px;
          }
          @include large {
            font-size: 18px;
          }
          @include medium {
            font-size: 14px;
          }
          @include small {
            font-size: 10px;
          }
        }
        .dk {
          font-family: $main-font-family;
          font-size: 16.72px;
          font-weight: 800;
          font-style: normal;
          color: $primary-blue-color;
        }
      }
      .extra-status {
        margin-top: 45px;
      }
      .attachments {
        width: 49%;
      }
      .additional-details {
        width: 100%;
        height: 132px;
        resize: none;
        background: #ffffff;
        border: 1.5px solid #dddddd;
        border-radius: 13px;
        padding: 24px 18px 0 0;
        font-family: $main-font-family;
        font-weight: 800;
        font-size: $font-size-4;
        font-style: normal;
        color: rgba(17, 35, 71, 0.4);
        font-weight: 800;
        outline: none;
      }
    }
    .privacy-policy {
      margin-top: 41px;
      .right {
        width: 26px;
        height: 26px;
        border-radius: 5px;
        @include extra-large {
          width: 21px;
          height: 21px;
        }
        @include large {
          width: 16px;
          height: 16px;
        }
        @include medium {
          width: 11px;
          height: 11px;
        }
        @include small {
          width: 6px;
          height: 6px;
        }
      }
      .left {
        padding-inline: 13px;
        font-family: $main-font-family;
        font-size: 17px;
        font-weight: 500;
        font-style: normal;
        color: $primary-text-color;
        @include extra-large {
          font-size: 13px;
        }
        @include large {
          font-size: 9px;
        }
        @include medium {
          font-size: 5px;
        }
        @include small {
          font-size: 1px;
        }
      }
    }
    .border {
      margin-top: 40px;
    }
    .calc-btn {
      max-width: 934px;
      margin: 0 auto;
      padding-top: 40px;
    }
    .calc {
      width: 165px;
      box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
      border-radius: 29px;
      background-color: $primary-blue-color;
      height: 58px;
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
  .text-field-container {
    width: 358px;
    @include extra-extra-extra-large() {
      width: 358px;
    }
    @include extra-extra-large() {
      width: 326px;
    }
    @include extra-large() {
      width: 280px;
    }
    @include large() {
      width: 220px;
    }
    @include medium() {
      width: 100%;
    }
    @include small() {
      width: 100%;
    }
  }
}
</style>
