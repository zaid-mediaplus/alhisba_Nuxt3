<template>
  <div class="result">
    <CoreAppContainer>
      <CoreItemContainer>
        <div class="notification">
          <BudgetNote />
        </div>
        <CoreFilter />
        <div class="mid">
          <div class="main-items-title d-flex justify-content-between">
            <span>الشارع</span>
            <span>الموقع</span>
            <span>المساحة</span>
            <span>السعر</span>
          </div>
          <div
            class="budget-items"
            v-for="(property, index) in properties"
            :key="index"
          >
            <BudgetResultBar :property="property" />
          </div>
        </div>
        <div class="pagination-bar d-flex justify-content-center gap-4">
          <CorePagination />
        </div>
      </CoreItemContainer>
      <div class="border"></div>
      <div class="sggested-section d-flex justify-content-between pb-4">
        <div class="sections-main-title">
          <span class="sections-title">عقارات مقترحة للبيع</span>
          <span class="sub-title">- نفس المنطقة</span>
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
      </div>
      <div class="border"></div>
      <div class="sggested-section d-flex justify-content-between pb-4">
        <div class="sections-main-title">
          <span class="sections-title">مكاتب عقارية مقترحة</span>
        </div>
        <NuxtLink to="/offices">
          <CoreViewAll />
        </NuxtLink>
      </div>
      <div class="SuggestedRealState d-flex">
        <CoreRealStateOffice />
        <CoreRealStateOffice />
        <CoreRealStateOffice />
        <CoreRealStateOffice />
        <CoreRealStateOffice />
        <CoreRealStateOffice />
      </div>

      <!-- <div class="ads-section">
        <div class="ads d-flex justify-content-center">
          <img src="/images/AD-4.png" />
        </div>
      </div> -->
    </CoreAppContainer>
  </div>
</template>

<script setup scoped>
const items = ref([
  {
    icon: "/icons/blueHouse.svg",
    title: "فروانية - قطعة 4",
    area: "750",
    price: "ك.د 264,500",
    date: "26.10.2021",
  },
  {
    icon: "/icons/blueHouse.svg",
    title: " غرب عبدالله المبارك",
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
    title: "إشبيلية",
    area: "750",
    price: "ك.د 264,500",
  },
]);
const properties = ref([
  {
    street: "شارعين بطن و ظهر",
    place: "طريق الدائري الثاني",
    area: "750",
    price: "ك.د 264,500",
  },
  {
    street: "شارعين بطن و ظهر",
    place: "طريق الدائري الثاني",
    area: "750",
    price: "ك.د 264,500",
  },
  {
    street: "شارعين بطن و ظهر",
    place: "طريق الدائري الثاني",
    area: "750",
    price: "ك.د 264,500",
  },
  {
    street: "شارعين بطن و ظهر",
    place: "طريق الدائري الثاني",
    area: "750",
    price: "ك.د 264,500",
  },
  {
    street: "شارعين بطن و ظهر",
    place: "طريق الدائري الثاني",
    area: "750",
    price: "ك.د 264,500",
  },
  {
    street: "شارعين بطن و ظهر",
    place: "طريق الدائري الثاني",
    area: "750",
    price: "ك.د 264,500",
  },
  {
    street: "شارعين بطن و ظهر",
    place: "طريق الدائري الثاني",
    area: "750",
    price: "ك.د 264,500",
  },
]);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.result {
  .budget-items {
    padding-bottom: 15px;
    width: 1106px;
  }
  .main-items-title {
    padding-inline-start: 35px;
    padding-inline-end: 80px;
    width: 100%;
    padding-bottom: 11px;
    span {
      font-family: $main-font-family;
      font-size: $font-size-4;
      font-weight: 800;
      font-style: normal;
      color: #8996a2;
    }
  }
  .border {
    border: 1px solid rgba(137, 150, 162, 0.13);
    margin-top: 22px;
    margin-bottom: 14px;
  }
  .sggested-section {
    margin-top: 54px;
    @include small() {
      display: flex;
      flex-wrap: wrap;
    }
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
}
.mid {
  overflow-x: scroll;
}
</style>
