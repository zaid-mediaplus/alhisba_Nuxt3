<template>
  <div
    class="circle-bg d-flex justify-content-center align-items-center"
    :class="selectToggle() ? 'selected' : ''"
    @click="selectToggle()"
  >
    <img :src="selectToggle() ? '' : '/static/icons/wSelect.svg'" alt="" />
  </div>
</template>

<script setup>
const props = defineProps({
  selected: Boolean,
});
const select = ref(true);
const selectToggle = () => (select.value = !select.value);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.circle-bg {
  opacity: 0.54;
  border: 2.26087px solid #8996a2;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  &.selected {
    background: $primary-blue-color;
    border: none;
    opacity: 1;
  }
}
</style>
