(() => {
  //  配置性别分布饼图
  configSexDistChart();
  // 配置年龄分布图标
  configAgeDistChart();
  // 配置抑郁症分布饼图
  configDepressionDistChart();
  // 配置抑郁性别评估柱状图
  configDepressionSexAssessChart();
  // 配置焦虑症分布饼图
  configAnxietyDistChart();
  // 配置焦虑性别评估柱状图
  configAnxietySexAssessChart();
})();

// 配置性别分布饼图
function configSexDistChart() {
  // 性别分布饼图
  const sexDistChart = echarts.init(document.getElementById("sexDistChart"));
  const sexList = [
    { value: 50, name: "男" },
    { value: 50, name: "女" },
  ];
  const ageOptions = {
    color: ["#2D91F6", "#F0939E"],
    legend: {
      right: 0,
    },
    series: [
      {
        name: "参检人员性别分布图",
        type: "pie",
        label: {
          formatter: "{b}: {d}%",
          color: "#7F7F7F",
        },
        labelLine: {
          lineStyle: {
            width: 2,
            type: "dashed",
          },
        },
        data: sexList,
      },
    ],
  };
  sexDistChart.setOption(ageOptions);
}

// 配置年龄分布图标
function configAgeDistChart() {
  // 年龄分布图表
  const ageChart = echarts.init(document.getElementById("ageChart"));
  const showXList = [
    "27岁",
    "29岁",
    "32岁",
    "33岁",
    "35岁",
    "39岁",
    "40岁",
    "42岁",
  ];
  const showY1List = [1, 1, 1, 1, 2, 1, 2, 1];
  const showY2List = showY1List.map((item) => item * 1.02);
  const option = {
    xAxis: {
      type: "category",
      data: showXList,
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: "#a3a3a3",
        },
      },
      axisLabel: {
        color: "#a3a3a3",
      },
    },
    grid: {
      top: "10%",
      left: 0,
      right: 0,
      bottom: "10%",
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        data: showY2List,
        type: "line",
        symbol: "none",
        lineStyle: {
          color: "#5AF4FD",
        },
        smooth: true,
      },
      {
        data: showY1List,
        type: "bar",
        barWidth: 16,
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#0E61EB", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#64FBFF", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        label: {
          show: true,
          position: "top",
        },
      },
    ],
  };
  ageChart.setOption(option);
}

// 配置抑郁症分布饼图
function configDepressionDistChart() {
  // 抑郁症分布饼图
  const depressionDistChart = echarts.init(
    document.getElementById("depressionDistChart")
  );

  const depressionList = [
    { value: 40, name: "其他" },
    { value: 30, name: "倾向人群" },
    { value: 30, name: "疑似人群" },
  ];

  const options = {
    color: ["#63AFFF", "#F6A944", "#DE263D"],
    series: [
      {
        name: "抑郁风险结果分布",
        type: "pie",
        label: {
          formatter: "{b}: {d}%",
          color: "#7F7F7F",
        },
        labelLine: {
          lineStyle: {
            width: 2,
            type: "dashed",
          },
        },
        data: depressionList,
      },
    ],
  };
  depressionDistChart.setOption(options);
}

// 配置抑郁性别评估柱状图
function configDepressionSexAssessChart() {
  const sexAssessChart = echarts.init(
    document.getElementById("depressionSexAssessChart")
  );
  const showXList = ["疑似人群", "倾向人群", "其他"];
  const showY1List = [1, 1, 3];
  const showY2List = [2, 2, 1];
  const showY3List = [3, 3, 4];
  const lableOption = {
    show: true,
    position: "top",
  };
  const option = {
    color: ["#4EA0FB", "#F5A2AB", "#FDE167"],
    grid: {
      top: "10%",
      left: 0,
      right: 0,
      bottom: "10%",
    },
    xAxis: {
      type: "category",
      data: showXList,
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#9C9C9C",
        },
      },
      axisLabel: {
        color: "#666",
      },
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        data: showY1List,
        type: "bar",
        barWidth: 30,
        label: lableOption,
      },
      {
        data: showY2List,
        type: "bar",
        barWidth: 30,
        label: lableOption,
      },
      {
        data: showY3List,
        type: "bar",
        barWidth: 30,
        label: lableOption,
      },
    ],
  };
  sexAssessChart.setOption(option);
}

//  配置焦虑症分布饼图
function configAnxietyDistChart() {
  // 抑郁症分布饼图
  const depressionDistChart = echarts.init(
    document.getElementById("anxietyDistChart")
  );

  const depressionList = [
    { value: 40, name: "其他" },
    { value: 30, name: "倾向人群" },
    { value: 30, name: "疑似人群" },
  ];

  const options = {
    color: ["#63AFFF", "#F6A944", "#DE263D"],
    series: [
      {
        name: "抑郁风险结果分布",
        type: "pie",
        label: {
          formatter: "{b}: {d}%",
          color: "#7F7F7F",
        },
        labelLine: {
          lineStyle: {
            width: 2,
            type: "dashed",
          },
        },
        data: depressionList,
      },
    ],
  };
  depressionDistChart.setOption(options);
}

//配置焦虑性别评估柱状图
function configAnxietySexAssessChart() {
  const sexAssessChart = echarts.init(
    document.getElementById("anxietySexAssessChart")
  );
  const showXList = ["疑似人群", "倾向人群", "其他"];
  const showY1List = [1, 1, 3];
  const showY2List = [2, 2, 1];
  const showY3List = [3, 3, 4];
  const lableOption = {
    show: true,
    position: "top",
  };
  const option = {
    color: ["#4EA0FB", "#F5A2AB", "#FDE167"],
    grid: {
      top: "10%",
      left: 0,
      right: 0,
      bottom: "10%",
    },
    xAxis: {
      type: "category",
      data: showXList,
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#9C9C9C",
        },
      },
      axisLabel: {
        color: "#666",
      },
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        data: showY1List,
        type: "bar",
        barWidth: 30,
        label: lableOption,
      },
      {
        data: showY2List,
        type: "bar",
        barWidth: 30,
        label: lableOption,
      },
      {
        data: showY3List,
        type: "bar",
        barWidth: 30,
        label: lableOption,
      },
    ],
  };
  sexAssessChart.setOption(option);
}
