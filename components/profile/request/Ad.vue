<template>
  <div class="ad-container">
    <div class="card">
      <div class="top-seaction d-flex flex-row">
        <div class="img-block position-relative">
          <img class="card-img" src="/images/ad-profile.svg" />
        </div>
        <div
          class="area-name d-flex justify-content-center align-items-center position-absolute"
        >
          <span>سلوى</span>
        </div>
        <!-- <div
          class="green position-absolute d-flex justify-content-center align-items-center"
        >
          <img src="/icons/cardIcon/home.svg" />
        </div> -->
        <div class="description-block d-flex flex-column">
          <div class="d-flex justify-content-between align-items-baseline">
            <span class="title">منزل من 5 غرف نوم و3طوابق للبيع</span>
          </div>
          <div class="proparities d-flex justify-content-between gap-2">
            <div>
              <img src="/icons/cardIcon/bed.svg" />
              <span class="">3</span>
            </div>
            <div>
              <img src="/icons/cardIcon/area.svg" />
              <span class="">750 م2</span>
            </div>
            <div>
              <img src="/icons/cardIcon/bath.svg" />
              <span class="">3</span>
            </div>
          </div>
          <div class="company-name">
            <img src="/icons/cardIcon/user.svg" />
            <span>أحمد يوسف سالم</span>
          </div>
        </div>
        <div>
          <div class="price">
            <span>700,000 د.ك</span>
          </div>
          <div class="status d-flex justify-content-end align-items-center">
            <div
              class="status-bg d-flex justify-content-center align-items-center"
            >
              <img src="/icons/wSelect.svg" alt="" />
            </div>
            <div class="status-text"><span>الحالة</span></div>
          </div>
        </div>
      </div>
      <div class="border"></div>
      <div
        class="bottom-section d-flex justify-content-between align-items-center"
      >
        <div class="edit-section">
          <img src="/icons/profile/edit.svg" alt="" />
          <span>تعديل</span>
        </div>
        <ProfileSubscribeBtn />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../../static/sass/variables.scss";
.card {
  width: 100%;
  border: 1px solid #dfdfdf;
  box-shadow: 0px 64px 194px rgba(0, 0, 0, 0.1);
  border-radius: 22px;
  padding-bottom: 10px;
  padding-top: 22px;
  padding-inline: 20px;
  cursor: pointer;

  .img-block {
    padding-inline-end: 13px;
    .card-img {
      border-radius: 22px;
    }
  }

  .area-name {
    width: 63.04px;
    height: 15.05px;
    background-color: $secondary-text-color;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.11);
    border-radius: 7px;
    top: 28px;
    right: 37px;

    span {
      font-family: $main-font-family;
      font-size: 12px;
      font-style: normal;
      font-weight: 800;
      line-height: 22px;
    }
  }

  .green {
    width: 32px;
    height: 32px;
    background-color: $primary-green-color;
    border-radius: 50%;
    right: 14%;
    top: 43%;

    img {
      width: 18px;
      height: 21px;
    }
  }

  .description-block {
    width: 67%;
    .title {
      font-family: $main-font-family;
      font-size: $font-size-3;
      font-style: normal;
      font-weight: 900;
    }
    .date {
      font-family: $main-font-family;
      font-size: $font-size-4;
      font-style: normal;
      font-weight: 500;
      color: #8996a2;
    }

    .proparities {
      margin-top: 16px;
      margin-bottom: 10px;
      padding-left: 40px;
      width: 65%;

      span {
        font-family: $main-font-family;
        font-size: $font-size-5;
        font-weight: 500;
        font-style: normal;
        color: $primary-text-color;
      }

      img {
        padding-left: 11px;
      }
    }

    .company-name {
      margin-bottom: 16px;
      span {
        font-family: $main-font-family;
        font-size: $font-size-5;
        font-weight: 500;
        font-style: normal;
        color: $primary-text-color;
      }

      img {
        padding-left: 15px;
      }
    }
  }

  .border {
    border: 1px solid rgba(137, 150, 162, 0.13);
    margin-bottom: 9px;
  }

  .price {
    padding-bottom: 28px;
    font-family: $main-font-family;
    font-size: $font-size-4;
    font-style: normal;
    font-weight: 900;
    color: $primary-blue-color;
  }
  .status {
    .status-bg {
      width: 20px;
      height: 20px;
      background: $primary-green-color;
      border-radius: 50%;
    }
    .status-text {
      padding-inline-start: 7px;
      span {
        font-family: $main-font-family;
        font-size: $font-size-6;
        font-style: normal;
        font-weight: 900;
        color: $primary-green-color;
      }
    }
  }
}

.edit-section {
  span {
    font-family: $main-font-family;
    font-size: $font-size-5;
    font-style: normal;
    font-weight: 500;
    color: #8996a2;
    padding-inline: 11px;
    line-height: 25px;
  }
}
</style>
