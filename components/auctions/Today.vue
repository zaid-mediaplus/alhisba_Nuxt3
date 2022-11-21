<template>
  <div class="today">
    <CoreFilter />
    <div class="disclaimer d-flex justify-content-between">
      <AuctionsDisclaimer />
      <AuctionsVideo />
    </div>
    <NuxtLink to="/auctions/1">
      <div class="items" v-for="(item, index) in items" :key="index">
        <AuctionsItems
          :title="item.title"
          :icon="item.icon"
          :date="item.date"
        />
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
    id: 1,
    icon: "/icons/justice.svg",
    title: "وزارة العدل",
    date: "26/10/2022 - 10:00 AM",
  },
  {
    id: 1,
    icon: "/icons/justice.svg",
    title: "وزارة العدل",
    date: "26/10/2022 - 10:00 AM",
  },
  {
    id: 1,
    icon: "/icons/eresco.svg",
    title: " الإنماء",
    date: "26/10/2022 - 10:00 AM",
  },
  {
    id: 1,
    icon: "/icons/justice.svg",
    title: "وزارة العدل",
    date: "26/10/2022 - 10:00 AM",
  },
  {
    id: 1,
    icon: "/icons/justice.svg",
    title: "وزارة العدل",
    date: "26/10/2022 - 10:00 AM",
  },
  {
    id: 1,
    icon: "/icons/justice.svg",
    title: "وزارة العدل",
    date: "26/10/2022 - 10:00 AM",
  },
  {
    id: 1,
    icon: "/icons/justice.svg",
    title: "وزارة العدل",
    date: "26/10/2022 - 10:00 AM",
  },
]);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
a {
  text-decoration: none;
}
.pagination-bar {
  margin-top: 46px;
  margin-bottom: 84px;
}
.disclaimer {
  @include extra-high-large() {
    flex-wrap: wrap;
    justify-content: center !important;
    width: 100%;
  }
}
</style>
