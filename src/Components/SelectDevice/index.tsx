const SelectDevice = () => {
  return (
    <div className='sm: flex flex-col text-center h-screen justify-center'>
      <div className='sm: flex flex-col gap-4 items-center'>
        <button className='sm: bg-black text-white px-10 w-9/12 py-3 text-l rounded-xl'>
          싱글 디바이스
        </button>
        <button className='sm: bg-black text-white px-10 w-9/12 py-3 text-l rounded-xl'>
          멀티 디바이스
        </button>
      </div>
    </div>
  );
};

export default SelectDevice;
