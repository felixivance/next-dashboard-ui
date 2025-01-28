'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
type Props = {};

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: 'Lorem Ipsum ',
    time: '12:00 PM - 2:00 PM',
    description: 'some text',
  },
  {
    id: 2,
    title: 'Lorem Ipsum ',
    time: '12:00 PM - 2:00 PM',
    description: 'some text',
  },
];

const EventCalendar = (props: Props) => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className='flex justify-between my-4'>
        <p className='font-bold text-xl'>Events</p>
        <Image src="/moreDark.png" width={20} height={20} alt="more"/>
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-sky even:border-t-purple" key={event.id}>
            <div className="flex items-center justify-between">
              <h1 className='font-semibold text-gray-600'>{event.title}</h1>
              <span className='text-gray-400 text-xs'>{event.time}</span>
            </div>
            <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
