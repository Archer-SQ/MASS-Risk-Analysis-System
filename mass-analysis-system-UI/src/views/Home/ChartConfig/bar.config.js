const barConfig = (bardata) => {
  return {
    title: {
      text: "2015-2020年不同人为因素在各航行阶段造成事故统计",
      top: "bottom",
      left: "32%",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: [
        "泊位作业",
        "进出港航行",
        "沿海水域航行",
      ],
    },
    grid: {
      width: 1100,
      height: 170,
      left: 50,
      bottom: 60,
    },
    toolbox: {
      show: true,
      orient: "vertical",
      left: "right",
      top: "center",
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: {
          show: true,
          type: ["line", "bar", "stack"],
        },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    xAxis: [
      {
        name: "人为风险因素",
        nameLocation: "center",
        type: "category",
        axisTick: { show: true },
        nameTextStyle: {
          padding: [6, 0, 0, 0],
        },
        data: [
          "提供航行安全信息",
          "发送/接收指令 ",
          "起锚",
          "抛锚",
          "监测/发送船位",
          "核实操作的有效性",
        ],
      },
    ],
    yAxis: [
      {
        name: "事故数量",
        nameLocation: "center",
        nameTextStyle: {
          padding: [0, 0, 15, 0],
        },
        type: "value",
      },
    ],
    series: [
      {
        name: "泊位作业",
        type: "bar",
        barGap: 0,
        barWidth: 40,
        emphasis: {
          focus: "series",
        },
        data: bardata[0].slice(0, 6),
      },
      {
        name: "进出港航行",
        type: "bar",
        barWidth: 40,
        emphasis: {
          focus: "series",
        },
        data: bardata[1].slice(0, 6),
      },
      {
        name: "沿海水域航行",
        type: "bar",
        barWidth: 40,
        emphasis: {
          focus: "series",
        },
        data: bardata[2].slice(0, 6),
      },
    ],
  };
};
export default barConfig;
