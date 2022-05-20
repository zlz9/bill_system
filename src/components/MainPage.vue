<template>
  <div class="MainPage">
    <el-container style="height: 500px; width: 100%; border: 1px solid #eee">
      <el-header>
        <el-menu
          :default-active="this.$router.path"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          :router="true"
        >
          <el-menu-item index="/index">消费列表</el-menu-item>
          <el-menu-item index="/moneyinfo">消费一览</el-menu-item>
          <el-menu-item index="/recordmoney">记一笔</el-menu-item>
          <template>
            <el-popconfirm title="确认退出吗？">
              <el-button slot="reference" @click="logOut">退出</el-button>
            </el-popconfirm>
          </template>
        </el-menu>
      </el-header>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  name: "MainPage",
  data() {
    return {
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    };
  },
  methods: {
    logOut() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scoped>
.MainPage {
  position: relative;

  width: 1900px;
}
.el-header {
  color: rgb(213, 192, 192);
  line-height: 60px;
  margin-bottom: 20px;
}
.el-container {
  min-height: 100%;
}
.el-button {
  position: relative;
  left: 75%;
  background-color: aquamarine;
}
</style>
