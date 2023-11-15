import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from './Styling';
import { Animation } from './Animation';

export const SelectNationality = () => {
  const [nationality, setNationality] = useState('');

  return (
    <>
      <Form>
        <label htmlFor="nationality">
          <Input
            type="text"
            id="nationality"
            value={nationality}
            onChange={(event) => setNationality(event.target.value)} />
        </label>
        <Link
          className="search-button"
          to={`/nationality/${nationality}`}>SEARCH
        </Link>
      </Form>
      <Animation />
    </>
  );
};