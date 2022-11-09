<template>
  <div class="realstate-column">
    <div class="card d-flex flex-column">
      <div class="img-block position-relative">
        <img class="card-img" src="/static/images/suggestion.png" />
      </div>
      <div
        class="area-name d-flex justify-content-center align-items-center position-absolute"
      >
        <span>سلوى</span>
      </div>
      <div class="premium-flag position-absolute">
        <img src="/static/icons/cardIcon/premium.svg " />
        <!-- {ispremium ? <img path="icons/cardIcon/premium.svg " /> : null} -->
      </div>
      <div
        class="green position-absolute d-flex justify-content-center align-items-center"
      >
        <img src="/static/icons/cardIcon/home.svg" />
      </div>
      <div class="description-block">
        <div class="d-flex justify-content-between align-items-baseline">
          <span class="title">منزل من 3طوابق للبيع</span>
          <span class="date">30-3-2022</span>
        </div>
        <div class="proparities d-flex justify-content-between gap-2">
          <div>
            <img src="/static/icons/cardIcon/bed.svg" />
            <span class="">3</span>
          </div>
          <div>
            <img src="/static/icons/cardIcon/area.svg" />
            <span class="">750 م2</span>
          </div>
          <div>
            <img src="/static/icons/cardIcon/bath.svg" />
            <span class="">3</span>
          </div>
        </div>
        <div class="company-name">
          <img src="/static/icons/cardIcon/user.svg" />
          <span>شركة الأنوار للإستثمارات العقارية</span>
        </div>
      </div>
      <div class="border"></div>
      <div
        class="bottom-block d-flex justify-content-between align-items-center"
      >
        <div class="contact d-flex gap-3">
          <div>
            <img class="save" src="/static/icons/cardIcon/save.svg" />
          </div>
          <div>
            <img src="/static/icons/cardIcon/Message.svg" />
          </div>
          <div>
            <img src="/static/icons/cardIcon/Phone.svg" />
          </div>
        </div>
        <div class="price">
          <span>700,000 د.ك</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.realstate-column {
  .card {
    width: auto;
    border: 1px solid #dfdfdf;
    box-shadow: 0px 64px 194px rgba(0, 0, 0, 0.1);
    border-radius: 22px;
    padding-bottom: 10px;
    cursor: pointer;
    .img-block {
      .card-img {
        border-top-left-radius: 22px;
        border-top-right-radius: 22px;
      }
    }
    .area-name {
      width: 90px;
      height: 30px;
      background-color: $secondary-text-color;
      box-shadow: 0px 6.99075px 16.7778px rgba(0, 0, 0, 0.11);
      border-radius: 9px;
      top: 16px;
      right: 18px;
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
      left: 18px;
      top: 241px;
      /* @media (max-width: 320px) {
        top: 190px;
      } */
      @include extra-extra-extra-large() {
        top: 208px;
      }
      @include extra-extra-large() {
        top: 179px;
      }
      @include extra-large() {
        top: 239px;
      }

      @media (min-width: 1201px) and (max-width: 1400px) {
        top: 162px;
      }
      @media (max-width: 1600) {
        top: 178px;
      }
      /* @include extra-large() {
        top: 198px;
      } */
      img {
        width: 18px;
        height: 21px;
      }
    }
    .description-block {
      margin-top: 21px;
      padding-inline: 21px;
      text-align: start;
      .title {
        height: 29px;
        overflow: hidden;
        width: 72%;
        font-family: $main-font-family;
        font-size: $font-size-3;
        font-style: normal;
        font-weight: 900;
        margin-top: 0px;
        margin-bottom: 0px;

        @include card-title-small;
        @include card-title-medium;
        @include card-title-lg;
        @include card-title-extra-lg;
      }
      .date {
        font-family: $main-font-family;
        font-size: $font-size-4;
        font-style: normal;
        font-weight: 500;
        color: #8996a2;
        @include card-title-extra-lg;
        @include card-title-lg;
        @include card-title-medium;
        @include card-title-small;
      }
      .proparities {
        margin-top: 25px;
        margin-bottom: 10px;
        padding-left: 40px;
        height: 25px;
        overflow: hidden;
        span {
          font-family: $main-font-family;
          font-size: $font-size-5;
          font-weight: 500;
          font-style: normal;
          color: #002245;
          @include card-content-extra-lg;
          @include card-content-lg;
          @include card-content-medium;
          @include card-content-small;
        }
        img {
          padding-left: 11px;
        }
      }
      .company-name {
        margin-bottom: 16px;
        overflow: hidden;
        height: 30px;
        span {
          font-family: $main-font-family;
          font-size: $font-size-5;
          font-weight: 500;
          font-style: normal;
          color: #002245;
          @include card-content-extra-lg;
          @include card-content-lg;
          @include card-content-medium;
        }
        img {
          padding-left: 15px;
        }
      }
    }
    .border {
      border: 1px solid rgba(137, 150, 162, 0.13);
      margin-bottom: 16px;
    }
    .bottom-block {
      padding-left: 21px;
      padding-right: 15px;
      .contact {
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 34px;
          height: 35px;
          border-radius: 50%;
          background-color: rgba(7, 138, 251, 0.1);
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
      .price {
        font-family: $main-font-family;
        font-size: $font-size-4;
        font-style: normal;
        font-weight: 900;
        color: $primary-blue-color;
      }
    }
  }
}
</style>
