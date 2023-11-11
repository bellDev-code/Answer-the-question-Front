import { Skeleton } from '@mui/material';
import React from 'react';
import useSetGameId from 'src/hooks/useSetGameId';

interface IProps {
  children: React.ReactNode;
}

const PlayGameLayout = ({ children }: IProps) => {
  const { isLoading, isError } = useSetGameId();

  if (isLoading) {
    return (
      <div className='absolute h-screen top-0 right-0 bottom-0 left-0 z-50'>
        <Skeleton style={{ height: '100%' }} variant='rectangular' />
      </div>
    );
  } else if (isError) {
    return <>{children}</>;
  } else {
    return <>{children}</>;
  }
};

export default PlayGameLayout;
