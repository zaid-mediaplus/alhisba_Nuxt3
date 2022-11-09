<template>
  <div class="rent">
    <div
      class="main-title d-flex flex-column justify-content-center align-items-center"
    >
      <div class="title text-center">
        <span> التقييم الفوري (الإيجار)</span>
      </div>
      <div class="description text-center">
        <span
          >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص</span
        >
      </div>
    </div>
    <div class="Rent-form">
      <div class="form-bg">
        <div
          class="property d-flex flex-wrap justify-content-betwwen align-items-center"
        >
          <div class="real-section d-flex justify-content-between flex-wrap">
            <div class="items-dropdown">
              <FormDropDown
                title="الشامية"
                :items="[
                  'الشامية',
                  'السالمية',
                  'صباح السالم',
                  'الفروانية',
                  'الفروانية',
                  'الأندلس',
                  'جابر الأحمد',
                  'الأحمدي',
                ]"
              />
            </div>
            <div class="items-dropdown">
              <FormDropDown title="نوع الشقة" />
            </div>
            <div class="items-dropdown">
              <FormDropDown title="مساحة الشقة" />
            </div>
            <div class="items-dropdown">
              <FormDropDown title="عدد الحمامات" />
            </div>
          </div>
          <div class="quality d-flex align-items-center">
            <div class="text">
              <span>جودة العقار</span>
            </div>
            <div
              class="real-rating-bar d-flex justify-content-center align-items-baseline"
            >
              <div class="rating-option" @click="AcceptableToggle()">
                <div
                  class="option-bg d-flex justify-content-center align-items-center"
                  :class="AcceptableToggle() ? '' : 'selected'"
                >
                  <div class="inside-bg"></div>
                </div>
                <span :class="AcceptableToggle() ? 'selected' : ''">
                  مقبول</span
                >
              </div>
              <div class="rating-border"></div>
              <div class="rating-option" @click="AverageToggle()">
                <div
                  class="option-bg d-flex justify-content-center align-items-center"
                  :class="AverageToggle() ? '' : 'selected'"
                >
                  <div class="inside-bg"></div>
                </div>
                <span :class="AverageToggle() ? 'selected' : ''">متوسط</span>
              </div>
              <div class="rating-border"></div>
              <div class="rating-option" @click="goodToggle()">
                <div
                  class="option-bg d-flex justify-content-center align-items-center"
                  :class="goodToggle() ? '' : 'selected'"
                >
                  <div class="inside-bg"></div>
                </div>
                <span :class="goodToggle() ? 'selected' : ''">جيد </span>
              </div>
              <div class="rating-border"></div>
              <div class="rating-option" @click="excellentToggle()">
                <div
                  class="option-bg d-flex justify-content-center align-items-center"
                  :class="excellentToggle() ? '' : 'selected'"
                >
                  <div class="inside-bg"></div>
                </div>
                <span :class="excellentToggle() ? 'selected' : ''">ممتاز</span>
              </div>
            </div>
          </div>
          <div class="border"></div>
          <div class="specifications-section">
            <div class="specifications-title">مواصفات الموقع</div>
            <FormChipMenu :items="items" />
          </div>
        </div>
      </div>
    </div>
    <NuxtLink to="/rentresult">
      <div class="calc-btn d-flex justify-content-end">
        <div class="calc d-flex justify-content-center align-items-center">
          <span>إحسب</span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const items = ref([
  { id: 1, title: " غرفة خادمة" },
  { id: 2, title: "غرفة خادمة مع حمام" },
  { id: 3, title: " موقف سيارات" },
  { id: 4, title: " آمن" },
  { id: 5, title: " قريب من الخدمات " },
  { id: 6, title: " سهل الدخول" },
  { id: 7, title: "سهل الدخول " },
]);

const Acceptable = ref(false);
const AcceptableToggle = () => (Acceptable.value = !Acceptable.value);
const Average = ref(false);
const AverageToggle = () => (Average.value = !Average.value);
const good = ref(false);
const goodToggle = () => (good.value = !good.value);
const excellent = ref(false);
const excellentToggle = () => (excellent.value = !excellent.value);
</script>

<style lang="scss">
@import "../../static/sass/variables.scss";
.rent {
  .rating-border {
    width: 30px;
    height: 0px;
    border: 1px solid #dddddd;
    @include small() {
      width: 5px;
    }
  }
  .real-rating-bar {
    .rating-option {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50px;
      .option-bg {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(17, 35, 71, 0.3);
        &.selected {
          background: $primary-yellow-color;
        }
        .inside-bg {
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
        }
      }
      span {
        font-family: $main-font-family;
        font-size: $font-size-5;
        font-weight: 500;
        font-style: normal;
        color: #8996a2;
        @include extra-large() {
          font-size: $font-size-6;
        }
        @include large() {
          font-size: 12px;
        }
        @include medium() {
          font-size: 10px;
        }
        &.selected {
          color: $primary-yellow-color;
        }
      }
    }
  }
}
.items-dropdown {
  width: 358px;
  /* @include min-extra-large() {
    width: 300px;
  } */
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
.main-title {
  width: 100%;
  .title {
    font-family: $main-font-family;
    font-size: $font-size-2;
    font-weight: 800;
    font-style: normal;
    color: $primary-text-color;
    padding-bottom: 15px;
    @include extra-large() {
      font-size: 28px;
    }
    @include large() {
      font-size: 24px;
    }
    @include medium() {
      font-size: $font-size-3;
    }
  }

  .description {
    font-family: $main-font-family;
    font-size: $font-size-5;
    font-weight: 500;
    font-style: normal;
    color: #6f6c90;
    padding-bottom: 50px;
    width: 80%;
    @include extra-large() {
      font-size: $font-size-6;
    }
    @include large() {
      font-size: 12px;
    }
    @include medium() {
      font-size: 10px;
    }
  }
}

.Rent-form {
  .form-bg {
    width: 100%;
    border: 1px solid #eff0f7;
    box-shadow: 0px 5px 90px rgba(8, 15, 52, 0.06);
    border-radius: 34px;
    padding-right: 101px;
    padding-left: 102px;
    padding-top: 45px;
    padding-bottom: 51px;
    margin-bottom: 40px;
    max-width: 934px;
    margin: 0 auto;

    @include extra-extra-extra-large() {
      padding-right: 101px;
      padding-left: 102px;
    }
    @include extra-extra-large() {
      padding-left: 80px;
      padding-right: 80px;
    }
    @include extra-high-large() {
      padding-left: 60px;
      padding-right: 60px;
    }
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
  }

  .real-section {
    width: 100%;
  }

  .quality {
    padding-top: 40px;

    .text {
      font-family: $main-font-family;
      font-weight: 800;
      font-size: $font-size-4;
      font-style: normal;
      padding-left: 15px;
      @include eighteen-font-extra-lg;
      @include eighteen-font-lg;
      @include eighteen-font-medium;
      @include eighteen-font-small;
    }
  }

  .specifications-section {
    .specifications-title {
      font-family: $main-font-family;
      font-size: 24px;
      color: $primary-text-color;
      font-weight: 800;
      font-style: normal;
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

  .border {
    border: 1px solid rgba(137, 150, 162, 0.13);
    margin-bottom: 25px;
    margin-top: 37px;
    width: 100%;
  }
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
  margin-bottom: 101px;

  span {
    font-family: $main-font-family;
    color: $secondary-text-color;
    font-size: $font-size-4;
    font-weight: 800;
    font-style: normal;
    @include eighteen-font-extra-lg;
    @include eighteen-font-lg;
    @include eighteen-font-medium;
    @include eighteen-font-small;
  }
}
</style>
