

var options = {
  series: [{
    name: 'series1',
    data: [1000, 3900, 2500, 7400, 5800, 8000, 4200, 5800, 3100, 7100, 1000, 8200],
  }, {
    name: 'series2',
    data: [3900, 4300, 3400, 3300, 3000, 1800, 5900, 5600, 4200, 6000, 3900, 8400]
  }],
  grid: {
    show: true,
    borderColor: '#4e5055',
    strokeDashArray: 5,
  },
  fill: {
    colors: ['#006666', '#FFAE1A'],
    opacity: 0.2,
    type: 'solid',
    gradient: {
      shade: 'dark',
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: [0.2, 0.8],
      opacityTo: 1,
      stops: [0, 0, 0],
      colorStops: []
    },
  },

  chart: {
    height: 280,
    type: 'area',
  },

  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    labels: {
      show: true,
      rotate: -45,
      rotateAlways: false,
      hideOverlappingLabels: true,
      showDuplicates: false,
      trim: false,
      minHeight: undefined,
      maxHeight: 120,
      style: {
        colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 400,
        cssClass: 'apexcharts-xaxis-label',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    stepSize: 2000,
    labels: {
      show: true,
      rotateAlways: false,
      hideOverlappingLabels: true,
      showDuplicates: false,
      trim: false,
      minHeight: undefined,
      maxHeight: 120,

      style: {
        colors: ['#fff'],
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 400,
        cssClass: 'apexcharts-xaxis-label',
      },
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
    enabled: false,
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();



// chart2
var options = {
  series: [{
    name: 'series1',
    data: [16, 28, 45, 43, 32, 44, 35, 30],
  }, {
    name: 'series2',
    data: [22, 32, 42, 20, 35, 42, 25, 45]
  }],
  grid: {
    show: false,
  },
  stroke: {
    show: false,
  },
  fill: {
    colors: ['#006666'],
    opacity: 0.2,
    type: 'solid',
    gradient: {
      shade: 'dark',
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: [0.2, 0.8],
      opacityTo: 1,
      stops: [0, 0, 0],
      colorStops: []
    },
  },

  chart: {
    height: 90,
    width: 170,
    type: 'area',
  },

  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  xaxis: {
    labels: {
      show: false,

    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    }
  },
  legend: {
    show: false,
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
    enabled: false,
  },
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();
// chart2

// donut chart


var options = {
  series: [60000, 10000, 90000, 80000],
  labels: ['Women Jeans', 'Women T-shirts', 'Women Shoes', 'Kurtas $ Kurtis'],
  chart: {
    type: 'donut',
  },
  plotOptions: {

  },
  colors: ['#Fe6A49', '#80B3B3', '#006666', '#FFAE1A'],
  dataLabels: {
    enabled: false,
  },

  responsive: [{
    breakpoint: 0,
    options: {
      chart: {
        width: 240,
      },
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#pie-chart"), options);
chart.render();
// donut chart


// basic-bar-chart
var options = {
  series: [{
    name: 'Net Profit',
    data: [80, 45, 70, 100, 87, 90, 80, 87, 85, 100, 100, 75]
  }, {
    name: 'Revenue',
    data: [40, 55, 35, 50, 61, 45, 50, 20, 50, 85, 50, 100]
  }],
  chart: {
    type: 'bar',
    height: 100,
    width: 170,
  },
  grid: {
    show: false,
  },
  colors: ['#006666', '#fff'],
  legend: {
    show: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    enabled: false,
  }
};

var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
chart.render();



// basic-bar-chart