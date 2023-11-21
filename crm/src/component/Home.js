import React from 'react';
import { Grid, Paper } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import Orders from '../orders';
import Footer from '../footer';


const data = [
  { value: 5, label: 'India' },
  { value: 10, label: 'USA' },
  { value: 15, label: 'Canada' },
  { value: 20, label: 'UK' },
];

const chartSize = {
  width: 320,
  height: 250,
};

const chartSetting = {
  xAxis: [
    {
      label: 'Customer Impressions (lakhs)',
    },
  ],

  width: 250,
  height: 300,
};

const dataset = [
  {
    seoul: 21,
    month: 'Jan',
  },
  {
    seoul: 28,
    month: 'Fev',
  },
  {
    seoul: 41,
    month: 'Mar',
  },
  {
    seoul: 73,
    month: 'Apr',
  },
  {
    seoul: 99,
    month: 'May',
  },
  {
    seoul: 144,
    month: 'June',
  },
  {
    seoul: 319,
    month: 'July',
  },
  {
    seoul: 249,
    month: 'Aug',
  },
  {
    seoul: 131,
    month: 'Sept',
  },
  {
    seoul: 55,
    month: 'Oct',
  },
  {
    seoul: 48,
    month: 'Nov',
  },
  {
    seoul: 25,
    month: 'Dec',
  },
];

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 16, // Adjusted font size
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const valueFormatter = (value) => `${value} lakhs`;

const Home = () => {
  return (
    <div>
    <Grid  container spacing={2} justifyContent="center">
      <Grid  item xs={12} md={4} style={{marginTop: '10px'}}>
        <Paper square={false} elevation={24} style={{ padding: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
          {/* Bar Chart */}
          <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
            series={[{ dataKey: 'seoul', label: ' Customer Impressions (2022)', valueFormatter }]}
            layout="horizontal"
            {...chartSize}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} style={{marginTop: '10px'}}>
        <Paper square={false} elevation={24} style={{ padding: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }} >
          {/* Line Chart */}
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10], label: 'Company Stock Rate' }]}
            series={[
              {
                data: [2, 5.5, 2, 3.5, 5.5, 8],
              },
            ]}
            {...chartSize}
            label="Company Stock Rate"
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} style={{marginTop: '10px'}}>
        <Paper square={false} elevation={24} style={{ padding: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }} >
          {/* Pie Chart */}
          <PieChart series={[{ data, innerRadius: 60 }]} {...chartSize}>
            <PieCenterLabel>Country Stat</PieCenterLabel>
          </PieChart>
        </Paper>
      </Grid>
    </Grid>
    <br/>
    <Paper square={false} elevation={24} style={{margin: '10px', padding: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }} >
      <Orders  />
      </Paper>
      <Footer/>
    </div>
  );
};

export default Home;