<template>
  <div
    class="dot"
    :class="selected ? 'selected' : ''"
    @click="selectToggle"
  ></div>
</template>

<script setup>
const props = defineProps({
  selected: Boolean,
});
const select = ref(false);
const selectToggle = () => (select.value = !select.value);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.dot {
  margin-inline: 7.5px;
  width: 7px;
  height: 7px;
  background: rgba(7, 138, 251, 0.2);
  border-radius: 50%;
  &.selected {
    background: $primary-blue-color;
  }
}
</style>
