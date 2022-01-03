import { reactive } from "vue";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons-vue";
import { admin } from "../../service";
import { message } from "ant-design-vue";

export default {
  components: {
    UserOutlined,
    LockOutlined,
    MailOutlined,
  },
  setup() {
    // 注册用的表单数据(通过reactive创建响应式的数据)
    const regForm = reactive({
      account: "",
      password: "",
      inviteCode: "",
    });

    // 注册逻辑
    const register = async () => {
      if (regForm.account === "") {
        message.info("请输入用户名", 1);
        return;
      }
      if (regForm.password === "") {
        message.info("请输入密码", 1);
        return;
      }
      if (regForm.inviteCode === "") {
        message.info("请输入邀请码", 1);
        return;
      }
      const { data } = await admin.register(regForm.account, regForm.password, regForm.inviteCode);
      if (data.code) {
        message.success(data.msg);
        return;
      }
      message.error(data.msg);
    };

    // 登录用的表单数据(通过reactive创建响应式的数据)
    const loginForm = reactive({
      account: "",
      password: "",
    });

    // 登录逻辑
    const login = async () => {
      if (loginForm.account === "") {
        message.info("请输入用户名", 1);
        return;
      }
      if (loginForm.password === "") {
        message.info("请输入密码", 1);
        return;
      }
      const { data } = await admin.login(loginForm.account, loginForm.password);
      if (data.code) {
        message.success(data.msg);
        return;
      }
      message.error(data.msg);
    };

    return {
      // 注册相关数据
      regForm,
      register,
      // 登录相关数据
      loginForm,
      login,
    };
  },
};
