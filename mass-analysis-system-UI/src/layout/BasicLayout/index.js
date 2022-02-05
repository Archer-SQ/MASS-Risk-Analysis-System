import {
  FormOutlined,
  PieChartOutlined,
  NumberOutlined,
  HomeOutlined,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { defineComponent, ref } from "vue";
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
    const to = (url) => {
      router.push(url);
    };
    return {
      selectedKeys: ref(["1"]),
      to,
    };
  },
});
