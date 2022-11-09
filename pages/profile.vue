<template>
  <CoreAppContainer>
    <CoreAppNavBar :logo="logo" :login="login" color="#112347" />
  </CoreAppContainer>
  <div class="page-bg">
    <CoreAppContainer>
      <CoreItemContainer>
        <div class="profile-section d-flex justify-content-between">
          <div class="SideBar">
            <ProfileSideBar :selected="currentTapIndex == index" />
          </div>
          <div class="left d-flex flex-column">
            <div class="top-title d-flex justify-content-between">
              <div class="section-title">
                <span>حسابي</span>
              </div>
              <NuxtLink to="/subscribe-to-alhesbah-pro">
                <ProfileSubscribeBtn />
              </NuxtLink>
            </div>
            <div class="profile-info">
              <!-- <ProfileInfo v-if="currentTapIndex == 0" /> -->
              <!-- <ProfileTrackPackages v-if="currentTapIndex == 1" /> -->
              <!-- <ProfileNotification v-if="currentTapIndex == 2" /> -->
              <ProfileInfo />
            </div>
          </div>
        </div>
      </CoreItemContainer>
    </CoreAppContainer>
  </div>
</template>

<script setup>
const props = defineProps({
  selected: Boolean,
});

import logoIcon from "@/static/images/darkLogo.svg";
import loginIcon from "@/static/icons/dLogin.svg";

const logo = ref(logoIcon);
const login = ref(loginIcon);
const currentTapIndex = ref(0);
</script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";
.page-bg {
  background: #0789fb10;
  padding-top: 200px;
  padding-bottom: 101px;
}
.profile-section {
  .SideBar {
    width: 30%;
  }
  .left {
    width: 65%;
  }
  .top-title {
    width: 100%;
    padding-bottom: 23px;

    .section-title {
      span {
        font-family: $main-font-family;
        color: $primary-text-color;
        font-size: 30px;
        font-weight: 800;
        font-style: normal;
      }
    }
    .Subscribe {
      .Subscribe-bg {
        background: $primary-yellow-color;
        box-shadow: 0px 5px 22px rgba(243, 175, 52, 0.24);
        border-radius: 12px;
        padding: 14.16px 0 13.17px 0;
        span {
          font-family: $main-font-family;
          color: $secondary-text-color;
          font-size: $font-size-4;
          font-weight: 800;
          font-style: normal;
          padding-inline: 13px;
        }
      }
    }
  }
}
</style>
