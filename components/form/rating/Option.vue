<template>
  <div class="ratingOption" @click="onItemClicked(index)">
    <div class="option-button d-flex flex-column align-items-center">
      <div class="option">
        <div class="img-arrow">
          <img src="/static/icons/wSelect.svg" />
        </div>
      </div>
      <div class="option-name">
        <p>{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
  selected: Boolean,
  index: Number,
  onItemClicked: Function,
});
</script>

<style lang="scss">
@import "../../../static/sass/variables.scss";
</style>