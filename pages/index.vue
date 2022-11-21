<template>
  <div class="home">
    <CoreHomeHeader />
    <CoreAppContainer>
      <div class="d-flex justify-content-center">
        <span class="section-title" id="services">كيف يمكننا مساعدتك؟</span>
      </div>
      <div
        class="section-contant d-flex align-items-center flex-fill justify-content-center gap-2"
      >
        <HomeSectionItem
          v-for="(item, index) in items"
          :key="item.index"
          :path="item.path"
          :title="item.title"
          :icon="sectionItemImages[index]"
        />
      </div>
      <div class="ads-btn-container d-flex justify-content-center">
        <NuxtLink to="/edit-ad/new">
          <div
            class="addAds-btn position-relative d-flex justify-content-between align-items-center"
          >
            <div class="position-relative">
              <img class="house" src="/icons/house.svg" />
            </div>
            <div class="plus-1 position-absolute">
              <img src="/icons/plus1.svg" />
            </div>
            <span class="ads-btn-title">أضف إعلان</span>
            <img class="plus2" src="/icons/plus2.svg" />
          </div>
        </NuxtLink>
      </div>
      <div
        class="sggested-section d-flex justify-content-between align-items-center pb-4"
      >
        <div class="sections-title">
          <span>عقارات مقترحة للبيع</span>
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
        <CoreSuggestedRealState />
      </div>
      <div
        class="sggested-section d-flex justify-content-between align-items-center pb-4 pt-5"
      >
        <div class="sections-title">
          <span>عقارات مقترحة للإيجار</span>
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
        <CoreSuggestedRealState />
      </div>
      <div class="wanted-reals-state-section d-flex flex-row">
        <div class="wanted-section-right d-flex flex-column">
          <div class="wanted-section-right-top">
            <div
              class="wanted-section d-flex justify-content-between pb-4 pt-5"
            >
              <div class="sections-title">
                <span>عقارات مطلوبة للبيع</span>
              </div>
              <NuxtLink to="/advertisement">
                <NuxtLink to="/advertisement">
                  <CoreViewAll />
                </NuxtLink>
              </NuxtLink>
            </div>
            <div class="wanted-reals-state d-flex">
              <HomeWantedRealState />
              <HomeWantedRealState />
              <HomeWantedRealState />
              <HomeWantedRealState />
              <HomeWantedRealState />
            </div>
          </div>
          <div class="wanted-section-right-bottom">
            <div
              class="wanted-section d-flex justify-content-between pb-4 pt-5"
            >
              <div class="sections-title">
                <span>عقارات مطلوبة للإيجار</span>
              </div>
              <NuxtLink to="/advertisement">
                <NuxtLink to="/advertisement">
                  <CoreViewAll />
                </NuxtLink>
              </NuxtLink>
            </div>
            <div class="wanted-reals-state d-flex">
              <HomeWantedRealState />
              <HomeWantedRealState />
              <HomeWantedRealState />
              <HomeWantedRealState />
              <HomeWantedRealState />
            </div>
          </div>
        </div>
      </div>
      <div
        class="sggested-section d-flex justify-content-between align-items-center pb-4 pt-5"
      >
        <div class="sections-title">
          <span>عقارات مقترحة للتبادل</span>
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
        <CoreSuggestedRealState />
      </div>
      <div class="ads-section-2 d-flex justify-content-center">
        <div class="ads-slider d-flex justify-content-center">
          <swiper :slides-per-view="1" @swiper="onSwiper">
            <swiper-slide>
              <img src="/images/AD-3.png" />
            </swiper-slide>
            <!-- <swiper-slide> <img src="/images/AD-3.png" /> </swiper-slide> -->
          </swiper>
        </div>
      </div>
      <div class="slider-dots d-flex justify-content-center">
        <!-- <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div> -->
        <HomeSliderDot :selected="true" />
        <HomeSliderDot :selected="false" />
        <HomeSliderDot :selected="false" />
        <HomeSliderDot :selected="false" />
      </div>
      <div class="news-section position-relative">
        <div class="sections-title d-flex justify-content-center pb-5">
          <span>آخر الأخبار العقارية</span>
        </div>
        <div class="news-container">
          <div class="news d-flex justify-content-center gap-4 pb-5">
            <HomeAppNews />
            <HomeAppNews />
            <HomeAppNews />
          </div>
        </div>
        <div class="view-more d-flex justify-content-center">
          <NuxtLink to="/news">
            <span>عرض المزيد</span>
          </NuxtLink>
        </div>
        <div class="kuwait-right position-absolute">
          <img src="/images/kuwait-1.svg" />
        </div>
        <div class="kuwait-left position-absolute">
          <img src="/images/kuwait-2.svg" />
        </div>
      </div>
      <div class="alhisba-app-section">
        <div class="alhisba-app-bg d-flex align-items-center">
          <div class="right-section d-flex justify-content-center">
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
      <!-- <div class="subscription-section d-flex justify-content-center">
        <div class="subscription-title">
          <span>
            اشترك في خدمة الرسائل الإخبارية ليصلك كل جديد في السوق العقاري
            الكويتي
          </span>
        </div>
      </div> -->
      <!-- <div
        class="contact-us d-flex justify-content-center align-items-center position-relative"
      >
        <div
          class="email-input d-flex justify-content-center align-items-center"
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
      </div> -->
    </CoreAppContainer>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  path: String,
});
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import evaluationIcon from "@/static/icons/evaluation.svg";
import registeredIcon from "@/static/icons/Registered.svg";
import costIcon from "@/static/icons/cost.svg";
import auctionsIcon from "@/static/icons/Auctions.svg";
import offEvaluationIcon from "@/static/icons/off-Evaluation.svg";
import exchangeIcon from "@/static/icons/Exchange.svg";
import bankIcon from "@/static/icons/Bank.svg";

const sectionItemImages = ref([
  evaluationIcon,
  registeredIcon,
  costIcon,
  auctionsIcon,
  offEvaluationIcon,
  exchangeIcon,
  bankIcon,
]);

const items = [
  {
    title: "التقييم الفوري",
    path: "/evaluation",
    icon: "/icons/evaluation.svg",
  },
  {
    title: "الصفقات المسجلة",
    path: "/deals",
    icon: "/icons/Registered.svg",
  },
  {
    title: "حسبة تكلفة البناء",
    path: "/",
    icon: "/icons/cost.svg",
  },
  {
    title: "مزادات عقارية",
    path: "/auctions",
    icon: "/icons/Auctions.svg",
  },
  {
    title: "التقييم الرسمي",
    path: "/officialevaluation",
    icon: "/icons/off-Evaluation.svg",
  },
  {
    title: "تبادل الممتلكات",
    path: "/exchange",
    icon: "/icons/Exchange.svg",
  },
  {
    title: "بنك بوبيان",
    path: "/mortgage",
    icon: "/images/insideHeader/mortgage-page.png",
  },
];
</script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";
.home {
  .SuggestedRealState {
    gap: 25px;
    width: 100%;
    /* @media (max-width: 1392px) {
      flex-wrap: wrap;
    } */
    @include extra-large {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .next-btn {
    position: absolute;
    width: 46px;
    height: 46px;
    background: #ffffff;
    border: 1.5px solid #eff0f6;
    box-shadow: 0px 2px 4px rgba(8, 15, 52, 0.1);
    border-radius: 50%;
    top: calc(50% - 23px);
    right: -33px;
    z-index: 1;

    img {
      width: 14px;
      height: 8px;
    }
  }
  .pre-btn {
    position: absolute;
    width: 46px;
    height: 46px;
    background: #ffffff;
    border: 1.5px solid #eff0f6;
    box-shadow: 0px 2px 4px rgba(8, 15, 52, 0.1);
    border-radius: 50%;
    z-index: 1;
    top: calc(50% - 23px);
    left: -33px;
    img {
      width: 14px;
      height: 8px;
    }
  }

  .slick-list {
    overflow: visible;
  }
  .test {
    width: 100px;
    height: 100px;
    background-color: blue;

    .test1 {
      width: 80px;
      height: 80px;
      background-color: red;
    }
  }
  .section-title {
    font-family: $main-font-family;
    font-size: $font-size-2;
    line-height: 50px;
    color: $primary-text-color;
    margin-top: $section-margin-top;
    margin-bottom: 37px;
    font-style: normal;
    font-weight: 800;
    @include large {
      font-size: 28px;
    }
    @include medium {
      font-size: 24px;
    }
    @include small() {
      font-size: 20px;
    }
  }
  .section-contant {
    overflow-x: scroll;
  }
  .ads-btn-container {
    padding-bottom: 8px;
    padding-top: 16px;
    .addAds-btn {
      background-color: $primary-blue-color;
      border-radius: 16px;
      padding-left: 15px;
      padding-right: 17px;
      padding-top: 9px;
      padding-bottom: 12px;
      cursor: pointer;

      .house {
        width: 30px;
        height: 33px;
      }

      .plus-1 {
        right: 30px;
        top: 24px;

        img {
          width: 25px;
          height: 25px;
        }
      }

      .plus2 {
        width: 19px;
        height: 19px;
        margin-left: 5px;
      }

      .ads-btn-title {
        font-family: $main-font-family;
        color: $secondary-text-color;
        font-size: $font-size-4;
        font-weight: 800;
        font-style: normal;
        padding-inline-start: 19px;
        padding-inline-end: 52px;
        @include large {
          font-size: $font-size-5;
        }
        @include medium {
          font-size: $font-size-6;
        }
      }
    }
  }
  .sggested-section {
    @include small() {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .sections-title {
    font-family: $main-font-family;
    color: $primary-text-color;
    font-size: $font-size-2;
    line-height: 50px;
    font-weight: 800;
    width: 100%;
    @include large {
      font-size: 28px;
    }
    @include medium {
      font-size: 24px;
    }
    @include small() {
      font-size: 20px;
    }
  }

  .slick-list {
    overflow: visible;
  }
  .wanted-section {
    padding-top: 75px;
    @include small() {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .wanted-section-right {
    width: 100%;
  }

  .wanted-reals-state-section {
    .wanted-reals-state {
      gap: 25px;
      width: 100%;
      /* @media (max-width: 1392px) {
        flex-wrap: wrap;
      } */
      @include extra-large {
        flex-wrap: wrap;
        justify-content: center;
      }
    }
    .wanted-section-ads {
      width: 300px;
      align-items: end;
    }
  }

  .ads-slider {
    padding-top: 104px;
    padding-bottom: 19px;
    img {
      border-radius: 13px;
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

  .news-section {
    padding-top: 57px;
    .news {
      width: 100%;
      @include large {
        flex-wrap: wrap;
      }
    }
    .view-more {
      span {
        font-family: $main-font-family;
        color: $primary-blue-color;
        font-size: 15px;
        font-weight: 800;
        font-style: normal;
        cursor: pointer;
      }
    }
  }

  .kuwait-right {
    // bottom: -60px;
    bottom: -8%;
    right: -160px;
    z-index: -1;
    @include large {
      display: none;
    }
    img {
      width: 442px;
    }
  }

  .kuwait-left {
    bottom: -1%;
    left: -120px;
    z-index: -1;
    @include extra-large {
      display: none;
    }
    @include large {
      display: none;
    }
    img {
      width: 332px;
    }
  }

  .alhisba-app-section {
    margin-top: 121px;
    /* edit */
    margin-bottom: 121px;

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
      }
    }
  }

  .email-input {
    border: 1px solid #dddddd;
    border-radius: 13px;
    width: 570px;
    padding-left: 6px;

    .email {
      input {
        width: 400px;
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
        }
      }
    }
  }
  .contact-us {
    padding-bottom: 122px;

    .house-img {
      right: 0;
      bottom: 0;
    }

    .tree {
      left: 0;
      bottom: 0;
    }
  }
  a {
    text-decoration: none;
  }
}
.news-container {
  padding-inline: 153px;
}

.slider-dots {
  .dot {
    margin-inline: 7.5px;
    width: 7px;
    height: 7px;
    background: rgba(7, 138, 251, 0.2);
    border-radius: 50%;
  }
}
</style>
