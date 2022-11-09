<template>
  <div class="accordion">
    <div
      class="accordion-bg"
      :class="usersToggle ? select : ''"
      @click="showUsers"
    >
      <div
        class="accordion-top d-flex justify-content-between align-items-center"
      >
        <div class="title d-flex align-items-center">
          <div class="icon-bg d-flex justify-content-center">
            <div class="icon d-flex justify-content-center align-items-center">
              <img :src="icon" />
            </div>
          </div>
          <div class="left-title d-flex flex-column align-items-start">
            <span class="top"> {{ title }} </span>
            <span class="bottom">{{ date }}</span>
          </div>
        </div>
        <div class="details-content d-flex">
          <div class="details">{{ area }}</div>
          <div class="details">{{ price }}</div>
        </div>
        <div class="select d-flex justify-content-center align-items-center">
          <img :src="usersToggle ? close : plus" />
        </div>
      </div>
      <div class="accordion-content" v-show="usersToggle">
        <div class="accordion-content-border"></div>
        <div class="bottom-section d-flex justify-content-between">
          <div class="right-bottom">
            <div class="address-bg">
              <img src="/static/icons/b-address.svg" alt="" />
              <span>562 بطن وظهر - طريق الفحيحيل</span>
            </div>
          </div>
          <div class="left d-flex">
            <div
              class="item border-left d-flex flex-column align-items-self-start"
            >
              <span class="text">الحالة</span>
              <div class="status d-flex justify-content-center">
                <span class="status-result">مباع</span>
              </div>
            </div>
            <div
              class="item border-left d-flex flex-column align-items-self-start"
            >
              <span class="text">الوصف</span>
              <span class="result">سكن خاص</span>
            </div>
            <div
              class="item border-left d-flex flex-column align-items-self-start"
            >
              <span class="text">سعر البيع</span>
              <span class="result">ك.د 700,000</span>
            </div>
            <div class="item d-flex flex-column align-items-self-start">
              <span class="text">الزيادة</span>
              <span class="result">15.23%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  icon: String,
  area: String,
  price: String,
  date: String,
});

import closeIcon from "/static/icons/minus.svg";
const close = ref(closeIcon);
import plusIcon from "/static/icons/bplus.svg";
const plus = ref(plusIcon);

const usersToggle = ref(false);

const showUsers = () => (usersToggle.value = !usersToggle.value);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.address-bg {
  background: rgba(7, 138, 251, 0.1);
  border-radius: 10px;
  padding-top: 14px;
  padding-bottom: 10px;
  padding-inline: 12.5px;
  span {
    padding-inline: 12px;
    font-family: $main-font-family;
    font-size: $font-size-4;
    font-weight: 900;
    font-style: normal;
    color: $primary-blue-color;
  }
}

.status {
  background: rgba(10, 197, 129, 0.14);
  border-radius: 4px;
  width: 72px;
  height: 29px;
  span {
    font-family: $main-font-family;
    font-size: $font-size-4;
    font-weight: 900;
    font-style: normal;
    color: #34e0a2;
  }
}
.accordion {
  margin-bottom: 18px;
  width: 1106px;
  .accordion-bg {
    width: 100%;
    background-color: $secondary-text-color;
    border: 1px solid #eff0f7;
    box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
    border-radius: 20px;
    padding: 24px;
    cursor: pointer;
    &.select {
      border: 1.5px solid $primary-blue-color;
    }
    .title {
      width: 27%;
      .icon-bg {
        background-color: rgba(7, 138, 251, 0.1);
        border-radius: 12.8947px;
        width: 47px;
        height: 47px;
      }
      .left-title {
        padding-inline: 15px;
        .top {
          font-family: $main-font-family;
          font-size: 21px;
          font-style: normal;
          font-weight: 800;
          color: $primary-text-color;
          @include extra-large {
            font-size: $font-size-3;
          }
          @include large {
            font-size: $font-size-4;
          }
          @include medium {
            font-size: $font-size-5;
          }
          @include small() {
            font-size: $font-size-6;
          }
        }
        .bottom {
          font-family: $main-font-family;
          font-size: $font-size-6;
          font-style: normal;
          font-weight: 800;
          color: #8996a2;

          @include extra-large {
            font-size: $font-size-6;
          }
          @include large {
            font-size: 12px;
          }
          @include medium {
            font-size: 10px;
          }
          @include small() {
            font-size: 8px;
          }
        }
      }
    }
    .details-content {
      width: 50%;

      .details {
        width: 30%;
        font-family: $main-font-family;
        font-size: $font-size-4;
        font-style: normal;
        font-weight: 900;
        color: $primary-blue-color;

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
    .select {
      width: 44px;
      height: 32px;
      background-color: #cde9ff;
      border-radius: 24px;

      span {
        color: $primary-blue-color;
        width: 11px;
        height: 11px;
      }
    }
  }
  .accordion-content {
    .accordion-content-border {
      border: 1px solid #eff0f6;
      margin-top: 32px;
      margin-bottom: 19px;
    }

    .bottom-section {
      width: 88%;
      .border-left {
        border-left: 1.5px solid #e3e6eb;
        margin-left: 23px;
      }
      .item {
        width: 120px;

        .text {
          font-family: $main-font-family;
          font-size: $font-size-4;
          font-weight: 800;
          font-style: normal;
          color: #8996a2;
        }

        .result {
          font-family: $main-font-family;
          font-size: $font-size-4;
          font-weight: 900;
          font-style: normal;
          color: $primary-blue-color;
        }
      }
    }
  }
}
</style>
