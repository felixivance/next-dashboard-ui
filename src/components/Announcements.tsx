import Image from 'next/image';
import React from 'react'

type Props = {}

const announcements = [
    {
      id: 1,
      title: 'Lorem Ipsum ',
      date: '2025-01-01',
      description: 'some text',
    },
    {
      id: 2,
      title: 'Lorem Ipsum ',
      date: '2025-01-01',
      description: 'some text',
    },
    {
        id: 2,
        title: 'Lorem Ipsum ',
        date: '2025-01-01',
        description: 'some text',
      },
  ];

const Announcements = (props: Props) => {
  return (
    <div className='flex flex-col space-y-4 bg-white rounded-lg p-4'>
        {/* header */}
        <div className='flex justify-between items-center'>
            <h1 className='text-xl font-semibold'>Announcements</h1>
            <p className='text-xs text-gray-400'>View All</p>
        </div>
        <div className='flex flex-col space-y-3 '>
            {
                announcements.map((announcement, index)=> (
                    <div className='odd:bg-skyLight even:bg-yellowLight rounded-md p-4'>
                        <div className='flex justify-between'>
                            <h2 className='font-semibold text-lg'>{announcement.title}</h2>
                            <p className='bg-white px-1 py-1 rounded-md text-xs text-gray-400'>{announcement.date}</p>
                        </div>
                        <div>
                            <p className='text-gray-400'>{announcement.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Announcements