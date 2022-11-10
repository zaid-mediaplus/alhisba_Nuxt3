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
      <span> {{ title }}</span>
      <img
        :src="icon == null ? downArrow : icon"
        alt="arrow"
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
          class=""
        >
          <div class="item d-flex justify-content-between">
            <span
              :class="
                currentSelectedIndex == index ? 'selected' : 'not-selected'
              "
              >{{ item }}</span
            >
            <img :src="currentSelectedIndex == index ? selectIconImage : ''" />
          </div>
          <div class="border"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import selectIcon from "@/static/icons/select.svg";

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
  icon: {
    type: String,
    default: null,
  },
});
const visible = ref(false);
const selected = ref(false);
const currentSelectedIndex = ref(-1);
const selectIconImage = ref(selectIcon);

const showUsers = () => (visible.value = !visible.value);

const onClose = () => {
  visible.value = false;
};

import downArrowIcon from "~/assets/icons/downarrow.svg";
const downArrow = ref(downArrowIcon);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";

.dropdown-container {
  position: relative;
}

.dropdown {
  width: 100%;
  cursor: pointer;
  margin-bottom: 15px;
  img {
    &.selected {
      transform: rotate(180deg);
    }
  }
  span {
    font-family: $main-font-family;
    font-size: 15px;
    font-style: normal;
    color: $primary-blue-color;
    font-weight: 800;
    /* @include extra-large {
      font-size: $font-size-5;
    }
    @include large {
      font-size: $font-size-6;
    }
    @include medium {
      font-size: 12px;
    }
    @include small() {
      font-size: 10px;
    } */
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
