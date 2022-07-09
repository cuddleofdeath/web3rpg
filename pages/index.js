export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <div className='grid grid-row-12 w-full gap-4 bg-[#F64740] text-5xl  text-center justify-center'>
        <p>Web3RPG Navbar </p>
      </div>
      <div className='grid grid-cols-3 bg-[#514eed] text-white w-full  p-2 justify-center text-center text-4xl'>
        <div></div>
        <div className='rounded-xl bg-black text-white ml-[30%] w-1/2 h-[300px]'>
          Welcome to Web3RPG!!!!!! test
          <p className='mt-2'>Testing</p>
        </div>
        <div className='rounded-xl bg-white text-black ml-[-71%] mt-[-0.7%] w-1/2 h-[300px]'>
          Welcome to Web3RPG!!!!!!
          <p className='mt-5 text-left ml-5 text-base'>Character Name:</p>
          <p className='mt-5 text-left ml-5 text-base'>Character Class:</p>
          <p className='mt-5 text-left ml-5 text-base'>
            Character Description:
          </p>
          <button className='mt-4 border-solid rounded-xl border-black border-[8px] p-2 hover:border-red-700 hover:text-red-700'>
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
