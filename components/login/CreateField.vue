<template>
  <div class="text-field d-flex justify-cotent-center">
    <FormTextFeild title="الإسم كامل" />
  </div>
  <div class="text-field">
    <FormTextFeild title="البريد الإلكتروني" />
  </div>
  <div class="account-affiliated d-flex justify-content-center">
    <div class="title">
      <span>هل هذا الحساب تابع لمكتب؟</span>
    </div>
    <div class="chose-property d-flex">
      <div class="form-check d-flex felx-row">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" htmlFor="flexRadioDefault1">
          نعم
        </label>
      </div>
      <div class="form-check d-flex felx-row">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label class="form-check-label" htmlFor="flexRadioDefault2"> لا </label>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  selected: Boolean,
});
const selected = ref(true);
const selectToggle = () => (selected.value = !selected.value);
</script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";
.next-btn {
  padding-inline: 34px;
  padding-bottom: 32px;
  padding-top: 51px;
  .next-btn-bg {
    width: 100%;
    background: $primary-blue-color;
    box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
    border-radius: 29px;
    padding-top: 14px;
    padding-bottom: 16px;
    cursor: pointer;
    span {
      font-family: $main-font-family;
      color: $secondary-text-color;
      font-weight: 800;
      font-size: $font-size-4;
      line-height: 28.12px;
      font-style: normal;
    }
  }
}
.text-field {
  text-align: center;
  padding-inline: 43px;
}
.title {
  font-family: $main-font-family;
  font-size: $font-size-6;
  font-weight: 800;
  font-style: normal;
  color: $primary-text-color;
  padding-inline-end: 27px;
}
.account-affiliated {
  padding-top: 28px;
}
.chose-property {
  .form-check {
    margin-left: 4px;

    .form-check-input {
      box-shadow: none;
      width: 20px;
      height: 20px;
      margin-bottom: 20px;
    }

    .form-check-label {
      font-family: $main-font-family;
      font-size: $font-size-6;
      font-weight: 800;
      font-style: normal;
      color: rgba(17, 35, 71, 0.4);
      margin-right: 30px;
    }
  }
}
</style>
