import { humanFactor } from "../../../service";

const getPieData = async () => {
  const { data: data1 } =
    await humanFactor.getHumanFactor({
      keyNumber: 1,
    });
  const { data: data2 } =
    await humanFactor.getHumanFactor({
      keyNumber: 2,
    });
  const { data: data3 } =
    await humanFactor.getHumanFactor({
      keyNumber: 3,
    });
  const list = data1.data
    .concat(data2.data)
    .concat(data3.data);
  const legendData = [];
  const seriesData = [];
  list.forEach((v) => {
    legendData.push(v.humanFactorName);
    seriesData.push({
      name: v.humanFactorName,
      value: v.generalWeight,
    });
  });
  return { legendData, seriesData };
};

export default getPieData;
