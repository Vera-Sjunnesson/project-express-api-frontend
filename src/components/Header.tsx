import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledSection, Wrapper, StyledParagraphSpan, StyledParagraphSpanXSmall, StyledParagraphA } from './Styling';

export const Header = () => {
  return (
    <Wrapper>
      <StyledParagraphA href="https://project-express-api-qsyn7wqw7a-lz.a.run.app/artists" target="_blank" aria-label="artist API">
        <StyledParagraphSpan>FEMALE ARTISTS</StyledParagraphSpan>
        in the MoMA collection
        <StyledParagraphSpanXSmall>(the Museum of Modern Art, New York)</StyledParagraphSpanXSmall>
      </StyledParagraphA>
      <StyledSection>
        <NavLink className="nav-button" to="/">HOME</NavLink>
        <NavLink className="nav-button" to="/artists">ALL ARTISTS</NavLink>
        <NavLink className="nav-button" to="/nationality">NATIONALITY</NavLink>
        <NavLink className="nav-button" to="/born-after">BIRTH YEAR</NavLink>
        <NavLink className="nav-button" to="artists/name">SEARCH ARTIST</NavLink>
      </StyledSection>
    </Wrapper>
  )
}