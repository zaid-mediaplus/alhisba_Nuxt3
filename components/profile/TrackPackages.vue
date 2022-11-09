<template>
  <div class="trackpackages">
    <div class="trackpackages-bg">
      <div
        class="packages-container"
        v-for="(packet, index) in packages"
        :key="index"
      >
        <!-- <ProfileNotificationNew :notification="notification" /> -->
        <ProfilePackagesItem :packet="packet" />
      </div>
    </div>
  </div>
</template>

<script setup>
const packages = ref([
  {
    id: 1,
    title: "اشتراك لشهر واحد",
    date: "25.5.2022",
    price: "70 د.ك ",
    background: "rgba(7, 138, 251, 0.2)",
  },
  {
    id: 1,
    title: "اشتراك سنوي",
    date: "25.5.2022",
    price: "700 د.ك",
    background: "rgba(238, 154, 1, 0.3)",
  },
]);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.trackpackages-bg {
  width: 728px;
  background: #ffffff;
  border: 1px solid #eff0f7;
  box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
  border-radius: 20px;
  padding-top: 41px;
  padding-inline: 30px;
  min-height: 592px;
}
</style>
