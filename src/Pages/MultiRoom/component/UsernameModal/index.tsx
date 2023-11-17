import { useJoinRoomQuery } from '@Api/multiGame';
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
          }
        },
        onError: (error) => {
          if (error.response?.data.code === 400) {
            if (error.response.data.message === 'Username already exists') {
              toast('이미 존재하는 이름입니다.');
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
            padding: 3,
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            overflow: 'auto',
          }}
        >
          <h2>이름을 입력하세요</h2>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={handleChangeUserName}
          />
          <button onClick={handleSumit}>제출</button>
        </Box>
      </Modal>
    </div>
  );
};

export default index;
