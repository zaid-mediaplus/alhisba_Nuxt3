<template>
  <div class="search">
    <div
      class="
        search-bg
        d-flex
        flex-column
        justify-content-center
        align-items-end
      "
    >
      <div
        class="
          search-input-bg
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <div class="search-input">
          <input type="text" placeholder="ابحث هنا عن أفضل تطابق لك" />
        </div>
        <div class="search-btn d-flex">
          <div class="btn-bg d-flex justify-content-center align-items-center">
            <img
              class="search-icon"
              src="/static/icons/filterIcons/search.svg"
            />
            <span>بحث</span>
          </div>
        </div>
      </div>
      <span class="delete">حذف المرشحات</span>
    </div>
  </div>
</template>

<script >
</script>

<style lang="scss" >
@import "../../static/sass/variables.scss";
.search {
  margin-bottom: 45px;
  .search-bg {
    width: 100%;
    background: $primary-blue-color;
    border-radius: 15px;
    margin-top: 84px;
    padding: 28px;
    .search-input-bg {
      width: 100%;
      height: 68px;
      padding: 0 21px 0 10px;
      background: #ffffff;
      box-shadow: 0px 25px 50px rgba(17, 35, 71, 0.2);
      border-radius: 12px;
      .search-input {
        width: 100%;

        input,
        ::placeholder {
          width: 100%;
          border: none;
          outline: none;
          font-family: $main-font-family;
          font-size: $font-size-5;
          font-weight: 500;
          font-style: normal;
          color: #8996a2;
        }
      }

      .search-btn {
        .btn-bg {
          width: 138px;
          height: 48px;
          background-color: $primary-blue-color;
          box-shadow: 0px 5px 22px rgba(130, 209, 253, 0.7);
          border-radius: 12px;
          cursor: pointer;
          .search-icon {
            width: 15px;
            height: 15px;
          }
          span {
            font-family: $main-font-family;
            color: $secondary-text-color;
            font-size: $font-size-4;
            font-weight: 800;
            font-style: normal;
            padding-right: 11px;
          }
        }
      }
    }
  }
  .delete {
    font-family: $main-font-family;
    color: $secondary-text-color;
    font-size: 13px;
    font-weight: 800;
    font-style: normal;
    padding-top: 4px;
    cursor: pointer;
  }
}
</style>