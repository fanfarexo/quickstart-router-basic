import { ScaleLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='w-100 h-75 position-fixed'>
      <div className='row w-100 h-100 justify-content-center align-items-center'>
        <div className='col-6 text-center'>
          <h3>Loading</h3>
          <ScaleLoader width='6px' height='40px' margin='2px' radius='2px' />
        </div>
      </div>
    </div>
  );
};

export default Loading;
