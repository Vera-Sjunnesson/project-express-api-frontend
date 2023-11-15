import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from './Styling';
import { Animation } from './Animation';

export const SearchArtist = () => {
  const [artistName, setArtistName] = useState('');

  return (
    <>
      <Form>
        <label htmlFor="name">
          <Input
            type="text"
            id="name"
            value={artistName}
            onChange={(event) => setArtistName(event.target.value)} />
        </label>
        <Link
          className="search-button"
          to={`/artists/name/${artistName}`}>SEARCH
        </Link>
      </Form>
      <Animation />
    </>
  );
}