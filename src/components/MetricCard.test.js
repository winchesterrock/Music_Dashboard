// src/components/MetricCard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MetricCard from '../components/MetricCard';

describe('MetricCard Component', () => {
  test('renders MetricCard with title and value', () => {
    render(<MetricCard title="Total Users" value="230611" />);
    expect(screen.getByText('Total Users')).toBeInTheDocument();
    expect(screen.getByText('230611')).toBeInTheDocument();
  });

  test('renders MetricCard with images', () => {
    const images = ['image1.jpg', 'image2.jpg'];
    render(<MetricCard title="Top Artists" images={images} />);
    expect(screen.getAllByAltText('Artist')).toHaveLength(2);
  });

  test('renders MetricCard with new users and arrow icon', () => {
    render(<MetricCard title="Total Users" value="230611" newValue="500" showArrow={true} />);
    expect(screen.getByText('+500 new users')).toBeInTheDocument();
    expect(screen.getByTestId('arrow-up-icon')).toBeInTheDocument();
  });

  test('renders MetricCard with decreased subscriptions and arrow down icon', () => {
    render(<MetricCard title="Revenue" value="$120000" DecreaseValue="800" showArrowDown={true} />);
    expect(screen.getByText('-800 Subscriptions Paused')).toBeInTheDocument();
    expect(screen.getByTestId('arrow-down-icon')).toBeInTheDocument();
  });

  test('renders MetricCard with chart data', () => {
    const chartData = {
      labels: ['Jan', 'Feb', 'Mar'],
      datasets: [
        {
          label: 'Total Streams',
          data: [500, 700, 600],
          borderColor: 'rgba(128, 0, 128, 1)',
          backgroundColor: 'rgba(128, 0, 128, 0.2)',
        },
      ],
    };
    render(<MetricCard title="Total Streams" value="500000" chartData={chartData} />);
    expect(screen.getByText('Total Streams')).toBeInTheDocument();
  });
});
