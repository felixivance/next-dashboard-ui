import Image from 'next/image';
import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="p-4 flex items-center justify-between">
      {/* left side */}
      <div>
        {/* search icon */}
        <div className="hidden md:flex items-center rounded-full space-x-2 px-2 bg-white ring-[1.5px] ring-gray-300">
          <Image src="/search.png" width={14} height={14} alt="search" />
          <input
            type="text"
            className="flex-1 focus:outline-none border-none bg-transparent p-2"
            placeholder="Search ..."
          />
        </div>
      </div>
      {/* right side */}
      <div className="flex space-x-4 items-center">
        {/* message */}
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" width={20} height={20} alt="msg" />
        </div>
        {/* notification */}
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" width={20} height={20} alt="msg" />
          <div className='absolute -top-3 -right-3 text-sm w-5 h-5 flex justify-center bg-purple-500 text-white rounded-full'>1</div>
        </div>

        {/* name and type of user */}
        <div className="flex flex-col items-end">
          <p className="text-xs leading-3">Felix Runye</p>
          <p className="text-[10px] text-gray-500">Student</p>
        </div>
        {/* user icon */}
        <div>
            <Image src="/avatar.png" width={36} height={36} alt="msg" className='rounded-full' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
