<template>
  <CoreAppContainer>
    <CoreAppNavBar :logo="logo" :login="login" color="#112347" />
  </CoreAppContainer>
  <div class="page-bg">
    <CoreAppContainer>
      <CoreItemContainer>
        <div class="top-section d-flex justify-content-between">
          <div class="real-state-picture">
            <div class="main-picture position-relative">
              <img src="/static/images/lg-realstate.png" alt="" />
            </div>
            <div
              class="share bg d-flex justify-content-center align-items-center position-absolute"
            >
              <img src="/static/icons/share.svg" alt="" />
              <span>شارك الإعلان</span>
            </div>
            <div
              class="favourite bg d-flex justify-content-center align-items-center position-absolute"
            >
              <img src="/static/icons/cardIcon/save.svg" alt="" />
              <span>أضف إلى المفضلة</span>
            </div>
            <div class="list-picture d-flex flex-wrap justify-content-between">
              <img src="/static/images/sell.png" alt="" />
              <img src="/static/images/sell.png" alt="" />
              <img src="/static/images/sell.png" alt="" />
              <img src="/static/images/sell.png" alt="" />
              <img
                class="last position-relative"
                src="/static/images/sell.png"
                alt=""
              />
              <!-- <div class="bgGradient position-absolute"></div> -->
            </div>
          </div>
          <div class="contact-us-details">
            <div class="details-bg d-flex flex-column align-items-center">
              <div
                class="profile-icon d-flex justify-content-center align-items-center"
              >
                <img src="/static/icons/lg-profile.svg" alt="" />
              </div>
              <div class="title-name">
                <span>شركة الانوار للاستثمارات العقارية</span>
              </div>
              <div class="location d-flex justify-content-center">
                <img src="/static/icons/address.svg" alt="" />
                <span>الكويت</span>
              </div>
              <div class="description">
                <span
                  >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                  التى يولدها التطبيق.</span
                >
              </div>
              <div class="contact-us-padding">
                <div class="show-mobile-number d-flex justify-content-center">
                  <img src="/static/icons/mid-mobile.svg" alt="" />
                  <span>أظهر رقم الهاتف</span>
                </div>
                <div class="send-message d-flex justify-content-center">
                  <img src="/static/icons/cardIcon/Message.svg" alt="" />
                  <span>أرسل رسالة</span>
                </div>
                <div class="social-media d-flex justify-content-between">
                  <div class="whatsapp">
                    <img src="/static/icons/whatsapp.svg" alt="" />
                  </div>
                  <div class="instagram">
                    <img src="/static/icons/y-instagram.svg" alt="" />
                  </div>
                  <div class="website">
                    <img src="/static/icons/r-website.svg   " alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="middle-section d-flex justify-content-between">
          <div class="right-section">
            <div class="ads-details">
              <div class="form-bg">
                <div class="publish-time">
                  <img src="/static/icons/g-clock.svg" alt="" />
                  <span>قبل يومين</span>
                </div>
                <div class="title-price d-flex justify-content-between">
                  <span class="ads-title"
                    >منزل من 3 غرف نوم و3 طوابق للبيع</span
                  >
                  <span class="price">700,000 د.ك</span>
                </div>
                <div
                  class="proparities d-flex flex-wrap justify-content-between gap-2"
                >
                  <div>
                    <img src="/static/icons/cardIcon/bed.svg" />
                    <span class="">3 غرف نوم</span>
                  </div>
                  <div>
                    <img src="/static/icons/cardIcon/area.svg" />
                    <span class="">750 م2</span>
                  </div>
                  <div>
                    <img src="/static/icons/cardIcon/bath.svg" />
                    <span class="">3 حمامات</span>
                  </div>
                </div>
                <div class="address">
                  <img src="/static/icons/address.svg" />
                  <span class="left-title">الفروانية، الأندلس</span>
                </div>
                <div class="border"></div>
                <div class="real-state-description">
                  <div class="title">وصف العقار</div>
                  <div class="description">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                    هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                    الحروف التى يولدها التطبيق.
                  </div>
                </div>
                <!-- <div class="border"></div> -->
                <!-- <div class="details-title">
                  <span>التفاصيل</span>
                </div>
                <div class="details-items d-flex flex-wrap">
                  <div class="item">
                    <img src="/static/icons/d-select.svg" alt="" />
                    <span>غرفة خدم</span>
                  </div>
                  <div class="item">
                    <img src="/static/icons/d-select.svg" alt="" />
                    <span>حديقة خاصة</span>
                  </div>
                  <div class="item">
                    <img src="/static/icons/d-select.svg" alt="" />
                    <span>كراج خاص</span>
                  </div>
                  <div class="item">
                    <img src="/static/icons/d-select.svg" alt="" />
                    <span>تكييف مركزي</span>
                  </div>
                  <div class="item">
                    <img src="/static/icons/d-select.svg" alt="" />
                    <span>حمام سباحة خاص</span>
                  </div>
                </div>
                <div class="border"></div>
                <div class="details-title">
                  <span>مواصفات الموقع</span>
                </div>
                <div class="details-items d-flex flex-wrap">
                  <div class="item">
                    <img src="/static/icons/d-select.svg" alt="" />
                    <span>قريب من الخدمات</span>
                  </div>
                  <div class="item">
                    <img src="/static/icons/d-select.svg" alt="" />
                    <span>سهل الدخول</span>
                  </div>
                  <div class="item">
                    <img src="/static/icons/d-select.svg" alt="" />
                    <span>قريب من المسجد</span>
                  </div>
                  <div class="item">
                    <img src="/static/icons/d-select.svg" alt="" />
                    <span>قريب من مركز الحي</span>
                  </div>
                  <div class="item">
                    <img src="/static/icons/d-select.svg" alt="" />
                    <span>قريب من الحديقة</span>
                  </div>
                </div> -->
              </div>
            </div>
            <div class="Apply">
              <div
                class="Apply-bg d-flex justify-content-between align-items-center"
              >
                <div class="right d-flex align-items-center">
                  <div class="img-bg">
                    <img src="/static/icons/Bank.svg" alt="" />
                  </div>
                  <span>هل تريد تقديم طلب تمويل؟</span>
                </div>
                <div class="left-icon">
                  <div
                    class="icon-bg d-flex justify-content-center align-items-center"
                  >
                    <img src="/static/icons/w-left-arrow.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="location-ditails">
              <div class="location-form-bg">
                <div class="title">موقع العقار</div>
                <div class="map">
                  <iframe
                    width="100%"
                    height="304px"
                    src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </CoreItemContainer>
      <div class="border"></div>
      <div class="sggested-section d-flex justify-content-between pb-4">
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
      </div>
      <!-- <div class="border"></div>
      <div class="sggested-section d-flex justify-content-between pb-4">
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
      </div>

      <div class="ads-section">
        <div class="ads d-flex justify-content-center">
          <img src="/static/images/AD-4.png" />
        </div>
      </div> -->
    </CoreAppContainer>
  </div>
</template>

<script setup>
import logoIcon from "@/static/images/darkLogo.svg";
import loginIcon from "@/static/icons/dLogin.svg";

const logo = ref(logoIcon);
const login = ref(loginIcon);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.page-bg {
  background: #0789fb10;
  padding-top: 131px;
  padding-bottom: 101px;
}
.top-section {
  @media (max-width: 1300px) {
    flex-wrap: wrap;
    justify-content: center !important;
  }
  .real-state-picture {
    width: 65%;
    @include large() {
      width: 100%;
    }
    .main-picture {
      padding-bottom: 12px;
      img {
        width: 100%;
        border-radius: 22px;
      }
    }
    .share {
      top: 1%;
      right: 46%;
      cursor: pointer;
    }
    .favourite {
      top: 1%;
      right: 31%;
      cursor: pointer;
    }
    .bg {
      background: #ffffff;
      border-radius: 10px;
      padding: 10px 0 8px 0;
      width: 172px;
      span {
        padding-inline: 8px;
        font-family: $main-font-family;
        font-size: 15px;
        color: $primary-blue-color;
        font-weight: 800;
        font-style: normal;
      }
    }
  }
  .contact-us-details {
    width: 32%;
    @media (max-width: 1300px) {
      width: 40%;
    }
    @include extra-large() {
      width: 50%;
    }
    @include large() {
      width: 100%;
    }
    .details-bg {
      width: 100%;
      background: #ffffff;
      border: 1px solid #eff0f7;
      box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
      border-radius: 20px;
      padding-top: 50px;
      padding-bottom: 43px;
      padding-inline: 26px;
      .profile-icon {
        width: 91px;
        height: 91px;
        background: rgba(7, 138, 251, 0.1);
        border-radius: 16px;
      }
      .title-name {
        font-family: $main-font-family;
        font-size: $font-size-4;
        color: $primary-text-color;
        font-weight: 800;
        font-style: normal;
        padding-top: 19px;
        text-align: center;
      }
      .location {
        padding-bottom: 22px;
        padding-top: 5px;
        span {
          padding-inline: 7px;
          font-family: $main-font-family;
          font-size: $font-size-5;
          color: #8996a2;
          font-weight: 500;
          font-style: normal;
        }
      }
      .description {
        text-align: center;
        padding-bottom: 33px;
        span {
          font-family: $main-font-family;
          font-size: $font-size-5;
          color: #8996a2;
          font-weight: 800;
          font-style: normal;
        }
      }
      .contact-us-padding {
        margin-inline: 11px;
        .show-mobile-number {
          width: 283px;
          background: $primary-blue-color;
          box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
          border-radius: 12px;
          padding-top: 16px;
          padding-bottom: 14px;
          margin-bottom: 13px;
          cursor: pointer;
          span {
            padding-inline: 9px;
            font-family: $main-font-family;
            font-size: 15px;
            color: $secondary-text-color;
            font-weight: 800;
            font-style: normal;
            line-height: 23px;
          }
        }
        .send-message {
          width: 283px;
          background: rgba(7, 138, 251, 0.14);
          border-radius: 10px;
          padding-top: 13px;
          padding-bottom: 12px;
          margin-bottom: 31px;
          cursor: pointer;
          span {
            padding-inline: 10px;
            font-family: $main-font-family;
            font-size: 15px;
            color: $primary-blue-color;
            font-weight: 800;
            font-style: normal;
            line-height: 23px;
          }
        }
        .social-media {
          .whatsapp {
            border-radius: 10px;
            padding: 13px 33px;
            background: #34e0a125;
            cursor: pointer;
          }
          .instagram {
            border-radius: 10px;
            padding: 13px 33px;
            background: #f3b0341c;
            cursor: pointer;
          }
          .website {
            border-radius: 10px;
            padding: 13px 33px;
            background: #ff725c14;
            cursor: pointer;
          }
        }
      }
    }
  }
}
.right-section {
  padding-top: 35px;
  width: 65%;
  @include large() {
    width: 100%;
  }
  .ads-details {
    padding-bottom: 35px;
    width: 100%;
    .form-bg {
      width: 100%;
      padding-top: 25px;
      padding-bottom: 48px;
      background: #ffffff;
      border: 1px solid #eff0f7;
      box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
      border-radius: 20px;
      .publish-time {
        padding-right: 24px;
        span {
          padding-inline: 7px;
          font-family: $main-font-family;
          font-size: $font-size-6;
          color: #8996a2;
          font-weight: 800;
          font-style: normal;
        }
      }
      .title-price {
        padding-right: 24px;
        padding-left: 24px;
        .ads-title {
          font-family: $main-font-family;
          font-size: 24px;
          color: $primary-text-color;
          font-weight: 800;
          font-style: normal;
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
          color: $primary-blue-color;
          font-weight: 900;
          font-style: normal;
        }
      }
      .proparities {
        padding-right: 24px;
        margin-top: 25px;
        margin-bottom: 10px;
        padding-left: 40px;
        width: 62%;
        span {
          font-family: $main-font-family;
          font-size: $font-size-5;
          color: $primary-text-color;
          font-weight: 500;
          font-style: normal;
        }

        img {
          padding-left: 11px;
        }
      }
      .address {
        padding-right: 24px;
        padding-top: 24px;
        .left-title {
          font-family: $main-font-family;
          font-size: $font-size-5;
          color: $primary-text-color;
          font-weight: 500;
          font-style: normal;
          padding-inline: 13px;
        }
      }
      .border {
        margin-top: 32px;
        margin-bottom: 30px;
      }
      .real-state-description {
        padding-right: 24px;
        .title {
          font-family: $main-font-family;
          font-size: $font-size-5;
          color: #8996a2;
          font-weight: 800;
          font-style: normal;
        }
        .description {
          font-family: $main-font-family;
          font-size: $font-size-5;
          color: $primary-text-color;
          font-weight: 500;
          font-style: normal;
          padding-top: 13px;
          padding-left: 54px;
        }
      }
      .details-title {
        padding-right: 24px;
        padding-bottom: 14px;
        span {
          font-family: $main-font-family;
          font-size: 24px;
          color: $primary-text-color;
          font-weight: 800;
          font-style: normal;
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
      .details-items {
        padding-right: 24px;
        padding-left: 54px;
        width: 100%;
        .item {
          width: 33%;
          span {
            padding-inline: 16px;
            font-family: $main-font-family;
            font-size: 17px;
            color: $primary-text-color;
            font-weight: 500;
            font-style: normal;
          }
        }
      }
    }
  }
  .location-ditails {
    width: 100%;
    .location-form-bg {
      width: 100%;
      padding-top: 19px;
      padding-bottom: 26px;
      background: #ffffff;
      border: 1px solid #eff0f7;
      box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
      border-radius: 20px;
      padding-inline: 25px;

      .title {
        font-family: $main-font-family;
        font-size: 24px;
        color: $primary-text-color;
        font-weight: 800;
        font-style: normal;
        padding-bottom: 16px;
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
      .map {
      }
    }
  }
}
.left-ads {
  width: 30%;
  padding-top: 78px;
  .small-ads {
    padding-bottom: 29px;
  }
}
.border {
  border: 1px solid rgba(137, 150, 162, 0.13);
  margin-top: 70px;
  margin-bottom: 14px;
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

.Apply-bg {
  background: rgba(7, 138, 251, 0.1);
  border-radius: 13px;
  padding-top: 19.4px;
  padding-bottom: 20.09px;
  padding-inline-start: 23px;
  padding-inline-end: 24px;
  @media (max-width: 1300px) {
    flex-wrap: wrap;
  }
  .right {
    @media (max-width: 1300px) {
      flex-wrap: wrap;
    }
    .img-bg {
      background: #ffffff;
      border-radius: 13.5324px;
      padding-top: 3.69px;
      padding-bottom: 3.7px;
      padding-inline-start: 25.1px;
      padding-inline-end: 23.37px;
    }
    span {
      padding-inline: 21px;
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: 21px;
      line-height: 50px;
      font-weight: 800;
      @include inside-font-extra-lg;
      @include inside-font-lg;
      @include inside-font-medium;
      @include inside-font-small;
    }
  }
  .left-icon {
    .icon-bg {
      background: #078afb;
      box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
      border-radius: 29px;
      width: 58px;
      height: 58px;
      cursor: pointer;
    }
  }
}
.bgGradient {
  background: #001830;
  opacity: 0.55;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
