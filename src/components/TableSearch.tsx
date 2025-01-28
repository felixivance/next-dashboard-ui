import Image from 'next/image';
import React from 'react';

type Props = {};

const TableSearch = (props: Props) => {
  return (
    <div className="w-full md:w-auto flex items-center rounded-full space-x-2 px-2 bg-white ring-[1.5px] ring-gray-300">
      <Image src="/search.png" width={14} height={14} alt="search" />
      <input
        type="text"
        className="flex-1 focus:outline-none border-none bg-transparent p-2"
        placeholder="Search ..."
      />
    </div>
  );
};

export default TableSearch;
