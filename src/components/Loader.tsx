import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { LottieContainer } from './Styling';

export const Loader = () => {
  return (
    <LottieContainer>
      <Player
        src="https://assets7.lottiefiles.com/private_files/lf30_ipays02f.json"
        loop
        autoplay
        speed={1} />
    </LottieContainer>
  );
};