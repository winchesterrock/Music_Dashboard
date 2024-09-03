import React from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { Line, Doughnut, Radar } from 'react-chartjs-2';
import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import '../components/MetricCard.css'; // Import the CSS file

// Register the necessary components
Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const MetricCard = ({ title, value, images, newValue, showArrow, showArrowDown, DecreaseValue, chartData, donutData, radarChartData, className, names }) => {
  return (
    <div className={`card ${className}`}>
      {images && images.map((image, index) => (
        <img key={index} src={image} alt="Artist" className="image" />
      ))}
      {showArrow && <AiOutlineArrowUp data-testid="arrow-up-icon" className="arrowIcon" />}
      {showArrowDown && <AiOutlineArrowDown data-testid="arrow-down-icon" className="arrowIconDown" />}
      {newValue && <div className="newValue">+{newValue} new users</div>}
      {DecreaseValue && <div className="DecreasedValue">-{DecreaseValue} Subscriptions Paused</div>}
      <div className="title">{title}</div>
      <div className="value">{value}</div>
      {names && (
        <ul className="names-list">
          {names.map((name, index) => (
            <li key={index} className="name">{name}</li>
          ))}
        </ul>
      )}
      {chartData && (
        <div className="streamschart">
          <Line data={chartData} options={{
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              line: {
                tension: 0.4,
              },
              point: {
                radius: 0,
              },
            },
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: 'Month',
                  color: '#fff',
                  font: {
                    size: 14,
                    weight: 'bold',
                  },
                },
                ticks: {
                  color: '#fff',
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: 'Streams',
                  color: '#fff',
                  font: {
                    size: 14,
                    weight: 'bold',
                  },
                },
                ticks: {
                  color: '#fff',
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }} />
        </div>
      )}
      {donutData && (
        <div className="chart">
          <Doughnut data={donutData} options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
                position: 'bottom',
                labels: {
                  color: '#fff',
                },
              },
            },
          }} />
        </div>
      )}
     {radarChartData && (
  <div className="radar-chart-container">
    <Radar data={{
      labels: radarChartData.labels,
      datasets: [
        {
          label: 'Active Users',
          data: radarChartData.datasets[0].data,
        

          backgroundColor: 'rgba(245, 245, 247, 0.2)', // Solid red fill
          borderColor: 'rgba(245, 245, 247, 0.1)', // Solid red border
          borderWidth: 2,
        },
        {
          label: 'New Users',
          data: radarChartData.datasets[1].data,
          backgroundColor: 'rgba(54, 162, 235, 0.3)',  
          borderColor: 'rgba(54, 162, 235, 0.9)', 
          borderWidth: 2,
        },
        {
          label: 'Total Streams',
          data: radarChartData.datasets[2].data,
          
          backgroundColor: 'rgba(21, 21, 21,0.6)',  
          borderColor: 'rgba(156, 157, 157,0.8)',  
          borderWidth: 2,
        },
        {
          label: 'Revenue',
          data: radarChartData.datasets[3].data,
          backgroundColor: 'rgba(231, 215, 241, 0.7)',
           borderColor: 'rgba(153, 102, 255, 0.6)',  
          borderWidth: 2,
        },
      ]
    }} options={{
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: {
            color: '#fff' // White lines
          },
          grid: {
            color: '#fff' // White grid lines
          },
          pointLabels: {
            color: '#fff',  
            font: {
              size: 14,
              weight: 'bold',
            },
          },
          ticks: {
            display: false, // Hide the ticks
            color: '#fff',  
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    }} />
  </div>
)}


    </div>
  );
};

export default MetricCard;
