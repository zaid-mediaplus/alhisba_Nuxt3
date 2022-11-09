<template>
  <div class="evaluation">
    <CoreInsideHeader
      title="التقييم الفوري"
      :img="evaluation"
      description="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.
"
      bottom="-108px"
    />
    <CoreAppContainer>
      <CoreInsideContainer>
        <div
          class="evaluation-tabs d-flex flex-wrap justify-content-center gap-4"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            @click="currentTapIndex = index"
          >
            <EvaluationTabs
              :title="item.title"
              :icon="tapImages[index]"
              :selected="currentTapIndex == index"
            />
          </div>
        </div>
        <EvaluationProperty v-show="currentTapIndex == 0" />
        <EvaluationRent v-show="currentTapIndex == 1" />
        <EvaluationCost v-show="currentTapIndex == 2" />
        <EvaluationInheritance v-show="currentTapIndex == 3" />
      </CoreInsideContainer>
    </CoreAppContainer>
  </div>
</template>

<script setup>
const props = defineProps({
  selected: Boolean,
});
const items = ref([
  { icon: "/static/icons/property.svg", title: "التقيم الفوري (الملكية)" },
  { icon: "/static/icons/rent.svg", title: " التقيم الفوري (الايجار)" },
  { icon: "/static/icons/cost.svg", title: " حسبة تكلفة البناء" },
  { icon: "/static/icons/inheritance.svg", title: "الميراث " },
]);

import evaluationIcon from "/static/images/insideHeader/evaluation-page.png";

const evaluation = ref(evaluationIcon);

const currentTapIndex = ref(0);

const tabs = ref([]);

import sellIcon from "/static/icons/property.svg";
import rentIcon from "/static/icons/rent.svg";
import costIcon from "/static/icons/cost.svg";
import inheritanceIcon from "/static/icons/inheritance.svg";

const tapImages = ref([sellIcon, rentIcon, costIcon, inheritanceIcon]);
</script>

<style lang="scss">
@import "../static/sass/variables.scss";
.evaluation {
  .evaluation-tabs {
    padding-top: 164px;
    padding-bottom: 84px;
  }
}
</style>
