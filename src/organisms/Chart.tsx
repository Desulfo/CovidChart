import React, { useState, useEffect } from 'react';

import LinearChart from './LineChart';

const covidApi = (date: { country: string; date: string }) => {
  const { country } = date;
  const year = date.date.split('-')[0];
  const month = date.date.split('-')[1];
  const nextYear = `${
    parseInt(month, 10) === 12
      ? parseInt(date.date.split('-')[0], 10) + 1
      : year
  }`;
  const monthPlusOne = `${parseInt(date.date.split('-')[1], 10) + 1}`;
  const monthUnderTen =
    parseInt(monthPlusOne, 10) < 10 ? `0${monthPlusOne}` : monthPlusOne;
  const nextMonth = `${monthUnderTen === '13' ? '01' : monthUnderTen}`;
  return `https://covidapi.info/api/v1/country/${country}/timeseries/${year}-${month}-01/${nextYear}-${nextMonth}-01`;
};

type chartDataInterface = {
  confirmed: number;
  date: string;
  deaths: number;
  recovered: number;
};
const fetchData = async (
  endpoint: string
): Promise<{ result: chartDataInterface[] }> => {
  const result = await fetch(endpoint).then((response) => {
    return response.json();
  });
  return result;
};
const Chart: React.FunctionComponent<any> = ({ date }) => {
  const [chartDate, setChartDate] = React.useState<chartDataInterface[]>();
  useEffect(() => {
    (async () => {
      const dane = await fetchData(covidApi(date));
      setChartDate(dane.result);
    })();
  }, [date]);
  return (
    <>
      <p>{date.country}</p>
      <LinearChart chartDate={chartDate} />
    </>
  );
};

export default Chart;
