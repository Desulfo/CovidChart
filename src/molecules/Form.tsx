import React, { useRef } from 'react';

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
    console.log(countryRef.current?.value);
    console.log(dateRef.current?.value);
    console.log(today.getMonth());
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
          value={`${today.getFullYear()}-${month}`}
        />
      </label>
      <label htmlFor="country">
        Choose country:
        <select ref={countryRef} name="country" id="country">
          <option value="PL" selected>
            Poland
          </option>
          <option value="DE">Germany</option>
          <option value="FR">France</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
