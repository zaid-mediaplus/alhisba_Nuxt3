<template>
  <div class="inheritance">
    <div
      class="main-title d-flex flex-column justify-content-center align-items-center"
    >
      <div class="title text-center">
        <span> الميراث</span>
      </div>
      <div class="description text-center">
        <span
          >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص</span
        >
      </div>
    </div>
    <div class="evaluation-form">
      <form>
        <div
          class="section1 d-flex flex-wrap align-items-center justify-content-between"
        >
          <div class="text-field-container">
            <FormTextFeild title="أدخل القيمة المقدّرة" />
          </div>
          <div>
            <div class="chose-condition d-flex justify-content-between">
              <span>الحالة:</span>
              <div class="form-check d-flex felx-row">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" htmlFor="flexRadioDefault1">
                  ذكر
                </label>
              </div>
              <div class="form-check d-flex felx-row">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" htmlFor="flexRadioDefault2">
                  أنثى
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="real-section d-flex justify-content-between flex-wrap">
          <div class="items-dropdown">
            <FormDropDown title="عدد الزوجات" />
          </div>
          <div class="items-dropdown">
            <FormDropDown title="عدد الأبناء" />
          </div>
          <div class="text-field-container">
            <FormTextFeild title="عدد البنات" />
          </div>
          <div class="items-dropdown">
            <FormDropDown title="هل الأب على قيد الحياة؟" />
          </div>
          <div class="items-dropdown">
            <FormDropDown title="هل الأم على قيد الحياة؟" />
          </div>
        </div>
      </form>
    </div>
    <NuxtLink to="/inheritanceresult">
      <div class="calc-btn d-flex justify-content-end">
        <div class="calc d-flex justify-content-center align-items-center">
          <span>إحسب</span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.inheritance {
  .text-field-container {
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

  .evaluation-form {
    width: 100%;
    border: 1px solid #eff0f7;
    box-shadow: 0px 5px 90px rgba(8, 15, 52, 0.06);
    border-radius: 34px;
    padding-right: 111px;
    padding-left: 92px;
    padding-top: 45px;
    padding-bottom: 36px;
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

    .real-section {
      .text-feild {
        .estimated-value {
          width: 358px;
          background: #ffffff;
          border: 1.5px solid #dddddd;
          border-radius: 13px;
          padding: 24px;
          font-family: $main-font-family;
          color: rgba(17, 35, 71, 0.4);
          font-size: $font-size-4;
          font-style: normal;
          font-weight: 800;

          input:focus {
            outline: none;
          }
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
  .section1 {
    .chose-condition {
      span {
        font-family: $main-font-family;
        color: rgba(17, 35, 71, 0.4);
        font-size: $font-size-4;
        font-style: normal;
        font-weight: 800;
        margin-left: 25px;
        margin-top: 2px;
        @include eighteen-font-extra-lg;
        @include eighteen-font-lg;
        @include eighteen-font-medium;
        @include eighteen-font-small;
      }

      .form-check {
        margin-left: 47px;

        label {
          font-family: $main-font-family;
          color: rgba(17, 35, 71, 0.4);
          font-size: $font-size-4;
          font-style: normal;
          font-weight: 800;
          @include eighteen-font-extra-lg;
          @include eighteen-font-lg;
          @include eighteen-font-medium;
          @include eighteen-font-small;
        }

        .form-check-input {
          box-shadow: none;
          width: 24.7px;
          height: 24.7px;
          margin-bottom: 20px;
        }

        input[type="radio"]:label {
          color: #112347;
        }

        .form-check-label {
          margin-right: 30px;
        }
      }
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
