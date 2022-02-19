import { defineComponent, ref, toRaw } from "vue";
import { humanFactor } from "../../../service";

export default defineComponent({
  props: {
    show: Boolean,
  },
  setup(props, context) {
    let humanFactors = ref([]);
    let analysisArr = ref([]);
    let tenArr = ref([]);
    let totalWeight = ref(0);
    let loading = ref(false);
    // 配置人为因素选择框
    const treeDataFactors = [
      {
        title: "不安全操作行为",
        value: "U1",
        key: "U1",
        checkable: false,
        children: [
          {
            title: "提供航行安全信息",
            value: "提供航行安全信息",
            key: "1",
          },
          {
            title: "发送/接收指令",
            value: "发送/接收指令",
            key: "2",
          },
          {
            title: "起锚",
            value: "起锚",
            key: "3",
          },
          {
            title: "抛锚",
            value: "抛锚",
            key: "4",
          },
          {
            title: "监测/发送船位",
            value: "监测/发送船位",
            key: "5",
          },
          {
            title: "核实操作的有效性",
            value: "核实操作的有效性",
            key: "6",
          },
          {
            title: "制定航行计划/靠泊计划",
            value: "制定航行计划/靠泊计划",
            key: "7",
          },
          {
            title: "佩戴安全装备",
            value: "佩戴安全装备",
            key: "8",
          },
          {
            title: "引航",
            value: "引航",
            key: "9",
          },
        ],
      },
      {
        title: "不安全决策行为",
        value: "U2",
        key: "U2",
        checkable: false,
        children: [
          {
            title: "发送求救信息",
            value: "发送求救信息",
            key: "10",
          },
          {
            title: "鸣放声号",
            value: "鸣放声号",
            key: "11",
          },
          {
            title: "显示灯号",
            value: "显示灯号",
            key: "12",
          },
          {
            title: "螺旋桨制动/舵机转向",
            value: "螺旋桨制动/舵机转向",
            key: "13",
          },
          {
            title: "按规定航道行驶",
            value: "按规定航道行驶",
            key: "14",
          },
          {
            title: "故障上报",
            value: "故障上报",
            key: "15",
          },
          {
            title: "抢滩",
            value: "抢滩",
            key: "16",
          },
          {
            title: "选择燃油",
            value: "选择燃油",
            key: "17",
          },
          {
            title: "使用VHF协调沟通",
            value: "使用VHF协调沟通",
            key: "18",
          },
          {
            title: "采用安全航速",
            value: "采用安全航速",
            key: "19",
          },
          {
            title: "保持安全距离",
            value: "保持安全距离",
            key: "20",
          },
          {
            title: "船员数量",
            value: "船员数量",
            key: "21",
          },
          {
            title: "货物配载",
            value: "货物配载",
            key: "22",
          },
          {
            title: "使用电子助航设备",
            value: "使用电子助航设备",
            key: "23",
          },
          {
            title: "识别操作界面信息参数",
            value: "识别操作界面信息参数",
            key: "24",
          },
          {
            title: "识别助航标志",
            value: "识别助航标志",
            key: "25",
          },
          {
            title: "获得适任证书",
            value: "获得适任证书",
            key: "26",
          },
        ],
      },
      {
        title: "不安全感知行为",
        value: "U3",
        key: "U3",
        checkable: false,
        children: [
          {
            title: "瞭望",
            value: "瞭望",
            key: "27",
          },
          {
            title: "感知外界环境/物体的危险",
            value: "感知外界环境/物体的危险",
            key: "28",
          },
          {
            title: "检查船舶设施的状态/完整性",
            value: "检查船舶设施的状态/完整性",
            key: "29",
          },
          {
            title: "集中注意力",
            value: "集中注意力",
            key: "30",
          },
        ],
      },
    ];
    const handleClick = async () => {
      loading.value = true;
      const { data } =
        await humanFactor.getHumanFactor();
      setTimeout(() => {
        loading.value = false;
        if (!humanFactors.length) {
          analysisArr.value = [];
        }
        tenArr.value = [];
        totalWeight.value = 0;
        toRaw(humanFactors.value).forEach((v) => {
          data.data.forEach((item) => {
            v === item.humanFactorName
              ? (analysisArr.value.push(item),
                (totalWeight.value += Number(
                  item.generalWeight
                )))
              : "";
            v === item.humanFactorName &&
            item.generalWeightRanking <= 10
              ? tenArr.value.push(item)
              : "";
          });
        });
      }, 1000);
    };
    // 关闭新增对话框
    const handleClose = () => {
      analysisArr.value = [];
      humanFactors.value = [];
      tenArr.value = [];
      totalWeight.value = 0;
      context.emit("update:show", false);
    };

    return {
      props,
      handleClose,
      humanFactors,
      treeDataFactors,
      handleClick,
      analysisArr,
      tenArr,
      totalWeight,
      loading,
    };
  },
});
