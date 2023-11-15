export const SINGLE_ARTIST_URL = (id: string): string | undefined => {
  return  process.env.REACT_APP_ARTISTS_URL ? `${process.env.REACT_APP_ARTISTS_URL}/${id}` : undefined;
};

export const NATIONALITY_URL = (nationality: string): string | undefined => {
  return  process.env.REACT_APP_ARTISTS_NATIONALITY_URL ? `${process.env.REACT_APP_ARTISTS_NATIONALITY_URL}/${nationality}` : undefined;
};

export const BORN_AFTER_URL = (year: string): string | undefined => {
  return  process.env.REACT_APP_ARTISTS_BORNAFTER_URL ? `${process.env.REACT_APP_ARTISTS_BORNAFTER_URL}/${year}` : undefined;
};

export const NAME_URL = (name: string): string | undefined => {
  return  process.env.REACT_APP_ARTISTS_NAME_URL ? `${process.env.REACT_APP_ARTISTS_NAME_URL}/${name}` : undefined;
};

