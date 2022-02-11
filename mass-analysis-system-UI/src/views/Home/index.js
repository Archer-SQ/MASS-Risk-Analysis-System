import {
  defineComponent,
  onMounted,
  onUnmounted,
} from "vue";
import * as echarts from "echarts";
import "echarts-gl";

import barConfig from "./ChartConfig/bar.config";
import getBarData from "./Data";

export default defineComponent({
  setup() {
    onMounted(() => {
      initBarChart();
    });
    onUnmounted(() => {
      echarts.dispose;
    });
    const initBarChart = async () => {
      const barEchart = echarts.init(
        document.getElementById("bar")
      );
      const barData = await getBarData();
      barConfig &&
        barEchart.setOption(barConfig(barData));
      //自适应大小
      window.onresize = function () {
        barEchart.resize();
      };
    };
  },
});
