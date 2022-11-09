<template>
  <CoreInsideHeader
    title="وزارة العدل"
    :img="header"
    description="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
"
    bottom="-50px"
  />
  <CoreAppContainer>
    <CoreItemContainer>
      <div class="auction-details">
        <div class="bg d-flex align-items-center">
          <div class="title">
            <img src="/static/icons/justice.svg" alt="" />
            <span>وزارة العدل</span>
            <div class="line"></div>
          </div>
          <div class="contact-inforamtion d-flex justify-content-between">
            <div class="phone d-flex align-items-end">
              <div class="icon">
                <img src="/static/icons/darkmobile.svg" alt="" />
              </div>
              <div class="phone-details d-flex flex-column">
                <span class="top-title">رقم الهاتف</span>
                <span class="bottom-title">+965 123 4567 89</span>
              </div>
            </div>
            <div class="address d-flex align-items-end">
              <div class="icon">
                <img src="/static/icons/address.svg" alt="" />
              </div>
              <div class="address-details d-flex flex-column">
                <span class="top-title">العنوان</span>
                <span class="bottom-title">قصر العدل / 53</span>
              </div>
            </div>
          </div>
        </div>
        <div class="auction-accordion">
          <div class="main-items-title d-flex justify-content-between">
            <div class="right-title">
              <span>المنطقة</span>
            </div>
            <div class="left-title">
              <span class="one">المساحة</span>
              <span>السعر المبدئي</span>
            </div>
          </div>
          <div
            class="auction-items"
            v-for="(item, index) in items"
            :key="index"
          >
            <FormAccordion
              :title="item.title"
              :icon="item.icon"
              :area="item.area"
              :price="item.price"
              :date="item.date"
            />
          </div>
        </div>
      </div>
    </CoreItemContainer>
  </CoreAppContainer>
</template>

<script setup>
const items = ref([
  {
    icon: "/static/icons/blueHouse.svg",
    title: "فروانية - قطعة 4",
    area: "750",
    price: "ك.د 264,500",
    date: "26/10/2022 - 10:00 AM",
  },
  {
    icon: "/static/icons/blueHouse.svg",
    title: " غرب عبدالله المبارك",
    area: "750",
    price: "ك.د 264,500",
    date: "26/10/2022 - 10:00 AM",
  },
  {
    icon: "/static/icons/Land.svg",
    title: " الأندلس ",
    area: "750",
    price: "ك.د 264,500",
    date: "26/10/2022 - 10:00 AM",
  },
  {
    icon: "/static/icons/blueHouse.svg",
    title: " مدينة صباح الأحمد البحرية  ",
    area: "750",
    price: "ك.د 264,500",
    date: "26/10/2022 - 10:00 AM",
  },
  {
    icon: "/static/icons/blueHouse.svg",
    title: "إشبيلية",
    area: "750",
    price: "ك.د 264,500",
    date: "26/10/2022 - 10:00 AM",
  },
]);

import haederIcon from "/static/images/insideHeader/auctions-page.png";

const header = ref(haederIcon);
</script>

<style lang="scss">
@import "../../static/sass/variables.scss";
.auction-details {
  margin-top: 103px;
  margin-bottom: 84px;
  .auction-accordion {
    overflow-x: scroll;
  }
  .bg {
    width: 100%;
    background: $secondary-text-color;
    border: 1px solid #eff0f7;
    box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
    border-radius: 20px;
    padding: 24px;
    margin-bottom: 55px;
    @include extra-large() {
      flex-wrap: wrap;
      justify-content: center;
    }
    .title {
      width: 35%;
      position: relative;
      @include extra-large() {
      }
      img {
        width: 102px;
        height: 102px;
      }
      span {
        padding-inline: 17px;
        font-family: $main-font-family;
        font-size: 21px;
        font-style: normal;
        font-weight: 800;
        color: $primary-text-color;
      }
      .line::after {
        content: "";
        width: 1px;
        height: 106px;
        background-color: rgba(221, 221, 221, 0.4);
        position: absolute;
        left: 0px;
        top: 0;
      }
    }
    .contact-inforamtion {
      width: 55%;
      @include extra-large() {
        width: 100%;
      }
      @include small() {
        flex-wrap: wrap;
        justify-content: center !important;
      }
    }
    .phone {
      padding-inline-start: 36px;
      @include small() {
        padding-inline-start: 0;
      }
      .phone-details {
        padding-inline: 16px;
        @include small() {
          padding-inline-start: 16px;
        }
      }
    }
    .address {
      .address-details {
        padding-inline: 16px;
      }
    }
    .top-title {
      font-family: $main-font-family;
      font-size: $font-size-6;
      font-weight: 800;
      font-style: normal;
      color: #8996a2;
      @include extra-large {
        font-size: 12px;
      }
      @include large {
        font-size: 10px;
      }
      @include medium {
        font-size: 8px;
      }
      @include small() {
        font-size: 6px;
      }
    }
    .bottom-title {
      font-family: $main-font-family;
      font-size: $font-size-4;
      font-weight: 800;
      font-style: normal;
      color: $primary-blue-color;
      direction: ltr;
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
  .main-items-title {
    padding-inline: 10%;
    width: 1106px;
    padding-bottom: 11px;
    .right-title {
      width: 27%;
      font-family: $main-font-family;
      font-size: $font-size-4;
      font-weight: 800;
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
      @include small() {
        font-size: 10px;
      }
    }
    .left-title {
      display: flex;
      width: 66%;
      span {
        font-family: $main-font-family;
        font-size: $font-size-4;
        font-weight: 800;
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
        @include small() {
          font-size: 10px;
        }
      }
    }
  }
  .one {
    padding-inline-end: 97px;
  }
}
</style>
