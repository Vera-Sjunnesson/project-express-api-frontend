import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSection = styled.div`
  background-color: transperent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const StyledTextBold = styled.p`
 color: white;
 font-size: 25px;
 font-family: Futura;
 text-decoration: none;
 font-weight: bold;
 margin: 0;
`;

export const StyledParagraphSpan = styled.span`
 color: #f85f36;
 font-size: 25px;
 font-family: Futura;
 text-decoration: none;
 font-weight: bold;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: center;

   @media (min-width: 1024px) {
   font-size: 40px;
  }
`;

export const StyledParagraphSpanSmall = styled.span`
 color: #f85f36;
 font-size: 16px;
 text-decoration: none;
 cursor:pointer;
 font-family: Futura;
 font-weight: bold;

 &:hover {
    color: #25467dff;
  }
`;

export const StyledParagraphSpanXSmall = styled.span`
 color: #f85f36;
 text-decoration: none;
 font-family: Futura;
 font-weight: bold;
`;

export const StyledParagraphText = styled.p`
 color: #182F5D;
 font-size: 25px;
 font-family: Futura;
 text-decoration: none;
 font-weight: bold;
 display: flex;
 flex-direction: column;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin: 10px;
 text-align: center;
 gap: 10px;
`;

export const StyledParagraphA = styled.a`
  color: #182F5D;
  font-family: Futura;
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  text-align: center;
  gap: 10px;

  @media (min-width: 1024px) {
   font-size: 25px;
  }
`;

export const StyledLink = styled.a`
display: flex;
 color: white;
 font-size: 15px;
 font-family: Futura;
 text-decoration: none;
 font-weight: bold;
 text-decoration: white wavy underline;
  text-decoration-skip-ink: none;
`;

export const Button = styled.button`
  border: none;
  background: #ffffff;
  color: #182F5D;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 25px 10px 25px;
  text-decoration: none;
  font-size: 25px;
  font-family: Futura;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  text-align: center;
  gap: 10px;

  &:hover {
    background-color: #25467dff;
    color: #ffffff;
  }
`;

export const Input = styled.input`
  border: 1px solid #182F5D;
  border-radius: 5px;
  padding: 5px 10px;
  outline: none;
`;

export const Select = styled.select`
  border: 1px solid #182F5D;
  border-radius: 5px;
  padding: 5px 10px;
  outline: none;
  width: 139px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LottieContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;

  & > div {
    width: 90vw;

  @media (min-width: 1024px) {
    width: 50vw;
  }
  }
`;