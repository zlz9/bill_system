<template>
  <div class="line">
    <div id="line"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "LineEcharts",
  mounted() {
    var chartDom = document.getElementById("line");
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    };

    option && myChart.setOption(option);
  },
};
</script>

<style lang="less" scoped>
#line {
  width: 100%;
  height: 400px;
}
</style>
