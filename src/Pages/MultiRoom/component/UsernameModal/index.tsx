import { useJoinRoomQuery } from '@Api/multiGame';
import { BaseButton } from '@Components/atom/button/BaseButton';
import { SESSION_USERNAME } from '@Configure/constant';
import { Box, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

interface IProps {
  // define your props here
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const index: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const { gameId } = useParams();
  const [username, setUsername] = useState('');

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const { mutate: joinRoomMutate } = useJoinRoomQuery();

  const handleSummit = () => {
    joinRoomMutate(
      {
        gameId: gameId || '',
        username: username || '',
      },
      {
        onSuccess: (data) => {
          if (data.code === 200) {
            sessionStorage.setItem(SESSION_USERNAME, username || '');
            setIsOpen(false);
          }
        },
        onError: (error) => {
          if (error.response?.data.code === 400) {
            if (error.response.data.message === 'Username already exists') {
              toast('이미 존재하는 이름입니다.');
            }
            if (error.response?.data.message === 'Game has already started') {
              toast('게임이 시작되어 입장할 수 없습니다.');
            }
          }
        },
      },
    );
  };

  return (
    <div>
      <Modal
        open={isOpen}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            width: '90%',
            height: '20%',
            bgcolor: 'background.paper',
            borderRadius: 2,
            padding: 2,
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            overflow: 'auto',
            p: 0,
          }}
        >
          <div className='flex flex-col justify-between  h-full'>
            <h2 className='w-full text-center border-b p-4'>이름을 입력하세요</h2>
            <div className='flex justify-between items-center gap-3'>
              <input
                type='text'
                placeholder='ex) 이수한'
                value={username}
                onChange={handleChangeUserName}
                className='p-2 border-b text-center m-auto border-black place-content-center'
              />
            </div>
            <div className='flex items-center justify-center py-3'>
              <BaseButton onClick={handleSummit}>참여</BaseButton>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default index;
