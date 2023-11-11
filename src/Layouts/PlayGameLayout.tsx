import React from 'react';
import useSetGameId from 'src/hooks/useSetGameId';

interface IProps {
  children: React.ReactNode;
}

const PlayGameLayout = ({ children }: IProps) => {
  useSetGameId();
  return <>{children}</>;
};

export default PlayGameLayout;
