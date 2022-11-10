<template>
  <CoreInsideHeader
    title="أسئلة متكررة"
    img="~/assets/icons/aboutus.svg"
    bottom="-135px"
  />
  <CoreAppContainer>
    <CoreItemContainer>
      <div class="FAQs-section">
        <div
          class="packages-container"
          v-for="(question, index) in questions"
          :key="index"
        >
          <FAQsAccordion :question="question" />
        </div>
      </div>
    </CoreItemContainer>
  </CoreAppContainer>
</template>

<script setup>
const usersToggle = ref(false);

const showUsers = () => (usersToggle.value = !usersToggle.value);

const questions = ref([
  {
    title:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
  },
  {
    title:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
  },
  {
    title:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
  },
  {
    title:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
  },
  {
    title:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
  },
  {
    title:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
  },
  {
    title:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
  },
  {
    title:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
  },
  {
    title:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
  },
]);
</script>

<style lang="scss" scoped>
@import "../static/sass/variables.scss";
.FAQs-section {
  margin-top: 99px;
  margin-bottom: 143px;
  @include extra-large {
    overflow-x: scroll;
  }
  .item {
    margin-bottom: 18px;
    width: 1106px;
    .question-bg {
      width: 100%;
      background: #ffffff;
      border: 1px solid #eff0f7;
      box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
      border-radius: 20px;
      padding-inline: 35px;
      padding-top: 30px;
      padding-bottom: 35px;
      .top {
        width: 100%;
      }
      .bottom {
        width: 90%;
        font-family: $main-font-family;
        color: #8996a2;
        font-size: $font-size-5;
        font-style: normal;
        font-weight: 800;
        padding-top: 25px;
      }
      .question {
        font-family: $main-font-family;
        color: $primary-text-color;
        font-size: $font-size-4;
        font-style: normal;
        font-weight: 800;
        width: 84%;
      }
      .select-bg {
        width: 44px;
        height: 32px;
        background: #e5eef5;
        border-radius: 24px;
      }
    }
  }
}
</style>
