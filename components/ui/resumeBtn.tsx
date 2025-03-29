import React from "react";
import { RainbowButton } from "./rainbow-button";
import { TbLocationCode } from "react-icons/tb";

const ResumeButton = () => {
  const handleEmail = () => {
    window.location.href = "mailto:your-email@example.com";
  };

  return (
    <RainbowButton
      onClick={handleEmail}
      className="bg-slate-950 text-white text-lg font-bold py-1 px-10 rounded hover:bg-blue-700 flex items-center"
    >
      let's get in touch
      <span className="ml-5 text-xl">
        <TbLocationCode />
      </span>
    </RainbowButton>
  );
};

export default ResumeButton;
