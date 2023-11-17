import React from 'react';
import Typewriter from 'typewriter-effect';
import audio from 'src/assets/audio/keyboard-typing.mp3';

interface IProps {
  text: string;
}

const TypewriterComponent = ({ text }: IProps) => {
  const typewriterSound = new Audio(audio);
  const maxLineLength = 15; // 한 줄에 표시할 수 있는 최대 글자 수를 예시로 설정

  const startTypingSound = () => {
    typewriterSound.loop = true;
    typewriterSound.play();
  };

  const stopTypingSound = () => {
    typewriterSound.pause();
    typewriterSound.currentTime = 0;
  };

  // 텍스트를 줄바꿈을 포함하여 배열로 변환합니다.
  const formatTextForTypewriter = (text: string) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    words.forEach((word) => {
      if ((currentLine + word).length > maxLineLength) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine += (currentLine.length > 0 ? ' ' : '') + word;
      }
    });

    if (currentLine.length > 0) {
      lines.push(currentLine);
    }

    return lines.join('<br>');
  };

  return (
    <div className='w-full pb-2'>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .callFunction(() => startTypingSound())
            .typeString(formatTextForTypewriter(text))
            .callFunction(() => stopTypingSound())
            .start();
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
