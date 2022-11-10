<template>
  <div class="cost">
    <div
      class="main-title d-flex flex-column justify-content-center align-items-center"
    >
      <div class="title text-center">
        <span>حسبة تكلفة لبناء</span>
      </div>
      <div class="description text-center">
        <span
          >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص</span
        >
      </div>
    </div>
    <div class="evaluation-form">
      <div class="real-section d-flex justify-content-between flex-wrap">
        <div class="items-dropdown">
          <FormDropDown title="مساحة المنطقة" />
        </div>
        <div class="items-dropdown">
          <FormDropDown title="مساحة البناء" />
        </div>
        <div class="items-dropdown">
          <FormDropDown title="يوجد طابق سفلي؟" />
        </div>
        <div class="items-dropdown">
          <FormDropDown title="عدد الطوابق" />
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
                <img src="~/assets/icons/close.svg" alt="close" />
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
            <img src="~/assets/icons/info.svg" />
          </div>
          <div>
            <span>اعرف الجودة لديك</span>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink to="/costresult">
      <div class="calc-btn d-flex justify-content-end">
        <div class="calc d-flex justify-content-center align-items-center">
          <span>إحسب</span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const showModal = ref(false);
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
      @include eighteen-font-extra-lg;
      @include eighteen-font-lg;
      @include eighteen-font-medium;
      @include eighteen-font-small;
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
        @include eighteen-font-extra-lg;
        @include eighteen-font-lg;
        @include eighteen-font-medium;
        @include eighteen-font-small;
      }
    }
  }
}

.cost {
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
  .dropdown {
    width: 358px;
    height: 66px;
    background: #ffffff;
    border: 1.5px solid #dddddd;
    border-radius: 13px;
    padding: 17px;
    margin-bottom: 15px;
    cursor: pointer;

    span {
      font-family: $main-font-family;
      font-weight: 800;
      font-size: $font-size-4;
      font-style: normal;
      color: rgba(17, 35, 71, 0.4);
      font-weight: 800;
      @include eighteen-font-extra-lg;
      @include eighteen-font-lg;
      @include eighteen-font-medium;
      @include eighteen-font-small;
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
    /* @include extra-extra-extra-large() {
      padding-left: 100px;
      padding-right: 100px;
    }
    @include extra-extra-large() {
      padding-left: 39px;
      padding-right: 39px;
    }
    @include extra-large() {
      padding-left: 50px;
      padding-right: 50px;
    }
    @include large() {
      padding-left: 30px;
      padding-right: 30px;
    }
    @include small() {
      padding-left: 25px;
      padding-right: 25px;
    } */

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
      .drop-down {
        padding-bottom: 15px;
      }
    }
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
      @include eighteen-font-extra-lg;
      @include eighteen-font-lg;
      @include eighteen-font-medium;
      @include eighteen-font-small;
    }
  }
  .quality-btn {
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
  }
}
</style>
