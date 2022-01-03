import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  EditOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    EditOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  },

  setup() {
    const onCollapse = (collapsed, type) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = (broken) => {
      console.log(broken);
    };

    return {
      selectedKeys: ref(["1"]),
      onCollapse,
      onBreakpoint,
    };
  },
});
