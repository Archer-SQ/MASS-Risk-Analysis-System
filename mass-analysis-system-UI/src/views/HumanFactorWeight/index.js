import {
  defineComponent,
  ref,
  onMounted,
} from "vue";
import AddHumanFactor from "./AddHumanFactor/index.vue";
import RiskAssessment from "./RiskAssessment/index.vue";
import { humanFactor } from "@/service";
import { message } from "ant-design-vue";
import {
  toPercent,
  highlightSort,
  fixArray,
} from "../../helpers/utils";

export default defineComponent({
  components: {
    AddHumanFactor,
    RiskAssessment,
  },
  setup() {
    // 设置card的头部样式
    const headStyle = {
      fontWeight: "600",
      letterSpacing: ".25rem",
      borderBottom: "1px solid black",
    };
    // 控制添加对话框弹出的状态
    const showAddHumanFactorDialog = ref(false);
    // 控制风险评估对话框弹出的状态
    const showRiskAssessmentDialog = ref(false);
    const tabList = [
      {
        key: "1",
        tab: "不安全操作行为",
      },
      {
        key: "2",
        tab: "不安全决策行为",
      },
      {
        key: "3",
        tab: "不安全感知行为",
      },
    ];
    const humanFactorList = ref([]);
    const key = ref("1");
    const onTabChange = (v) => {
      key.value = v;
      getList();
    };
    const columns = [
      {
        title: "序号",
        dataIndex: "serialNumber",
        key: "serialNumber",
        align: "center",
        width: 3,
        slots: { customRender: "serialNumber" },
      },
      {
        title: "人为因素名称",
        dataIndex: "humanFactorName",
        key: "humanFactorName",
        align: "center",
        width: 10,
      },
      {
        title: "泊位作业阶段",
        children: [
          {
            title: "权重",
            dataIndex: "weightOfBerthStage",
            key: "weightOfBerthStage",
            align: "center",
            width: 5,
            slots: {
              customRender: "weightOfBerthStage",
            },
          },
          {
            title: "排序",
            dataIndex:
              "weightRankingOfBerthStage",
            key: "weightRankingOfBerthStage",
            align: "center",
            width: 5,
            slots: {
              customRender:
                "weightRankingOfBerthStage",
            },
          },
        ],
      },
      {
        title: "进出港航行阶段",
        children: [
          {
            title: "权重",
            dataIndex:
              "weightOfInboundAndOutbound",
            key: "weightOfInboundAndOutbound",
            align: "center",
            width: 5,
            slots: {
              customRender:
                "weightOfInboundAndOutbound",
            },
          },
          {
            title: "排序",
            dataIndex:
              "weightRankingOfInboundAndOutbound",
            key: "weightRankingOfInboundAndOutbound",
            align: "center",
            width: 5,
            slots: {
              customRender:
                "weightRankingOfInboundAndOutbound",
            },
          },
        ],
      },
      {
        title: "沿海水域航行阶段",
        children: [
          {
            title: "权重",
            dataIndex: "weightOfCoastal",
            key: "weightOfCoastal",
            align: "center",
            width: 5,
            slots: {
              customRender: "weightOfCoastal",
            },
          },
          {
            title: "排序",
            dataIndex: "weightRankingOfCoastal",
            key: "weightRankingOfCoastal",
            align: "center",
            width: 5,
            slots: {
              customRender:
                "weightRankingOfCoastal",
            },
          },
        ],
      },
      {
        title: "综合",
        children: [
          {
            title: "权重",
            dataIndex: "generalWeight",
            key: "generalWeight",
            align: "center",
            width: 5,
            slots: {
              customRender: "generalWeight",
            },
          },
          {
            title: "排序",
            dataIndex: "generalWeightRanking",
            key: "generalWeightRanking",
            align: "center",
            width: 5,
            slots: {
              customRender:
                "generalWeightRanking",
            },
          },
        ],
      },
    ];
    // 配置分页选项
    const pagination = {
      defaultPageSize: 6,
    };
    // 获取人为因素列表方法
    const getList = async () => {
      const { data } =
        await humanFactor.getHumanFactor({
          keyNumber: key.value,
        });
      if (data.code !== 0) {
        message.success(data.msg);
        humanFactorList.value = fixArray(
          data.data
        );
      }
    };
    onMounted(async () => {
      getList();
    });
    return {
      tabList,
      onTabChange,
      key,
      columns,
      headStyle,
      showAddHumanFactorDialog,
      showRiskAssessmentDialog,
      pagination,
      humanFactorList,
      getList,
      toPercent,
      highlightSort,
    };
  },
});
