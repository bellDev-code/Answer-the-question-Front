import RuleModal from '@Components/modal/RuleModal';
import React, { useState } from 'react';
import ShareMenu from './ShareMenu';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='sm: px-4 py-2 border-b flex justify-between'>
      <button
        className='sm:text-md bg-slate-700 py-1 px-3 text-white rounded-md'
        onClick={handleOpen}
      >
        게임 룰 설명
      </button>

      <RuleModal open={open} handleClose={handleClose} />

      <ShareMenu />
    </div>
  );
};

export default Header;
