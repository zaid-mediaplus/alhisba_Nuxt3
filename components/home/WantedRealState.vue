<template>
  <div class="realstate">
    <div class="card d-flex flex-column flex-column">
      <div class="description-block">
        <div class="area-name d-flex justify-content-center">
          <span>سلوى</span>
        </div>
        <div class="premium-flag position-absolute">
          <img path="icons/cardIcon/premium.svg " />
        </div>
        <span class="title">منزل مطلوب للبيع</span>
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
          <img src="/static/icons/cardIcon/user.svg" alt="" />
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
        <div class="green d-flex justify-content-center align-items-center">
          <img src="/static/icons/cardIcon/home.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.realstate {
  width: 334px;
  .card {
    width: auto;
    border: 1px solid #dfdfdf;
    box-shadow: 0px 64px 194px rgba(0, 0, 0, 0.1);
    border-radius: 22px;
    padding-bottom: 10px;
    cursor: pointer;
  }

  .area-name {
    width: 90px;
    background-color: #eff0f6;
    border: 1.5px solid #eff0f6;
    border-radius: 9px;
    margin-bottom: 5px;

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

  .description-block {
    margin-top: 21px;
    padding-right: 23px;
    text-align: start;

    .title {
      height: 29px;
      overflow: hidden;
      font-family: $main-font-family;
      font-size: $font-size-3;
      font-style: normal;
      font-weight: 900;
      margin-top: 21px;
      margin-bottom: 31px;
      color: $primary-text-color;

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
        color: $primary-text-color;
        @include card-content-extra-lg;
        @include card-content-lg;
        @include card-content-medium;
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

    .green {
      width: 39px;
      height: 39px;
      background-color: $primary-green-color;
      border-radius: 50%;

      img {
        width: 18px;
        height: 21px;
      }
    }
  }
}
</style>
