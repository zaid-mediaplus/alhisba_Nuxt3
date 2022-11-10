<template>
  <div class="realstate">
    <div class="card d-flex flex-row">
      <!-- <div class="img-block d-flex align-items-center position-relative">
        <img class="card-img" src="/static/images/suggestion.png" />
      </div> -->
      <!-- <div
        class="area-name d-flex justify-content-center align-items-center position-absolute"
      >
        <span>سلوى</span>
      </div> -->
      <div class="premium-flag position-absolute">
        <img src="/static/icons/cardIcon/premium.svg " />
      </div>
      <!-- <div
        class="green position-absolute d-flex justify-content-center align-items-center"
      >
        <img src="/static/icons/cardIcon/home.svg" />
      </div> -->

      <div class="description-block d-flex flex-column">
        <div class="address">
          <img src="/static/icons/b-address.svg" alt="" />
          <span>صباح السالم</span>
        </div>
        <div class="d-flex justify-content-between align-items-baseline">
          <span class="title">منزل من 5 غرف نوم و3طوابق للبيع</span>
        </div>
        <!-- <div class="price">
          <span>700,000 د.ك</span>
        </div> -->
        <div class="proparities d-flex justify-content-between">
          <div class="right d-flex justify-content-between gap-2">
            <div>
              <img src="/static/icons/cardIcon/bed.svg" />
              <span class="">3 غرف نوم</span>
            </div>
            <div>
              <img src="/static/icons/cardIcon/area.svg" />
              <span class="">750 م2</span>
            </div>
            <div>
              <img src="/static/icons/cardIcon/bath.svg" />
              <span class="">3 حمامات</span>
            </div>
          </div>
          <div class="left">
            <div class="price">
              <span>700,000 د.ك</span>
            </div>
          </div>
        </div>
        <!-- <div class="company-name">
          <img src="/static/icons/cardIcon/user.svg" />
          <span>شركة الأنوار للإستثمارات العقارية</span>
        </div> -->
        <div class="border"></div>
        <div class="contact d-flex gap-3">
          <div d-flex>
            <img class="save" src="/static/icons/cardIcon/save.svg" />
            <span>أضف إلى المفضلة</span>
          </div>
          <div d-flex>
            <img src="/static/icons/cardIcon/Message.svg" />
            <span>تحدث</span>
          </div>
          <div d-flex>
            <img src="/static/icons/cardIcon/Phone.svg" />
            <span>اتصل</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  selected: Boolean,
});
</script>
<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
a {
  text-decoration: none;
}
.realstate {
  padding-bottom: 30px;
  .card {
    width: 70%;
    border: 1px solid #dfdfdf;
    box-shadow: 0px 64px 194px rgba(0, 0, 0, 0.1);
    border-radius: 22px;
    padding-bottom: 10px;
    cursor: pointer;

    .img-block {
      padding: 20px;
      .card-img {
        border-radius: 22px;
        width: 317.42px;
        height: 213.7px;
      }
    }

    .area-name {
      width: 90px;
      height: 30px;
      background-color: $secondary-text-color;
      box-shadow: 0px 6.99075px 16.7778px rgba(0, 0, 0, 0.11);
      border-radius: 9px;
      top: 28px;
      right: 37px;

      span {
        font-family: $main-font-family;
        font-size: 17px;
        font-style: normal;
        font-weight: 800;
        line-height: 22px;
      }
    }

    .premium-flag {
      left: 3px;
      top: -6px;
    }

    .green {
      width: 39px;
      height: 39px;
      background-color: $primary-green-color;
      border-radius: 50%;
      right: 28%;
      top: 70%;

      img {
        width: 18px;
        height: 21px;
      }
    }

    .description-block {
      padding-top: 15px;
      padding-bottom: 20px;
      padding-inline: 30px;
      width: 100%;
      .address {
        span {
          padding-inline: 12px;
          font-family: $main-font-family;
          font-size: $font-size-5;
          font-style: normal;
          font-weight: 900;
          line-height: 20.94px;
          color: $primary-blue-color;
        }
      }
      .title {
        font-family: $main-font-family;
        font-size: $font-size-3;
        font-style: normal;
        font-weight: 900;
        color: $primary-text-color;
        line-height: 31.5px;
        padding-top: 9px;
      }
      /* .date {
        span {
          font-family: $main-font-family;
          font-size: $font-size-4;
          font-style: normal;
          font-weight: 500;
          color: #8996a2;
        }
      } */

      .proparities {
        margin-top: 25px;
        margin-bottom: 16px;
        width: 100%;
        .right {
          width: 45%;

          span {
            font-family: $main-font-family;
            font-size: $font-size-5;
            font-weight: 500;
            font-style: normal;
            color: $primary-text-color;
          }
        }

        img {
          padding-left: 11px;
        }
      }
      /* 
      .company-name {
        margin-bottom: 16px;

        img {
          padding-left: 15px;
        }
      } */
    }

    .border {
      border: 1px solid rgba(137, 150, 162, 0.13);
      margin-bottom: 14px;
    }

    .contact {
      span {
        padding-inline: 8px;
        font-family: $main-font-family;
        font-size: 15px;
        font-style: normal;
        font-weight: 800;
        color: $primary-blue-color;
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(7, 138, 251, 0.1);
        border-radius: 10px;
        padding: 10px 20px 8px 20px;
        img {
          width: 24px;
          height: 24px;
        }

        .save {
          width: 14px;
          height: 16px;
        }
      }
    }
  }
  .left {
    .price {
      span {
        font-family: $main-font-family;
        font-size: $font-size-4;
        font-style: normal;
        font-weight: 900;
        line-height: 28px;
        color: $primary-blue-color;
      }
    }
  }
}
</style>
