import { history } from "../utils/history";
import { message } from "antd";
import {
  postRequest,
  postRequest_v3,
  postRequest_v4,
  deleteRequest,
  postRequest_v2,
} from "../utils/ajax";

const apiUrl = "http://localhost:8080";

export const register = (data) => {
  const url = `${apiUrl}/register`;
  const callback = (data) => {
    console.log(data);
    if (data) {
      message.error("此用户已经存在");
      return;
    } else {
      message.success("注册成功");
      history.push("/login");
    }
  };
  postRequest(url, data, callback);
};

export const checkExist = (value, callback) => {
  //判断用户名是否已存在  value是输入框中已有值
  const url = `${apiUrl}/checkExist`; //返回一个bool值
  const data = { username: value };
  postRequest_v2(url, data, callback);
};

export const getuserinfo = (data, callback) => {
  const url = `${apiUrl}/getuserinfo`;
  postRequest_v3(url, data, callback);
};

export const login = (data) => {
  const url = `${apiUrl}/login`;
  const callback = (data) => {
    console.log(data);
    if (data.status >= 0) {
      localStorage.setItem("user", JSON.stringify(data.data));
      history.push("/");
      message.success(data.msg);
    } else {
      message.error(data.msg);
    }
  };
  postRequest(url, data, callback);
};

export const logout = () => {
  const url = `${apiUrl}/logout`;

  const callback = (data) => {
    if (data.status >= 0) {
      localStorage.removeItem("user");
      history.push("/login");
      message.success(data.msg);
    } else {
      message.error(data.msg);
    }
  };
  postRequest(url, {}, callback);
};

export const checkSession = (callback) => {
  const url = `${apiUrl}/checkSession`;
  postRequest(url, {}, callback);
};

export const getUsers = (callback) => {
  const url = `${apiUrl}/getUsers`;
  postRequest(url, {}, callback);
};

export const deleteUser = (userId, callback) => {
  const data = { userId: userId };
  const url = `${apiUrl}/deleteUser`;
  deleteRequest(url, data, callback);
};
export const changeBan = (userId, callback) => {
  const url = `${apiUrl}/changeBan`;
  const data = { userId: userId };
  postRequest_v4(url, data, callback);
};
export const count = (userId, date1, date2, callback) => {
  const url = `${apiUrl}/count`;
  const data = { userId: userId, date1: date1, date2: date2 };
  postRequest_v2(url, data, callback);
};
