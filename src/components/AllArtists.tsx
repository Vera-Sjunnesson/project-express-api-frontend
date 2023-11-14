import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from './Loader';
import { StyledParagraphSpanSmall } from './Styling';

interface Artist {
  Artist_ID: string;
  Name: string;
}

export const AllArtists: React.FC = () => {
  const [list, setList] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const fetchArtists = async () => {
      try {
        const url = process.env.REACT_APP_FEMALE_ARTISTS_URL
        console.log('URL:', url);

        if (!url) {
          throw new Error('Failed to fetch female artists');
        }

        const response = await fetch(url);
        console.log('Response:', response);
        const data = await response.json();
        setList(data.body.artistsMoma);
        console.log(list)
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 1500);
      }
    };

    fetchArtists();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 10px', padding: '20px', justifyContent: 'center' }}>
      {list.map((artist) => (
        <Link
          style={{ textDecoration: 'none' }}
          key={artist.Artist_ID}
          to={`/artists/${artist.Artist_ID}`}><StyledParagraphSpanSmall>{artist.Name}</StyledParagraphSpanSmall>
        </Link>
      ))}
    </div>
  );
};