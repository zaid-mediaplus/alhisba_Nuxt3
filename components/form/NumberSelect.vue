<template>
  <div
    class="dropdown-container d-flex align-items-center"
    ref="dropdownContainer"
    v-click-outside="onClose"
  >
    <div
      class="dropdown d-flex justify-content-between align-items-center"
      @click="showUsers"
    >
      <div class="reign">
        <img src="/images/ku-flag.png" alt="" />
        <span> (+965)</span>
      </div>
      <img
        class="arrow"
        src="/icons/downarrow.svg"
        :class="visible ? 'selected' : ''"
      />
    </div>
    <div
      class="list-item"
      ref="dropdownItems"
      :class="visible ? 'visible' : 'hidden'"
    >
      <div class="items-bg">
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="currentSelectedIndex == index ? 'selected' : 'not-selected'"
          @click="currentSelectedIndex = index"
        >
          <div class="item d-flex justify-content-between">
            <span
              :class="
                currentSelectedIndex == index ? 'selected' : 'not-selected'
              "
              >{{ item }}</span
            >
            <img :src="currentSelectedIndex == index ? selectIcon : ''" />
          </div>
          <div class="border"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const dropdownContainer = ref(null);
const dropdownItems = ref(null);

onMounted(() => {
  const containerHeight =
    dropdownContainer.value.getBoundingClientRect().height;
  const top = 15;
  dropdownItems.value.style.top = containerHeight + top + "px";
});

const props = defineProps({
  title: String,
  items: Array,
  showBorder: {
    type: Boolean,
    default: true,
  },
  padding: {
    type: String,
    default: "24px",
  },
  marginBottom: {
    type: String,
    default: "15px",
  },
  icon: String,
});
const visible = ref(false);
const selected = ref(false);
const currentSelectedIndex = ref(-1);
const selectIcon = "/icons/select.svg";
const downArrowIcon = "/icons/downarrow.svg";
const downArrow = ref(downArrowIcon);

const showUsers = () => (visible.value = !visible.value);

const onClose = () => {
  visible.value = false;
};
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.dropdown-container {
  position: relative;
}
.arrow {
  padding-inline: 14px;
}
.reign {
  width: 83px;
}
.dropdown {
  /* width: 18%; */
  border-radius: 13px;
  cursor: pointer;
  img {
    &.selected {
      transform: rotate(180deg);
    }
  }
  span {
    font-family: $main-font-family;
    font-weight: 800;
    font-size: $font-size-4;
    font-style: normal;
    color: $primary-text-color;
    font-weight: 800;
  }
}
.list-item {
  width: 100%;
  height: 0;
  position: absolute;
  z-index: 10;
  overflow: hidden;
  transition: height 0.1s;
  top: 86px;
  box-shadow: 0px 25px 90px rgba(17, 35, 71, 0.2);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-radius: 12px;

  &.visible {
    height: fit-content;
    overflow-y: scroll;
    max-height: 353px;
  }

  &.hidden {
    height: 0px;
  }

  .items-bg {
    width: 100%;
    background: #ffffff;
    .items-border {
      border: 1px solid #dddddd;
    }
    .items-bg:first-child {
      padding-top: 24px;
    }
    .item {
      padding-top: 12px;
      padding-bottom: 11px;
      padding-inline: 20px;
      cursor: pointer;
      span {
        font-family: $main-font-family;
        font-size: $font-size-5;
        font-style: normal;
        color: #112347;
        font-weight: 500;
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
}
.items-dropdown {
  width: 358px;
}
</style>
