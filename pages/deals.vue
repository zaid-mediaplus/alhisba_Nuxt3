<template>
  <div class="deals">
    <CoreInsideHeader
      title="الصفقات المسجلة"
      :img="header"
      description="هذا
    النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من
    مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.
    "
      bottom="-52px"
    />
    <CoreAppContainer>
      <CoreItemContainer>
        <CoreFilter />
        <div class="all-details">
          <div class="main-items-title d-flex justify-content-between">
            <div class="right-title">
              <span>المنطقة</span>
            </div>
            <div class="left-title">
              <span class="one">المساحة</span>
              <span class="two">الوصف</span>
              <span class="three">السعر </span>
              <span class="four">سعر (م2) </span>
            </div>
          </div>
          <div
            class="auction-items"
            v-for="(item, index) in items"
            :key="index"
          >
            <AccordionMenu
              :title="item.title"
              :icon="item.icon"
              :area="item.area"
              :date="item.date"
              :price="item.price"
            />
          </div>
        </div>
        <div class="pagination-bar d-flex justify-content-center gap-4">
          <CorePagination />
        </div>
        <div class="ads-section">
          <div class="ads d-flex justify-content-center">
            <img src="/images/L-AD-4.png" />
          </div>
        </div>
      </CoreItemContainer>
    </CoreAppContainer>
  </div>
</template>

<script setup>
const items = ref([
  {
    icon: "/icons/blueHouse.svg",
    title: "اليرموك ",
    area: "750",
    price: "ك.د 264,500",
    date: "26.10.2021",
  },
  {
    icon: "/icons/blueHouse.svg",
    title: " مدينة صباح الأحمد البحرية ",
    area: "750",
    price: "ك.د 264,500",
    date: "26.10.2021",
  },
  {
    icon: "/icons/Land.svg",
    title: " الأندلس ",
    area: "750",
    price: "ك.د 264,500",
    date: "26.10.2021",
  },
  {
    icon: "/icons/blueHouse.svg",
    title: " مدينة صباح الأحمد البحرية  ",
    area: "750",
    price: "ك.د 264,500",
    date: "26.10.2021",
  },
  {
    icon: "/icons/blueHouse.svg",
    title: "المسايل",
    area: "750",
    price: "ك.د 264,500",
    date: "26.10.2021",
  },
  {
    icon: "/icons/blueHouse.svg",
    title: "المسايل",
    area: "750",
    price: "ك.د 264,500",
    date: "26.10.2021",
  },
  {
    icon: "/icons/blueHouse.svg",
    title: "غرب عبدالله المبارك",
    area: "750",
    price: "ك.د 264,500",
    date: "26.10.2021",
  },
]);

import haederIcon from "/images/insideHeader/deals-page.png";

const header = ref(haederIcon);
</script>

<style lang="scss">
@import "../static/sass/variables.scss";
.pagination-bar {
  margin-top: 77px;
  margin-bottom: 65px;
  @include extra-large {
    flex-wrap: wrap;
  }
}
.ads-section {
  padding-bottom: 81px;
  .ads {
    img {
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
}
.all-details {
  overflow-x: scroll;
}
.main-items-title {
  padding-inline: 10%;
  width: 1106px;
  padding-bottom: 11px;
  .right-title {
    font-family: $main-font-family;
    font-size: $font-size-4;
    font-weight: 800;
    font-style: normal;
    color: #8996a2;
  }
  .left-title {
    display: flex;
    width: 67%;
    span {
      font-family: $main-font-family;
      font-size: $font-size-4;
      font-weight: 800;
      font-style: normal;
      color: #8996a2;
    }
  }
}
.one {
  padding-inline-end: 60px;
}
.two {
  padding-inline-end: 136px;
}
.three {
  padding-inline-end: 75px;
}
</style>
