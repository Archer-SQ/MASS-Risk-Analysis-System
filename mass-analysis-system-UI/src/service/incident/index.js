import axios from "axios";
// 添加事故报告
export const addIncident = (form) => {
  return axios.post("incident/add", form);
};
// 获取事故列表
export const getIncidentList = (data) => {
  return axios.get("incident/list", { params: data });
};
