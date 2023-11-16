import React from 'react';
import { Box, Modal, Typography } from '@mui/material';

type RuleModalProps = {
  open: boolean;
  handleClose: () => void;
};

const RuleModal = ({ open, handleClose }: RuleModalProps) => {
  return (
    <div className='flex'>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            width: '90%',
            height: '80%',
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
          <div className='sm:flex justify-between items-center mb-5'>
            <h1 className='font-bold text-2xl' id='modal-modal-title'>
              게임 룰
            </h1>
            <button onClick={handleClose} className='px-2'>
              X
            </button>
          </div>

          <Typography style={{ marginBottom: '2rem' }}>
            <p className='text-lg my-3 font-semibold'>공유 모드 룰</p>
            <ul className='text-sm leading-normal list-disc list-inside break-words'>
              <li>여러 플레이어가 하나의 기기를 공유해 게임을 진행합니다.</li>
              <li>게임 시작 전 참여자의 이름을 입력합니다.</li>
              <li>질문은 무작위 또는 지정된 플레이어에게 할당됩니다.</li>
              <li>지정된 플레이어가 답변 후 기기를 전달합니다.</li>
              <li>모든 참가자 답변 후 다음 라운드를 진행합니다.</li>
            </ul>
          </Typography>

          <Typography>
            <p className='text-lg my-3 font-semibold'>개인 모드 게임 룰</p>
            <ul className='text-sm leading-normal list-disc list-inside break-words'>
              <li>각 플레이어가 자신의 기기를 사용하여 게임을 진행합니다.</li>
              <li>방장이 방 생성 후 링크를 공유합니다.</li>
              <li>입장 시 각자 이름을 입력합니다.</li>
              <li>방장이 시작 버튼 클릭 시 추가 참여자 입장이 제한됩니다.</li>
              <li>질문 대상자와 방장에게만 {`'다음'`} 버튼이 표시 됩니다.</li>
              <li>질문에 답을 한 후 {`'다음'`} 버튼을 클릭합니다.</li>
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default RuleModal;
