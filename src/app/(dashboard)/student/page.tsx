import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import EventCalendar from '@/components/EventCalendar'
import React from 'react'
import "react-big-calendar/lib/css/react-big-calendar.css";

type Props = {}

const StudentPage = (props: Props) => {
  return (
    <div className='p-4 flex gap-4 flex-col xl:flex-row'>
      {/* left */}
      <div className="w-full xl:w-2/3 bg-white ">

        <div className="p-4 rounded-md">
          <h1 className='text-xl font-semibold'>Felix (4A)</h1>
        </div>

        <BigCalendar />
      </div>

      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <div className="">
            <EventCalendar/>
          </div>
          <div className="">
            <Announcements />
          </div>
      </div>
    </div>
  )
}

export default StudentPage