import { Box, Modal, Typography } from '@mui/material';

type RuleModalProps = {
  open: boolean;
  handleClose: () => void;
};

const RuleModal = ({ open, handleClose }: RuleModalProps) => {
  return (
    <div className='sm: flex'>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            width: '80%',
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
          <div className='sm: flex justify-between items-center'>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              게임 룰
            </Typography>
            <button onClick={handleClose} className='sm: px-2'>
              X
            </button>
          </div>
          <Typography
            id='modal-modal-description'
            sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}
          >
            <p className='sm: text-l'>1. 홈페이지에 접속한다.</p>
            <p className='sm: text-l'>2. 싱글 디바이스와 멀티 디바이스 중에 선택한다.</p>
          </Typography>
          <Typography>
            <p className='sm: text-xl my-3 font-semibold'>싱글 디바이스 게임 룰</p>
            <p className='sm: text-xs leading-normal'>
              1. 싱글 디바이스를 선택 할 경우 화면에 추가 버튼을 눌러 이름을 작성한다.
            </p>
            <p className='sm: text-xs leading-normal'>
              2. 질문 지정 방식과 랜덤 방식 중 하나를 선택한다.
            </p>
            <p className='sm: text-xs leading-normal'>
              3. <span className='sm: font-bold'>질문 대상 지정 방식</span>의 경우 질문이 나온 후
              질문에 답할 대상을 클릭 한 후 대상지정 버튼을 누른다.
            </p>
            <p className='sm: text-xs leading-normal'>
              4. 대상이 답을 다 했다면 다음 질문 버튼을 눌러 질문을 본 후 답할 대상을 클릭 한 후 에
              대상지정 버튼을 누르고 핸드폰을 준다.
            </p>
            <p className='sm: text-xs leading-normal'>
              5. 질문 대상 랜덤 방식의 경우 질문을 선택 한 후 대상이 랜덤으로 선정된다. 중복선정은
              되지 않는다.
            </p>
            <p className='sm: text-xs leading-normal'>
              6. 모든 인원이 답을 했다면 광고를 시청 한 후 다시 1번부터 반복된다.
            </p>
          </Typography>
          <Typography>
            <p className='sm: text-xl my-3 font-semibold'>멀티 디바이스 게임 룰</p>
            <p className='sm: text-xs leading-normal'>
              1. 멀티디바이스 선택시 한명이 방을 만들고 링크를 공유한다.
            </p>
            <p className='sm: text-xs leading-normal'>
              2. 링크로 입장한 다른 사람은 입장시 이름을 입력해야한다.
            </p>
            <p className='sm: text-xs leading-normal'>
              3. 방장이 질문 시작을 누르면 해당 방에 입장이 불가하다.
            </p>
            <p className='sm: text-xs leading-normal'>
              4. 게임 방식은 싱글 디바이스 모드와 동일 하지만 모두가 같은 화면을 보고 있어야 하며
              질문을 답해야하는 사람에게만 다음 버튼이 보이며 질문에 답을 하는 사람만 해당 버튼을
              클릭 할 수 있다.
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default RuleModal;
