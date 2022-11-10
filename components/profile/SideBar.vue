<template>
  <div class="profile-taps">
    <div class="taps-bg d-flex flex-column align-items-center">
      <div>
        <img
          class="position-relative"
          src="~/assets/icons/profile-picture.svg"
          alt=""
        />
      </div>
      <div class="edit-icon">
        <!-- <img
          class="position-absolute"
          src="~/assets/icons/profile/profileedit.svg"
          alt=""
        /> -->
      </div>
      <div class="profile-name">
        <span>أحمد يوسف سالم</span>
      </div>
      <div class="profile-type">
        <img src="~/assets/icons/profile/business-account.svg" alt="" />
        <span>حساب تجاري</span>
      </div>
      <div class="taps d-flex flex-column align-items-start">
        <div
          v-for="(item, index) in items"
          :key="index"
          @click="currentTapIndex = index"
        >
          <ProfileSidebarItem
            :title="item.title"
            :icon="sideBarTap[index]"
            :selected="currentTapIndex == index"
          />
          <div class="taps-border"></div>
        </div>
        <div class="exit-tap-bg d-flex">
          <div class="exit-bg d-flex justify-content-center align-items-center">
            <img src="~/assets/icons/profile/exit.svg" alt="" />
          </div>
          <span class="exit-text">تسجيل الخروج</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  { icon: "~/assets/icons/profile/your-profile.svg", title: "حسابك" },
  { icon: "~/assets/icons/profile/orders.svg", title: "طلباتك" },
  { icon: "~/assets/icons/profile/packet.svg", title: "متابعة الحزم" },
  { icon: "~/assets/icons/profile/notification.svg", title: "التنبيهات" },
  { icon: "~/assets/icons/profile/favorite.svg", title: "المفضلة" },
]);

import yourProfileIcon from "~/assets/icons/profile/your-profile.svg";
import orderIcon from "~/assets/icons/profile/orders.svg";
import packetIcon from "~/assets/icons/profile/packet.svg";
import notificationIcon from "~/assets/icons/profile/notification.svg";
import favoriteIcon from "~/assets/icons/profile/favorite.svg";

const sideBarTap = ref([
  yourProfileIcon,
  orderIcon,
  packetIcon,
  notificationIcon,
  favoriteIcon,
]);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.profile-taps {
  .taps-bg {
    width: 100%;
    background: $secondary-text-color;
    border: 1px solid #eff0f7;
    box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
    border-radius: 20px;
    padding-top: 50px;
    padding-inline: 23px;
    .profile-name {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: 21px;
      font-weight: 800;
      font-style: normal;
      padding-top: 14px;
      padding-bottom: 9px;
    }
    .profile-type {
      padding-bottom: 35px;
      span {
        padding-inline: 6px;
        font-family: $main-font-family;
        color: #8996a2;
        font-size: 21px;
        font-weight: 500;
        font-style: normal;
      }
    }
    .taps {
      width: 100%;
      div {
        width: 100%;
      }
      .taps-border {
        border: 1px solid rgba(137, 150, 162, 0.13);
        margin-top: 11px;
        margin-bottom: 10px;
        width: 100%;
      }
      .exit-tap-bg {
        padding-inline: 10px;
        padding-bottom: 15px;
        padding-top: 13px;
        width: 100%;
        cursor: pointer;
      }
      .exit-bg {
        width: 29px;
        height: 29px;
        background: #ff725c30;
        border-radius: 6px;
      }
      .exit-text {
        font-family: $main-font-family;
        color: #ff735c;
        font-size: $font-size-4;
        font-weight: 800;
        font-style: normal;
        padding-inline: 15px;
      }
    }
  }
}
.edit-icon {
  img {
    right: 18%;
    top: 17%;
  }
}
</style>
