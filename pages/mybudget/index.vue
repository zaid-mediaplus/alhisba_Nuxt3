<template>
  <div>
    <CoreInsideHeader
      title="حسبة القرض العقاري"
      :img="header"
      description="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.
"
      bottom="-50px"
    />
    <div class="page-bg">
      <CoreAppContainer>
        <CoreItemContainer>
          <div class="budget">
            <div
              class="budget-form d-flex flex-column justify-content-between align-items-center"
            >
              <div class="input-lable">
                <span>أدخل ميزانيتك</span>
              </div>
              <div
                class="text-field d-flex justify-content-center align-items-center"
              >
                <input type="text" />
                <span class="kd">د.ك</span>
              </div>
            </div>
            <div class="calc-btn d-flex justify-content-end">
              <div
                class="calc d-flex justify-content-center align-items-center"
                @click="selectToggle()"
              >
                <span>ابحث</span>
              </div>
            </div>
          </div>
          <BudgetSearch v-if="select" />
        </CoreItemContainer>
      </CoreAppContainer>
    </div>
  </div>
</template>

<script setup scoped>
import haederIcon from "/static/images/insideHeader/budget-page.png";
const props = defineProps({
  selected: Boolean,
});
const select = ref(false);
const selectToggle = () => (select.value = !select.value);
const currentTapIndex = ref(1);

const header = ref(haederIcon);
</script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";
.page-bg {
  background: #0789fb10;
  padding-top: 200px;
  padding-bottom: 101px;
}
.budget {
  .budget-form {
    width: 100%;
    height: 177px;
    background: #ffffff;
    border: 1px solid #eff0f7;
    box-shadow: 0px 5px 90px rgba(8, 15, 52, 0.06);
    border-radius: 34px;
    padding: 32px 0 27px 0;
    .input-lable {
      font-family: $main-font-family;
      color: rgba(17, 35, 71, 0.4);
      font-size: $font-size-4;
      font-style: normal;
      font-weight: 800;
    }
    .text-field {
      border-bottom: 1.5px solid #e3e6eb;
      width: 293px;
      .kd {
        font-family: $main-font-family;
        color: $primary-blue-color;
        font-size: 34px;
        font-style: normal;
        font-weight: 800;
        margin-right: 10px;
      }
      input {
        border: none;
        outline: none;
        width: 70%;
        font-family: $main-font-family;
        color: $primary-blue-color;
        font-size: 34px;
        font-style: normal;
        font-weight: 800;
        direction: ltr;
        padding-bottom: 13px;
      }
    }
  }
}
.calc {
  width: 165px;
  box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
  border-radius: 29px;
  background-color: $primary-blue-color;
  height: 58px;
  margin-bottom: 84px;
  margin-top: 40px;
  cursor: pointer;

  span {
    font-family: $main-font-family;
    color: $secondary-text-color;
    font-size: $font-size-4;
    font-weight: 800;
    font-style: normal;
  }
}
</style>
