import axios from "axios";

export const register = (account, password, inviteCode) => {
  return axios.post("admin/register", {
    account,
    password,
    inviteCode,
  });
};

export const login = (account, password) => {
  return axios.post("admin/login", {
    account,
    password,
  });
};
