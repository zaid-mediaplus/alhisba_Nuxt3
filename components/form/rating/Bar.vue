<template>
  <div class="ratingOption">
    <div className="d-flex flex-row">
      <FormRatingOption
        :index="index"
        :onItemClicked="onItemClicked"
        :item="item"
        :selected="index == selectedItemIndex"
      />
      <div class="border"></div>
      <FormRatingOption
        :index="index"
        :onItemClicked="onItemClicked"
        :item="item"
        :selected="index == selectedItemIndex"
      />
      <div class="border"></div>

      <FormRatingOption
        :index="index"
        :onItemClicked="onItemClicked"
        :item="item"
        :selected="index == selectedItemIndex"
      />
      <div class="border"></div>
      <FormRatingOption
        :index="index"
        :onItemClicked="onItemClicked"
        :item="item"
        :selected="index == selectedItemIndex"
      />
      <div class="rating-button-line">
        <div class="rating-bar-border"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: Array,
});

let selectedItemIndex = ref(-1);

const onItemClicked = (itemIndex) => {
  selectedItemIndex.value = itemIndex;
};
</script>

<style lang="scss">
@import "../../../static/sass/variables.scss";
</style>