<template>
  <div class="comming">
    <CoreFilter />
    <!-- <div class="learn-video d-flex justify-content-center">
      <div
        class="bg d-flex justify-content-between align-items-center"
        @click="showModal = !showModal"
      >
        <div class="icon-bg d-flex justify-content-center align-items-center">
          <img src="/static/icons/video.svg" alt="" />
        </div>
        <div class="title">
          <span>شاهد هذا الفيديو لمعرفة كيفية المشاركة</span>
        </div>
        <CoreModal :show="showModal" :close="() => (showModal = false)">
          <div class="modal-bg d-flex justify-content-center">
            <div class="modal-top d-flex">
              <div
                class="modal-close-bg d-flex justify-content-center align-items-center"
                @click="showModal = false"
              >
                <img src="/static/icons/close.svg" alt="close" />
              </div>
            </div>
            <iframe
              width="736px"
              height="392px"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            >
            </iframe>
          </div>
        </CoreModal>
      </div>
    </div> -->
    <div class="disclaimer d-flex justify-content-between">
      <AuctionsDisclaimer />
      <AuctionsVideo />
    </div>
    <div class="items" v-for="(item, index) in items" :key="index">
      <NuxtLink to="/auctions/1">
        <div>
          <AuctionsItems
            :title="item.title"
            :icon="item.icon"
            :date="item.date"
          />
        </div>
      </NuxtLink>
    </div>

    <div class="pagination-bar d-flex justify-content-center gap-4">
      <CorePagination />
    </div>
  </div>
</template>

<script setup>
const items = ref([
  {
    id: 1,
    icon: "/static/icons/justice.svg",
    title: "وزارة العدل",
    date: "26/10/2022 - 10:00 AM",
  },
  {
    id: 1,
    icon: "/static/icons/justice.svg",
    title: "وزارة العدل",
    date: "26/10/2022 - 10:00 AM",
  },
  {
    id: 1,
    icon: "/static/icons/eresco.svg",
    title: "الإنماء",
    date: "26/10/2022 - 10:00 AM",
  },
  {
    id: 1,
    icon: "/static/icons/justice.svg",
    title: "وزارة العدل",
    date: "26/10/2022 - 10:00 AM",
  },
  {
    id: 1,
    icon: "/static/icons/justice.svg",
    title: "وزارة العدل",
    date: "26/10/2022 - 10:00 AM",
  },
  {
    id: 1,
    icon: "/static/icons/justice.svg",
    title: "وزارة العدل",
    date: "26/10/2022 - 10:00 AM",
  },
  {
    id: 1,
    icon: "/static/icons/justice.svg",
    title: "وزارة العدل",
    date: "26/10/2022 - 10:00 AM",
  },
]);

const showModal = ref(false);

let toggleModal = () => (showModal = !showModal);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.comming {
  a {
    text-decoration: none;
  }
  .pagination-bar {
    margin-top: 46px;
    margin-bottom: 84px;
  }
}
.disclaimer {
  @include extra-high-large() {
    flex-wrap: wrap;
    justify-content: center !important;
    width: 100%;
  }
}
</style>
