<template>
  <div class="details d-flex justify-content-between flex-wrap">
    <div class="items-dropdown">
      <FormDropDown
        title="المنظقة"
        :items="[
          'الشامية',
          'السالمية',
          'صباح السالم',
          'الفروانية',
          'الفروانية',
          'الأندلس',
          'جابر الأحمد',
          'الأحمدي',
        ]"
      />
    </div>
    <div class="items-dropdown">
      <FormDropDown title="نوع العقار" />
    </div>
    <div class="text-field-container">
      <FormTextFeild title="مساحة العقار" />
    </div>
    <div class="text-field-container">
      <FormTextFeild title="السعر" />
    </div>
    <div class="text-field-container">
      <FormTextFeild title="اسم المعلن" />
    </div>
    <div class="items-dropdown">
      <FormNumberDropDown />
    </div>
    <textarea
      class="additional-details"
      placeholder="تفاصيل الإعلان"
    ></textarea>
  </div>
  <div class="d-flex justify-content-between">
    <div class="attachments" v-for="(item, index) in items" :key="index">
      <FormAttachments
        v-show="currentTapIndex == 0"
        :title="item.title"
        :icon="item.icon"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../../static/sass/variables.scss";

textarea {
  width: 100%;
  height: 132px;
  resize: none;
  background: #ffffff;
  border: 1.5px solid #dddddd;
  border-radius: 13px;
  padding: 24px 18px 0 0;
  font-family: $main-font-family;
  font-weight: 800;
  font-size: $font-size-4;
  font-style: normal;
  color: rgba(17, 35, 71, 0.4);
  font-weight: 800;
  outline: none;
}
.items-dropdown {
  width: 358px;
}
.text-field-container {
  width: 358px;
}
</style>
