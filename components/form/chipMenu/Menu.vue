<template>
  <div class="chipmenu" >
    <div class="d-flex flex-wrap">
      <div v-for="(item, index) in items" :key="index">
        <FormChipMenuItem
          :index="index"
          :onItemClicked="onItemClicked"
          :item="item"
          :selected="index === selectedItemIndex"
        />
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

<style>
</style>