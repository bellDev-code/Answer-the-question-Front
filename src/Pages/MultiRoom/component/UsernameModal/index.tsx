import { useJoinRoomQuery } from '@Api/multiGame';
import { BaseButton } from '@Components/atom/button/BaseButton';
import { DYNAMIC_ROUTE_PATH, SESSION_USERNAME } from '@Configure/constant';
import gameInfoStore from '@Store/useGameInfoStore';
import { Box, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

interface IProps {
  // define your props here
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const index: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const { gameId } = useParams();
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { setMultiResult } = gameInfoStore();
  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const { mutate: joinRoomMutate } = useJoinRoomQuery();

  const handleSumit = () => {
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
            setMultiResult(data.data);
            navigate(`${DYNAMIC_ROUTE_PATH(gameId || '', 0).WATING_PAGE}`);
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
          }}
        >
          <div className='flex justify-around items-center gap-3'>
            <h2>이름을 입력하세요</h2>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={handleChangeUserName}
            />
          </div>
          <div className='flex items-center justify-center py-3'>
            <BaseButton onClick={handleSumit}>제출</BaseButton>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default index;
