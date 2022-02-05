import {
  defineComponent,
  ref,
  onMounted,
} from "vue";
import { inviteCode } from "../../service";
import { message } from "ant-design-vue";
import { isUsed } from "../../helpers/utils";

export default defineComponent({
  setup() {
    // 设置card的头部样式
    const headStyle = {
      fontWeight: "600",
      letterSpacing: "4px",
    };
    // 配置分页选项
    const pagination = {
      defaultPageSize: 10,
    };
    const inviteCodeCount = ref();
    const inviteCodeList = ref([]);
    const columns = [
      {
        title: "邀请码",
        dataIndex: "inviteCode",
        key: "inviteCode",
        align: "center",
        width: 30,
      },
      {
        title: "是否使用",
        dataIndex: "user",
        key: "user",
        align: "center",
        width: 20,
        slots: {
          customRender: "used",
        },
      },
      {
        title: "操作",
        key: "operation",
        align: "center",
        width: 10,
        slots: {
          customRender: "deleteInviteCode",
        },
      },
    ];

    // 创建邀请码的方法
    const createInviteCode = async () => {
      if (!inviteCodeCount.value) {
        message.warning("请输入创建邀请码的个数");
        return;
      }
      const { data } =
        await inviteCode.createInviteCode({
          count: inviteCodeCount.value,
        });
      if (data.code !== 0) {
        message.success(data.msg);
        getInviteCodeList();
      }
    };

    // 获取邀请码列表方法
    const getInviteCodeList = async () => {
      const { data } =
        await inviteCode.getInviteCodeList();
      if (data.code !== 0) {
        inviteCodeList.value = data.data;
      }
    };

    // 删除邀请码的方法
    const deleteInviteCode = async (id) => {
      const { data } =
        await inviteCode.deleteInviteCode(id);
      if (data.code !== 0) {
        getInviteCodeList();
        message.success(data.msg);
      }
    };

    // 在挂载阶段获取事故列表
    onMounted(async () => {
      getInviteCodeList();
    });

    return {
      columns,
      pagination,
      headStyle,
      inviteCodeCount,
      inviteCodeList,
      createInviteCode,
      isUsed,
      deleteInviteCode,
    };
  },
});
