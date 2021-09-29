const chartLineColor = "rgb(201, 230, 250)";
const chartBackgroundColor = "#000000";
const chartBackgroundColor2 = "#000000";
export const chart1DataSet = {
  data: {
    labels: ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Total Sales",
        fill: false,
        backgroundColor: chartBackgroundColor,
        borderColor: chartLineColor,
        borderWidth: 1.5,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: chartLineColor,
        pointBorderColor: "rgba(255,255,255,0)",
        pointHoverBackgroundColor: chartLineColor,
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 5,
        data: [12000, 19000, 15000, 20000, 23000, 30000, 40000, 50000, 12000, 19000, 28110, 18000]
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    scales: {
      yAxes: {
        barPercentage: 1.6,
        grid: {
          display: false,
          color: chartLineColor,
          zeroLineColor: "transparent"
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 125000,
          padding: 2,
          backdropPadding: 2,
          backdropColor: "rgba(255,255,255,1)",
          color: chartLineColor,
          major: {
            enable: true
          }
        }
      },
      xAxes: {
        barPercentage: 1.6,
        grid: {
          display: false,
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          color: chartLineColor,

          major: {
            enable: false
          }
        }
      }
    }
  }
};

export const chart2DataSet = {
  data: {
    labels: ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Total Income",
        fill: false,
        backgroundColor: chartBackgroundColor,
        borderColor: chartLineColor,
        borderWidth: 1.5,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: chartLineColor,
        pointBorderColor: "rgba(255,255,255,0)",
        pointHoverBackgroundColor: chartLineColor,
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 5,
        data: [1000, 1100, 1500, 2000, 2300, 3500, 4000, 5100, 1200, 1600, 2810, 8000]
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    scales: {
      yAxes: {
        barPercentage: 1.6,
        grid: {
          display: false,
          color: chartLineColor,
          zeroLineColor: "transparent"
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 125000,
          padding: 2,
          backdropPadding: 2,
          backdropColor: "rgba(255,255,255,1)",
          color: chartLineColor,
          major: {
            enable: true
          }
        }
      },
      xAxes: {
        barPercentage: 1.6,
        grid: {
          display: false,
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          color: chartLineColor,

          major: {
            enable: false
          }
        }
      }
    }
  }
};
export const chart3DataSet = {
  data: {
    labels: ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Total Expense",
        fill: false,
        backgroundColor: chartBackgroundColor2,
        borderColor: chartLineColor,
        borderWidth: 1.5,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: chartLineColor,
        pointBorderColor: "rgba(255,255,255,0)",
        pointHoverBackgroundColor: chartLineColor,
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 5,
        data: [100, 200, 150, 260, 230, 500, 400, 100, 200, 600, 810, 400]
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    scales: {
      yAxes: {
        barPercentage: 1.6,
        grid: {
          display: false,
          color: chartLineColor,
          zeroLineColor: "transparent"
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 125000,
          padding: 2,
          backdropPadding: 2,
          backdropColor: "rgba(255,255,255,1)",
          color: chartLineColor,
          major: {
            enable: true
          }
        }
      },
      xAxes: {
        barPercentage: 1.6,
        grid: {
          display: false,
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          color: chartLineColor,

          major: {
            enable: false
          }
        }
      }
    }
  }
};
export const chart4DataSet = {
  data: {
    labels: ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Total Profit",
        fill: false,
        backgroundColor: chartBackgroundColor,
        borderColor: chartLineColor,
        borderWidth: 1.5,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: chartLineColor,
        pointBorderColor: "rgba(255,255,255,0)",
        pointHoverBackgroundColor: chartLineColor,
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 5,
        data: [1000, 2200, 1530, 1260, 5230, 3500, 9400, 1200, 3400, 2280, 8310, 4300]
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    scales: {
      yAxes: {
        barPercentage: 1.6,
        grid: {
          display: false,
          color: chartLineColor,
          zeroLineColor: "transparent"
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 125000,
          padding: 2,
          backdropPadding: 2,
          backdropColor: "rgba(255,255,255,1)",
          color: chartLineColor,
          major: {
            enable: true
          }
        }
      },
      xAxes: {
        barPercentage: 1.6,
        grid: {
          display: false,
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          color: chartLineColor,

          major: {
            enable: false
          }
        }
      }
    }
  }
};
