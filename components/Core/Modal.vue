<template>
  <ClientOnly>
    <Teleport to="body">
      <div
        class="modal-backdrop d-inline-flex pt-2 justify-content-center align-items-start"
        v-if="showModal"
      >
        <div
          class="inside-modal d-inline-flex justify-content-center align-items-center"
          v-click-outside="close"
        >
          <slot />
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  close: Function,
});
const showModal = ref(false);

watch(
  () => props.show,
  (show) => {
    console.log("test");
    showModal.value = show;
  }
);
</script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.modal-backdrop {
  background: #09101dac;
  overflow-y: auto;
  width: 100%;
  height: 100%;
}
.inside-modal {
}
</style>
