<template>
  <div class="profile-info">
    <div class="info-bg">
      <form action="">
        <div class="personal-info">
          <div class="main-title">
            <span>معلومات شخصية</span>
          </div>
          <div class="sup-title">
            <span>اسم المستخدم</span>
          </div>
          <div class="text-field">
            <ProfileTextField />
          </div>
          <div class="sup-title">
            <span>البريد الإلكتروني</span>
          </div>
          <div class="text-field">
            <ProfileTextField />
          </div>
          <div class="sup-title">
            <span>رقم الهاتف</span>
          </div>
          <div class="text-field">
            <ProfileTextField />
          </div>
        </div>
        <!-- edit -->
        <!-- <div class="password">
          <div class="main-title">
            <span>كلمه السر </span>
          </div>
          <div class="sup-title">
            <span>كلمة السر الحالية</span>
          </div>
          <div class="text-field">
            <ProfileTextField type="password" />
          </div>
        </div> -->
        <div class="social-media">
          <div class="main-title">
            <span>وسائل التواصل الاجتماعي </span>
          </div>
          <div
            class="social-media-taps d-flex flex-wrap justify-content-between"
          >
            <div class="taps" v-for="(item, index) in items" :key="index">
              <ProfileSocialMedia
                :title="item.title"
                :icon="mediaIcons[index]"
                :select="select"
                :path="item.path"
                :bgcolor="item.bgcolor"
              />
            </div>
            <div class="taps">
              <ProfileAddSocialMedia />
            </div>
          </div>
        </div>
        <div class="office-information">
          <div class="main-title">
            <span>معلومات المكتب </span>
          </div>
          <div class="sup-title">
            <span>اسم المكتب</span>
          </div>
          <div class="text-field">
            <ProfileTextField />
          </div>
          <div class="sup-title">
            <span>مجال التخصص</span>
          </div>
          <div class="text-field">
            <ProfileTextField />
          </div>
          <div class="sup-title">
            <span>رقم التسجيل</span>
          </div>
          <div class="text-field">
            <ProfileTextField />
          </div>
          <div class="sup-title">
            <span>العنوان</span>
          </div>
          <div class="text-field">
            <ProfileTextField />
          </div>
        </div>
      </form>
    </div>
    <div class="calc-btn d-flex justify-content-end">
      <div class="calc d-flex justify-content-center align-items-center">
        <span>حفظ التغيرات</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  {
    icon: "/static/icons/profile/facebook.svg",
    title: "فيسبوك",
    select: "/static/icons/select.svg",
    path: " ",
    bgcolor: "rgba(7, 138, 251, 0.1);",
  },
  {
    icon: "/static/icons/whatsapp.svg",
    title: "واتساب",
    select: "/static/icons/select.svg",
    path: " ",
    bgcolor: "rgba(10, 197, 129, 0.1);",
  },
  {
    icon: "/static/icons/r-website.svg",
    title: "www.website.com ",
    select: "/static/icons/select.svg",
    path: " ",
    bgcolor: "rgba(255, 115, 92, 0.15);",
  },
]);

import facebookIcon from "/static/icons/profile/facebook.svg";
import whatsappIcon from "/static/icons/whatsapp.svg";
import websiteIcon from "/static/icons/r-website.svg";
import selectIcon from "/static/icons/select.svg";
const select = ref(selectIcon);
const mediaIcons = ref([facebookIcon, whatsappIcon, websiteIcon]);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.info-bg {
  width: 728px;
  background: #ffffff;
  border: 1px solid #eff0f7;
  box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
  border-radius: 20px;
  padding-top: 35px;
  padding-inline: 30px;
  .personal-info {
    margin-bottom: 70px;
  }
  .main-title {
    font-family: $main-font-family;
    color: #8996a2b4;
    font-size: 24px;
    font-weight: 800;
    font-style: normal;
    line-height: 37px;
    padding-bottom: 9px;
  }
  .sup-title {
    font-family: $main-font-family;
    color: $primary-blue-color;
    font-size: $font-size-6;
    font-weight: 800;
    font-style: normal;
    padding-bottom: 7px;
  }
  .social-media {
    padding-bottom: 70px;
    padding-top: 42px;
    .social-media-taps {
      .taps {
        width: 326px;
      }
    }
  }
}
.calc {
  width: 165px;
  box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
  border-radius: 29px;
  background-color: $primary-blue-color;
  height: 58px;
  cursor: pointer;
  margin-top: 40px;

  span {
    font-family: $main-font-family;
    color: $secondary-text-color;
    font-size: $font-size-4;
    font-weight: 800;
    font-style: normal;
  }
}
</style>
