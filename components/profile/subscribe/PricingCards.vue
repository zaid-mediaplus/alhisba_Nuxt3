<template>
  <div class="pricing-card-container d-flex justify-content-around">
    <div class="pricing-card" v-for="(plan, index) in plans" :key="index">
      <ProfileSubscribePricingCard :plan="plan" />
    </div>
  </div>
</template>

<script setup>
const plans = ref([
  {
    id: 1,
    subscriptionPeriod: "لشهر واحد",
    price: "70",
    background: "rgba(7, 138, 251, 0.2)",
    btnBackground: "#078afb",
    boxShadow: "0px 6.2069px 27.3103px rgba(130, 209, 253, 0.7)",
    packages: [
      "هذا النص هو مثال لنص",
      "هذا النص هو مثال لنص",
      "هذا النص هو مثال لنص",
      "هذا النص هو مثال لنص",
    ],
  },
  {
    id: 2,
    subscriptionPeriod: "لستة أشهر",
    price: "350",
    background: "rgba(10, 197, 129, 0.3)",
    btnBackground: "#0AC581",
    boxShadow: "0px 5px 22px rgba(52, 224, 162, 0.68)",
    packages: [
      "هذا النص هو مثال لنص",
      "هذا النص هو مثال لنص",
      "هذا النص هو مثال لنص",
      "هذا النص هو مثال لنص",
    ],
  },
  {
    id: 3,
    subscriptionPeriod: "لسنة",
    price: "750",
    background: "rgba(238, 154, 1, 0.23)",
    btnBackground: "rgba(243, 175, 52, 0.6)",
    boxShadow: "0px 5px 22px rgba(243, 175, 52, 0.6)",
    packages: [
      "هذا النص هو مثال لنص",
      "هذا النص هو مثال لنص",
      "هذا النص هو مثال لنص",
      "هذا النص هو مثال لنص",
    ],
  },
]);
</script>

<style></style>
