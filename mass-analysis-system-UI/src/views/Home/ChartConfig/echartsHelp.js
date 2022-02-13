const barTooltip = (arr) => {
  let [years, stage] = ["", ""];
  switch (arr[0]) {
    case 0:
      years = "2015";
      break;
    case 1:
      years = "2016";
      break;
    case 2:
      years = "2017";
      break;
    case 3:
      years = "2018";
      break;
    case 4:
      years = "2019";
      break;
    case 5:
      years = "2020";
      break;
    default:
      break;
  }
  switch (arr[1]) {
    case 0:
      stage = "泊位作业阶段";
      break;
    case 1:
      stage = "进出港航行阶段";
      break;
    case 2:
      stage = "沿海水域航行阶段";
      break;
    default:
      break;
  }
  return `<ul class="tooltipLi"><li class="tooltipTime">发生时间：${years}年</li>
  <li class="tooltipStage">航行阶段：${stage}</li>
  <li class="tooltipTotal">事故数量：${arr[2]}起</li></ul>`;
};

const getDynamicxAxisNameData = (
  xAxisNameArr,
  arr
) => {
  const targetIndex = xAxisNameArr.indexOf(
    arr[arr.length - 1]
  );
  arr.shift();
  targetIndex + 1 === xAxisNameArr.length
    ? arr.push(xAxisNameArr[0])
    : arr.push(xAxisNameArr[targetIndex + 1]);
  return arr;
};
const getDynamicSeriesData = (
  seriesArr,
  arr,
  index
) => {
  arr.shift();
  arr.push(seriesArr[index]);
  return arr;
};

export default {
  barTooltip,
  getDynamicxAxisNameData,
  getDynamicSeriesData,
};
