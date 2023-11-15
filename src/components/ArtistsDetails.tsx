import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Details, StyledParagraphText } from './Styling';
import { SINGLE_ARTIST_URL } from '../utils/urls';

interface Details {
  Name: string;
  Nationality: string;
  Birth_Year: string;
  Death_Year: string;
}

export const ArtistDetails: React.FC = () => {
  const [details, setDetails] = useState<Details>({
    Name: '',
    Nationality: '',
    Birth_Year: '',
    Death_Year: '',
  });

  const { id } = useParams<{ id?: string }>();
  
  useEffect(() => {
    const fetchArtistDestails = async () => {

      try {
        if (id === undefined) {
          throw new Error('Artist ID is undefined');
        }
        const url = SINGLE_ARTIST_URL(id);
        if(!url) {
          throw new Error('Failed to fetch artist details');
        }
        const response = await fetch(url);
        const data = await response.json();
        setDetails(data.body.artistsMoma);
      } catch (error) {
        console.error(error);
      }
    }

    fetchArtistDestails();
    
  }, []);

  return (
    <Details>
      <StyledParagraphText>Name: {details.Name}</StyledParagraphText>
      <StyledParagraphText>Nationality: {details.Nationality}</StyledParagraphText>
      <StyledParagraphText>Birth Year: {details.Birth_Year}</StyledParagraphText>
      <StyledParagraphText>Death Year: {details.Death_Year}</StyledParagraphText>
    </Details>
  )
}