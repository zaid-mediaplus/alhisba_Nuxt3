<template>
  <div>
    <CoreInsideHeader
      title="تبادل ممتلكات"
      :img="header"
      description="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.
"
      bottom="-50px"
    />
    <CoreAppContainer>
      <CoreItemContainer>
        <FormSearch />
      </CoreItemContainer>
      <div class="main-title d-flex justify-content-between align-items-center">
        <div class="right">
          <span class="title"> عقارات للتبادل</span>
          <span class="result">68,444 نتيجة</span>
        </div>
        <div class="left d-flex">
          <span class="sort">ترتيب بحسب:</span>
          <div class="by d-flex">
            <span>الأحدث إلى الأقدم </span>
            <img src="/icons/downarrow.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="lands-card-section d-flex gap-4">
        <CoreSuggestedRealState />
        <CoreSuggestedRealState />
        <CoreSuggestedRealState />
        <CoreSuggestedRealState />
      </div>
      <div class="lands-card-section d-flex gap-4">
        <CoreSuggestedRealState />
        <CoreSuggestedRealState />
        <CoreSuggestedRealState />
        <CoreSuggestedRealState />
      </div>
      <div class="pagination-bar d-flex justify-content-center gap-4">
        <CorePagination />
      </div>
      <div class="note">
        <div class="note-bg d-flex justify-content-between align-items-center">
          <div class="note-right d-flex">
            <div class="icon-bg">
              <img src="" alt="" />
            </div>
            <div class="center d-flex flex-column">
              <div class="top">لم تجد العقارات التي تبحث عنها؟</div>
              <div class="bottom">
                انقر هنا لإضافة طلبك إلى قاعدة البيانات الخاصة بنا وسنخبرك بمجرد
                أن يكون لدينا عميل محتمل.
              </div>
            </div>
          </div>
          <div class="note-left">
            <div class="add-btn d-flex justify-content-end">
              <div class="add d-flex justify-content-center align-items-center">
                <span>أضف طلبي</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CoreAppContainer>
  </div>
</template>

<script setup>
import haederIcon from "/images/insideHeader/exchanging-page.png";

const header = ref(haederIcon);
</script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";
.main-title {
  padding-bottom: 10px;
  flex-wrap: wrap;

  .right {
    .title {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: $font-size-2;
      font-weight: 800;
      font-style: normal;
      @include extra-large() {
        font-size: 28px;
      }
      @include large() {
        font-size: 24px;
      }
      @include medium() {
        font-size: $font-size-3;
      }
      @include small() {
        font-size: $font-size-4;
      }
    }
    .result {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: 15px;
      font-weight: 800;
      font-style: normal;
      padding-inline: 31px;
      @include extra-large() {
        font-size: 12px;
      }
      @include large() {
        font-size: 10px;
      }
      @include medium() {
        font-size: 8px;
      }
      @include small() {
        font-size: 6px;
      }
    }
  }
  .left {
    .sort {
      font-family: $main-font-family;
      color: #a0a7b5;
      font-size: 15px;
      font-weight: 500;
      font-style: normal;
      @include extra-large() {
        font-size: 12px;
      }
      @include large() {
        font-size: 10px;
      }
      @include medium() {
        font-size: 8px;
      }
      @include small() {
        font-size: 6px;
      }
    }
    .by {
      cursor: pointer;
      span {
        font-family: $main-font-family;
        color: $primary-blue-color;
        font-size: 15px;
        font-weight: 500;
        font-style: normal;
        padding-inline: 10px;
        @include extra-large() {
          font-size: 12px;
        }
        @include large() {
          font-size: 10px;
        }
        @include medium() {
          font-size: 8px;
        }
        @include small() {
          font-size: 6px;
        }
      }
    }
  }
}
.lands-card-section {
  padding-bottom: 24px;
  @include extra-large {
    flex-wrap: wrap;
    justify-content: center;
  }
  @include large {
    justify-content: center;
    flex-wrap: wrap;
  }
}
.pagination-bar {
  margin-top: 77px;
  margin-bottom: 65px;
}
.note {
  margin-bottom: 102px;
  .note-bg {
    width: 100%;
    background: rgba(7, 138, 251, 0.1);
    border-radius: 13px;
    padding: 23px 19px 19px 24px;
    @include large() {
      flex-wrap: wrap;
      justify-content: center !important;
    }
    .note-right {
      .icon-bg {
        width: 61px;
        height: 61px;
        border-radius: 50%;
        background: $primary-blue-color;
      }
      .center {
        padding-inline: 34px;
        .top {
          font-family: $main-font-family;
          color: $primary-text-color;
          font-size: 21px;
          font-weight: 800;
          font-style: normal;
          @include extra-large() {
            font-size: 18px;
          }
          @include large() {
            font-size: 14px;
          }
          @include medium() {
            font-size: 10px;
          }
          @include small() {
            font-size: 8px;
          }
        }
        .bottom {
          font-family: $main-font-family;
          color: $primary-text-color;
          font-size: $font-size-5;
          font-weight: 500;
          font-style: normal;
          @include extra-large() {
            font-size: 12px;
          }
          @include large() {
            font-size: 10px;
          }
          @include medium() {
            font-size: 8px;
          }
          @include small() {
            font-size: 6px;
          }
        }
      }
    }
  }
}
.add {
  width: 205px;
  box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
  border-radius: 29px;
  background-color: $primary-blue-color;
  height: 58px;
  cursor: pointer;

  span {
    font-family: $main-font-family;
    color: $secondary-text-color;
    font-size: $font-size-4;
    font-weight: 800;
    font-style: normal;
    @include extra-large() {
      font-size: 16px;
    }
    @include large() {
      font-size: 14px;
    }
    @include medium() {
      font-size: 12px;
    }
    @include small() {
      font-size: 10px;
    }
  }
}
</style>
