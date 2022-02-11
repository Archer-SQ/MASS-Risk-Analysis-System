import {
  defineComponent,
  ref,
  onMounted,
} from "vue";
import AddIncident from "./AddIncident/index.vue";
import { incident } from "../../service";
import { message } from "ant-design-vue";
import {
  FilePdfOutlined,
  FileWordOutlined,
} from "@ant-design/icons-vue";
import {
  formateTimestamp,
  adjustPath,
  fixArray,
} from "../../helpers/utils";

export default defineComponent({
  components: {
    AddIncident,
    FilePdfOutlined,
    FileWordOutlined,
  },
  setup() {
    // 设置card的头部样式
    const headStyle = {
      fontWeight: "600",
      letterSpacing: "4px",
    };

    // 声明一个控制弹出框的响应式的变量
    const showAddIncidentDialog = ref(false);

    const eventList = ref([]);
    const totalEvents = ref(0);
    const keyword = ref("");
    const columns = [
      {
        title: "序号",
        dataIndex: "serialNumber",
        key: "serialNumber",
        align: "center",
        width: 4,
        slots: { customRender: "serialNumber" },
      },
      {
        title: "事故名称",
        dataIndex: "name",
        key: "name",
        align: "center",
        width: 10,
      },
      {
        title: "发生时间",
        dataIndex: "time",
        key: "time",
        align: "center",
        width: 10,
        slots: {
          customRender: "time",
        },
      },
      {
        title: "人为因素",
        dataIndex: "factors",
        key: "factors",
        align: "center",
        width: 20,
        slots: {
          customRender: "factors",
        },
      },
      {
        title: "航行阶段",
        dataIndex: "place",
        key: "place",
        align: "center",
        width: 10,
      },
      {
        title: "事故报告",
        dataIndex: "filePathName",
        key: "filePathName",
        align: "center",
        width: 10,
        slots: {
          customRender: "filePathName",
        },
      },
    ];
    // 配置分页选项
    const pagination = {
      defaultPageSize: 10,
      total: totalEvents,
      showTotal: (t) => {
        return `总计:${t}条`;
      },
    };
    // 获取事件列表方法
    const getList = async () => {
      const { data } =
        await incident.getIncidentList({
          keyword: keyword.value,
        });
      // 解构出事故列表和事故总数
      const { list, total } = data.data;
      if (data.code !== 0) {
        message.success(data.msg);
        eventList.value = fixArray(list);
        totalEvents.value = total;
      }
    };
    // 监听搜索框的输入事件实时进行搜索
    const handleInput = () => {
      getList();
    };
    // 在挂载阶段获取事故列表
    onMounted(async () => {
      getList();
    });

    return {
      eventList,
      pagination,
      columns,
      AddIncident,
      headStyle,
      showAddIncidentDialog,
      formateTimestamp,
      adjustPath,
      keyword,
      handleInput,
      getList,
    };
  },
});
