import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  EditOutlined,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    EditOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
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
