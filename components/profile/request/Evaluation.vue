<template>
  <div class="evaluation-container">
    <div
      class="evaluation-bg d-flex justify-content-between align-items-center"
    >
      <div class="right-section d-flex">
        <div class="image">
          <img src="/static/icons/off-Evaluation.svg" alt="" />
        </div>
        <div class="midle-section">
          <div class="main-title">
            <span>هذا النص هو مثال لنص</span>
          </div>
          <div class="sub-title">
            <span>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</span>
          </div>
          <div class="sub-title">
            <span>تاريخ الطلب:</span>
            <span class="date">10.10.2022</span>
          </div>
          <div class="type d-flex">
            <div class=""></div>
            <span>تم الإصدار </span>
          </div>
        </div>
      </div>
      <div class="left">
        <img src="/static/icons/profile/download.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const AdmissionProcess = {
  Approved: 0,
  Rejected: 1,
  Active: 2,
  inProgress: 3,
  Pending: 4,
};

const getIconForAdmissionProcess = (icon) => {
  switch (icon) {
    case AdmissionProcess.Approved:
      return "";
    case AdmissionProcess.Rejected:
      return "";
    case AdmissionProcess.Active:
      return "";
    case AdmissionProcess.inProgress:
      return "";
    case AdmissionProcess.Pending:
      return "";
  }
};
const getIconColorForAdmissionProcess = (icon) => {
  switch (icon) {
    case AdmissionProcess.Approved:
      return "#0AC581";
    case AdmissionProcess.Rejected:
      return "#FF735C";
    case AdmissionProcess.Active:
      return "#078AFB";
    case AdmissionProcess.inProgress:
      return "#EE9A01";
    case AdmissionProcess.Pending:
      return "#8996A2";
  }
};

const props = defineProps({
  icon: String,
  color: String,
});
</script>

<style lang="scss" scoped>
@import "../../../static/sass/variables.scss";
.evaluation-bg {
  width: 100%;
  background: rgba(7, 138, 251, 0.1);
  padding-top: 24px;
  padding-bottom: 15px;
  padding-inline-start: 10.84px;
  padding-inline-end: 22px;
  border-radius: 16px;
  .right-section {
    .image {
      img {
        width: 50.16px;
        height: 60.02px;
      }
    }
    .main-title {
      font-family: $main-font-family;
      color: $primary-text-color;
      font-size: $font-size-4;
      font-weight: 800;
      font-style: normal;
    }
    .sub-title {
      font-family: $main-font-family;
      color: #8996a2;
      font-size: $font-size-6;
      font-weight: 800;
      font-style: normal;
    }
  }
  .date {
    padding-inline: 4px;
  }
  .midle-section {
    padding-inline: 12px;
    .type {
      padding-top: 10px;
      span {
        font-family: $main-font-family;
        color: #0ac581;
        font-size: $font-size-6;
        font-weight: 800;
        font-style: normal;
        padding-inline: 7px;
      }
    }
  }
}
</style>
