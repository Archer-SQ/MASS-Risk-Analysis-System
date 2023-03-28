import {
  defineComponent,
  nextTick,
  reactive,
  ref,
} from "vue";
import { incident } from "@/service";
import { clone } from "@/helpers/utils";
import { message } from "ant-design-vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import constants from "../../../../constants";
import { trimSpace } from "../../../helpers/utils";

export default defineComponent({
  props: {
    show: Boolean,
    parentGetList: Function,
  },
  components: {
    UploadOutlined,
  },
  setup(props, context) {
    // 创建响应式的表单内容
    const addIncidentForm = reactive({
      name: "",
      time: "",
      place: null,
      factors: [],
      filePathName: "",
    });
    const fileList = ref([]);
    // 配置发生地点选择框
    const treeDataPlace = [
      {
        title: "泊位作业阶段",
        value: "泊位作业",
        key: "1",
      },
      {
        title: "进出港航行阶段",
        value: "进出港航行",
        key: "2",
      },
      {
        title: "沿海水域航行阶段",
        value: "沿海水域航行",
        key: "3",
      },
    ];
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
    // 配置表单验证规则
    const formRef = ref();
    const rules = {
      name: [
        {
          required: true,
          message: "请填写有效的事故名称",
          trigger: "blur",
        },
        {
          min: 3,
          message: "字符长度必须大于3",
          trigger: "blur",
        },
      ],
      time: [
        {
          required: true,
          message: "请选择事故发生日期",
          trigger: "change",
          type: "object",
        },
      ],
      place: [
        {
          required: true,
          message: "请选择航行阶段",
          trigger: "change",
        },
      ],
      factors: [
        {
          required: true,
          message: "请选择人为因素",
          trigger: "change",
          type: "array",
        },
      ],
    };
    const handleClose = () => {
      // 通过context.emit来修改父组件的状态
      context.emit("update:show", false);
      // 清空添加的表单
      formRef.value.resetFields();
      // 清空添加的文件
      fileList.value = [];
    };

    const handleChange = (info) => {
      addIncidentForm.filePathName =
        constants.DOWNLOAD_URL + info.file.name;
    };

    const submit = () => {
      // 提交时进行表单总体验证
      formRef.value.validate().then(async () => {
        // 将addIncidentForm中的时间转换为时间戳的形式
        const form = clone(addIncidentForm);
        form.time =
          addIncidentForm.time.valueOf();
        form.name = trimSpace(
          addIncidentForm.name
        ).trim();
        const { data } =
          await incident.addIncident(form);

        if (data.code !== 0) {
          message.success(data.msg);
          handleClose();
          props.parentGetList();
          formRef.value.resetFields();
          // 清空添加的文件
          fileList.value = [];
        }
      });
    };

    return {
      props,
      handleClose,
      addIncidentForm,
      submit,
      treeDataPlace,
      treeDataFactors,
      rules,
      formRef,
      handleChange,
      fileList,
    };
  },
});
