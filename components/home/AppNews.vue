<template>
  <NuxtLink to="/news/1">
    <div class="news">
      <div class="card d-flex flex-column">
        <div class="img-block position-relative">
          <img class="card-img" src="/images/news-img.png" />
        </div>
        <div class="description-block">
          <div class="title">
            <span
              >إيرادات التشغيل للشركات العقارية في طريقها للتعافي من
              «كورونا»</span
            >
          </div>
          <div class="description" v-show="showDescription">
            <div class="description-title">
              <span
                >بلغت 411 مليون دينار في 2021 مقارنة مع 465 مليوناً في 2019
                الشركات العقارية المدرجة في...</span
              >
            </div>
          </div>
        </div>
        <div
          class="bottom-section d-flex justify-content-between align-items-center"
        >
          <div class="date">
            <span>30-3-2022</span>
          </div>
          <div
            class="submit-btn d-flex justify-content-between align-items-center"
          >
            <span>إقرأ المزيد</span>
            <img src="/icons/cardIcon/l-w-arrow.svg" />
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup>
const props = defineProps({
  showDescription: {
    type: Boolean,
    default: true,
  },
});
</script>
<style lang="scss">
@import "/static/sass/variables.scss";
.news {
  .card {
    width: auto;
    border: 1px solid #dfdfdf;
    box-shadow: 0px 64px 194px rgba(0, 0, 0, 0.1);
    border-radius: 22px;
    cursor: pointer;
    padding-bottom: 19px;
    text-align: start;

    .img-block {
      .card-img {
        border-top-left-radius: 22px;
        border-top-right-radius: 22px;
      }
    }

    .description-block {
      margin-top: 20px;
      margin-bottom: 12px;
      padding-right: 23px;
      padding-left: 21px;

      .title {
        overflow: hidden;
        height: 60px;

        span {
          font-family: $main-font-family;
          font-size: $font-size-3;
          font-style: normal;
          font-weight: 900;
          color: $primary-text-color;
        }
      }

      .description {
        margin-top: 14px;

        .description-title {
          overflow: hidden;
          height: 53px;

          span {
            font-family: $main-font-family;
            font-size: $font-size-5;
            line-height: 24px;
            font-weight: 500;
            font-style: normal;
            color: #8996a2;
          }
        }
      }
    }

    .bottom-section {
      padding-right: 23px;
      padding-left: 21px;
      margin-top: 14px;

      .date {
        font-family: $main-font-family;
        font-size: $font-size-5;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
        color: #8996a2;
      }

      .submit-btn {
        height: 48px;
        background-color: $primary-blue-color;
        box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
        border-radius: 12px;
        padding-left: 16px;
        padding-right: 17px;

        span {
          color: $secondary-text-color;
          font-family: $main-font-family;
          font-size: $font-size-4;
          font-style: normal;
          font-weight: 800;
          padding-inline-end: 29px;
        }

        img {
          width: 14px;
          height: 8px;
        }
      }
    }
  }
}
</style>
