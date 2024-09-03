// src/components/MetricCard.js
import React from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { Line, Doughnut } from 'react-chartjs-2';
import '../components/MetricCard.css'; // Import the CSS file

const MetricCard = ({ title, value, images, newValue, showArrow, showArrowDown, DecreaseValue, chartData, donutData, className,names }) => {
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
        <div className="chart">
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
    </div>
  );
};

export default MetricCard;
