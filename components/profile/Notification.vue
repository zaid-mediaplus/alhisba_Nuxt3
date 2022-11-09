<template>
  <div class="notification">
    <div class="notification-bg">
      <div class="new-notification">
        <div class="main-title">
          <span>جديدة</span>
        </div>
        <div
          class="notification-container"
          v-for="(notification, index) in newNotifications"
          :key="index"
        >
          <ProfileNotificationNew :notification="notification" />
        </div>
      </div>
      <div class="all-notification">
        <div class="main-title">
          <span>جميع التنبيهات</span>
        </div>
        <div
          class="notification-container"
          v-for="(notification, index) in allNotifications"
          :key="index"
        >
          <ProfileNotificationNew :notification="notification" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const newNotifications = ref([
  {
    id: 1,
    title: "هذا النص هو مثال لنص",
    description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    date: "3:59 PM",
    background: "rgba(7, 138, 251, 0.1)",
  },
  {
    id: 2,
    title: "هذا النص هو مثال لنص",
    description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    date: "3:59 PM",
    background: "rgba(7, 138, 251, 0.1)",
  },
]);
const allNotifications = ref([
  {
    id: 1,
    title: "هذا النص هو مثال لنص",
    description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    date: "ﻗﺒﻞ ﻳﻮم",
    background: "#F3F7FB",
  },
  {
    id: 2,
    title: "هذا النص هو مثال لنص",
    description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    date: "ﻗﺒﻞ ﻳﻮم",
    background: "#F3F7FB",
  },
  {
    id: 3,
    title: "هذا النص هو مثال لنص",
    description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    date: "قبل يومين",
    background: "#F3F7FB",
  },
  {
    id: 4,
    title: "هذا النص هو مثال لنص",
    description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    date: "قبل أسبوع",
    background: "#F3F7FB",
  },
  {
    id: 5,
    title: "هذا النص هو مثال لنص",
    description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    date: "قبل أسبوع",
    background: "#F3F7FB",
  },
]);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.notification {
  .notification-bg {
    width: 728px;
    background: #ffffff;
    border: 1px solid #eff0f7;
    box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
    border-radius: 20px;
    padding-inline: 31px;
    padding-top: 36px;
    padding-bottom: 16px;
    .main-title {
      font-family: $main-font-family;
      color: #8996a2b4;
      font-size: 24px;
      font-weight: 800;
      font-style: normal;
      line-height: 37px;
      padding-bottom: 8px;
    }
    .new-notification {
      padding-bottom: 41px;
    }
  }
}
</style>
