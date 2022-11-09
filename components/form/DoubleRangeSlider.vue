<template>
  <div class="content">
    <div
      id="my-slider"
      :se-min="minThreshold"
      :se-step="step"
      :se-min-value="min"
      :se-max-value="max"
      :se-max="maxThreshold"
      class="slider"
    >
      <div class="slider-touch-left">
        <span></span>
      </div>
      <div class="slider-touch-right">
        <span></span>
      </div>
      <div class="slider-line">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  minThreshold: {
    type: Number,
    default: -100,
  },
  maxThreshold: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
});
const isItemSelected = () => {
  this.instance = new ZbRangeSlider("my-slider");
  this.instance.onChange = (min, max) => this.updateValues(min, max);
};

// mounted: function () {
//     this.instance = new ZbRangeSlider('my-slider')
//     this.instance.onChange = (min, max) => this.updateValues(min, max)
//   }
const instance = () => ref(undefined);
</script>

<style lang="scss" scoped></style>
