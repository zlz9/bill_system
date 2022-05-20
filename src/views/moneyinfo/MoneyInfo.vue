<template>
  <div class="MoneyInfo">
    <h1>账单一览</h1>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <bar-echarts></bar-echarts>
        </div>
      </el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <line-echarts></line-echarts></div
      ></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <pie-echarts></pie-echarts></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import BarEcharts from "./echarts/BarEcharts.vue";
import LineEcharts from "./echarts/LineEcharts.vue";
import PieEcharts from "./echarts/PieEcharts.vue";
export default {
  name: "MoneyInfo",
  data() {
    return {};
  },
  components: { BarEcharts, LineEcharts, PieEcharts },
};
</script>

<style lang="less" scoped>
h1 {
  text-align: center;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
