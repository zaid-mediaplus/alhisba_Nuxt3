<template>
  <div class="number d-flex align-items-center">
    <FormNumberSelect />
    <input type="text" placeholder="رقم الهاتف" maxlength="10" />
  </div>
</template>

<script script></script>

<style lang="scss" scoped>
@import "../../static/sass/variables.scss";
.number {
  background: #ffffff;
  border: 1.5px solid #dddddd;
  border-radius: 13px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-inline: 17px;
  margin-bottom: 15px;
}
input {
  width: 50%;
  border: none;
  outline: none;
  padding-inline: 14px;
  border-right: 1px solid #dddddd;
  font-family: $main-font-family;
  color: $primary-text-color;
  font-size: $font-size-4;
  font-style: normal;
  font-weight: 800;
}
input::placeholder {
  font-family: $main-font-family;
  font-size: 18px;
  font-weight: 800;
  font-style: normal;
  color: #a0a7b5;
  line-height: 23.56px;
}
</style>
