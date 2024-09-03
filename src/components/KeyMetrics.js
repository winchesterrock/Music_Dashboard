import React from 'react';
import MetricCard from './MetricCard';  // Import the MetricCard component\
import { useTranslation } from 'react-i18next';

import coldplayImage from '../images/coldplay.jpeg';
import jbImage from '../images/jb.jpeg';
import madonaImage from '../images/madona.jpeg';
import drakeImage from '../images/drake.jpeg';
import edsheraanImage from '../images/ed_sheeran.jpeg';

function KeyMetrics() {
  const metrics = {
    totalUsers: 23611,
    newUsers: 500, 
    activeUsers: 8000,
    totalStreams: 31000,
    revenue: 120000,
    Decreased: 800,
    topArtist: [
      { name: 'Ed Sheeran', image: edsheraanImage },
      { name: 'Justin Bieber', image: jbImage },
      { name: 'Drake', image: drakeImage },
      { name: 'Madonna', image: madonaImage },
      { name: 'Coldplay', image: coldplayImage },
    ],
  };
  const { t } = useTranslation();

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Streams',
        data: [500, 700, 600, 800, 400, 1100, 1000, 1200, 1900, 1250, 1400, 1600], // Varied data for curves
        borderColor: 'rgba(128, 0, 128, 1)', // Purple color
        backgroundColor: 'rgba(128, 0, 128, 0.2)', // Light purple fill
        fill: true,
        tension: 0.4, // Smooth curve
      },
    ],
  };const donutData = {
    labels: ['North America', 'Europe', 'Asia', 'South America', 'Africa'],
    datasets: [
      {
        label: 'Active Users by Region',
        data: [3000, 2000, 1500, 1000, 500], // Example data
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
      },
    ],
  };
  const radarChartData = {
    labels: ['Age 18-24', '25-34', '35-44', '45-54', '55+'],
    datasets: [
      {
        label: 'Active Users',
        data: [18000, 12000, 10000, 1500, 500],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 0.1)',
        borderWidth: 1,
      },
      {
        label: 'New Users',
        data: [25000, 37000, 46000, 49000, 45000],
        backgroundColor: 'rgba(138, 185, 221,0.2)',
        borderColor: 'rgba(138, 185, 221,0.4)',
        borderWidth: 1,
      },
      {
        label: 'Total Streams',
        data: [50000, 90000, 40000, 30000, 101000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Revenue',
        data: [120000, 150000, 100000, 80000, 30000],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  // const chartData = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  //   datasets: [
  //     {
  //       label: 'Total Streams',
  //       data: [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600], // Example data
  //       borderColor: 'rgba(128, 0, 128, 1)', // Purple color
  //       backgroundColor: 'rgba(128, 0, 128, 0.2)', // Light purple fill
  //       fill: true,
  //       tension: 0.4, // Smooth curve
  //     },
  //   ],
  // };
  

  const styles = {
    keyMetrics: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      padding: '20px',
      borderRadius: '8px',
    },
  };

  return (
    <div style={styles.keyMetrics}>
      <MetricCard 
        title={t('Total Users')}  
        value={metrics.totalUsers} 
        newValue={metrics.newUsers} 
        showArrow={true} // Show the upward arrow to indicate growth
        radarChartData={radarChartData} // Pass the radar chart data
        className="total-users-card"
      />

      <MetricCard
        title={t('Total Streams')}
        value={metrics.totalStreams}
        chartData={chartData}
        className="total-streams"
      />
      <MetricCard
 title={t('Active Users')}
  value="3,000"
  donutData={donutData}
  className="active-user"
/>
      <MetricCard 
        title={t('Revenue')}
        value={`$${metrics.revenue}`}  
        DecreaseValue={metrics.Decreased} 
        showArrowDown={true}  
        className="revenue"
      />
      <MetricCard 
        title={t('Top Artists')}
        value="" 
        images={metrics.topArtist.map(artist => artist.image)} 
        names={metrics.topArtist.map(artist => artist.name)} // Pass the names to the MetricCard component
        className="top-artist"
      />
    </div>
  );
}

export default KeyMetrics;
