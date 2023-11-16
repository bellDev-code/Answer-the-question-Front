import React from 'react';
import Typewriter from 'typewriter-effect';
import audio from 'src/assets/audio/keyboard-typing.mp3';

interface IProps {
  text: string;
}

const TypewriterComponent = ({ text }: IProps) => {
  const typewriterSound = new Audio(audio);

  const startTypingSound = () => {
    typewriterSound.loop = true;
    typewriterSound.play();
  };

  const stopTypingSound = () => {
    typewriterSound.pause();
    typewriterSound.currentTime = 0; // 소리를 처음으로 되돌립니다.
  };

  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .callFunction(() => startTypingSound())
            .typeString(text)
            .callFunction(() => stopTypingSound())
            .start();
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
