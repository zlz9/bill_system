<template>
  <div id="pie"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "PieEcharts",
  mounted() {
    var chartDom = document.getElementById("pie");
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      title: {
        text: "消费账单",

        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "消费",
          type: "pie",
          radius: "50%",
          data: [
            { value: 1048, name: "吃饭" },
            { value: 735, name: "房租" },
            { value: 580, name: "出行" },
            { value: 484, name: "衣服" },
            { value: 300, name: "请客" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    option && myChart.setOption(option);
  },
};
</script>

<style lang="less" scoped>
#pie {
  width: 100%;
  height: 400px;
}
</style>
