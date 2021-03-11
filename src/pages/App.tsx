import React, { useState } from 'react';

import './App.css';
import Form from '../molecules/Form';

const App: React.FC = () => {
  const [date, setDate] = React.useState<(number | string)[]>([]);
  console.log(date);

  return <Form setDate={setDate} />;
};

export default App;
