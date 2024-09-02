// components/DataVisualization.js - Data visualization component with interactive charts
import React, { useRef, useEffect } from "react";
import { Line, Pie, Bar } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";
import "../components/DataVisualization.css"; // Import the CSS file

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const DataVisualization = ({ filterData }) => {
  // Sample data for the charts
  const { t } = useTranslation();

  const userGrowthData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Users",
        data: [
          1000, 1200, 1500, 1700, 2000, 2300, 2500, 2700, 3000, 3300, 3500,
          3800,
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        pointStyle: "circle", // Add point style
      },
      {
        label: "Active Users",
        data: [
          800, 900, 1100, 1300, 1500, 1700, 1800, 2000, 2200, 2400, 2600, 2800,
        ],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
        pointStyle: "rectRot", // Add point style
      },
    ],
  };
  <Line
    data={userGrowthData}
    options={{
      responsive: true,
      animation: {
        duration: 2000, // general animation time
      },
      plugins: {
        // Corrected here
        legend: {
          display: true,
          labels: {
            font: {
              size: 14,
              family: "Arial",
              style: "italic",
              weight: "bold",
            },
            color: "#ffff", // Change label color
          },
        },
      },
      tooltips: {
        mode: "index",
        intersect: false,
        tooltip: {
          callbacks: {
            label: function (context) {
              var label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                label += Number(context.parsed.y).toFixed(2); // Use Number as a function here
              }
              return label;
            },
          },
        },
      },

      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Month",
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Value",
            },
          },
        ],
      },
    }}
  />;


// pie chart for revenue revenueDistributionData


  const revenueDistributionData = {
    labels: [
      "Subscriptions",
      "Ads",
      "In-app Purchases",
      "Merchandise Sales",
      "Concert Tickets",
      "Donations",
    ],
    datasets: [
      {
        data: [70000, 50000, 30000, 20000, 10000, 5000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ], // Color when hovered
        hoverOffset: 20, // Offset when hovered
      },
    ],
  };

  <Pie
    data={revenueDistributionData}
    options={{
      responsive: true,
      animation: {
        animateScale: true,
        animateRotate: true,
      },
      plugins: {
        tooltip: {
          enabled: true,
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Background color of the tooltip
          titleFont: { size: 20 }, // Font size of the tooltip title
          bodyFont: { size: 14 }, // Font size of the tooltip body
          callbacks: {
            title: function (context) {
              return context[0].label; // Display the revenue source as the tooltip title
            },
            label: function (context) {
              var dataset = context.dataset;
              var total = dataset.data.reduce(function (
                previousValue,
                currentValue,
                currentIndex,
                array
              ) {
                return previousValue + currentValue;
              });
              var currentValue = dataset.data[context.dataIndex];
              var percentage = Math.floor((currentValue / total) * 100 + 0.5);
              return `Revenue: ${currentValue} (${percentage}%)`; // Display the revenue and percentage in the tooltip body
            },
          },
        },
      },
      hover: {
        mode: "dataset", // Change the hover mode
        animationDuration: 1000, // Add animation duration
        onHover: (event, chartElement) => {
          event.target.style.cursor = chartElement[0] ? "pointer" : "default";
        },
      },
    }}
  />;

// bar graph for topStreamedSongsData

  const canvasRef = useRef(null);
  
  const topStreamedSongsData = {
    labels: ["Song A", "Song B", "Song C", "Song D", "Song E"],
    datasets: [
      {
        label: "Streams",
        data: [7000, 6000, 9000, 6500, 3000],
        backgroundColor: "#000",
        hoverBackgroundColor: "#f5f5f7", // Color when hovered
        hoverBorderWidth: 2, // Border width when hovered
        hoverBorderColor: "#1ad06d", // Border color when hovered
        borderRadius: 10, // Add border radius for curved borders
        borderSkipped: false, // Ensure all borders are curved
      },
    ],
  };

  <Bar
    ref={canvasRef}
    data={topStreamedSongsData}
    options={{
      responsive: true,
      animation: {
        duration: 2000,
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Background color of the tooltip
          titleFont: { size: 20 }, // Font size of the tooltip title
          bodyFont: { size: 14 }, // Font size of the tooltip body
          callbacks: {
            title: function (context) {
              return context[0].label; // Display the song name as the tooltip title
            },
            label: function (context) {
              return `Streams: ${context.parsed.y}`; // Display the number of streams in the tooltip body
            },
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    }}
  />;

  // for observation 
  const userGrowthRef = useRef(null);
  const revenueDistributionRef = useRef(null);
  const topStreamedSongsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const chart = entry.target;
          chart.classList.add("animate");
          observer.unobserve(chart);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const userGrowthElement = userGrowthRef.current;
    const revenueDistributionElement = revenueDistributionRef.current;
    const topStreamedSongsElement = topStreamedSongsRef.current;

    if (userGrowthElement) observer.observe(userGrowthElement);
    if (revenueDistributionElement)
      observer.observe(revenueDistributionElement);
    if (topStreamedSongsElement) observer.observe(topStreamedSongsElement);

    return () => {
      if (userGrowthElement) observer.unobserve(userGrowthElement);
      if (revenueDistributionElement)
        observer.unobserve(revenueDistributionElement);
      if (topStreamedSongsElement) observer.unobserve(topStreamedSongsElement);
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="chartContainer half" ref={userGrowthRef}>
          <h2>{t("User Growth")}</h2>
          <Line data={userGrowthData} />
        </div>
        <div className="chartContainer half2" ref={revenueDistributionRef}>
          <h2>{t("Revenue Distribution")}</h2>
          <Pie
            data={revenueDistributionData}
            options={{
              onClick: (event, elements) => {
                if (elements.length > 0) {
                  const index = elements[0].index;
                  const label = revenueDistributionData.labels[index];
                  filterData(label);
                }
              },
            }}
          />
        </div>
      </div>
      <div className="chartContainer full" ref={topStreamedSongsRef}>
        <h2 className="top5stream">{t("Top 5 Streamed Songs")}</h2>
        <Bar data={topStreamedSongsData} />
      </div>
    </div>
  );
};

export default DataVisualization;
