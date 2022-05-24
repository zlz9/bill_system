<template>
  <div class="MoneyInfo">
    <h1>账单一览</h1>
    <div class="time">
      <div class="block">
        <span class="demonstration">从</span>-
        <el-date-picker
          value-format="yyyy-MM-dd"
          v-model="time"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
        <span>-共花费:{{ getTime ? getTime : 0 }}</span>
      </div>
    </div>
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
  components: { BarEcharts, LineEcharts, PieEcharts },
  name: "MoneyInfo",
  data() {
    return {
      time: "",
      pickdata: {
        startTime: "",
        endTime: "",
      },
      getTime: "",
    };
  },
  mounted() {},
  methods: {
    getSumMoney() {
      this.pickdata.startTime = this.time[0];
      this.pickdata.endTime = this.time[1];
      console.log(this.pickdata.startTime);
      this.$http
        .post(
          `stats?startTime=${this.pickdata.startTime}&endTime=${this.pickdata.endTime}`
        )
        .then((result) => {
          this.getTime = result.data.data.total;
          console.log(this.getTime);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  watch: {
    time: {
      handler() {
        this.getSumMoney();
      },
    },
    getTime: {
      handler() {
        this.getSumMoney();
      },
    },
  },
};
</script>

<style lang="less" scoped>
.time {
  position: relative;
  bottom: 50px;
  left: 130px;
}
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
