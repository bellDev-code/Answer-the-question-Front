import { Button } from '@mui/material';
import React from 'react';

const Bottom = () => {
  return (
    <div className='border-t w-full'>
      <div className='flex'>
        <Button className='w-1/2 h-12'>이전</Button>
        <Button className='w-1/2 h-12'>다음</Button>
      </div>
    </div>
  );
};

export default Bottom;
