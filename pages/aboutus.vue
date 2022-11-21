<template>
  <div>
    <CoreInsideHeader title="من نحن" :img="aboutUs" bottom="-135px" />
    <div class="about-us-section">
      <CoreAppContainer>
        <CoreItemContainer>
          <div class="main-logo">
            <img src="/images/darkLogo.svg" alt="" />
          </div>
          <div class="about-alhisba">
            الموقع الالكتروني <span>ALHISBA.COM</span> وكذلك تطبيقات برنامج
            "الحسبة" بنظامي iOS و android مملوكين لشركة الحسبة العقارية (شركة
            كويتية ذات مسئولية محدودة)، تأسست شركة الحسبة العقارية سنة 2016 على
            يد مجموعة من المتخصصين (خبرة 18 عام) في مجالات العقار والبنوك وتأسيس
            وإدارة المواقع الالكترونية بهدف تقديم خدمات عقارية متميزة من شأنها
            توفير الشفافية المطلوبة في السوق العقاري الكويتي وذلك من خلال
            استخدام أفضل الحلول التقنية الحديثة لتسهيل وصول المعلومات والبيانات
            والتحليلات المتعلقة في السوق العقاري الكويتي وتقديمها بصورة مبتكرة
            لجميع أصحاب المصالح.
          </div>
        </CoreItemContainer>
        <div class="alhisba-app-section">
          <div class="alhisba-app-bg d-flex align-items-center">
            <div class="right-section">
              <div
                class="iphone d-flex justify-content-center align-items-center rounded-circle"
              >
                <img src="/images/iphone.png" />
              </div>
            </div>
            <div class="left-section">
              <div class="logo">
                <img src="/images/Logo.svg" />
              </div>
              <div class="title">
                <span>تطبيق واحد لكل ما تحتاجه لعقارك</span>
              </div>
              <div class="description">
                <span>
                  من مبيعات ومزادات، حساب تكلفة البناء وحساب قرض الرهن العقاري
                  وطلب تقييم رسمي الآن على متجر آبل وأندرويد.
                </span>
              </div>
              <div class="os-logos">
                <img src="/images/os.svg" class="os-logo" />
              </div>
            </div>
          </div>
        </div>
        <div class="subscription-section d-flex justify-content-center">
          <div class="subscription-title">
            <span>
              اشترك في خدمة الرسائل الإخبارية ليصلك كل جديد في السوق العقاري
              الكويتي
            </span>
          </div>
        </div>
        <div
          class="contact-us d-flex justify-content-center align-items-center position-relative"
        >
          <div
            class="email-input d-flex justify-content-between align-items-center"
          >
            <div class="email">
              <input placeholder="ادخل البريد الالكتروني" />
            </div>
            <div class="subscription-btn">
              <button class="button-submit">
                <span class="text-submit">اشترك الآن</span>
              </button>
            </div>
          </div>
          <div class="footer-img">
            <div class="house-img position-absolute">
              <img src="/images/blueHouse.svg" />
            </div>
            <div class="tree position-absolute">
              <img src="/images/tree.svg" />
            </div>
          </div>
        </div>
      </CoreAppContainer>
    </div>
  </div>
</template>

<script setup scoped>
import aboutUsIcon from "/icons/aboutus.svg";
const aboutUs = ref(aboutUsIcon);
</script>

<style lang="scss">
@import "../static/sass/variables.scss";
.about-us-section {
  margin-top: 84px;
  .main-logo {
    margin-bottom: 54px;
    img {
      width: 15.26vw;
    }
  }
  .about-alhisba {
    font-family: $main-font-family;
    color: $primary-text-color;
    font-size: $font-size-3;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 200px;
    @include extra-large {
      font-size: $font-size-4;
    }
    @include large {
      font-size: $font-size-5;
    }
    @include medium {
      font-size: $font-size-6;
    }
    @include small() {
      font-size: 12px;
    }
    span {
      color: $primary-blue-color;
    }
  }
  .alhisba-app-section {
    margin-top: 121px;

    .alhisba-app-bg {
      background-color: $primary-blue-color;
      width: 100%;
      border-radius: 22px;
      padding-top: 50px;
      padding-bottom: 55px;
      @include extra-large {
        flex-wrap: wrap;
        justify-content: center;
      }
      .right-section {
        width: 50%;
        margin-right: 209px;
        @media (max-width: 1500px) {
          margin-right: 100px;
        }
        @include extra-large {
          margin-right: 0;
        }
        .iphone {
          background-color: rgb(17, 35, 71, 0.2);
          width: 343px;
          height: 343px;
          img {
            width: 209px;
            height: 423px;
          }
        }
      }

      .left-section {
        padding-left: 140px;
        padding-top: 58px;
        text-align: start;
        @include extra-large {
          text-align: center;
          padding-left: 0;
        }
        .logo {
          padding-bottom: 25px;
        }

        .title {
          font-family: $main-font-family;
          color: $secondary-text-color;
          font-size: 35px;
          font-weight: 800;
          font-style: normal;
          line-height: 53px;
          @include extra-large {
            font-size: 30px;
          }
          @include large {
            font-size: 25px;
          }
          @include medium {
            font-size: $font-size-3;
          }
        }

        .description {
          font-family: $main-font-family;
          color: $secondary-text-color;
          font-size: $font-size-4;
          font-weight: 500;
          font-style: normal;
          line-height: 25px;
          @include extra-large {
            font-size: $font-size-5;
          }
          @include large {
            font-size: $font-size-6;
          }
        }

        .os-logos {
          padding-top: 50px;
          .os-logo {
            cursor: pointer;
            @include medium() {
              width: 350px;
            }
            @include small() {
              width: 270px;
            }
          }
        }
      }
    }
  }

  .subscription-section {
    padding-top: 107px;
    padding-bottom: 55px;

    .subscription-title {
      width: 808px;
      text-align: center;

      span {
        font-family: $main-font-family;
        color: $primary-text-color;
        font-size: $font-size-1;
        font-style: normal;
        font-weight: 800;
        line-height: 56px;
        @include extra-large {
          font-size: 40px;
        }
        @include large {
          font-size: 35px;
        }
        @include medium {
          font-size: 28px;
        }
        @include small() {
          font-size: 25px;
        }
      }
    }
  }

  .email-input {
    border: 1px solid #dddddd;
    border-radius: 13px;
    width: 570px;
    padding-left: 6px;
    @include medium {
      width: 100%;
    }

    .email {
      input {
        width: 20.833vw;
        height: 60px;
        padding-right: 17px;
        border: none;
        font-family: $main-font-family;
        color: rgb(137, 150, 162, 0.6);
        font-size: $font-size-5;
        font-style: normal;
        font-weight: 800;
      }

      input::placeholder {
        font-family: $main-font-family;
        color: rgb(137, 150, 162, 0.6);
        font-size: $font-size-5;
        font-style: normal;
        font-weight: 800;
      }

      input:focus {
        outline: none;
      }
    }

    .subscription-btn {
      .button-submit {
        background-color: $primary-blue-color;
        width: 149px;
        height: 48px;
        box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
        border-radius: 12px;
        border: none;

        .text-submit {
          font-family: $main-font-family;
          color: $secondary-text-color;
          font-size: $font-size-4;
          font-style: normal;
          font-weight: 800;
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
          @include small() {
            font-size: 10px;
          }
        }
      }
    }
  }
  .contact-us {
    padding-bottom: 122px;

    .house-img {
      right: 0;
      bottom: 0;
      @include extra-large {
        display: none;
      }
    }

    .tree {
      left: 0;
      bottom: 0;
      @include extra-large {
        display: none;
      }
    }
  }
  a {
    text-decoration: none;
  }
}
</style>
