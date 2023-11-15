/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Details, StyledParagraphText } from './Styling';
import { NAME_URL } from '../utils/urls';

interface Details {
  Name: string;
  Nationality: string;
  Birth_Year: string;
  Death_Year: string;
}

export const FindArtist = () => {
  const [details, setDetails] = useState<Details>({
    Name: '',
    Nationality: '',
    Birth_Year: '',
    Death_Year: '',
  });
  const { name } = useParams<{ name?: string }>();

  useEffect(() => {
    const fetchArtistDetails = async () => {

      try {
        if (!name) {
          throw new Error('Name is undefined');
        }
        const nameUrl = NAME_URL(name)
        if(!nameUrl) {
          throw new Error('Failed to fetch artist by name');
        }
        const response = await fetch(nameUrl);
        const data = await response.json();
        setDetails(data.body.artist);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArtistDetails();
  }, [name]);

  return (
      <Details>
      {!details ? (
        <StyledParagraphText>Sorry, artist not found</StyledParagraphText>
      ) : (
        <>
          <StyledParagraphText>Name: {details?.Name}</StyledParagraphText>
          <StyledParagraphText>Nationality: {details?.Nationality}</StyledParagraphText>
          <StyledParagraphText>Birth Year: {details?.Birth_Year}</StyledParagraphText>
          <StyledParagraphText>Death Year: {details?.Death_Year}</StyledParagraphText>
        </>
      )}
    </Details>
  )
}