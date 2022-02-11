let barConfig = (barData) => {
  const years = [
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];
  const stage = [
    "泊位作业阶段",
    "进出港航行阶段",
    "沿海水航行阶段",
  ];
  const data = barData;
  return (barConfig = {
    title: {
      text: "2015-2020年不同航行阶段船舶事故统计",
    },
    tooltip: {},
    visualMap: {
    
      max: 20,
      inRange: {
        color: [
          "#313695",
          "#4575b4",
          "#74add1",
          "#abd9e9",
          "#e0f3f8",
          "#ffffbf",
          "#fee090",
          "#fdae61",
          "#f46d43",
          "#d73027",
          "#a50026",
        ],
      },
    },
    xAxis3D: {
      type: "category",
      name: "年份",
      data: years,
      nameTextStyle: {
        fontSize: 12,
        lineHeight: 20,
      },
    },
    yAxis3D: {
      type: "category",
      data: stage,
      nameTextStyle: {
        fontSize: 12,
        lineHeight: 20,
      },
    },
    zAxis3D: {
      name: "事故数量",
      type: "value",
      nameTextStyle: {
        fontSize: 12,
        lineHeight: 20,
      },
    },
    grid3D: {
      boxWidth: 200,
      boxDepth: 80,
      viewControl: {
        // projection: 'orthographic'
      },
      light: {
        main: {
          intensity: 1.2,
          shadow: true,
        },
        ambient: {
          intensity: 0.3,
        },
      },
    },
    series: [
      {
        type: "bar3D",
        data: data.map(function (item) {
          return {
            value: [item[1], item[0], item[2]],
          };
        }),
        shading: "lambert",
        label: {
          fontSize: 16,
          borderWidth: 1,
        },
        emphasis: {
          label: {
            fontSize: 20,
            color: "#900",
          },
          itemStyle: {
            color: "#900",
          },
        },
      },
    ],
  });
};
export default barConfig;
