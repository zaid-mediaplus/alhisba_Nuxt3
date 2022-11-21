<template>
  <div class="item">
    <div class="question-bg" @click="showUsers">
      <div class="top d-flex justify-content-between align-items-center">
        <div class="question">
          {{ question.title }}
        </div>
        <div class="select-bg d-flex justify-content-center align-items-center">
          <img :src="usersToggle ? closeIcon : plusIcon" />
        </div>
      </div>
      <div class="bottom" v-show="usersToggle">
        {{ question.description }}
      </div>

      <!-- <div class="helpful-note" v-show="usersToggle">
        <div class="note-bg d-flex justify-content-between align-items-center">
          <div class="helpful-text">
            <span>هل كان هذا القسم مفيدا؟</span>
          </div>
          <div class="helpful-btn d-flex align-items-center">
            <div class="yes">
              <img src="~/assets/icons/like.svg" alt="" />
              <span>نعم</span>
            </div>
            <div class="no">
              <img src="~/assets/icons/dislike.svg" alt="" />
              <span>لا</span>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  question: Object,
});

import closeIcon from "~/assets/icons/minus.svg";
const close = ref(closeIcon);
import plusIcon from "~/assets/icons/bplus.svg";
const plus = ref(plusIcon);

const usersToggle = ref(false);

const showUsers = () => (usersToggle.value = !usersToggle.value);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.item {
  margin-bottom: 18px;
  width: 1106px;

  .question-bg {
    width: 100%;
    background: #ffffff;
    border: 1px solid #eff0f7;
    box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
    border-radius: 20px;
    padding-inline: 35px;
    padding-top: 30px;
    padding-bottom: 35px;
    .top {
      width: 100%;
    }
    .bottom {
      width: 90%;
      font-family: $main-font-family;
      color: #8996a2;
      font-size: $font-size-5;
      font-style: normal;
      font-weight: 800;
      padding-top: 25px;

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
    .helpful-note {
      padding-top: 34px;
      .note-bg {
        width: 100%;
        background: rgba(7, 138, 251, 0.06);
        border-radius: 13px;
        padding: 14px 32px 13px 14px;
        .helpful-text {
          font-family: $main-font-family;
          color: $primary-blue-color;
          font-size: $font-size-5;
          font-style: normal;
          font-weight: 500;
        }
        .helpful-btn {
          span {
            font-family: $main-font-family;
            color: $primary-blue-color;
            font-size: $font-size-5;
            font-style: normal;
            font-weight: 800;
          }
          .yes {
            background: #ffffff;
            border: 1px solid #eff0f6;
            border-radius: 10px;
            padding: 10px 0 7px 0;
            padding-inline: 32px;
            margin-inline: 19px;
            cursor: pointer;
            img {
              padding-left: 12px;
            }
          }
          .no {
            background: #ffffff;
            border: 1px solid #eff0f6;
            border-radius: 10px;
            padding: 10px 0 7px 0;
            padding-inline: 32px;
            cursor: pointer;
            img {
              padding-left: 12px;
            }
          }
        }
      }
    }
    .question {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: $font-size-4;
      font-style: normal;
      font-weight: 800;
      width: 84%;
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
    .select-bg {
      width: 44px;
      height: 32px;
      background: #e5eef5;
      border-radius: 24px;
    }
  }
}
</style>
