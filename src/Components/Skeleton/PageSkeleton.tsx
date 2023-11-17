import { Skeleton } from '@mui/material';
import React from 'react';

const PageSkeleton = () => {
  return (
    <div className='absolute h-screen top-0 right-0 bottom-0 left-0 z-50'>
      <Skeleton style={{ height: '10%', marginBottom: '1rem' }} variant='rectangular' />
      <Skeleton style={{ height: '10%', marginBottom: '1rem' }} variant='rectangular' />
      <Skeleton style={{ height: '10%', marginBottom: '1rem' }} variant='rectangular' />
      <Skeleton style={{ height: '10%', marginBottom: '1rem' }} variant='rectangular' />
    </div>
  );
};

export default PageSkeleton;
