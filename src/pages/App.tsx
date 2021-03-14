import React, { useState } from 'react';

import './App.css';
import Form from '../molecules/Form';
import Chart from '../organisms/Chart';

const App: React.FC = () => {
  const [date, setDate] = React.useState<{ country: string; date: string }>({
    country: '',
    date: '',
  });
  console.log(date);

  return (
    <>
      <Form setDate={setDate} />
      <Chart date={date} />
    </>
  );
};

export default App;
