import { useRouter } from "vue-router";
import {
  defineComponent,
  ref,
  createVNode,
} from "vue";
import { Modal } from "ant-design-vue";
import {
  FormOutlined,
  PieChartOutlined,
  NumberOutlined,
  HomeOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons-vue";
import { sayHello } from "../../helpers/utils";

export default defineComponent({
  components: {
    HomeOutlined,
    FormOutlined,
    PieChartOutlined,
    NumberOutlined,
  },
  // 刷新时页面自动回到首页
  created() {
    if (this.$router.path !== "/")
      this.$router.replace("/");
  },
  setup() {
    const router = useRouter();
    const accountName =
      window.sessionStorage.getItem("account");
    const role =
      window.sessionStorage.getItem("role");
    console.log(role);
    const showConfirm = () => {
      Modal.confirm({
        title: () => "是否要退出登录?",
        icon: () =>
          createVNode(ExclamationCircleOutlined),
        onOk() {
          window.sessionStorage.clear();
          router.replace("/admin");
        },
        onCancel() {
          return;
        },
      });
    };

    const to = (url) => {
      router.push(url);
    };

    return {
      selectedKeys: ref(["1"]),
      to,
      showConfirm,
      accountName,
      sayHello,
      role,
    };
  },
});
