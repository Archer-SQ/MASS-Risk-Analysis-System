import axios from "axios";

// 添加人为因素
export const addHumanFactor = (form) => {
  return axios.post("humanFactor/add", form);
};
// 获取人为因素列表
export const getHumanFactor = (data) => {
  return axios.get("humanFactor/list", {
    params: data,
  });
};
