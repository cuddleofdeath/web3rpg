export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <div className='grid grid-row-12 w-full gap-4 bg-[#F64740] text-5xl  text-center justify-center'>
        <p>Web3RPG Navbar </p>
      </div>
      <div className='grid grid-cols-3 bg-[#514eed] text-white w-full  p-2 justify-center text-center text-4xl'>
        <div></div>
        <div className='grid-cols-5 rounded-[120px] bg-black text-white ml-[25%] mb-2 mt-2 w-[95%] h-[520px] '>
          {/* Welcome to Web3RPG!!!!!! test */}
          {/* <p className='mt-2'>Testing</p> */}
        </div>
        <div className='rounded-[120px] bg-white text-black ml-[-70%] mt-[3%] w-[85%] h-[500px]'>
          <p className='text-[50%] mt-2'>Welcome to Web3RPG!!!!!!</p>
          <p className='mt-5 text-left ml-5 text-base'>
            Character Name:{' '}
            <input
              className='w-25 py-2 outline border-black'
              type='text'
              placeholder='Character Name'
            />
          </p>{' '}
          {/* <input
            className='w-20 py-2 outline border-black'
            type='text'
            placeholder='Character Name'
          /> */}
          <p className='mt-5 text-left ml-5 text-base'>
            Character Class:{' '}
            <select className='bg-white outline' placeholder='Character Name'>
              <option value='' disabled selected>
                Select a Class
              </option>
              <option>Investoooor</option>
              <option>Diamond Handooor</option>
              <option>Paper Handooor</option>
              <option>Buildooor</option>
            </select>
          </p>
          <p className='mt-5 text-left ml-5 text-base'>
            Character Description:{' '}
            <input
              className='w-25 py-2 outline border-black'
              type='text'
              placeholder='Likes to eat cheese.'
            />
          </p>
          <button className='mt-[15%] border-solid rounded-xl border-black border-[8px] p-2 hover:border-red-700 hover:text-red-700 text-2xl'>
            Mint
          </button>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4 bg-indigo-500'>
        <div className='bg-indigo-200'>
          <p className='m-2 p-2'>
            This is a random sentence about almost absolutely nothing.
          </p>
        </div>
        <div className='bg-indigo-300'>
          <p className='m-2 p-2'>
            This is a random sentence about almost absolutely nothing.
          </p>
        </div>
        <div className='bg-indigo-600'>
          <p className='m-2 p-2'>
            This is a random sentence about almost absolutely nothing.
          </p>
        </div>
        <div className='bg-indigo-800'>
          <p className='m-2 p-2'>
            This is a random sentence about almost absolutely nothing.
          </p>
        </div>
      </div>
    </div>
  );
}
