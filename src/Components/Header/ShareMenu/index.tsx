import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import KakaoShare from '@Components/KakaoShared';
import { toast } from '@Components/toastify/toastify';

export default function ShareMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast('링크가 복사되었습니다.');
      handleClose();
    } catch (err) {
      toast('링크 복사를 실패했습니다.');
    }
  };

  return (
    <div>
      <IconButton
        aria-label='share'
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <ShareIcon />
      </IconButton>
      <Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
        <MenuItem>
          <KakaoShare />
        </MenuItem>
        <MenuItem onClick={handleCopyLink}>
          <button className='sm:text-md bg-black py-1 px-3 text-white rounded-md'>
            링크 공유하기
          </button>
        </MenuItem>
      </Menu>
    </div>
  );
}
