<template>
  <div>
    <div class="notification">
      <BudgetNote />
    </div>
    <CoreFilter />
    <NuxtLink to="/mybudget/1">
      <div class="pricing-card" v-for="(item, index) in items" :key="index">
        <BudgetBar :item="item" />
      </div>
    </NuxtLink>
    <div class="pagination-bar d-flex justify-content-center gap-4">
      <CorePagination />
    </div>
  </div>
</template>

<script setup>
const items = ref([
  {
    icon: "/icons/blueHouse.svg",
    title: "اليرموك",
    number: "8",
  },
  {
    icon: "/icons/blueHouse.svg",
    title: "قادسية",
    number: "2",
  },
  {
    icon: "/icons/Land.svg",
    title: "سلوى",
    number: "5",
  },
  {
    icon: "/icons/blueHouse.svg",
    title: "الشامية",
    number: "2",
  },
  {
    icon: "/icons/blueHouse.svg",
    title: "سالمية",
    number: "4",
  },
  {
    icon: "/icons/blueHouse.svg",
    title: "سلوى",
    number: "3",
  },
]);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
</style>
