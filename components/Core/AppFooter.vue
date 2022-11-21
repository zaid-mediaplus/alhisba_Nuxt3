<template>
  <div class="footer">
    <CoreAppContainer>
      <div class="footer-sections d-flex flex-wrap justify-content-start">
        <div class="contact-us">
          <div class="logo">
            <img src="/images/Logo.svg" />
          </div>
          <div class="phone pb-3 pt-5">
            <img src="/icons/mobile.svg" />
            <span class="icon pe-2">+965-60020-778</span>
          </div>
          <div class="email pb-3">
            <img src="/icons/email.svg" />
            <span class="icon pe-2"
              ><a href="mailto:info@alhisba.com">info@alhisba.com</a></span
            >
          </div>
          <div class="time">
            <img src="/icons/clock.svg" />
            <span class="icon pe-2">09:30 - 16:00</span>
          </div>
          <div class="social-icon">
            <img src="/icons/instagram.svg" />
            <img src="/icons/linkedin.svg" />
            <img src="/icons/twitter.svg" />
            <img src="/icons/facebook.svg" />
          </div>
        </div>
        <div class="services">
          <div class="title">خدمات الحسبة</div>
          <div class="service d-flex flex-column">
            <span>تقييم استرشادي (سكن خاص)</span>
            <span>الصفقات المسجلة (وزارة العدل)</span>
            <span>المزادات العقارية</span>
            <span>حسبة القرض العقاري</span>
            <span>اعلانات البيع / الايجار</span>
            <span>تكلفة البناء (سكن خاص)</span>
            <span>طلب تقييم رسمي</span>
            <span>تقييم فوري (شقق)</span>
            <span>تقييم فوري ( إستثماري )</span>
            <span>تقييم استرشادي - ايجارات</span>
          </div>
        </div>
        <div class="Quick-links">
          <div class="title">روابط سريعة</div>
          <div class="links d-flex flex-column">
            <span>الدخول على الحساب</span>
            <span>سياسة الخصوصية</span>
            <NuxtLink to="/termsandconditions">
              <span>الشروط والاحكام</span>
            </NuxtLink>
            <span>الاشتراك في خدمة الرسائل الإخبارية</span>
          </div>
        </div>
        <div class="left-img">
          <img src="/icons/footer.svg" alt="" />
        </div>
      </div>
      <div class="bottom-section d-flex align-items-center flex-wrap">
        <div class="copyright">
          <span>جميع الحقوق محفوظة للحسبة @ 2022.</span>
        </div>
        <div class="policy">
          <NuxtLink to="/termsandconditions">
            <span class="terms">الشروط والأحكام</span>
          </NuxtLink>
          <span class="privacy"> الخصوصية </span>
        </div>
      </div>
    </CoreAppContainer>
  </div>
</template>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.footer {
  width: 100%;
  background: #112347;
  padding-top: calc(85px - 27px);
  padding-right: 120px;
  padding-bottom: 25px;

  @include extra-large() {
    padding-right: 100px;
  }
  @include large() {
    padding-right: 80px;
  }
  @include medium() {
    padding-right: 0;
  }

  .footer-sections {
    position: relative;
    text-align: start;
    width: 100%;
    /* @include large() {
      text-align: center;
    } */
    .contact-us {
      width: 30%;
      @include extra-large() {
        width: 50%;
      }
      @include medium() {
        width: 100%;
        text-align: center;
      }
      .icon {
        font-family: $main-font-family;
        color: $secondary-text-color;
        font-size: $font-size-4;
        font-style: normal;
        font-weight: 500;
        line-height: 28px;
        cursor: pointer;

        a {
          text-decoration: none;
          color: $secondary-text-color;
        }
      }

      .social-icon {
        margin-top: 126px;

        img {
          margin-left: 36px;
          cursor: pointer;
          @include medium() {
            padding-inline: 19px;
            margin-left: 0;
          }
        }
      }
    }
  }
  .copyright {
    /* margin-top: 90px; */
    width: 30%;
    @include medium() {
      width: 51%;
    }
    span {
      font-family: $main-font-family;
      color: $secondary-text-color;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px;
      /* @include large() {
        text-align: center;
      } */
    }
  }
  .title {
    font-family: $main-font-family;
    color: $secondary-text-color;
    font-size: 21px;
    font-style: normal;
    font-weight: 800;
    line-height: 33px;
    padding-bottom: 25px;
    /* @include large() {
      text-align: center;
    } */
  }

  .services {
    width: 38%;
    @include extra-large() {
      width: 39%;
    }
    @include medium() {
      width: 100%;
      text-align: center;
    }
  }

  .links,
  .service {
    span {
      font-family: $main-font-family;
      color: $secondary-text-color;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 33px;
      cursor: pointer;
    }
  }

  .policy {
    /* margin-top: 81px; */
    @include medium() {
      width: 50%;
    }
    .terms {
      font-family: $main-font-family;
      color: $secondary-text-color;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px;
      padding-left: 30px;
      cursor: pointer;
    }
    .privacy {
      font-family: $main-font-family;
      color: $secondary-text-color;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px;
      cursor: pointer;
    }
  }
  .left-img {
    bottom: -155px;
    position: absolute;
    left: 0;
    @media (max-width: 1275px) {
      display: none;
    }
  }
}
.bottom-section {
  width: 100%;
  margin-top: 100px;
  @include medium() {
    justify-content: center;
    text-align: center;
  }
}
.Quick-links {
  width: 32%;
  @include medium() {
    width: 100%;
    text-align: center;
  }
}
</style>
