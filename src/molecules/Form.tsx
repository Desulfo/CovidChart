import React, { useRef } from 'react';

const countryList = [
  { country: 'Poland', shortcut: 'POL' },
  { country: 'Germany', shortcut: 'DEU' },
  { country: 'France', shortcut: 'FRA' },
];

const Form = ({ setDate }: any) => {
  const dateRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);

  const today = new Date();
  const month =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : `${today.getMonth() + 1}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDate({
      country: countryRef.current?.value,
      date: dateRef.current?.value,
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="date">
        Choose date:
        <input
          ref={dateRef}
          type="month"
          name="date"
          id="date"
          defaultValue={`${today.getFullYear()}-${month}`}
          // value={`${today.getFullYear()}-${month}`}
        />
      </label>
      <label htmlFor="country">
        Choose country:
        <select ref={countryRef} name="country" id="country">
          {countryList.map(({ shortcut, country }) => (
            <option
              key={country}
              value={shortcut}
              selected={country === 'Poland'}
            >
              {country}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
