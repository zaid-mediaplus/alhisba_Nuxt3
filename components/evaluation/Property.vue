<template>
  <div class="property">
    <div
      class="main-title d-flex flex-column justify-coloumn-center align-items-center"
    >
      <div class="title text-center">
        <span>التقييم الفوري (الملكية)</span>
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
        <div class="real-section d-flex justify-content-between flex-wrap">
          <div class="items-dropdown">
            <FormDropDown
              title="المنطقة"
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
            <FormDropDown title="المساحة" />
          </div>
          <div class="items-dropdown">
            <FormDropDown title="الموقع" />
          </div>
          <div class="items-dropdown">
            <FormDropDown title="الاتجاه" />
          </div>
          <div class="items-dropdown">
            <FormDropDown title="الارتداد" />
          </div>
          <div class="items-dropdown">
            <FormDropDown title="الارتداد" />
          </div>
          <div class="items-dropdown">
            <FormDropDown title="طول الواجهة الخلفية" />
          </div>
          <div class="items-dropdown">
            <FormDropDown title="طول الواجهة البحرية" />
          </div>
        </div>
        <div>
          <FormCheckBoxMenu :items="items" />
        </div>
        <div class="property-status">
          <div class="property-title">حالة العقار</div>
          <div class="chose-property d-flex">
            <div class="form-check d-flex felx-row">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" htmlFor="flexRadioDefault1">
                أرض
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
                مبنى
              </label>
            </div>
          </div>
        </div>
        <div class="property-list">
          <div
            class="property-list-top d-flex flex-wrap justify-content-between"
          >
            <div class="items-dropdown">
              <FormDropDown title="عمر البناء" />
            </div>
            <div class="items-dropdown">
              <FormDropDown title="جودة التشطيب" />
            </div>
          </div>
          <div class="quality-btn d-flex justify-content-end">
            <CoreModal :show="showModal" :close="() => (showModal = false)">
              <div class="modal-bg">
                <div class="modal-top d-flex">
                  <div
                    class="modal-close-bg d-flex justify-content-center align-items-center"
                    @click="showModal = false"
                  >
                    <img src="/static/icons/close.svg" alt="close" />
                  </div>
                  <div class="title">
                    <span>إعرف الجودة لديك</span>
                  </div>
                </div>
                <div class="border"></div>
                <div class="modal-mid d-flex flex-wrap justify-content-between">
                  <div class="items-dropdown">
                    <FormDropDown title="ارتفاع السقف" />
                  </div>
                  <div class="items-dropdown">
                    <FormDropDown title="نوع مكيف الهواء" />
                  </div>
                  <div class="items-dropdown">
                    <FormDropDown title="هل يوجد مصعد؟" />
                  </div>
                  <div class="items-dropdown">
                    <FormDropDown title="نوع المطبخ" />
                  </div>
                  <div class="items-dropdown">
                    <FormDropDown title="واجهة المبنى" />
                  </div>
                  <div class="items-dropdown">
                    <FormDropDown title="نوع الأرضيات" />
                  </div>
                  <div class="items-dropdown">
                    <FormDropDown title="غالق دوار" />
                  </div>
                  <div class="items-dropdown">
                    <FormDropDown title="ألمنيوم" />
                  </div>
                  <div class="items-dropdown">
                    <FormDropDown title="الأدوات الصحية" />
                  </div>
                  <div class="items-dropdown">
                    <FormDropDown title="الإضاءة" />
                  </div>
                  <div class="items-dropdown">
                    <FormDropDown title="بركة سباحة" />
                  </div>
                </div>
                <div class="border"></div>
                <div class="modal-bottom">
                  <div class="save-btn d-flex justify-content-end">
                    <div
                      class="save-bg d-flex justify-content-center align-items-center"
                    >
                      <span>حفظ</span>
                    </div>
                  </div>
                </div>
              </div>
            </CoreModal>
            <div
              class="yellow-btn d-flex justify-content-between align-items-center"
              @click="showModal = true"
            >
              <div class="btn-img">
                <img src="/static/icons/info.svg" />
              </div>
              <div>
                <span>اعرف الجودة لديك</span>
              </div>
            </div>
          </div>
          <div
            class="property-list-bottom d-flex flex-wrap justify-content-between"
          >
            <div class="items-dropdown">
              <FormDropDown title="عدد الطوابق" />
            </div>
            <div class="items-dropdown">
              <FormDropDown title="يوجد طابق سفلي؟" />
            </div>
          </div>
        </div>
        <div class="border"></div>
        <div class="specifications-section">
          <div class="specifications-title">مواصفات الموقع</div>
          <FormChipMenu :items="propertySpecifications" />
        </div>
        <div class="border"></div>
        <div class="specifications-section">
          <div class="specifications-title">مواصفات القطعة الأرض</div>
          <FormChipMenu :items="landSpecification" />
        </div>
        <div class="border"></div>
        <div class="specifications-section">
          <div class="specifications-title">الواجهة</div>
          <FormChipMenu :items="Interface" />
        </div>
      </form>
    </div>
    <NuxtLink to="/propertyresult">
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
  { id: 1, icon: "/static/icons/building.svg", title: "مشترك" },
  { id: 2, icon: "/static/icons/lights.svg", title: "أعمدة الانارة" },
  { id: 3, icon: "/static/icons/bus.svg", title: " موقف باص" },
  { id: 3, icon: "/static/icons/oneSide.svg", title: " شارع" },
  { id: 3, icon: "/static/icons/twoSide.svg", title: " شارع عريض " },
]);
const propertySpecifications = ref([
  { id: 1, title: "سهل الدخول" },
  { id: 2, title: "قريب من الخدمات" },
  { id: 3, title: "سهل الخروج" },
  { id: 4, title: "قريب من المسجد" },
  { id: 5, title: "قريب من مركز الحي" },
  { id: 6, title: "أقل طلبا" },
  { id: 7, title: "قريب من الحديقة" },
]);
const landSpecification = ref([
  { id: 1, title: " قابل للتقسيم" },
  { id: 2, title: "جهة امامية واسعة" },
  { id: 3, title: "مينى متجاور" },
  { id: 4, title: "عرض اقل من متوسط" },
  { id: 5, title: "ملحقة بمنطقة مفتوحة او حديقة" },
]);
const Interface = ref([
  { id: 1, title: " منزل اخر" },
  { id: 2, title: "منطقة اخرى" },
  { id: 3, title: "حديقة" },
  { id: 4, title: "موقف سيارات المدرسة" },
  { id: 5, title: "موقف سيارات" },
  { id: 6, title: "مسجد" },
  { id: 7, title: "ساحة" },
  { id: 4, title: "موقف سيارات مسجد" },
]);

const showModal = ref(false);

let toggleModal = () => (showModal = !showModal);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.save-bg {
  width: 165px;
  box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
  border-radius: 29px;
  background-color: $primary-blue-color;
  height: 58px;
  cursor: pointer;
  margin-top: 15px;

  span {
    font-family: $main-font-family;
    color: $secondary-text-color;
    font-size: $font-size-4;
    font-weight: 800;
    font-style: normal;
  }
}
.modal-bg {
  width: 824px;
  background: #ffffff;
  box-shadow: 0px 25px 50px rgba(17, 35, 71, 0.2);
  border-radius: 26px;
  .modal-top {
    padding: 24px 0 15px 0;
    .title {
      font-family: $main-font-family;
      font-weight: 800;
      font-size: $font-size-4;
      font-style: normal;
      color: $primary-text-color;
    }
    .modal-close-bg {
      width: 32px;
      height: 32px;
      background: #8996a2;
      opacity: 0.12;
      border-radius: 50%;
      margin-inline: 15px;
      margin-left: 36%;
      cursor: pointer;
    }
  }
  .modal-mid {
    padding-inline: 45px;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .modal-bottom {
    padding-bottom: 23px;
    padding-inline: 45px;
  }
}
.items-dropdown {
  width: 358px;

  /* @include extra-extra-extra-large() {
    width: 358px;
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
.property {
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
    /* width: 100%; */
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

    .real-section {
      .drop-down {
        padding-bottom: 15px;
        margin-bottom: 15px;
      }
    }
  }

  .property-status {
    .chose-property {
      @include medium() {
        flex-wrap: wrap;
      }
      .form-check {
        margin-left: 47px;

        .form-check-input {
          box-shadow: none;
          width: 24.7px;
          height: 24.7px;
          margin-bottom: 20px;
        }

        .form-check-label {
          font-family: $main-font-family;
          font-size: $font-size-4;
          font-weight: 800;
          font-style: normal;
          color: rgba(17, 35, 71, 0.4);
          padding-bottom: 50px;
          margin-right: 30px;
          @include eighteen-font-extra-lg;
          @include eighteen-font-lg;
          @include eighteen-font-medium;
          @include eighteen-font-small;
        }
      }
    }

    .property-title {
      font-family: $main-font-family;
      font-size: 24px;
      color: $primary-text-color;
      font-weight: 800;
      font-style: normal;
      text-align: start;
      padding-top: calc(58px - 13px);
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
  }
  .property-list {
    .property-list-bottom {
      margin-bottom: 38px;
    }
    .yellow-btn {
      width: 204px;
      height: 46px;
      background-color: rgba(243, 175, 52, 0.12);
      border: 1px solid #f3af34;
      border-radius: 10px;
      padding-bottom: 13px;
      padding-top: 13px;
      padding-left: 20px;
      padding-right: 19px;
      margin-bottom: 17px;
      cursor: pointer;
      @include medium {
        width: 100%;
      }
      .btn {
        padding: 0;
        margin: 0;
      }

      .btn-img {
        padding-left: 12px;
      }

      span {
        font-family: $main-font-family;
        font-weight: 800;
        color: $primary-yellow-color;
        font-size: $font-size-5;
        @include extra-large() {
          font-size: $font-size-5;
        }
        @include large() {
          font-size: $font-size-6;
        }
        @include medium() {
          font-size: 12px;
        }
      }
    }

    .main-header {
      width: 100%;
      .quilty-title {
        font-family: $main-font-family;
        font-size: $font-size-4;
        color: $primary-text-color;
        font-weight: 800;
        font-style: normal;
      }
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
