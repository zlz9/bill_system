<template>
  <div class="bar">
    <div id="bar_echarts"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "PieEcharts",
  mounted() {
    var myChart = echarts.init(document.getElementById("bar_echarts"));
    // 绘制图表
    myChart.setOption({
      title: {
        text: "本月消费",
      },
      tooltip: {},
      xAxis: {
        data: ["饮食", "出行", "租房", "游戏", "请客", "其他"],
      },
      yAxis: {},
      series: [
        {
          name: "消费",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  },
};
</script>

<style lang="less" scoped>
#bar_echarts {
  width: 100%;
  height: 400px;
}
</style>
