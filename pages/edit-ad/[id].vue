<template>
  <div>
    <CoreInsideHeader
      title="أضف إعلان"
      :img="header"
      description="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.
"
      bottom="-46px"
    />
    <CoreAppContainer>
      <CoreInsideContainer>
        <div class="create-ad">
          <div class="create-ad-form">
            <div class="yellow-note d-flex justify-content-center">
              <div
                class="note-content d-flex justify-content-center align-items-center"
              >
                <div class="icon-bg">
                  <!-- <img src="/icons/info.svg" alt="" /> -->
                  <!-- <img src="/assets/icons/info.svg" alt="" /> -->
                  <img src="~/assets/icons/info.svg" alt="" />
                </div>
                <span>عدد الإعلانات المتبقية لديك: 3</span>
              </div>
            </div>
            <div class="category">
              <div class="category-title d-flex justify-content-center">
                <span>اختر الفئة</span>
              </div>
            </div>
            <div
              class="category-taps d-flex flex-wrap justify-content-center gap-2"
            >
              <div
                v-for="(tap, index) in taps"
                :key="index"
                @click="currentTapIndex = index"
              >
                <FormAdTap :tap="tap" :selected="currentTapIndex == index" />
              </div>
            </div>
            <div class="category-border"></div>
            <FormAdSell v-if="currentTapIndex == 0" />
            <FormAdRent v-if="currentTapIndex == 1" />
            <FormAdSell v-if="currentTapIndex == 2" />
            <FormAdRent v-if="currentTapIndex == 3" />
            <FormAdExchange v-if="currentTapIndex == 4" />
            <div class="d-flex justify-content-between">
              <div
                class="attachments"
                v-for="(item, index) in items"
                :key="index"
                v-show="!select"
              >
                <FormAttachments
                  :title="item.title"
                  :icon="attatchmentImages[index]"
                />
              </div>
            </div>
            <div v-show="select">
              <FormCreateAd />
            </div>
          </div>
          <div class="next-btn d-flex justify-content-end">
            <div
              class="next d-flex justify-content-center align-items-center"
              @click="selectToggle()"
            >
              <span>التالي</span>
            </div>
          </div>
        </div>
      </CoreInsideContainer>
    </CoreAppContainer>
  </div>
</template>

<script setup>
const props = defineProps({
  selected: Boolean,
});
import photoIcon from "/static/icons/photo.svg";
import videoIcon from "/static/icons/vidio-icon.svg";
import documentIcon from "/static/icons/document.svg";
const attatchmentImages = ref([photoIcon, videoIcon, documentIcon]);
const items = ref([
  { id: 1, icon: "/static/icons/photo.svg", title: "أضف إلى حد 9 صور" },
  { id: 3, icon: "/static/icons/vidio-icon.svg", title: "أضف فيديو " },
  { id: 2, icon: "/static/icons/document.svg", title: "أضف مستند" },
]);
const taps = ref([
  {
    id: 1,
    title: "للبيع",
    icon: sellIcon,
  },
  {
    id: 2,
    title: "للإيجار",
    icon: rentIcon,
  },
  {
    id: 3,
    title: "مطلوب للبيع",
    icon: wantedSellIcon,
  },
  {
    id: 4,
    title: "مطلوب للإيجار",
    icon: wantedRentIcon,
  },
  {
    id: 5,
    title: "للتبادل",
    icon: exchangeIcon,
  },
]);
import sellIcon from "/static/icons/property.svg";
import rentIcon from "/static/icons/rent.svg";
import wantedSellIcon from "/static/icons/property.svg";
import wantedRentIcon from "/static/icons/rent.svg";
import exchangeIcon from "/static/icons/Exchange.svg";

const tapImages = ref([
  sellIcon,
  rentIcon,
  wantedSellIcon,
  wantedRentIcon,
  exchangeIcon,
]);

const currentTapIndex = ref(0);
const tabs = ref([]);

const select = ref(false);
const selectToggle = () => (select.value = !select.value);

import haederIcon from "/static/icons/advertisement.svg";

const header = ref(haederIcon);

// import infoRef from "/static/icons/info.svg";
// const infoSvg = ref(infoRef);
</script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";
.create-ad {
  margin-top: 100px;
  .create-ad-form {
    width: 100%;
    max-width: 934px;
    background: #ffffff;
    border: 1px solid #eff0f7;
    box-shadow: 0px 5px 90px rgba(8, 15, 52, 0.06);
    border-radius: 34px;
    padding: 36px 0 46px 0;
    padding-inline: 102px;
    margin: 0 auto;
    .yellow-note {
      .note-content {
        padding: 16px 65px 15px 62px;
        background: rgba(243, 175, 52, 0.12);
        border-radius: 12px;
        .note-bg {
        }
        span {
          font-family: $main-font-family;
          font-weight: 800;
          font-size: $font-size-5;
          font-style: normal;
          color: $primary-yellow-color;
          padding-inline: 12px;
        }
      }
    }
    .category {
      margin-top: 34px;
      margin-bottom: 18px;
      .category-title {
        font-family: $main-font-family;
        font-weight: 800;
        font-size: 24px;
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
    .items-dropdown {
      width: 358px;
    }
    .category-taps {
      .taps-bg {
        border: 1.3px solid #d9dbe9;
        border-radius: 21px;
        background: rgba(7, 138, 251, 0.1);
        padding: 22px 28px 22px 30px;
        cursor: pointer;
        img {
          width: 86.5px;
          height: 72.84px;
        }
        span {
          font-family: $main-font-family;
          font-weight: 800;
          font-size: $font-size-3;
          line-height: 27px;
          font-style: normal;
          color: $primary-blue-color;
          padding-top: 8px;
        }
      }
    }
    .category-border {
      margin-top: 40px;
      margin-bottom: 40px;
      border: 1px solid rgba(137, 150, 162, 0.13);
    }
    textarea {
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
  .attachments {
    width: 30%;
  }
  .next-btn {
    max-width: 934px;
    margin: 0 auto;
    padding-top: 40px;
  }
  .next {
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
