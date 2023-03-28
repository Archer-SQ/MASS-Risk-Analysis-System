const pieConfig = (pieData) => {
  return {
    title: {
      text: "人为风险权重",
      subtext: "MASS",
      left: "center",
      top: "bottom",
      textStyle: { fontSize: 14 },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      type: "scroll",
      orient: "horizontal",
      right: 10,
      left: 50,
      bottom: 24,
      data: pieData.legendData,
    },
    series: [
      {
        name: "人为风险因素",
        type: "pie",
        radius: "55%",
        center: ["50%", "40%"],
        data: pieData.seriesData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
};

export default pieConfig;
