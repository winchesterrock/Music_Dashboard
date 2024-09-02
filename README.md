# Dashboard that is both responsive and user-friendly.

## Requirements Fullfilled
Dashboard Overview:  a single-page application (SPA) that includes the following sections:
Key Metrics:
Display cards that show the following metrics:
Total Users: The total number of registered users on the platform.
Active Users: The number of users who have streamed at least one song in the last 30 days.
Total Streams: The total number of song streams on the platform.
Revenue: The total revenue generated from subscriptions and advertisements.
Top Artist: The artist with the most streams in the past 30 days.


Data Visualization:
Include the following charts:
User Growth Chart: A line chart that shows the growth in the number of total users and active users over the past 12 months.
Revenue Distribution: A pie chart that shows the breakdown of revenue from different sources (e.g., Subscriptions, Ads).
Top 5 Streamed Songs: A bar chart that displays the top 5 most-streamed songs over the past 30 days.


Data Table:
A table that lists detailed information about recent streams with the following columns:
Song Name
Artist
Date Streamed
Stream Count
User ID



## Technologies Used

React
Chart.js
i18next
CSS Modules
Node.js
Express


### Additional Tests

#### Dashboard Component
- **Test Suite**: `Dashboard.test.js`
- **Description**: Tests the rendering, scrolling behavior, and background filters of the `Sidebar` component.
- **Status**: All tests passed.

#### Translation Functionality
- **Test Suite**: `Translation.test.js`
- **Description**: Verifies that translations are correctly applied across different components.
- **Status**: All tests passed.

## Unit Tests

We have written unit tests for the `MetricCard` and `App` components using Jest. Below are the details:

### MetricCard Component
- **Test Suite**: `MetricCard.test.js`
- **Description**: Tests the rendering and functionality of the `MetricCard` component.
- **Status**: All tests passed.

### App Component
- **Test Suite**: `App.test.js`
- **Description**: Tests the main `App` component for proper rendering and functionality.
- **Status**: All tests passed.

### Running Tests
To run the tests, use the following command:

```bash
npm run test
