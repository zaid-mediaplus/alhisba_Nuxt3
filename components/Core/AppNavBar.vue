<template>
  <div
    class="navbar d-flex justify-content-between align-items-stretch"
    :style="{ paddingTop: paddingTop }"
  >
    <div class="nav-logo">
      <NuxtLink to="/">
        <img :src="logo" alt="logo" />
      </NuxtLink>
    </div>
    <div class="nav-menu d-flex flex-row flex-fill justify-content-end me-5">
      <ul class="d-flex flex-row align-items-center">
        <li
          v-for="item in items"
          :key="item.title"
          class="items flex-grow-1 align-items-center"
          :style="{ color: color }"
        >
          <NuxtLink :to="item.path" :style="{ color: color }">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
      <div class="d-flex align-items-baseline">
        <ul
          class="d-flex flex-row align-items-center"
          :style="{ color: color }"
        >
          <img :src="login" />
          <li
            class="nav-login me-2 flex-grow-1 align-items-center"
            @click="showLoginModal = true"
          >
            <span
              class="d-flex align-items-center"
              :class="selected ? 'selected' : ''"
              >تسجيل الدخول</span
            >
            <div :style="{ background: background }" class="line"></div>
          </li>
          <li class="mx-4 flex-grow-1 align-items-center">
            <span> English</span>
          </li>
        </ul>
        <div v-show="showBtn">
          <NuxtLink to="/edit-ad/new">
            <CoreCreateAddBtn />
          </NuxtLink>
        </div>
      </div>
    </div>

    <CoreModal :show="showLoginModal" :close="() => (showLoginModal = false)">
      <div class="login-section">
        <div class="login-bg position-relative">
          <div class="close">
            <img
              :src="currentloginIndex == 0 ? close : back"
              alt="close"
              @click="showLoginModal = false"
            />
          </div>
          <div class="logo d-flex justify-content-center">
            <img src="~/assets/images/darkLogo.svg" alt="" />
          </div>
          <div class="header-bg position-absolute"></div>
          <LoginPhoneNumber v-if="currentloginIndex == 0" />
          <LoginVerification v-if="currentloginIndex == 1" />
          <LoginButton
            :title="currentloginIndex == 0 ? 'التالي' : 'تسجيل الدخول'"
            @click="currentloginIndex = 1"
          />
          <div
            class="create-account d-flex justify-content-center align-items-center"
          >
            <span class="title">ليس لديك حساب؟</span>
            <span class="link" @click="showregistrationModal = true"
              >انشئ حساب</span
            >
          </div>
        </div>
      </div>
    </CoreModal>
    <CoreModal
      :show="showregistrationModal"
      :close="() => (showregistrationModal = false)"
    >
      <div class="login-section">
        <div class="login-bg position-relative">
          <div class="close">
            <img
              :src="currentregistrationIndex == 0 ? close : back"
              alt="close"
              @click="showregistrationModal = false"
            />
          </div>
          <div class="logo d-flex justify-content-center">
            <img src="~/assets/images/darkLogo.svg" alt="" />
          </div>
          <div class="header-bg position-absolute"></div>
          <div class="create-account-title">
            <span>إنشاء حساب</span>
          </div>
          <LoginAccountType v-if="currentregistrationIndex == 0" />
          <LoginCreateField v-if="currentregistrationIndex == 1" />
          <LoginButton
            :title="currentregistrationIndex == 0 ? 'التالي' : 'انشاء حساب'"
            @click="currentregistrationIndex = 1"
          />
        </div>
      </div>
    </CoreModal>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  path: String,
  logo: String,
  login: String,
  color: String,

  background: {
    type: String,
    default: "#112347",
  },
  showBtn: {
    type: Boolean,
    default: true,
  },
  paddingTop: {
    type: String,
    default: "15px",
  },
});

import closeIcon from "~/assets/icons/close.svg";
const close = ref(closeIcon);

import backIcon from "~/assets/icons/back-arrow.svg";
const back = ref(backIcon);

const currentregistrationIndex = ref(0);
const currentloginIndex = ref(0);
const showLoginModal = ref(false);
const showregistrationModal = ref(false);

const items = ref([
  { title: "خدمات الحسبة", path: "/#services" },
  { title: "أخبار", path: "/news" },
  { title: "مقالات ", path: "/" },
  { title: "أسئلة متكررة", path: "/FAQs" },
  { title: "من نحن", path: "/aboutus" },
  { title: "اتصل بنا ", path: "/contactus" },
]);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
a {
  text-decoration: none;
  color: $secondary-text-color;
}
.navbar {
  padding-top: 27px;
  width: 100%;
  .nav-logo {
    width: 120px;
    img {
      height: 100%;
    }
  }
  .nav-login {
    margin-right: 4px;
  }
  .nav-menu {
    width: 80%;
    @include large {
      display: none !important;
    }
    ul {
      list-style-type: none;
      font-family: $main-font-family;
      color: $secondary-text-color;
      font-style: normal;
      font-size: $font-size-4;
      height: 100%;
      padding-left: 0;
      @media (max-width: 1400px) {
        font-size: $font-size-6;
      }
      @media (max-width: 1100px) {
        font-size: 12px;
      }

      li {
        cursor: pointer;
        position: relative;

        .line {
          position: absolute;
          left: -10px;
          top: 5px;
          width: 1px;
          height: 18px;
          background-color: white;
        }
      }
    }
    .items {
      margin-inline: 14px;
      @media (max-width: 1400px) {
        margin-inline: 10px;
      }
      @media (max-width: 1100px) {
        margin-inline: 8px;
      }
    }
  }
}
.login-bg {
  width: 444px;
  background: #ffffff;
  box-shadow: 0px 25px 50px rgba(17, 35, 71, 0.2);
  border-radius: 12px;
  padding-bottom: 41px;
  overflow: hidden;
  .close {
    padding-inline: 19px;
    padding-top: 23px;
    img {
      cursor: pointer;
    }
  }
  .logo {
    padding-bottom: 93px;
  }
  .header-bg {
    width: 795px;
    height: 795px;
    background: rgba(7, 138, 251, 0.1);
    border-radius: 50%;
    top: -100%;
    right: -40%;
    pointer-events: none;
  }
}
.header-bg {
  width: 795px;
  height: 795px;
  background: rgba(7, 138, 251, 0.1);
  border-radius: 50%;
  top: -100%;
  right: -40%;
  pointer-events: none;
}
.create-account {
  .title {
    font-family: $main-font-family;
    color: $theard-text-color;
    font-weight: 800;
    font-size: $font-size-5;
    line-height: 20.94px;
    font-style: normal;
  }
  .link {
    font-family: $main-font-family;
    color: $primary-blue-color;
    font-weight: 800;
    font-size: $font-size-5;
    line-height: 20.94px;
    font-style: normal;
    padding-inline: 8px;
    cursor: pointer;
  }
}
.create-account-title {
  text-align: center;
  padding-bottom: 4px;
  padding-bottom: 51px;
  span {
    font-family: $main-font-family;
    color: $primary-text-color;
    font-weight: 800;
    font-size: 22px;
    line-height: 34px;
    font-style: normal;
  }
}
</style>
