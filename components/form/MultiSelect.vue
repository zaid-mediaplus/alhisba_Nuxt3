<template>
  <div class="select-container" v-click-outside="onClose">
    <div
      class="select d-flex justify-content-between align-items-center position-relative"
      @click="toggleVisibilty"
    >
      <span v-if="!visible"> حدد منطقة أو أكثر</span>
      <div v-if="visible" class="selected-items d-flex flex-wrap">
        <div
          v-for="(item, index) in selectedItems"
          :key="index"
          class="chip-item d-flex justify-content-between align-items-center"
        >
          <span>{{ item }}</span>
          <div class="close-bg" @click="toggleItem(item)">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <img
        src="/icons/downarrow.svg"
        alt="arrow"
        class="arrow-icon position-absolute"
        :class="visible ? 'selected' : ''"
      />
    </div>

    <div class="list-item" :class="visible ? 'visible' : 'hidden'">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="items-bg d-flex align-items-center"
        :class="isItemSelected(item) ? 'selected' : 'not-selected'"
      >
        <input @click="toggleItem(item)" class="right" type="checkbox" />
        <span class="item">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: Array,
});
const visible = ref(false);
const selected = ref(false);
const selectedItems = ref([]);
const currentSelectedIndex = ref(-1);

const toggleVisibilty = () => (visible.value = !visible.value);

const isItemSelected = (item) => {
  return selectedItems.value.indexOf(item) != -1;
};

const toggleItem = (item) => {
  if (isItemSelected(item)) {
    selectedItems.value.splice(selectedItems.value.indexOf(item), 1);
    return;
  }
  selectedItems.value.push(item);
};

const onClose = () => {
  visible.value = false;
};
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.select-container {
  position: relative;
  .select {
    width: 100%;
    min-height: 66px;
    background: #ffffff;
    border: 1.5px solid #dddddd;
    border-radius: 13px;
    padding: 24px;
    cursor: pointer;
    position: relative;
    span {
      width: 80%;
      font-family: $main-font-family;
      font-weight: 800;
      font-size: $font-size-4;
      font-style: normal;
      color: $primary-text-color;
      font-weight: 800;
    }
    .arrow-icon {
      left: 5%;
      &.selected {
        transform: rotate(180deg);
      }
    }
  }
}
.selected-items {
  width: 96%;
  top: 20px;
  padding-right: 34px;
  padding-left: 13px;
  .chip-item {
    border: 1px solid rgba(137, 150, 162, 0.6);
    border-radius: 14px;
    padding: 5px 7px 6px 11px;
    margin-left: 13px;
    margin-bottom: 5px;

    span {
      width: 88px;
      padding-left: 6px;
      font-family: $main-font-family;
      font-style: normal;
      font-weight: 500;
      font-size: $font-size-6;
      line-height: 22px;
    }
    .close-bg {
      width: 16px;
      height: 16px;
      background: rgba(137, 150, 162, 0.6);
      border-radius: 50%;
    }
  }
}
.list-item {
  width: 100%;
  height: 0;
  z-index: 10;
  overflow: hidden;
  transition: height 0.1s;
  box-shadow: 0px 25px 90px rgba(17, 35, 71, 0.2);
  border-radius: 13px;

  &.visible {
    height: 350px;
    overflow-y: scroll;
  }

  &.hidden {
    height: 0px;
  }
  .items-bg:first-child {
    padding-top: 30px;
  }
  .items-bg:last-child {
    padding-bottom: 12px;
  }
  .items-bg {
    width: 100%;
    background: #ffffff;
    padding-bottom: 14px;

    .item {
      font-family: $main-font-family;
      font-size: 17px;
      font-style: normal;
      color: #112347;
      font-weight: 500;
      cursor: pointer;
      &.selected {
        font-family: $main-font-family;
        font-weight: 800;
        font-size: $font-size-5;
        font-style: normal;
        color: $primary-blue-color;
      }
    }
  }
}
.right {
  width: 26px;
  height: 26px;
  margin-left: 19px;
  margin-right: 34px;
}
</style>
