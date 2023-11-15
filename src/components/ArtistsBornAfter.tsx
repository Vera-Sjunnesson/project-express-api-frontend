import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Loader } from './Loader';
import { StyledParagraphSpanSmall } from './Styling';
import { BORN_AFTER_URL } from '../utils/urls';

interface BornAfterList {
  Artist_ID: string;
  Name: string;
}

export const ArtistsBornAfter: React.FC  = () => {
  const [list, setList] = useState<BornAfterList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { year } = useParams<{ year?: string }>();

  useEffect(() => {
    setLoading(true);

    const fetchArtistBornAfter = async () => {

      try {
        if (!year) {
          throw new Error('Year is undefined');
        }
        const bornAfterUrl = BORN_AFTER_URL(year)
        if(!bornAfterUrl) {
          throw new Error('Failed to fetch artists born after this year');
        }
        const response = await fetch(bornAfterUrl);
        const data = await response.json();
        setList(data.body.artist);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 1500);
      }
    };
    fetchArtistBornAfter();
  }, [year]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 10px', padding: '20px', justifyContent: 'center' }}>
      {list.map((artist) => (
        <Link
          style={{ textDecoration: 'none' }}
          key={artist.Artist_ID}
          to={`/artists/${artist.Artist_ID}`}>
            <StyledParagraphSpanSmall>
              {artist.Name}
            </StyledParagraphSpanSmall>
        </Link>
      ))}
    </div>
  );
};