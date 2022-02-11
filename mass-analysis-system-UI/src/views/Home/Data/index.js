import { incident } from "../../../service";
import { getYears } from "../../../helpers/utils";

const getBarData = async () => {
  let barData1 = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 2, 0],
    [0, 3, 0],
    [0, 4, 0],
    [0, 5, 0],
  ];
  let barData2 = [
    [1, 0, 0],
    [1, 1, 0],
    [1, 2, 0],
    [1, 3, 0],
    [1, 4, 0],
    [1, 5, 0],
  ];
  let barData3 = [
    [2, 0, 0],
    [2, 1, 0],
    [2, 2, 0],
    [2, 3, 0],
    [2, 4, 0],
    [2, 5, 0],
  ];
  const { data } =
    await incident.getIncidentList();
  let { list } = data.data;
  list = [...list].map((v) => ({
    ...v,
    time: getYears(v.time),
  }));
  list.forEach((v) => {
    switch (v.place) {
      case "泊位作业":
        JudgmentData(v.time, barData1);
        break;
      case "进出港航行":
        JudgmentData(v.time, barData2);
        break;
      case "沿海水域航行":
        JudgmentData(v.time, barData3);
        break;
      default:
        break;
    }
  });
  let barData = [
    ...barData1,
    ...barData2,
    ...barData3,
  ];
  return barData;
};
const JudgmentData = (years, arr) => {
  switch (years) {
    case 2015:
      arr[0][2] += 1;
      break;
    case 2016:
      arr[1][2] += 1;
      break;
    case 2017:
      arr[2][2] += 1;
      break;
    case 2018:
      arr[3][2] += 1;
      break;
    case 2019:
      arr[4][2] += 1;
      break;
    case 2020:
      arr[5][2] += 1;
      break;
    default:
      break;
  }
};

export default getBarData;
