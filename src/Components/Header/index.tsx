import RuleModal from '@Components/RuleModal';
import React, { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='sm: px-4 py-2'>
      <button className='sm: text-lg' onClick={handleOpen}>
        게임 룰 설명
      </button>

      <RuleModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Header;
