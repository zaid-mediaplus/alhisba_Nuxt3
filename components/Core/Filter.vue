<template>
  <div class="filter">
    <div class="filter-bg d-flex flex-column align-items-end">
      <div class="top d-flex">
        <div v-show="showBtn">
          <img
            class="setting-icon"
            src="/static/icons/filterIcons/settings.svg"
            @click="showModal = true"
          />
        </div>
        <CoreModal Modal :show="showModal" :close="() => (showModal = false)">
          <div class="modal-bg">
            <div class="modal-top d-flex">
              <div
                @click="showModal = false"
                class="modal-close-bg d-flex justify-content-center align-items-center"
              >
                <img src="/static/icons/close.svg" alt="close" />
              </div>
              <div class="title">
                <span>المرشحات</span>
              </div>
            </div>
            <div class="border"></div>
            <div class="modal-mid">
              <div class="property-status">
                <div class="property-title">حالة العقار</div>
                <div class="chose-property d-flex">
                  <div class="form-check d-flex felx-row">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="sell"
                    />
                    <label class="form-check-label" htmlFor="sell">
                      للبيع
                    </label>
                  </div>
                  <div class="form-check d-flex felx-row">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="rent"
                      checked
                    />
                    <label class="form-check-label" htmlFor="rent">
                      للإيجار
                    </label>
                  </div>
                  <div class="form-check d-flex felx-row">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="wanted-rent"
                      checked
                    />
                    <label class="form-check-label" htmlFor="wanted-rent">
                      مطلوب للإيجار
                    </label>
                  </div>
                  <div class="form-check d-flex felx-row">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="wanted-sell"
                      checked
                    />
                    <label class="form-check-label" htmlFor="wanted-sell">
                      مطلوب للبيع
                    </label>
                  </div>
                  <div class="form-check d-flex felx-row">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="exchange"
                      checked
                    />
                    <label class="form-check-label" htmlFor="exchange">
                      للتبادل
                    </label>
                  </div>
                </div>
                <div class="border"></div>
                <div class="property-title">المنطقة</div>
                <FormMultiSelect
                  :items="[
                    'جميع المناطق',
                    'السالمية',
                    'صباح السالم',
                    'الفروانية',
                    'الزهراء',
                    'الأندلس',
                    'جابر الأحمد',
                    'الأحمدي',
                  ]"
                />
                <div class="modal-border"></div>
                <div class="property-title">نوع العقار</div>
                <FormChipMenu :items="propertySpecifications" />
                <div class="modal-border"></div>
                <div class="property-title">المساحة</div>
                <div class="details d-flex justify-content-between">
                  <span>2م 375</span>
                  <span>2م 1,000</span>
                </div>
                <div class="input-range">
                  <input type="range" />
                </div>

                <div class="modal-border"></div>
                <div class="property-title">نطاق السعر</div>
                <div class="details d-flex justify-content-between">
                  <span>2م 375</span>
                  <span>2م 1,000</span>
                </div>
                <div class="input-range">
                  <input type="range" />
                </div>
                <div class="modal-border"></div>
              </div>
            </div>

            <div class="modal-bottom">
              <div
                class="save-btn d-flex justify-content-end align-items-center"
              >
                <span class="set-default">إعادة تعيين</span>
                <div
                  class="save-bg d-flex justify-content-center align-items-center"
                >
                  <span>ترشيح</span>
                </div>
              </div>
            </div>
          </div>
        </CoreModal>
        <div
          class="filter-list-bg d-flex justify-content-between align-items-center"
        >
          <div class="dropdown-list d-flex align-items-center">
            <div class="items-dropdown">
              <FormDropDown
                title="نوع الإعلان"
                :icon="arrow"
                :showBorder="false"
                padding="0"
                marginBottom="0"
              />
            </div>
            <div class="line"></div>
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
                :icon="arrow"
                :showBorder="false"
                padding="0"
                marginBottom="0"
              />
            </div>
            <div class="line"></div>
            <div class="items-dropdown">
              <FormDropDown
                title="نوع العقار"
                :icon="arrow"
                :showBorder="false"
                padding="0"
                marginBottom="0"
              />
            </div>
            <div class="line"></div>
          </div>
          <div class="search-btn d-flex">
            <div
              class="btn-bg d-flex justify-content-center align-items-center"
            >
              <img
                class="search-icon"
                src="/static/icons/filterIcons/search.svg"
              />
              <span>بحث</span>
            </div>
          </div>
        </div>
      </div>
      <span class="delete">حذف المرشحات</span>
    </div>
  </div>
</template>

<script setup>
import arrowIcon from "/static/icons/filterIcons/arrow.svg";

const arrow = ref(arrowIcon);

const props = defineProps({
  icon: String,
  showBtn: {
    type: Boolean,
    default: false,
  },
});
const propertySpecifications = ref([
  { id: 1, title: "أرض" },
  { id: 2, title: "قريب من الخدمات" },
  { id: 3, title: "تحت الإنشاء" },
  { id: 4, title: "بيت" },
  { id: 5, title: "بيت حكومي" },
  { id: 6, title: "شقة" },
  { id: 7, title: "بناية" },
  { id: 7, title: "مجمع تجاري" },
  { id: 7, title: "مزرعة" },
  { id: 7, title: "شاليه" },
  { id: 7, title: "أرض - حق انتفاع - أملاك دولة" },
  { id: 7, title: "قسيمة" },
  { id: 7, title: "جاخور" },
  { id: 7, title: "مخزن" },
  { id: 7, title: "محل" },
  { id: 7, title: "دور" },
  { id: 7, title: "برج إداري" },
  { id: 7, title: "سرداب" },
  { id: 7, title: "مكتب" },
  { id: 7, title: "وحدة تجارية" },
  { id: 7, title: "مطعم" },
  { id: 7, title: "صناعي" },
]);

const showModal = ref(false);

let toggleModal = () => (showModal = !showModal);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
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
.filter {
  margin-bottom: 45px;

  .top {
    width: 100%;
    .setting-icon {
      padding-left: 36px;
      cursor: pointer;
    }
  }
  .filter-bg {
    width: 100%;
    background: $primary-blue-color;
    border-radius: 15px;
    margin-top: 84px;
    padding: 28px 28px 12px 28px;
    .filter-list-bg {
      width: 100%;
      padding: 10px 21px 10px 10px;
      background: #ffffff;
      box-shadow: 0px 25px 50px rgba(17, 35, 71, 0.2);
      border-radius: 12px;
      @include extra-large() {
        flex-wrap: wrap;
        justify-content: center !important;
      }
      .dropdown-list {
        @include small() {
          width: 100%;
          justify-content: center;
        }
        .line {
          width: 1px;
          height: 32px;
          background-color: #8996a2;
          margin-inline: 5px;
        }
        .drop-down {
          width: 25%;
          margin-inline: 4px;
          cursor: pointer;
        }
      }
      .search-btn {
        .btn-bg {
          width: 138px;
          height: 48px;
          background-color: $primary-blue-color;
          box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
          border-radius: 12px;
          cursor: pointer;
          .search-icon {
            width: 15px;
            height: 15px;
          }
          span {
            font-family: $main-font-family;
            color: $secondary-text-color;
            font-size: $font-size-4;
            font-weight: 800;
            font-style: normal;
            padding-right: 11px;
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
    }
  }
  .delete {
    font-family: $main-font-family;
    color: $secondary-text-color;
    font-size: 13px;
    font-weight: 800;
    font-style: normal;
    padding-top: 4px;
    cursor: pointer;
  }
}

.set-default {
  font-family: $main-font-family;
  color: $primary-blue-color;
  font-size: $font-size-4;
  font-weight: 800;
  font-style: normal;
  padding-inline: 20px;
}
.property-status {
  .chose-property {
    .form-check {
      margin-left: 20px;

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
.input-range {
  input {
    width: 100%;
  }
}
.modal-border {
  border: 1px solid rgba(137, 150, 162, 0.25);
  margin-top: 35px;
  margin-bottom: 22px;
}
.details {
  span {
    font-family: $main-font-family;
    font-size: $font-size-4;
    color: $primary-text-color;
    font-weight: 500;
    font-style: normal;
  }
}
.items-dropdown {
  width: 200px;
  @include extra-large {
    width: 100px;
  }
  @include large {
    width: 78px;
  }
  @include medium {
    width: 65px;
  }
  @include small() {
    width: 50px;
  }

  & > div {
    height: 48px;
  }
}
</style>
