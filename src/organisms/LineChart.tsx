import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
} from 'recharts';

function LinearChart({ chartDate }: any) {
  const [dat, setDat] = useState(chartDate);
  console.log('chart', chartDate);
  useEffect(() => {
    setDat(chartDate);
  }, [chartDate]);
  return (
    <ResponsiveContainer width="80%" height={700}>
      <LineChart
        width={730}
        height={250}
        data={dat}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date">
          <Label value="Date" offset={-20} position="insideBottomRight" />
        </XAxis>
        <YAxis>
          <Label value="Amount of ppl" offset={20} position="insideTopLeft" />
        </YAxis>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="confirmed" stroke="#8884d8" />
        <Line type="monotone" dataKey="deaths" stroke="#82ca9d" />
        <Line type="monotone" dataKey="recovered" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LinearChart;
