import {
  defineComponent,
  onMounted,
  onUnmounted,
} from "vue";
import * as echarts from "echarts";
import "echarts-gl";

import bar3DConfig from "./ChartConfig/bar3D.config";
import pieConfig from "./ChartConfig/pie.config";
import barConfig from "./ChartConfig/bar.config";
import get3DBarData from "./Data/get3DBarData";
import getPieData from "./Data/getPieData";
import getBarData from "./Data/getBarData";
import echartTool from "./ChartConfig/echartsHelp";

export default defineComponent({
  setup() {
    onMounted(() => {
      initBarChart();
    });
    onUnmounted(() => {
      echarts.dispose;
    });

    const initBarChart = async () => {
      // 3D柱状图
      const bar3DEchart = echarts.init(
        document.getElementById("bar3D")
      );
      const bar3DData = await get3DBarData();
      bar3DConfig &&
        bar3DEchart.setOption(
          bar3DConfig(bar3DData)
        );

      // 饼图
      const pieEchart = echarts.init(
        document.getElementById("pie")
      );
      const pieData = await getPieData();
      pieConfig &&
        pieEchart.setOption(pieConfig(pieData));

      // 柱状图
      const barEchart = echarts.init(
        document.getElementById("bar")
      );
      const barData = await getBarData();
      const xAxisNameArr = [
        "提供航行安全信息",
        "发送/接收指令 ",
        "起锚",
        "抛锚",
        "监测/发送船位",
        "核实操作的有效性",
        "制定航行计划/靠泊计划",
        "佩戴安全装备",
        "引航",
        "发送求救信息",
        "鸣放声号",
        "显示灯号",
        "螺旋桨制动/舵机转向",
        "按规定航道行驶",
        "故障上报",
        "抢滩",
        "选择燃油",
        "使用VHF协调沟通",
        "采用安全航速",
        "保持安全距离",
        "船员数量",
        "货物配载",
        "使用电子助航设备",
        "识别操作界面信息参数",
        "识别助航标志",
        "获得适任证书",
        "瞭望",
        "感知外界环境/物体的危险",
        "检查船舶设施的状态/完整性",
        "集中注意力",
      ];
      let arrName = xAxisNameArr.slice(0, 6);
      let arrData1 = barData[0].slice(0, 6);
      let arrData2 = barData[1].slice(0, 6);
      let arrData3 = barData[2].slice(0, 6);

      setInterval(() => {
        arrName = echartTool.getDynamicData(
          xAxisNameArr,
          arrName
        );
        arrData1 = echartTool.getDynamicData(
          barData[0],
          arrData1
        );
        arrData2 = echartTool.getDynamicData(
          barData[1],
          arrData2
        );
        arrData3 = echartTool.getDynamicData(
          barData[2],
          arrData3
        );
        barEchart.setOption({
          xAxis: [
            {
              data: arrName,
            },
          ],
          series: [
            {
              data: arrData1,
            },
            {
              data: arrData2,
            },
            {
              data: arrData3,
            },
          ],
        });
      }, 2100);
      barConfig &&
        barEchart.setOption(barConfig(barData));

      //自适应大小
      window.onresize = function () {
        bar3DEchart.resize();
        pieEchart.resize();
        barEchart.resize();
      };
    };
    return {};
  },
});
