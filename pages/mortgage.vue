<template>
  <div>
    <CoreInsideHeader title="حسبة القرض العقاري" :img="header" bottom="-20px" />
    <div class="page-bg">
      <CoreAppContainer>
        <CoreInsideContainer>
          <div class="mortgage-form">
            <div class="mortgage-bg">
              <div class="cost d-flex flex-wrap justify-content-between">
                <div class="items-dropdown">
                  <FormDropDown title="هل لديك حساب في بنك بوبيان؟" />
                </div>
                <!-- edited -->
                <div class="items-dropdown">
                  <FormTextFeild title="أدخل قيمة العقار" />
                </div>
                <div class="items-dropdown">
                  <FormTextFeild title="أدخل قيمة الدفعة المقدمة" />
                </div>
              </div>
              <div
                class="period d-flex justify-content-between align-items-center"
              >
                <div class="period-title">فترة السماح</div>
                <div class="period-month">43 شهر</div>
              </div>
              <div class="input-range">
                <input type="range" />
              </div>
              <div
                class="period d-flex justify-content-between align-items-center"
              >
                <div class="period-title">فترة السداد</div>
                <div class="period-month">60 شهر</div>
              </div>
              <div class="input-range">
                <input type="range" />
              </div>
              <!-- <div
              class="Payments-section d-flex flex-wrap justify-content-between"
            >
              <div class="items-dropdown">
                <FormDropDown title="نوع الدفعات" />
              </div>
              <div class="items-dropdown">
                <FormDropDown title="عدد الدفعات" />
              </div>
              <div class="items-dropdown">
                <FormDropDown title="حدد البنك الخاص بك" />
              </div>
            </div> -->
            </div>
          </div>
          <div class="calc-btn d-flex justify-content-end">
            <NuxtLink to="/mortgageresult">
              <div
                class="calc d-flex justify-content-center align-items-center"
              >
                <span>إحسب</span>
              </div>
            </NuxtLink>
          </div>
        </CoreInsideContainer>
      </CoreAppContainer>
    </div>
  </div>
</template>

<script setup>
import haederIcon from "/images/insideHeader/mortgage-page.png";

const header = ref(haederIcon);
</script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";
.page-bg {
  background: #0789fb10;
  padding-top: 99px;
  padding-bottom: 101px;
}

.mortgage-form {
  .mortgage-bg {
    width: 100%;
    background: #ffffff;
    border: 1px solid #eff0f7;
    box-shadow: 0px 5px 90px rgba(8, 15, 52, 0.06);
    border-radius: 34px;
    padding: 45px 101px;

    @include extra-extra-extra-large() {
      padding-inline-start: 111px;
      padding-inline-end: 92px;
    }
    @include extra-extra-large() {
      padding-left: 80px;
      padding-right: 80px;
    }
    @include extra-high-large() {
      padding-left: 60px;
      padding-right: 60px;
    }
    /* @include min-extra-large() {
      padding-right: 45px;
      padding-left: 35px;
    } */
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
    .period {
      margin-top: 22px;
      margin-bottom: 21px;
      .period-title {
        font-family: $main-font-family;
        color: $primary-text-color;
        font-size: $font-size-4;
        font-style: normal;
        font-weight: 800;
      }
      .period-month {
        font-family: $main-font-family;
        color: $primary-text-color;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
      }
    }
    .input-range {
      padding-bottom: 22px;
      input {
        width: 100%;
      }
    }
    .dropdown {
      width: 358px;
      background: #ffffff;
      border: 1.5px solid #dddddd;
      border-radius: 13px;
      padding: 24px;
      margin-bottom: 15px;
      cursor: pointer;

      span {
        font-family: $main-font-family;
        font-weight: 800;
        font-size: $font-size-4;
        font-style: normal;
        color: rgba(17, 35, 71, 0.4);
        font-weight: 800;
      }
    }
  }
}
.items-dropdown {
  width: 358px;
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
.calc {
  width: 165px;
  box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
  border-radius: 29px;
  background-color: $primary-blue-color;
  height: 58px;
  margin-bottom: 84px;
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
.text-field-container {
  width: 358px;
}
</style>
