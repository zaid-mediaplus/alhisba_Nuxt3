<template>
  <div>
    <CoreInsideHeader title="اتصل بنا" :img="news" bottom="-135px" />
    <CoreAppContainer>
      <CoreItemContainer>
        <div class="contact-us-page d-flex">
          <div class="contact-information">
            <div class="location d-flex align-items-center">
              <div
                class="icon-bg d-flex justify-content-center align-items-center"
              >
                <img src="~/assets/icons/baddress.svg" alt="" />
              </div>
              <div class="left">
                مدينة الكويت - القبلة - شارع الصالحية بناية سليمان اللهيب 3 -
                الدور الثاني
              </div>
            </div>
            <div class="mobile d-flex align-items-center">
              <div
                class="icon-bg d-flex justify-content-center align-items-center"
              >
                <img src="~/assets/icons/cardIcon/Phone.svg" alt="" />
              </div>
              <div class="left">+965 600 20 778</div>
            </div>
            <div class="email d-flex align-items-center">
              <div
                class="icon-bg d-flex justify-content-center align-items-center"
              >
                <img src="~/assets/icons/cardIcon/Message.svg" alt="" />
              </div>
              <div class="left">info@alhisba.com</div>
            </div>
            <div
              class="social-media d-flex justify-content-between align-items-center"
            >
              <img src="~/assets/icons/d-instagram.svg" alt="" />
              <img src="~/assets/icons/d-linkedin.svg" alt="" />
              <img src="~/assets/icons/d-twitter.svg" alt="" />
              <img src="~/assets/icons/d-facebook.svg" alt="" />
            </div>
            <!-- <div class="map">
            <iframe
              width="507px"
              height="179px"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div> -->
          </div>
          <div class="send-message">
            <div class="message-form">
              <div class="message-form-bg">
                <div class="title">أرسل لنا رسالة</div>
                <div class="input">
                  <FormTextFeild title="الإسم كامل" />
                </div>
                <div class="input">
                  <FormTextFeild title="البريدالإلكتروني" />
                </div>
                <div class="input">
                  <FormNumberDropDown />
                </div>
                <textarea
                  class="your-message"
                  placeholder="ما هي رسالتك؟"
                ></textarea>
              </div>
            </div>
            <div class="send-btn d-flex justify-content-end">
              <div
                class="send d-flex justify-content-center align-items-center"
              >
                <span>إرسال</span>
              </div>
            </div>
          </div>
        </div>
      </CoreItemContainer>
    </CoreAppContainer>
  </div>
</template>

<script setup scoped>
import contactUsIcon from "~/assets/icons/aboutus.svg";
const news = ref(contactUsIcon);
</script>

<style lang="scss">
@import "../static/sass/variables.scss";
.contact-us-page {
  margin-top: 130px;
  margin-bottom: 102px;
  @include large() {
    flex-wrap: wrap;
  }
  .contact-information {
    width: 60%;
    @include large() {
      width: 100%;
    }
    .location,
    .mobile {
      margin-bottom: 48px;
    }
    .email {
      margin-bottom: 54px;
    }
    .icon-bg {
      width: 46px;
      height: 46px;
      border-radius: 12px;
      background: rgba(7, 138, 251, 0.12);
    }
    .left {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: $font-size-3;
      font-style: normal;
      font-weight: 800;
      line-height: 31px;
      padding-inline: 26px;
      width: 75%;
      @include extra-high-large() {
        font-size: $font-size-4;
        width: 60%;
      }
      @include extra-large() {
        font-size: $font-size-5;
        width: 50%;
      }
      @include large() {
        width: 100%;
      }
    }
    .social-media {
      width: 25%;
    }
    .map {
      margin-top: 42.73px;
    }
  }
  .send-message {
    width: 40%;
    @include large() {
      width: 100%;
    }
    .message-form {
      .message-form-bg {
        background: #ffffff;
        border: 1px solid #eff0f7;
        box-shadow: 0px 5px 90px rgba(8, 15, 52, 0.06);
        border-radius: 34px;
        padding-inline: 65px;
        padding-top: 45px;
        padding-bottom: 65px;
        @include extra-extra-large() {
          padding-inline: 45px;
        }
        @include extra-large() {
          padding-inline: 25px;
        }
        .title {
          font-family: $main-font-family;
          color: $primary-text-color;
          font-size: 24px;
          font-style: normal;
          font-weight: 800;
          margin-bottom: 16px;
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
        .input {
          margin-bottom: 15px;
        }
        .your-message {
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
    }
    .send {
      width: 165px;
      box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
      border-radius: 29px;
      background-color: $primary-blue-color;
      height: 58px;
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
}
</style>
