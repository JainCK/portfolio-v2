import React from 'react';
import { RainbowButton } from './rainbow-button';

const ResumeButton = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1Ik3KFP4PlqH1Afop310iuXi2C3S0sVSe/view?usp=sharing', '_blank');
  };

  return (
    <RainbowButton 
      onClick={handleDownload} 
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
    >
      Download My Resume
    </RainbowButton>
  );
};

export default ResumeButton;
