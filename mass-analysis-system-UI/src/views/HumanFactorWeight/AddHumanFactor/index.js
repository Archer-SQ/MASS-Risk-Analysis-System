import {
  defineComponent,
  reactive,
  ref,
} from "vue";
import { humanFactor } from "@/service";
import { message } from "ant-design-vue";

export default defineComponent({
  props: {
    show: Boolean,
    parentGetList: Function,
  },
  setup(props, context) {
    const addHumanFactorForm = reactive({
      controllingBehavior: null,
      humanFactorName: "",
      weightOfBerthStage: "",
      weightRankingOfBerthStage: "",
      weightOfInboundAndOutbound: "",
      weightRankingOfInboundAndOutbound: "",
      weightOfCoastal: "",
      weightRankingOfCoastal: "",
      generalWeight: "",
      generalWeightRanking: "",
    });
    const treeDataBehavior = [
      {
        title: "不安全操作行为",
        value: "1",
        key: "1",
      },
      {
        title: "不安全决策行为",
        value: "2",
        key: "2",
      },
      {
        title: "不安全感知行为",
        value: "3",
        key: "3",
      },
    ];
    const formRef = ref();
    const rules = {
      controllingBehavior: [
        {
          required: true,
          message: "请填写人为因素所属的控制行为",
          trigger: "change",
        },
      ],
      humanFactorName: [
        {
          required: true,
          message: "请填写人为因素名称",
          trigger: "blur",
        },
        {
          min: 1,
          message: "字符长度必须大于1",
          trigger: "blur",
        },
      ],
      weightOfBerthStage: [
        {
          required: true,
          message: "请填写权重",
          trigger: "blur",
          type: "number",
        },
      ],
      weightRankingOfBerthStage: [
        {
          required: true,
          message: "请填写排序结果",
          trigger: "blur",
          type: "number",
        },
      ],
      weightOfInboundAndOutbound: [
        {
          required: true,
          message: "请填写权重",
          trigger: "blur",
          type: "number",
        },
      ],
      weightRankingOfInboundAndOutbound: [
        {
          required: true,
          message: "请填写排序结果",
          trigger: "blur",
          type: "number",
        },
      ],
      weightOfCoastal: [
        {
          required: true,
          message: "请填写权重",
          trigger: "blur",
          type: "number",
        },
      ],
      weightRankingOfCoastal: [
        {
          required: true,
          message: "请填写排序结果",
          trigger: "blur",
          type: "number",
        },
      ],
      generalWeight: [
        {
          required: true,
          message: "请填写权重",
          trigger: "blur",
          type: "number",
        },
      ],
      generalWeightRanking: [
        {
          required: true,
          message: "请填写排序结果",
          trigger: "blur",
          type: "number",
        },
      ],
    };
    // 关闭新增对话框
    const handleClose = () => {
      context.emit("update:show", false);
      formRef.value.resetFields();
    };
    // 提交添加人为因素的表单
    const submit = () => {
      console.log(addHumanFactorForm);
      formRef.value.validate().then(async () => {
        const { data } =
          await humanFactor.addHumanFactor(
            addHumanFactorForm
          );
        if (data.code !== 0) {
          message.success(data.msg);
          handleClose();
          // 使父组件重新获取表单
          props.parentGetList();
          formRef.value.resetFields();
        }
      });
    };

    return {
      props,
      handleClose,
      addHumanFactorForm,
      treeDataBehavior,
      rules,
      formRef,
      submit,
    };
  },
});
