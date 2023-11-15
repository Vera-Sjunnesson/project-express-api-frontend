import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Loader } from './Loader';
import { StyledParagraphSpanSmall, StyledParagraphText } from './Styling';
import { NATIONALITY_URL } from '../utils/urls';

interface NationalityList {
  Artist_ID: string;
  Name: string;
}

export const ArtistNationality: React.FC = () => {
  const [list, setList] = useState<NationalityList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { nationality } = useParams<{ nationality?: string }>();

  useEffect(() => {
    setLoading(true);

    const fetchArtistNationality = async () => {

      try {
        if (!nationality) {
          throw new Error('Nationality is undefined');
        }
        const nationalityUrl = NATIONALITY_URL(nationality)
        if(!nationalityUrl) {
          throw new Error('Failed to fetch nationality');
        }
        const response = await fetch(nationalityUrl);
        const data = await response.json();
        setList(data.body.artist);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 1500);
      }
    };
    fetchArtistNationality();
  }, [nationality]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 10px', padding: '20px', justifyContent: 'center' }}>
      {list.length === 0
        ? <StyledParagraphText>Sorry, nationality not found</StyledParagraphText>
        : list.map((artist) => (
          <Link
            style={{ textDecoration: 'none' }}
            key={artist.Artist_ID}
            to={`/artists/${artist.Artist_ID}`}>
              <StyledParagraphSpanSmall>
                {artist.Name}
              </StyledParagraphSpanSmall>
          </Link>))}
    </div>
  );
};