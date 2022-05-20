<template>
  <div class="main">
    <main-header></main-header>
    <main-page></main-page>
  </div>
</template>

<script>
import MainHeader from "./MainHeader.vue";
import MainPage from "./MainPage.vue";
export default {
  components: { MainHeader, MainPage },
  name: "MainIndex",
};
</script>

<style lang="less" scoped>
.main {
}
</style>
