<template>
  <CoreInsideHeader title="تقديم طلب تمويل" :img="header" bottom="-20px" />
  <div class="page-bg">
    <CoreAppContainer>
      <CoreInsideContainer>
        <div class="finance-form">
          <form action="">
            <div class="main-title">
              <span>معلومات شخصية</span>
            </div>
            <div
              class="personal-information d-flex flex-wrap justify-content-between"
            >
              <div class="text-field-container">
                <FormTextFeild title="الإسم الكامل" />
              </div>
              <div class="text-field-container">
                <FormTextFeild title="الرقم الوطني" />
              </div>
              <div class="items-dropdown">
                <FormDropDown title="الجنسية" />
              </div>
              <div class="text-field-container">
                <FormTextFeild title="رقم الهاتف" />
              </div>
              <div class="text-field-container">
                <FormTextFeild title="البريد الإلكتروني" />
              </div>
            </div>
            <div class="border"></div>
            <div class="main-title">
              <span>معلومات عن القرض</span>
            </div>
            <div
              class="loan-information d-flex flex-wrap justify-content-between"
            >
              <div class="items-dropdown">
                <FormDropDown title="الغرض من القرض" />
              </div>
              <div class="items-dropdown">
                <FormDropDown title="طريقة سداد القرض" />
              </div>
              <div class="items-dropdown">
                <FormDropDown title="المهنة الحالية" />
              </div>
              <div class="items-dropdown">
                <FormDropDown title="الرتبة العسكرية" />
              </div>
            </div>
            <div class="border"></div>
            <div class="bank-questions">
              <div class="questions-one d-flex">
                <span class="questions-text"
                  >هل حساب الراتب الخاص بك حاليًا مع بنك بوبيان؟</span
                >
                <div class="form-check d-flex felx-row">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" htmlFor="flexRadioDefault1">
                    نعم
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
                    لا
                  </label>
                </div>
              </div>
              <div class="attachment-title">
                <span>أرفق وثيقة شهادة راتب</span>
              </div>
              <div class="salary">
                <FormAttachmentsRow title="شهادة راتب" />
              </div>
              <div class="questions-two d-flex">
                <span class="questions-text"
                  >هل حساب الراتب الخاص بك حاليًا مع بنك بوبيان؟</span
                >
                <div class="form-check d-flex felx-row">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" htmlFor="flexRadioDefault1">
                    نعم
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
                    لا
                  </label>
                </div>
              </div>
            </div>
            <div class="border"></div>
            <div
              class="work-information d-flex flex-wrap justify-content-between"
            >
              <div class="items-dropdown">
                <FormDropDown title="كم عدد سنوات عملك؟" />
              </div>
              <div class="items-dropdown">
                <FormDropDown title="مصدر آخر للدخل" />
              </div>
            </div>
            <div class="attachment-title">
              <span>أرفق وثيقة شهادة راتب</span>
            </div>
            <div class="income">
              <FormAttachmentsRow title="المداخيل الأخرى" />
            </div>
            <!-- <div class="text-feild">
              <input
                type="text"
                placeholder="التزامات مالية أخرى"
                id="text-color"
              />
            </div> -->
            <div class="text-field-large-container">
              <FormTextFeild title="التزامات مالية أخرى" />
            </div>
            <FormTextArea title="ملاحظات أخرى" />
          </form>
        </div>
        <div class="btn d-flex justify-content-end">
          <CoreCalcBtn />
        </div>
      </CoreInsideContainer>
    </CoreAppContainer>
  </div>
</template>

<script setup>
import haederIcon from "~/assets/images/insideHeader/mortgage-page.png";

const header = ref(haederIcon);
</script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";

.page-bg {
  background: #0789fb10;
  padding-top: 200px;
}
.btn {
  max-width: 934px;
  margin: 0 auto;
  padding-top: 40px;
}
.text-feild {
  margin-bottom: 15px;
  width: 100%;
  input[type="text"] {
    border: none;
    outline: none;
    width: 100%;
    background: #ffffff;
    border: 1.5px solid #dddddd;
    border-radius: 13px;
    padding: 24px;
    font-family: $main-font-family;
    color: $primary-text-color;
    font-size: $font-size-4;
    font-style: normal;
    font-weight: 800;
  }

  input::placeholder {
    font-family: $main-font-family;
    font-size: $font-size-4;
    font-style: normal;
    font-weight: 800;
    color: rgba(17, 35, 71, 0.4);
  }
}
.finance-form {
  width: 100%;
  max-width: 934px;
  padding-top: 38px;
  padding-bottom: 42px;
  padding-inline: 101px;
  background: #ffffff;
  border: 1px solid #eff0f7;
  box-shadow: 0px 5px 90px rgba(8, 15, 52, 0.06);
  border-radius: 34px;
  margin: 0 auto;
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
  .main-title {
    padding-bottom: 16px;
    span {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: 24px;
      line-height: 37px;
      font-style: normal;
      font-weight: 800;
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
  .border {
    margin-top: 40px;
    margin-bottom: 40px;
    border: 1px solid rgba(137, 150, 162, 0.13);
  }
  .bank-questions {
    .questions-one {
      padding-bottom: 25px;
    }
    .questions-text {
      padding-inline-end: 19px;
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: $font-size-4;
      font-style: normal;
      font-weight: 800;
      line-height: 23.56px;
    }
    .salary {
      padding-bottom: 48px;
    }

    .form-check {
      margin-left: 47px;

      label {
        font-family: $main-font-family;
        color: $theard-text-color;
        font-size: $font-size-6;
        font-style: normal;
        font-weight: 800;
        line-height: 18.33px;
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
        margin-top: 7px;
      }
    }
  }
  .income {
    padding-bottom: 15px;
  }
  .work-information {
    padding-bottom: 8px;
  }
  .attachment-title {
    padding-bottom: 11px;
    span {
      font-family: $main-font-family;
      color: $theard-text-color;
      font-size: $font-size-4;
      font-style: normal;
      font-weight: 800;
      line-height: 23.56px;
    }
  }
}
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
.text-field-large-container {
  width: 100%;
}
</style>
