import axios from "axios";
// 创建邀请码
export const createInviteCode = (count) => {
  return axios.post("invite/add", count);
};
export const getInviteCodeList = () => {
  return axios.get("invite/list");
};
export const deleteInviteCode = (id) => {
  return axios.delete(`invite/${id}`);
};
