<template>
  <div class="auction">
    <CoreInsideHeader
      title="مزادات عقارية"
      :img="headerImage"
      description="هذا
    النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من
    مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.
    "
      bottom="-50px"
    />
    <CoreAppContainer>
      <CoreItemContainer>
        <div
          class="auctions-tabs d-flex justify-content-center align-items-center gap-4"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            @click="currentTapIndex = index"
          >
            <AuctionsTap
              :title="item.title"
              :selected="currentTapIndex == index"
            />
          </div>
        </div>
        <AuctionsPrevious v-show="currentTapIndex == 0" />
        <AuctionsToday v-show="currentTapIndex == 1" />
        <AuctionsComing v-show="currentTapIndex == 2" />
      </CoreItemContainer>
    </CoreAppContainer>
  </div>
</template>

<script setup>
import image from "~/assets/images/insideHeader/auctions-page.png";

const headerImage = ref(image);

const props = defineProps({
  selected: Boolean,
});
const items = ref([
  { title: "السابقة" },
  { title: " اليوم" },
  { title: " القادمة" },
]);
const currentTapIndex = ref(0);
const tabs = ref([]);
</script>

<style lang="scss">
@import "../static/sass/variables.scss";

.auctions-tabs {
  margin-top: 83px;
  margin-bottom: 53px;

  @include extra-extra-large() {
    flex-wrap: wrap;
  }
}
</style>
