import React, { useEffect } from 'react';

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
const fetchData = async (endpoint: string) => {
  const result = await fetch(endpoint).then((response) => {
    return response.json();
  });
  return result;
};
function Chart({ date }: any) {
  useEffect(() => {
    fetchData(covidApi(date));
  }, [date]);
  return (
    <>
      <p>{date.country}</p>
    </>
  );
}

export default Chart;
