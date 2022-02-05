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

export const isUsed = (str) => {
  return str ? "已使用" : "未使用";
};

export const toPercent = (str) => {
  return str + "%";
};
