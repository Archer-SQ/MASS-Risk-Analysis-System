import {
  defineComponent,
  ref,
  onMounted,
} from "vue";
import { inviteCode } from "../../service";
import { message } from "ant-design-vue";
import { isUsed } from "../../helpers/utils";
import useClipboard from "vue-clipboard3";

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
        width: 10,
        align: "center",
        slots: {
          customRender: "inviteCode",
        },
      },
      {
        width: 1,
        align: "center",
        slots: {
          customRender: "copy",
        },
      },
      {
        title: "是否使用",
        dataIndex: "user",
        key: "user",
        width: 10,
        align: "center",
        slots: {
          customRender: "used",
        },
      },
      {
        title: "操作",
        key: "operation",
        width: 5,
        align: "center",
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

    // 复制邀请码处理
    const { toClipboard } = useClipboard();
    const handleCopy = async (text) => {
      try {
        await toClipboard(text);
        message.success("复制成功!");
      } catch (e) {
        message.error("不支持复制");
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
      handleCopy,
    };
  },
});
