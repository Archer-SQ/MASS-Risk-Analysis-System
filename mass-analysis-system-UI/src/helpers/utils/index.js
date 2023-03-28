import config from "../../../constants";

export const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const formateTimestamp = (timeStamp) => {
  const date = new Date(Number(timeStamp));
  const addZero = (d) => {
    return d > 9 ? d : "0" + d;
  };
  const YYYY = date.getFullYear();
  const MM = addZero(date.getMonth() + 1);
  const DD = addZero(date.getDate());

  return `${YYYY}年${MM}月${DD}日`;
};
export const getYears = (timeStamp) => {
  const date = new Date(Number(timeStamp));
  return date.getFullYear();
};
export const isUsed = (str) => {
  return str ? "已使用" : "未使用";
};

export const toPercent = (str) => {
  return str + "%";
};

export const sayHello = () => {
  const date = new Date();
  const h = date.getHours();
  return h >= 0 && h < 12
    ? "早上好!"
    : h >= 12 && h < 18
    ? "下午好!"
    : "晚上好!";
};

export const highlightSort = (str) =>
  str === "1" || str === "2" || str === "3"
    ? "volcano"
    : "green";

export const adjustPath = (strPath) => {
  const fileSuffix = strPath.split(".").pop();
  const path =
    fileSuffix === "pdf"
      ? strPath
      : config.WORD_PREVIEW_URL + strPath;
  return { path: path, fileSuffix: fileSuffix };
};

// 删除中文空格，保留英文空格
export const trimSpace = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] !== " " ||
      /[A-Za-z]+/.test(str[i - 1])
    )
      newStr = newStr + str[i];
  }
  return newStr;
};

// 给数组中的对象加属性
export const fixArray = (arr) => {
  const newArr = [...arr].map((v, i) => ({
    ...v,
    serialNumber: i + 1,
  }));
  return newArr;
};