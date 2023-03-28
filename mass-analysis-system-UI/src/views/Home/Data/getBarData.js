import { incident } from "../../../service";

const getBarData = async () => {
  const { data } =
    await incident.getIncidentList();
  let { list } = data.data;
  const arr1 = [];
  const arr2 = [];
  const arr3 = [];
  const outcome1 = Array(30).fill(0);
  const outcome2 = Array(30).fill(0);
  const outcome3 = Array(30).fill(0);

  list.forEach((v) => {
    v.place === "泊位作业"
      ? arr1.push(v)
      : v.place === "进出港航行"
      ? arr2.push(v)
      : arr3.push(v);
  });
  arr1.forEach((v) => {
    v.factors.forEach((v) => getArr(v, outcome1));
  });
  arr2.forEach((v) => {
    v.factors.forEach((v) => getArr(v, outcome2));
  });
  arr3.forEach((v) => {
    v.factors.forEach((v) => getArr(v, outcome3));
  });
  return [outcome1, outcome2, outcome3];
};
const getArr = (str, outcome) => {
  switch (str) {
    case "提供航行安全信息":
      outcome[0] += 1;
      break;
    case "发送/接收指令":
      outcome[1] += 1;
      break;
    case "起锚":
      outcome[2] += 1;
      break;
    case "抛锚":
      outcome[3] += 1;
      break;
    case "监测/发送船位":
      outcome[4] += 1;
      break;
    case "核实操作的有效性":
      outcome[5] += 1;
      break;
    case "制定航行计划/靠泊计划":
      outcome[6] += 1;
      break;
    case "佩戴安全装备":
      outcome[7] += 1;
      break;
    case "引航":
      outcome[8] += 1;
      break;
    case "发送求救信息":
      outcome[9] += 1;
      break;
    case "鸣放声号":
      outcome[10] += 1;
      break;
    case "显示灯号":
      outcome[11] += 1;
      break;
    case "螺旋桨制动/舵机转向":
      outcome[12] += 1;
      break;
    case "按规定航道行驶":
      outcome[13] += 1;
      break;
    case "故障上报":
      outcome[14] += 1;
      break;
    case "抢滩":
      outcome[15] += 1;
      break;
    case "选择燃油":
      outcome[16] += 1;
      break;
    case "使用VHF协调沟通":
      outcome[17] += 1;
      break;
    case "采用安全航速":
      outcome[18] += 1;
      break;
    case "保持安全距离":
      outcome[19] += 1;
      break;
    case "船员数量":
      outcome[20] += 1;
      break;
    case "货物配载":
      outcome[21] += 1;
      break;
    case "使用电子助航设备":
      outcome[22] += 1;
      break;
    case "识别操作界面信息参数":
      outcome[23] += 1;
      break;
    case "识别助航标志":
      outcome[24] += 1;
      break;
    case "获得适任证书":
      outcome[25] += 1;
      break;
    case "瞭望":
      outcome[26] += 1;
      break;
    case "感知外界环境/物体的危险":
      outcome[27] += 1;
      break;
    case "检查船舶设施的状态/完整性":
      outcome[28] += 1;
      break;
    case "集中注意力":
      outcome[29] += 1;
      break;
    default:
      break;
  }
  return outcome;
};

export default getBarData;
